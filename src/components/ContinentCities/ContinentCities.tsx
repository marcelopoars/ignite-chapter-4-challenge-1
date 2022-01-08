import {
  Box,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { formatString } from "../../util/formatString";

export function ContinentCities() {
  const cities = [
    { city: "Londres", country: "Reino Unido" },
    { city: "París", country: "França" },
    { city: "Roma", country: "Itália" },
    { city: "Praga", country: "República Tcheca" },
    { city: "Amsterdã", country: "Holanda" },
  ];

  return (
    <Flex
      flexDirection={"column"}
      width={"100%"}
      maxWidth={1256}
      margin={"0 auto"}
      px={[6, 8, 12]}
      mb={100}
    >
      <Heading
        fontSize={["24px", "24px", "36px"]}
        fontWeight={500}
        mb={[5, 8, 10]}
      >
        Cidades +100
      </Heading>

      <SimpleGrid columns={[1, 2, 2, 4]} spacing={12}>
        {cities.map(({ city, country }) => (
          <Box
            key={city}
            bg={"white"}
            borderRadius={4}
            border={"1px"}
            borderColor={"yellow.500"}
            overflow={"hidden"}
          >
            <Image
              src={`/cities/${formatString(city)}.jpg`}
              alt={`Cartão postal da cidade ${city}`}
            />
            <Flex justifyContent={"space-between"} p={6}>
              <VStack alignItems={"flex-start"}>
                <Heading fontSize={["20px"]} fontWeight={600}>
                  {city}
                </Heading>
                <Text color={"gray.400"}>{country}</Text>
              </VStack>
              <Image
                src={`/cities/${formatString(city)}-flag.svg`}
                alt={`Ícone com as cores da bandeira do país ${country}`}
              />
            </Flex>
          </Box>
        ))}
      </SimpleGrid>
    </Flex>
  );
}
