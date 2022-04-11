import React from "react";
import { Slide, FlexBox, Notes } from "spectacle";
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
      <Notes>
        <ul>
          <li>
            Bahas gimana di tengah-tengah topik "hot" tentang web yang isinya
            terkait web framework atau blockchain dan web3, ada part dari web
            development yang penting tapi enggak populer
          </li>
        </ul>
      </Notes>
    </Slide>
  );
}

export default TechStack;
