type GreetProps = {
    name?: string,
    company?: string
}

function Greet(props: GreetProps) {
  return (
    <div>
        <h1>Hello {props.name}</h1>
        <h2>I'm a React App, {props.company}</h2>
    </div>
  );
}

export default Greet;
