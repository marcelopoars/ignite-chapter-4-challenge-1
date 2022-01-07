import { Flex } from "@chakra-ui/react";
import { ContinentData, ContinentHero, Header } from "../components";

export default function Continent() {
  return (
    <Flex direction={"column"}>
      <Header />
      <ContinentHero />
      <ContinentData />
    </Flex>
  );
}
