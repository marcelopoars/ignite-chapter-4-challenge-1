import { Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import { A11y, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { formatString } from "../../util/formatString";

const sliders = [
  {
    continent: "América do Norte",
    text: "De tudo um pouco para satisfazer a todos os estilos de viajantes",
  },
  { continent: "América do Sul", text: "Uma grande variedade de paisagens, climas e estilos." },
  { continent: "Ásia", text: "O maior continente do mundo." },
  { continent: "África", text: "Uma grande diversidade de paisagens, etnias, cultura e costumes." },
  { continent: "Europa", text: "O continente mais antigo." },
  { continent: "Oceania", text: "Um dos destinos mais procurados por turistas de todo o mundo." },
];

export function ContinentCarousel() {
  return (
    <Flex
      flexDirection={"column"}
      width={"100%"}
      maxWidth={1240}
      m={"auto"}
      mb={200}
    >
      <Heading
        fontSize={["20px", "24px", "36px"]}
        lineHeight={1.5}
        fontWeight={500}
        textAlign={"center"}
        my={["24px", "52px"]}
      >
        Vamos nessa?
        <br />
        Então escolha seu continente
      </Heading>

      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        style={{ width: "100%" }}
      >
        {sliders.map(({ continent, text }) => (
          <SwiperSlide key={continent} style={{ color: "red" }}>
            <Link href="/europa">
              <a>
                <Flex
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  h={[250, 350, 450]}
                  bgImage={`url(/carousel/${formatString(continent)}.jpg)`}
                  bgSize={"cover"}
                  backgroundPosition={"center"}
                  color={"yellow.500"}
                  fontWeight={700}
                >
                  <Heading
                    bg={"gray.500"}
                    p={"4px"}
                    fontSize={["24px", "48px"]}
                    mb={4}
                  >
                    {continent}
                  </Heading>
                  <Text bg={"gray.500"} p={"4px"} fontSize={["14px", "24px"]}>
                    {text}
                  </Text>
                </Flex>
              </a>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
}
