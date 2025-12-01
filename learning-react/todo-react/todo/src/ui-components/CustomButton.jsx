export default function CustomButton(props) {
    function onClickHandler() {
        props.setCount(props.count + 1);
    }

    return (
        <button>Counter {props.count}</button>
    )
}