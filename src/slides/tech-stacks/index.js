import React from "react";
import { Slide, FlexBox, Heading } from "spectacle";
import {
  SiReact,
  SiVuedotjs,
  SiSvelte,
  SiAngular,
  SiTypescript,
} from "react-icons/si";

function TechStack() {
  const renderIcon = (icon) => {
    const Icon = icon;

    return <Icon size="100px" style={{ marginRight: "32px" }} />;
  };

  const stacks = [SiReact, SiVuedotjs, SiSvelte, SiAngular, SiTypescript];

  return (
    <Slide>
      <FlexBox alignItems="center" margin="auto" paddingBottom="56px">
        {stacks.map((stack) => renderIcon(stack))}
      </FlexBox>
    </Slide>
  );
}

export default TechStack;
