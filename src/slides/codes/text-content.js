import React from "react";
import { Slide, CodePane, Heading } from "spectacle";

function TextContent() {
  return (
    <Slide>
      <CodePane language="jsx">{`
        // Bad
        <p className="heading1">Hello World</p>
        <p>This is the first paragraph</p>
        <h2>This is some text but needs to be slightly larger</h2>
        <p>This is the second paragraph</p>
        Here is 
        <br />
        some list
        <br />
        for you

        // Good
        <h1>Hello World</h1>
        <p>This is the first paragraph</p>
        <h2>This is a subheading</h2>
        <p>This is the second paragraph</p>
        <ul>
          <li>This is a list item</li>
          <li>This is another list item</li>
        </ul>
      `}</CodePane>
    </Slide>
  );
}

export default TextContent;
