import { Icon } from "@chakra-ui/react";
import Link from "next/link";
import { RiArrowLeftSLine } from "react-icons/ri";

export function BackToHome() {
  return (
    <Link href="/">
      <a>
        <Icon as={RiArrowLeftSLine} fontSize={[24, 32]} />
      </a>
    </Link>
  );
}
