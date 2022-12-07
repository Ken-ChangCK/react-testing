import { GreetProps } from "./greet.types";

export const Greet = (props: GreetProps) => {
  return <div>Hello {props.name}</div>;
};
