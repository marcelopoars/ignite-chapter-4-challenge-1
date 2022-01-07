import { Flex, Heading } from "@chakra-ui/react";

export function ContinentHero() {
  return (
    <Flex
      height={[150, 250, 500]}
      bgImage="url('/banners/continent/europa.jpg')"
      bgRepeat="no-repeat"
      bgSize="cover"
      px={[6, 8, 12]}
      justify={"center"}
    >
      <Flex
        width={"100%"}
        maxWidth={1160}
        justifyContent={["center", "center", "flex-start"]}
        alignItems={["center", "center", "flex-end"]}
        pb={[0, 0, 59]}
      >
        <Heading color={"gray.100"} fontSize={[28, 36, 48]} fontWeight={600}>Europa</Heading>
      </Flex>
    </Flex>
  );
}
