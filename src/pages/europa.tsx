import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import {
  ContinentCities,
  ContinentData,
  ContinentHero,
  Header,
} from "../components";

export default function Europa() {
  return (
    <Flex direction={"column"}>
      <Head>
        <title>Europa | World Trip</title>
      </Head>
      <Header />
      <ContinentHero />
      <ContinentData />
      <ContinentCities />
    </Flex>
  );
}
