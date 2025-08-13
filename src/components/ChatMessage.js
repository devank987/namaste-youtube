
const ChatMessage = ({name,message}) => {
    return (
        <div className="flex items-center shadow-sm p-2">
            <img
                className="h-12"
                alt="user"
                src="https://t4.ftcdn.net/jpg/12/49/12/63/360_F_1249126338_leS5yTD2NdGuTra86mGyq9heEAxLbX5O.jpg"
            />
            <span className="font-bold px-2">{name}</span>
            <span>{message}</span>
        </div>
    );
};

export default ChatMessage;