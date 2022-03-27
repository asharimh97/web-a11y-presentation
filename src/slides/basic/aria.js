import React from "react";
import { Slide, Heading, Text, FlexBox } from "spectacle";

function WaiAria() {
  return (
    <Slide>
      <FlexBox height="100%" flexDirection="column" alignItems="center">
        <Heading margin="0px" fontSize="125px">
          WAI-ARIA
        </Heading>
        <Heading margin="0px" fontSize="48px">
          Web Accessibility Initiative - Accessible Rich Internet Applications
        </Heading>
        <Text margin="0px" fontSize="24px" fontStyle="italic">
          For HTML tags that are not natively supported by the browser
        </Text>
      </FlexBox>
    </Slide>
  );
}

export default WaiAria;
