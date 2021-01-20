

const Item = (props) => {

    function handleClickedBox(e) {
        e.preventDefault();
        props.remove(props.text);
    }

    return (
        <div className="flex flex-row justify-between items-center px-5 w-8/10 bg-third  my-2 py-5 text-center rounded-2xl shadow-lg">
            <p className="text-2xl text-first">{props.text}</p>
            <input type="checkbox" className="h-7 w-7 cursor-pointer hover:border-green-400" onClick={handleClickedBox}/>
        </div>
    )
}
export default Item;