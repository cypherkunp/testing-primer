type GreetProps = {
  name?: string;
};

function greet({ name }: GreetProps) {
  return <div>Hello{name ? ` ${name}!` : ""}</div>;
}

export default greet;
