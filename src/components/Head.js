import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {

    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      }
      else {
        getSearchSuggestion();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    }
  }, [searchQuery]);

  const getSearchSuggestion = async () => {    
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();   
    setSuggestions(json[1]);
    dispatch(cacheResults({
      [searchQuery]: json[1],
    })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="menu"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxNXvRIuRSR1anM3AOe_EnHoq520h6uV1qDw&s"
        />
        <a href="/">
          <img
            className="h-9 mx-2"
            alt="yt-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/800px-YouTube_Logo_2017.svg.png"
          />
        </a>
      </div>
      <div className="col-span-10 px-10">
        <div>
          <input
            className=" px-5 w-1/2 border border-gray-400 p-2 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          />
          <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
            🔍
          </button>
        </div>
        {showSuggestion && (
          <div className="fixed bg-white py-2 px-2 w-[40.7rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>)}
      </div>
      <div className="col-span-1">
        <img
          className="h-12"
          alt="user"
          src="https://t4.ftcdn.net/jpg/12/49/12/63/360_F_1249126338_leS5yTD2NdGuTra86mGyq9heEAxLbX5O.jpg"
        />
      </div>
    </div>
  );
};

export default Head;