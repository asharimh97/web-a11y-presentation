import React from "react";
import { Slide, CodePane } from "spectacle";
import { styled } from "../../configs/stitches.config";

const Btn = styled("button", {
  backgroundColor: "$red9",
  border: "none",
  borderRadius: "5px",
  color: "white",
  fontSize: "24px",
  p: "12px 16px",
  mx: "auto",
  marginBottom: "24px",

  "&:focus": {
    outline: "white solid 2px",
  },
});

function Button() {
  return (
    <Slide>
      <Btn>Hello Button</Btn>
      <CodePane language="jsx">{`
        // Bad
        <div className="button button-red">Hello Button</div>

        // Could be bad
        <a href="" className="button button-red">Hello Button</a>

        // Good
        // PS: Button doesn't need "cursor: pointer"
        <button className="button button-red">Hello Button</button>
      `}</CodePane>
    </Slide>
  );
}

export default Button;
