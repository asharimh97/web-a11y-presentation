import React from "react";
import { Slide, Heading, CodePane } from "spectacle";
import { styled } from "../../configs/stitches.config";

const Search = styled("input", {
  border: "none",
  borderRadius: "6px",
  padding: "10px 12px",
  margin: "32px auto",
  width: "250px",
});

function Roles() {
  return (
    <Slide>
      <Heading>Roles</Heading>
      <Search placeholder="Input search" />
      <CodePane language="jsx">{`
        // The newest semantic tags, but still not supported in all browsers
        <input type="search" aria-label="Search" placeholder="Input search" />

        // To make it work in all browsers, and screen readers
        <input type="text" role="search" aria-label="Search" placeholder="Input search" />

        // Another roles example: alert, alertdialog, dialog
      `}</CodePane>
    </Slide>
  );
}

export default Roles;
