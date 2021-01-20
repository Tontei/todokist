
const Add = (props) => {
    return (
        <button onClick={props.onClick} className="w-12 h-12 rounded-full bg-third hover:bg-indigo-900">
            <span className="text-4xl text-first align-top p-0">{props.text}</span>
        </button>
    )
}

export default Add;