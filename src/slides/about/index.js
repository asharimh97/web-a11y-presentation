import React from "react";
import { Slide, Heading, FlexBox, Notes, Appear, Text } from "spectacle";

function AboutAlly() {
  return (
    <>
      <Slide>
        <FlexBox height="100%" flexDirection="column" alignItems="flex-start">
          <Heading fontSize="100px">a11y?</Heading>
          <Appear>
            <Text fontSize="32px">
              The content should be available to everyone and the functionality
              is operated by anyone, literally everyone
            </Text>
          </Appear>
        </FlexBox>
        <Notes>
          <ul>
            <li>
              Transisi dari slide sebelumnya, di sini bahas gimana a11y ini
              belum populer
            </li>
            <li>
              Accessibility (often abbreviated to A11y — as in, "a", then 11
              characters, and then "y") in web development means enabling as
              many people as possible to use websites, even when those people's
              abilities are limited in some way. For many people, technology
              makes things easier
            </li>
            <li>
              Komunitas dan resource belajar dalam bahasa Indonesia masih
              sedikit
            </li>
            <li>
              Terus juga ngecek di beberapa website dari startup kuda yang belum
              serve accessibility dengan baik, sadly termasuk stockbit hehe
            </li>
          </ul>
        </Notes>
      </Slide>
    </>
  );
}

export default AboutAlly;
