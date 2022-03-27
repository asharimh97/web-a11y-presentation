import React from "react";
import { Slide, Heading, Box, Image } from "spectacle";

function Semantic() {
  return (
    <Slide>
      <Heading>Semantic HTML Tags</Heading>
      <Box width="450px" marginX="auto">
        <Image
          src="/public/images/semantics.jpg"
          alt="Thank you"
          width="100%"
          style={{ borderRadius: "10px" }}
        />
      </Box>
    </Slide>
  );
}

export default Semantic;
