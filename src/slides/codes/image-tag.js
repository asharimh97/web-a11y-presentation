import React from "react";
import { Slide, CodePane, Image } from "spectacle";

function ImageTag() {
  return (
    <Slide>
      <Image
        width="450px"
        src="public/images/brown-bear.jpeg"
        alt="Brown Bear"
        style={{
          borderRadius: "10px",
          margin: "auto",
          marginBottom: "24px",
        }}
      />
      <CodePane language="jsx">{`
        // Bad
        <div style={{ backgroundImage: "url(/public/images/image.jpg)" }} />

        // Still Bad
        <img src="/public/images/image.jpg" alt="" />
        <img src="/public/images/image.jpg" alt="bear, brown" />
        <img src="/public/images/image.jpg" alt="We're doomed by a bear that approaching us" />

        // Good
        <img src="/public/images/image.jpg" alt="Brown bear" />
        <img src="/public/images/image.jpg" alt="Brown bear and its child" />
      `}</CodePane>
    </Slide>
  );
}

export default ImageTag;
