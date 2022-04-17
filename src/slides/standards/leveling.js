import React from "react";
import { Slide, Text, FlexBox, Box, Notes } from "spectacle";

function Leveling() {
  return (
    <Slide>
      <FlexBox
        height="100%"
        alignItems="flex-end"
        justifyContent="space-around"
        width="80%"
        marginX="auto"
      >
        <Box>
          <Text
            fontSize="64px"
            fontWeight="bold"
            textAlign="center"
            marginBottom="32px"
          >
            A
          </Text>
          <Box
            height="225px"
            width="150px"
            backgroundColor="white"
            marginBottom="16px"
            marginX="auto"
          />
          <Text fontSize="48px" fontWeight="bold" textAlign="center">
            Lowest
          </Text>
        </Box>
        <Box>
          <Text
            fontSize="64px"
            fontWeight="bold"
            textAlign="center"
            marginBottom="32px"
          >
            AA
          </Text>
          <Box
            height="300px"
            width="150px"
            backgroundColor="white"
            marginBottom="16px"
            marginX="auto"
          />
          <Text fontSize="48px" fontWeight="bold" textAlign="center">
            Mid-range
          </Text>
        </Box>
        <Box>
          <Text
            fontSize="64px"
            fontWeight="bold"
            textAlign="center"
            marginBottom="32px"
          >
            AAA
          </Text>
          <Box
            height="375px"
            width="150px"
            backgroundColor="white"
            marginBottom="16px"
            marginX="auto"
          />
          <Text fontSize="48px" fontWeight="bold" textAlign="center">
            Highest
          </Text>
        </Box>
      </FlexBox>
      <Notes>
        <p>Conformance level</p>
        <ol>
          <li>
            Level A - Must have
            <p>
              The lowest and easiest level of conformance to obtain. Level A
              sets a minimum level of accessibility and does not achieve broad
              accessibility for many situations.
            </p>
            <p>
              Example: color is not used as the only means of conveying
              information
            </p>
          </li>
          <li>
            Level AA - Should have
            <p>
              The mid-range and most common level of conformance to obtain.
              Level AA is the recommended conformance for all web-based
              information.
            </p>
            <p>
              Example: Minimum contrast rules, visual presentation of text and
              image, contrast ratio
            </p>
          </li>
          <li>
            Level AAA - Good to have
            <p>
              The highest and hardest level of conformance to obtain. It's not
              recommended to strive for full AAA compliance as it is not
              possible to satisfy all Level AAA Success Criteria for some
              content.
            </p>
            <p>Example: Enhanced contrast with contrast ratio at least 7:1</p>
          </li>
        </ol>
      </Notes>
    </Slide>
  );
}

export default Leveling;
