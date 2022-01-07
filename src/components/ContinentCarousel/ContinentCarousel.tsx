import { Flex, Heading, Text } from "@chakra-ui/react";
// import Swiper core and required modules
import { A11y, Navigation, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

const sliders = [
  { continent: "Europa", text: "O continente mais antigo." },
  { continent: "Africa", text: "Texto bla bla bla" },
  { continent: "América do Norte", text: "bla bla bla" },
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
        // install Swiper modules
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        style={{ width: "100%" }}
      >
        {sliders.map(({ continent, text }) => (
          <SwiperSlide key={continent} style={{ color: "red" }}>
            <Flex
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              h={[250, 350, 450]}
              bgImage={"url(/carousel/europa.png)"}
              bgSize={"cover"}
              color={"gray.100"}
              fontWeight={700}
            >
              <Heading fontSize={["24px", "48px"]} mb={4}>
                {continent}
              </Heading>
              <Text fontSize={["14px", "24px"]}>{text}</Text>
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
}
