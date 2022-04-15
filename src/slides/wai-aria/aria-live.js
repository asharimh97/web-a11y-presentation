import React from "react";
import { Slide, Heading, CodePane } from "spectacle";

function AriaLive() {
  return (
    <Slide>
      <Heading>aria-live</Heading>
      <CodePane language="jsx">{`
        // Used to announce changes to the page
        // The value can be "polite", "assertive" or "off"
        <div className="will-change" aria-live="polite">
          <!-- This text will be announced to screen reader -->
        </div>

        // Simple example
        <script>
          document.querySelector(".will-change").innerHTML = "New text";
        </script>

        // Or in React we may use more complex component such as search results
      `}</CodePane>
    </Slide>
  );
}

export default AriaLive;
