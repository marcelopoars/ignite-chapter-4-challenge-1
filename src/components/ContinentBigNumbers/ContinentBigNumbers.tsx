import { Flex, Text, VStack } from "@chakra-ui/react";

const bigNumbers = [
  { bigNumber: 50, text: "países" },
  { bigNumber: 60, text: "línguas" },
  { bigNumber: 27, text: "cidades +100" },
];

export function ContinentBigNumbers() {
  return (
    <Flex
      flexWrap={"wrap"}
      flex={1}
      align={"center"}
      gap={12}
      fontWeight={600}
    >
      {bigNumbers.map(({ bigNumber, text }) => (
        <VStack key={text} flex={1}>
          <Text color={"yellow.500"} fontSize={["24px", "36px", "48px"]}>
            {bigNumber}
          </Text>
          <Text
            fontSize={["14px", "16px", "24px"]}
            whiteSpace={"nowrap"}
            mt={"0"}
          >
            {text}
          </Text>
        </VStack>
      ))}
    </Flex>
  );
}
