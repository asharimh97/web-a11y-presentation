import React from "react";
import { Slide, Image, Box } from "spectacle";

function Bootstrap() {
  return (
    <Slide>
      <Box width="750px" margin="auto">
        <Image
          src="/public/images/bootstrap.png"
          width="100%"
          style={{ borderRadius: "10px" }}
        />
      </Box>
    </Slide>
  );
}

export default Bootstrap;
