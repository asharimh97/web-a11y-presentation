import React from "react";
import {
  Slide,
  Grid,
  Text,
  Heading,
  FlexBox,
  CodeSpan,
  Box,
  Image,
} from "spectacle";
import { styled } from "../../configs/stitches.config";

const Button = styled("button", {
  backgroundColor: "$red7",
  border: "none",
  borderRadius: "10px",
  color: "white",
  p: "12px",
  m: "auto",
  my: "20px",
});

function Thanks() {
  return (
    <Slide>
      <Heading>Terima kasih</Heading>
      <Box width="650px" marginX="auto">
        <Image
          src="/public/images/tanya.jpg"
          alt="Thank you"
          width="100%"
          style={{ borderRadius: "10px" }}
        />
      </Box>
      <Text textAlign="center" fontSize="16px">
        Enggak deng, silakan tanya
      </Text>
    </Slide>
  );
}

export default Thanks;
