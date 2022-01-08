import { Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { ContinentPopover } from "..";

const bigNumbers = [
  { bigNumber: 50, text: "países" },
  { bigNumber: 60, text: "línguas" },
  { bigNumber: 27, text: "cidades +100" },
];

export function ContinentBigNumbers() {
  return (
    <Flex flexWrap={"wrap"} flex={1} align={"center"} gap={12} fontWeight={600}>
      {bigNumbers.map(({ bigNumber, text }) => (
        <VStack
          key={text}
          flex={1}
          alignItems={["flex-start", "flex-start", "center"]}
        >
          <Text color={"yellow.500"} fontSize={["24px", "36px", "48px"]}>
            {bigNumber}
          </Text>

          <HStack>
            <Text
              fontSize={["14px", "16px", "24px"]}
              whiteSpace={"nowrap"}
              mt={"0"}
              display={"flex"}
              alignItems={"center"}
            >
              {text}
            </Text>
            {text === "cidades +100" && <ContinentPopover />}
          </HStack>
        </VStack>
      ))}
    </Flex>
  );
}
