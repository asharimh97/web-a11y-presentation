import React from "react";
import { Slide, Heading, FlexBox, Notes, Appear, Text } from "spectacle";

function AboutAlly() {
  return (
    <Slide>
      <FlexBox height="100%" flexDirection="column" alignItems="flex-start">
        <Heading fontSize="100px">a11y?</Heading>
        <Appear>
          <Text fontSize="32px">
            The content should be available to everyone and the functionality is
            operated by anyone, literally everyone
          </Text>
        </Appear>
      </FlexBox>
      <Notes>
        <ul>
          <li>
            Transisi dari slide sebelumnya, di sini bahas gimana a11y ini belum
            populer
          </li>
          <li>
            Komunitas dan resource belajar dalam bahasa Indonesia masih sedikit
          </li>
          <li>
            Terus juga ngecek di beberapa website dari startup kuda yang belum
            serve accessibility dengan baik, sadly termasuk stockbit hehe
          </li>
        </ul>
      </Notes>
    </Slide>
  );
}

export default AboutAlly;
