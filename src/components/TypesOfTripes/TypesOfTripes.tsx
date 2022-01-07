import { Flex, Image, Text } from "@chakra-ui/react";

const tripes = [
  { icon: "night-life", text: "vida noturna" },
  { icon: "beach", text: "praia" },
  { icon: "modern", text: "moderno" },
  { icon: "classic", text: "clássico" },
  { icon: "and-more", text: "e mais..." },
];

export function TypesOfTripes() {
  return (
    <Flex
      width={"100%"}
      maxWidth={1256}
      margin={"0 auto"}
      py={[8, 16, 20]}
      px={[6, 8, 12]}
      justifyContent={[
        "space-around",
        "space-around",
        "space-around",
        "space-between",
      ]}
      flexWrap={"wrap"}
      columnGap={"96px"}
      rowGap={[6]}
      alignItems={"flex-end"}
    >
      {tripes.map(({ text, icon }) => (
        <Flex
          key={icon}
          direction={["row", "column"]}
          align={"center"}
          justify={"center"}
          columnGap={[2, 6]}
          rowGap={6}
          flex={1}
          height={[6, "auto"]}
        >
          <Image
            src={`/icons/${icon}.svg`}
            alt={text}
            display={["none", "block", "block", " block"]}
          />
          <Text
            fontSize={48}
            color={"yellow.400"}
            display={["block", "none", "none", " none"]}
          >
            •
          </Text>

          <Text
            fontSize={[18, 24]}
            lineHeight={1.5}
            fontWeight={600}
            textAlign={"center"}
            whiteSpace={"nowrap"}
          >
            {text}
          </Text>
        </Flex>
      ))}
    </Flex>
  );
}
