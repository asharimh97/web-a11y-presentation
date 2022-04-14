import React from "react";
import { Slide, Heading, CodePane, Notes } from "spectacle";
import { styled } from "../../configs/stitches.config";
import { PlusIcon } from "@radix-ui/react-icons";

const Button = styled("button", {
  alignItems: "center",
  border: "none",
  borderRadius: "999px",
  display: "flex",
  padding: "4px 14px",
  height: "42px",
  margin: "32px auto",
});

function Label() {
  return (
    <Slide>
      <Heading>Label</Heading>
      <Button>
        <PlusIcon />
      </Button>
      <CodePane language="jsx">{`
        // Use case: Add label to button with only svg/icon content
        <button aria-label="Add post">
          <svg aria-hidden="true" ... />
        </button>

        <button aria-labelledby="button-label">
          <svg aria-hidden="true" ... />
          <span id="button-label" hidden>Add post</span>
        </button>

        // Or sometime we use aria-describedby to add description to components
      `}</CodePane>
      <Notes>
        <ul>
          <li>
            <a href="https://www.w3.org/TR/wai-aria-1.1/#aria-label">
              WAI-ARIA 1.1: aria-label
            </a>
          </li>
          <li>
            <a href="https://www.w3.org/TR/wai-aria-1.1/#aria-labelledby">
              WAI-ARIA 1.1: aria-labelledby
            </a>
          </li>
          <li>Cari component lain yang biasa pake aria-label</li>
        </ul>
      </Notes>
    </Slide>
  );
}

export default Label;
