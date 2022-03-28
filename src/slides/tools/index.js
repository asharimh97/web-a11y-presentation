import React from "react";
import { Slide, FlexBox, Heading, Image } from "spectacle";

function Tools() {
  return (
    <Slide>
      <Heading textAlign="center">Bonus: Tools</Heading>
      <FlexBox height="100%" alignItems="center">
        <FlexBox width="425px" marginRight="32px">
          <Image
            width="100%"
            src="/public/images/silktide.jpg"
            alt="Silktide logo"
          />
        </FlexBox>
        <FlexBox width="425px" marginLeft="32px">
          <Image
            width="100%"
            src="/public/images/wave.jpeg"
            alt="WAVE by WebAIM logo"
          />
        </FlexBox>
      </FlexBox>
    </Slide>
  );
}

export default Tools;
