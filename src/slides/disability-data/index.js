import React from "react";
import { FaWheelchair, FaEyeSlash } from "react-icons/fa";
import { MdHearingDisabled, MdElderly } from "react-icons/md";
import { Slide, FlexBox, Text, Heading, Notes } from "spectacle";
import Demo from "./demo";

function PeopleWithDisability() {
  const datas = [
    {
      icon: FaEyeSlash,
      text: "visually impaired*",
      value: "3.5+ mio",
    },
    {
      icon: MdElderly,
      text: "elders**",
      value: "18.2+ mio",
    },
    {
      icon: MdHearingDisabled,
      text: "deaf/unable to speak**",
      value: "0.6+ mio",
    },
    {
      icon: FaWheelchair,
      text: "motor impairment**",
      value: "0.6+ mio",
    },
  ];

  const renderIcon = (icon) => {
    const Icon = icon;

    return <Icon size="100px" style={{ marginBottom: "18px" }} />;
  };
  return (
    <>
      <Slide>
        <Heading textAlign="left" fontFamily="text" fontSize="56px">
          By implementing a11y we will provide equal access to 22.8+ mio people
          with disability
        </Heading>
        <FlexBox margin="auto">
          {datas.map((data, index) => (
            <FlexBox key={index} flexDirection="column" alignItems="center">
              {renderIcon(data.icon)}
              <Text textAlign="center" fontSize="32px">
                {data.value}
                <br />
                {data.text}
              </Text>
            </FlexBox>
          ))}
        </FlexBox>
        <Text fontSize="20px" fontStyle="italic">
          Source: *Indonesian difable according to BPS (12.5%), **PERTUNI:
          Prevalensi kebutaan di Indonesia =3%, ***ILO, Kemenkes
        </Text>
        <Notes>
          <ul>
            <li>
              Jelasing tentang disability itu ada yang situasional, temporary,
              permanent
            </li>
            <li>
              When people talk about accessibility, we tend to think about blind
              people, but there's more about impairment, such user maybe only
              using keyboard, head trace, some people maybe have broken wrist,
              broken trackpad, or just shaking in the train
            </li>
            <li>
              Ada juga user dengan cognitive impairment kaya dislexia, autism,
              ADD, user-user ini butuh a diverse accommodation such as zoom in
              the screen, minimal design to minimize distraction and cognitive
              load
            </li>
            <li>
              Many website are visual in their nature and lack keyboard
              navigation which is essential for blind people to be able to
              navigate through the content
            </li>
            <li>
              Orang-orang dengan disabilitas ini seharusnya enggak ada kesulitan
              untuk menikmati experience web kita
            </li>
            <li>
              In summary making a website accessible is really about making sure
              that the content and the website we create is usable to people
              with various impairments or abilities
            </li>
            <li>
              No matter what your product is there's a whole range of user out
              there
            </li>
          </ul>
        </Notes>
      </Slide>
      <Demo />
    </>
  );
}

export default PeopleWithDisability;
