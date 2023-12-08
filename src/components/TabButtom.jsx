export default function TabButtom(props) {
  function handlerClick() {
    console.log("hello world");
  }
  return (
    <li>
      <button onClick={handlerClick}>{props.children}</button>
    </li>
  );
}
