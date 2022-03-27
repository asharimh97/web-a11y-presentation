import React from "react";
import {
  FlexBox,
  Heading,
  UnorderedList,
  CodeSpan,
  OrderedList,
  ListItem,
  Appear,
  Slide,
  Text,
  Grid,
  Box,
  Image,
  CodePane,
  MarkdownSlide,
  MarkdownSlideSet,
  Notes,
} from "spectacle";

const formidableLogo =
  "https://avatars2.githubusercontent.com/u/5078602?s=280&v=4";

// SPECTACLE_CLI_TEMPLATE_END

const SlideFragments = () => (
  <>
    <Slide>
      <Text>This is a slide fragment.</Text>
    </Slide>
    <Slide>
      <Text>This is also a slide fragment.</Text>
      <Appear>
        <Text>This item shows up!</Text>
      </Appear>
      <Appear>
        <Text>This item also shows up!</Text>
      </Appear>
    </Slide>
  </>
);

function Reference() {
  return (
    <>
      <Slide
        transition={{
          from: {
            transform: "scale(0.5) rotate(45deg)",
            opacity: 0,
          },
          enter: {
            transform: "scale(1) rotate(0)",
            opacity: 1,
          },
          leave: {
            transform: "scale(0.2) rotate(315deg)",
            opacity: 0,
          },
        }}
        backgroundColor="tertiary"
        backgroundImage="url(https://github.com/FormidableLabs/dogs/blob/main/src/beau.jpg?raw=true)"
        backgroundOpacity={0.5}
      >
        <Heading>Custom Backgrounds</Heading>
        <UnorderedList>
          <ListItem>
            <CodeSpan>backgroundColor</CodeSpan>
          </ListItem>
          <ListItem>
            <CodeSpan>backgroundImage</CodeSpan>
          </ListItem>
          <ListItem>
            <CodeSpan>backgroundOpacity</CodeSpan>
          </ListItem>
          <ListItem>
            <CodeSpan>backgroundSize</CodeSpan>
          </ListItem>
          <ListItem>
            <CodeSpan>backgroundPosition</CodeSpan>
          </ListItem>
          <ListItem>
            <CodeSpan>backgroundRepeat</CodeSpan>
          </ListItem>
        </UnorderedList>
      </Slide>
      <Slide>
        <Heading>Animated Elements</Heading>
        <OrderedList>
          <Appear>
            <ListItem>Elements can animate in!</ListItem>
          </Appear>
          <Appear>
            <ListItem>Out of order</ListItem>
          </Appear>
          <Appear priority={0}>
            <ListItem>
              Just identify the order with the prop{" "}
              <CodeSpan>priority</CodeSpan>!
            </ListItem>
          </Appear>
        </OrderedList>
      </Slide>
      <Slide>
        <FlexBox>
          <Text>These</Text>
          <Text>Text</Text>
          <Text color="secondary">Items</Text>
          <Text fontWeight="bold">Flex</Text>
        </FlexBox>
        <Grid gridTemplateColumns="1fr 2fr" gridColumnGap={15}>
          <Box backgroundColor="primary">
            <Text color="secondary">Single-size Grid Item</Text>
          </Box>
          <Box backgroundColor="secondary">
            <Text>Double-size Grid Item</Text>
          </Box>
        </Grid>
        <Grid
          gridTemplateColumns="1fr 1fr 1fr"
          gridTemplateRows="1fr 1fr 1fr"
          alignItems="center"
          justifyContent="center"
          gridRowGap={1}
        >
          {Array(9)
            .fill("")
            .map((_, index) => (
              <FlexBox paddingTop={0} key={`formidable-logo-${index}`} flex={1}>
                <Image src={formidableLogo} width={100} />
              </FlexBox>
            ))}
        </Grid>
      </Slide>
      <SlideFragments />
      <Slide>
        <CodePane language="jsx">{`
        import { createClient, Provider } from 'urql';

        const client = createClient({ url: 'https://0ufyz.sse.codesandbox.io' });

        const App = () => (
          <Provider value={client}>
            <Todos />
          </Provider>
        );
        `}</CodePane>
        <Box height={20} />
        <CodePane language="java" showLineNumbers={false}>{`
        public class NoLineNumbers {
          public static void main(String[] args) {
            System.out.println("Hello");
          }
        }
        `}</CodePane>
      </Slide>
      <div>
        <Slide>
          <Heading>This is a slide embedded in a div</Heading>
        </Slide>
      </div>
      <MarkdownSlide componentProps={{ color: "yellow" }}>
        {`
        # This is a Markdown Slide

        - You can pass props down to all elements on the slide.
        - Just use the \`componentProps\` prop.
        `}
      </MarkdownSlide>
      <MarkdownSlide animateListItems>
        {`
       # This is also a Markdown Slide

       It uses the \`animateListItems\` prop.

       - Its list items...
       - ...will appear...
       - ...one at a time.
      `}
      </MarkdownSlide>
      <MarkdownSlideSet>
        {`
        # This is the first slide of a Markdown Slide Set
        ---
        # This is the second slide of a Markdown Slide Set
        `}
      </MarkdownSlideSet>
    </>
  );
}

export default Reference;
