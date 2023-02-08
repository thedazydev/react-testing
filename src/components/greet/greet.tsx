import { GreetProps } from "./greet.types";

function Greet(props: GreetProps) {
  return (
    <div>
        <h1>Hello {props.name ? props.name : "Guest"}</h1>
        <h2>I'm a React App, {props.company}</h2>
    </div>
  );
}

export default Greet;
