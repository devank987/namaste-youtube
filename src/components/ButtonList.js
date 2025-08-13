import Button from "./Button";

const ButtonList = () => {
    return (
        <div className="flex">
            <Button name="All" />
            <Button name="Gaming" />
            <Button name="Songs" />
            <Button name="Live" />
            <Button name="Tourism" />
            <Button name="Cricket" />
            <Button name="Soccer" />
            <Button name="Cars" />
            <Button name="Mixes" />
            <Button name="Cooking" />
            <Button name="T-Series" />
            <Button name="Big Boss" />
            <Button name="Recently Uploaded" />
            <Button name="Watched" />
        </div>
    );
};

export default ButtonList;