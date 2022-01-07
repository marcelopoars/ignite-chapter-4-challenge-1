import { Flex, Grid } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Logo } from "..";
import { BackToHome } from "../BackToHome/BackToHome";

export function Header() {
  const { asPath } = useRouter();
  const isNotHomePage = asPath !== "/";

  return (
    <Flex as="header" justifyContent="center" px={[6, 8, 12]}>
      <Grid w="100%" maxW={1160} py={[15, 27]} templateColumns="repeat(3, 1fr)">
        {isNotHomePage && <BackToHome />}
        <Logo />
      </Grid>
    </Flex>
  );
}
