import React from "react";
import { Slide, Text, FlexBox, Notes } from "spectacle";

function Pour() {
  return (
    <Slide>
      <FlexBox height="100%" flexDirection="column" alignItems="center">
        <FlexBox justifyContent="center" marginY="32px">
          <Text fontSize="64px" fontWeight="bold" textAlign="center">
            Perceivable
          </Text>
        </FlexBox>
        <FlexBox justifyContent="space-between" margin="32px">
          <Text
            fontSize="64px"
            fontWeight="bold"
            textAlign="center"
            style={{ marginRight: "72px" }}
          >
            Robust
          </Text>
          <FlexBox
            width="175px"
            height="175px"
            style={{ transform: "rotate(45deg)" }}
            backgroundColor="transparent"
          />
          <Text
            fontSize="64px"
            fontWeight="bold"
            textAlign="center"
            style={{ marginLeft: "72px" }}
          >
            Operable
          </Text>
        </FlexBox>
        <FlexBox justifyContent="center" marginY="32px">
          <Text fontSize="64px" fontWeight="bold" textAlign="center">
            Understandable
          </Text>
        </FlexBox>
      </FlexBox>
      <Notes>
        <ol>
          <li>
            - Perceivable
            <br />
            Tuna netra pake screen reader, tuna rungu baca caption, temen-temen
            dislexia dengan pilihan font, icon, dsb
          </li>
          <li>
            - Operable
            <br />
            Interfacenya bisa dioperasikan, misal enggak bisa diinput, diklik,
            dienter, dsb. Kaitannya pake input
          </li>
          <li>
            - Understandable
            <br />
            Kaitannya dengan bagaimana informasi dan instruksi di suatu elemen
            bisa dipahami oleh user, dari segi bahasa, tata letak, dsb. Ini
            lebih ke UI/UX nya, jadi bukan ke coding sih. Hehe
          </li>
          <li>
            Robust
            <br />
            Bagaimana kita bikin elemen itu enggak cuman untuk suatu pengguna
            dengan cabang disabilitas tertentu atau assistive tech tertentu.
            Jadi bisa serve untuk semua user mau pake voice over, screen reader,
            ataupun pengguna biasa semua bisa mendapatkan experience yang sama.
          </li>
        </ol>
      </Notes>
    </Slide>
  );
}

export default Pour;
