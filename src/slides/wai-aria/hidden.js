import React from "react";
import { Slide, Heading, CodePane, Notes, Text } from "spectacle";

function Hidden() {
  return (
    <Slide>
      <Heading>aria-hidden</Heading>
      <Text
        textAlign="center"
        margin="16px auto 8px auto"
        aria-hidden="true"
        fontSize="28px"
      >
        This text will be hidden from screen reader
      </Text>
      <Text textAlign="center" margin="8px auto 32px auto" fontSize="28px">
        This text will be visible to screen reader
      </Text>
      <CodePane language="jsx">
        {`
        // Used to hide elements from screen readers
        <button aria-hidden="true">
          Hidden button
        </button>

        // Another way to hide element
        <button hidden>
          Hidden button
        </button>
        // But it's not supported in IE10 or below
      `}
      </CodePane>
      <Notes>
        <ul>
          <li>
            <a href="https://www.w3.org/TR/wai-aria-1.1/#aria-hidden">
              WAI-ARIA 1.1: aria-hidden
            </a>
          </li>
          <li>
            The aria-hidden attribute can be used to hide non-interactive
            content from the accessibility API. Adding aria-hidden="true" to an
            element removes that element and all of its children from the
            accessibility tree.
          </li>
        </ul>
      </Notes>
    </Slide>
  );
}

export default Hidden;
