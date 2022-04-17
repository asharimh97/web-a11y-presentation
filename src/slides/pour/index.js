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
            Perceivable
            <br />
            All users must be able to perceive your content. If there is audio
            or video content, you should provide text alternatives. If there is
            text content, you should provide audio alternatives or a way that
            assistive technology such as screen readers can consume it for the
            end-user
            <br />
            Tuna netra pake screen reader, tuna rungu baca caption, temen-temen
            dislexia dengan pilihan font, ada icon untuk membantu ngasih tau
            suatu action, dsb
            <br />
            Ask yourself: Is there anything on my site that a deaf, colorblind,
            low vision or blind user would not be able to perceive?
          </li>
          <li>
            Operable
            <br />
            All users must be able to operate your site. Most users with
            disabilities use a keyboard to surf the web using character key
            shortcuts along the way to navigate, interact with, and access
            content. Your site should be forgiving to your users if they make a
            mistake, offering ways to retract, correct, and confirm information.
            <br />
            Interfacenya bisa dioperasikan, misal enggak bisa diinput, diklik,
            dienter, dsb. Kaitannya pake input
            <br />
            Ask yourself: Can my site be navigated and operated solely through a
            keyboard? Do users have control of interactive elements on my site?
            Are tasks on my site able to be easily and successfully completed?
          </li>
          <li>
            Understandable
            <br />
            Kaitannya dengan bagaimana informasi dan instruksi di suatu elemen
            bisa dipahami oleh user, dari segi bahasa, tata letak, dsb. Ini
            lebih ke UI/UX nya, jadi bukan ke coding sih. Hehe
          </li>
          <li>
            Robust
            <br />
            Users should be able to access your site from any device, platform,
            or browser. Adopt best development practices to support different
            operating systems and browsers. To guarantee a functional site for a
            diverse set of audiences, avoid any mishaps and ensure that your
            code is clean.
            <br />
            Bagaimana kita bikin elemen itu enggak cuman untuk suatu pengguna
            dengan cabang disabilitas tertentu atau assistive tech tertentu.
            Jadi bisa serve untuk semua user mau pake voice over, screen reader,
            ataupun pengguna biasa semua bisa mendapatkan experience yang sama.
            <br />
            Ask yourself: Is our site developed with best practices in mind? Can
            our site or application support a variety of devices and browsers?
            Is the code to our site clean?
          </li>
        </ol>
      </Notes>
    </Slide>
  );
}

export default Pour;
