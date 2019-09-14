import * as React from "react";
import { Link } from "react-router-dom";

export interface TestProps {
  message: string;
}

const Test = (props: TestProps) => (
  <div>
    <h1>THIS IS A TEST PAGE</h1>
    <Link to="/">{props.message}</Link>
  </div>
);

export default Test;
