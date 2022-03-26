import React from "react";
import { FaWheelchair, FaEyeSlash } from "react-icons/fa";
import { MdHearingDisabled, MdElderly } from "react-icons/md";
import { Slide, FlexBox, Grid, Text, Heading } from "spectacle";

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
    </Slide>
  );
}

export default PeopleWithDisability;
