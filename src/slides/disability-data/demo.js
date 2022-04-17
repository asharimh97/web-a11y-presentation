import React from "react";
import { Slide, Heading, FlexBox, Notes } from "spectacle";

function Demo() {
  return (
    <Slide>
      <FlexBox height="100%" flexDirection="column" alignItems="flex-start">
        <Heading fontSize="75px">let's take a look?</Heading>
      </FlexBox>
      <Notes>
        <p>Demoin gimana web diakses oleh orang dengan keterbatasan fisik</p>
      </Notes>
    </Slide>
  );
}

export default Demo;
