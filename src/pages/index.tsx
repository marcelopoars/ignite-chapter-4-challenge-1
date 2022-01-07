import { Flex } from "@chakra-ui/react";
import { NextPage } from "next";
import {
  ContinentCarousel,
  Divider,
  Header,
  Hero,
  TypesOfTripes,
} from "../components";

const Home: NextPage = () => {
  return (
    <Flex direction={"column"}>
      <Header />
      <Hero />
      <TypesOfTripes />
      <Divider />
      <ContinentCarousel />
    </Flex>
  );
};

export default Home;
