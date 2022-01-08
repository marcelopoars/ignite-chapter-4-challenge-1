import { Flex } from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";
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
      <Head>
        <title>World Trip</title>
      </Head>

      <Header />
      <Hero />
      <TypesOfTripes />
      <Divider />
      <ContinentCarousel />
    </Flex>
  );
};

export default Home;
