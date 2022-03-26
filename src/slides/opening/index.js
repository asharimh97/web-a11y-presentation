import React from "react";
import { Slide, Text, FlexBox, Heading } from "spectacle";

function Opening() {
  return (
    <Slide>
      <FlexBox height="100%" flexDirection="column" alignItems="flex-start">
        <Heading margin="0px" fontSize="125px">
          <i>Web a11y</i>
        </Heading>
        <Heading margin="0px" fontSize="h2">
          Why it matters
        </Heading>
        <Text margin="0px" fontSize="24px" fontStyle="italic">
          Ashari Muhammad H // Web Engineer
        </Text>
      </FlexBox>
    </Slide>
  );
}

export default Opening;
