import React from "react";
import { Slide, FlexBox, Heading, Text } from "spectacle";

function Standards() {
  return (
    <Slide>
      <FlexBox height="100%" flexDirection="column" alignItems="center">
        <Heading margin="0px" fontSize="125px">
          WCAG 2.0
        </Heading>
        <Heading margin="0px" fontSize="48px">
          Web Content Accessibility Guidelines 2.0
        </Heading>
        <Text margin="0px" fontSize="24px" fontStyle="italic">
          The ultimate almanac for web accessibility
        </Text>
      </FlexBox>
    </Slide>
  );
}

export default Standards;
