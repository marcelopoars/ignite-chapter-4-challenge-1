import { Icon } from "@chakra-ui/react";
import Link from "next/link";

export function BackToHome() {
  return (
    <Link href="/">
      <a style={{ display: "flex", alignItems: "center" }}>
        <Icon viewBox="0 0 10 18" aria-label="Voltar para página home">
          <svg
            width="10"
            height="18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 17L1 9L9 1"
              stroke="#47585B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Icon>
      </a>
    </Link>
  );
}
