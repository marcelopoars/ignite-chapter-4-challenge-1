import { Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";

export function Hero() {
  return (
    <Flex
      height={[163, 290, 335]}
      bgImage="url('/banners/hero-image-01.jpg')"
      bgRepeat="no-repeat"
      bgSize="cover"
      px={[6, 8, 12]}
      justify={"center"}
    >
      <Flex
        width={"100%"}
        maxW={1160}
        alignItems={"center"}
        justifyContent={"space-between"}
        gap={4}
      >
        <VStack alignItems={"flex-start"}>
          <Heading
            as={"h1"}
            color={"gray.100"}
            fontWeight={500}
            fontSize={[20, 24, 36]}
            lineHeight={1.5}
          >
            5 Continentes,
            <br />
            infinitas possibilidades.
          </Heading>
          <Text
            color={"gray.200"}
            fontSize={[14, 16, 20]}
            lineHeight={1.5}
            maxW={[400, 400, 400, 400, 524]}
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.{" "}
          </Text>
        </VStack>

        <Image
          src="airplane.svg"
          alt="Avião"
          display={["none", "none", "block", "block"]}
          transform={"translateY(48px)"}
        />
      </Flex>
    </Flex>
  );
}
