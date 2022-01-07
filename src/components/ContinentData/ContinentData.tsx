import { Flex, Text } from "@chakra-ui/react";
import { ContinentBigNumbers } from "..";

export function ContinentData() {
  return (
    <Flex
      width={"100%"}
      maxWidth={1256}
      margin={"0 auto"}
      py={[8, 16, 20]}
      px={[6, 8, 12]}
      flexDirection={["column", "column", "row"]}
      gap={[4, 4, 70]}
    >
      <Text fontSize={[14, 16, 24]} textAlign={['center', 'center', 'left']} flex={1.3}>
        A Europa é, por convenção, um dos seis continentes do mundo.
        Compreendendo a península ocidental da Eurásia, a Europa geralmente
        divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
        rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
      </Text>
      <ContinentBigNumbers />
    </Flex>
  );
}
