import React from "react";
import { Slide, Heading, FlexBox, Notes } from "spectacle";
import DetailBenefit from "./detail-benefit";

function Benefit() {
  return (
    <>
      <Slide>
        <FlexBox height="100%" flexDirection="column" alignItems="center">
          <Heading margin="0px" fontSize="125px">
            Benefit???
          </Heading>
        </FlexBox>
        <Notes>
          <ul>
            <li>
              Implementasi a11y akan ngeboost SEO, karena rulenya overlap sama
              SEO
            </li>
            <li>
              Implementasi a11y yang baik secara enggak langsung juga ngasih
              user experience yang baik
            </li>
            <li>
              Potensi retention, dengan user merasa nyaman untuk pake appnya
              user bisa jadi krasan dan kembali lagi
            </li>
          </ul>
        </Notes>
      </Slide>
      <DetailBenefit />
    </>
  );
}

export default Benefit;
