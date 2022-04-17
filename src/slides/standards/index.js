import React from "react";
import { Slide, FlexBox, Heading, Text, Notes } from "spectacle";
import Leveling from "./leveling";

function Standards() {
  return (
    <>
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
        <Notes>
          <ul>
            <li>
              Jelasin tentang WCAG sebagai guideline implementasi web
              accessibility
            </li>
            <li>Mention tentang ada checklist nya itu ada di WebAIM</li>
            <li>
              Mention tentang level accessibility di web, A, AA, AAA. Menurut
              University of California, minimum web itu harusnya punya
              accessibility AA. Karena kalo implement AAA di semua page sih
              emang dirasa susah, not impossible tapi difficult
            </li>
          </ul>
        </Notes>
      </Slide>
      <Leveling />
    </>
  );
}

export default Standards;
