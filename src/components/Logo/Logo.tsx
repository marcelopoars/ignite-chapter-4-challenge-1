import { Box, Image } from "@chakra-ui/react";
import Link from "next/link";

export function Logo() {
  return (
    <Box justifySelf="center" gridColumn={2}>
      <Link href="/">
        <a>
          <Image src="/logo.svg" alt="logo" width={[81, 124, 184]} />
        </a>
      </Link>
    </Box>
  );
}
