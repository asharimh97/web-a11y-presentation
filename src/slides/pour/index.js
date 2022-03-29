import React from "react";
import { Slide, Text, FlexBox, Box } from "spectacle";

function Pour() {
  return (
    <Slide>
      <FlexBox height="100%" flexDirection="column" alignItems="center">
        <FlexBox justifyContent="center" marginY="32px">
          <Text fontSize="64px" fontWeight="bold" textAlign="center">
            Perceivable
          </Text>
        </FlexBox>
        <FlexBox justifyContent="space-between" margin="32px">
          <Text
            fontSize="64px"
            fontWeight="bold"
            textAlign="center"
            style={{ marginRight: "72px" }}
          >
            Robust
          </Text>
          <FlexBox
            width="175px"
            height="175px"
            style={{ transform: "rotate(45deg)" }}
            backgroundColor="transparent"
          />
          <Text
            fontSize="64px"
            fontWeight="bold"
            textAlign="center"
            style={{ marginLeft: "72px" }}
          >
            Operable
          </Text>
        </FlexBox>
        <FlexBox justifyContent="center" marginY="32px">
          <Text fontSize="64px" fontWeight="bold" textAlign="center">
            Understandable
          </Text>
        </FlexBox>
      </FlexBox>
    </Slide>
  );
}

export default Pour;
