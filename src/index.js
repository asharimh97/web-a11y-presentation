import React from "react";
import ReactDOM from "react-dom";

import {
  FlexBox,
  FullScreen,
  Progress,
  Appear,
  Slide,
  Deck,
  Text,
  Box,
} from "spectacle";

import AboutAlly from "./slides/about";
import BasicConcept from "./slides/basic";
import Benefit from "./slides/benefit";
import PeopleWithDisability from "./slides/disability-data";
import Opening from "./slides/opening";
import Pour from "./slides/pour";
import QuoteSlide from "./slides/quote";
import Standards from "./slides/standards";
import TechStack from "./slides/tech-stacks";
import Thanks from "./slides/thanks";
import Tools from "./slides/tools";

// SPECTACLE_CLI_THEME_START
const theme = {
  fonts: {
    header: '"Signika", Helvetica, Arial, sans-serif',
    text: '"PT Sans", Helvetica, Arial, sans-serif',
    serif: '"Alegreya", Georgia, serif',
  },
};
// SPECTACLE_CLI_THEME_END

// SPECTACLE_CLI_TEMPLATE_START
const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen />
    </Box>
    <Box padding="1em">
      <Progress />
    </Box>
  </FlexBox>
);

const Presentation = () => (
  <Deck theme={theme} template={template}>
    <Opening />
    <TechStack />
    <AboutAlly />
    <PeopleWithDisability />
    {/* Setelah ini kasih slide gimana orang dengan visual impairment ngeliat website kita */}
    {/* Guidelinesnya... WCAG dan WebAIM */}
    <Standards />
    {/* Jelasin tentang prinsip pour */}
    <Pour />
    {/* Basic nya -> semantic tags dan WAI ARIA */}
    <BasicConcept />
    {/* Benefit dari accessibility */}
    <Benefit />
    {/* <Tools /> */}
    <QuoteSlide />
    <Thanks />
  </Deck>
);

ReactDOM.render(<Presentation />, document.getElementById("root"));
