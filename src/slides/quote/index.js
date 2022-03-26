import React from "react";
import { Slide, Text, FlexBox, Quote } from "spectacle";

function QuoteSlide() {
  return (
    <Slide>
      <FlexBox height="100%" flexDirection="column" alignItems="center">
        {/* <Text margin="0px" fontSize="h2" fontStyle="italic">
          "Having empathy is a huge part of creating an accessible product.
          Because the disability is not the problem. The accessibility is the
          problem."
        </Text> */}
        <Quote style={{ borderLeft: "none" }}>
          "Having empathy is a huge part of creating an accessible product.
          Because the disability is not the problem. The accessibility is the
          problem."
        </Quote>
      </FlexBox>
    </Slide>
  );
}

export default QuoteSlide;
