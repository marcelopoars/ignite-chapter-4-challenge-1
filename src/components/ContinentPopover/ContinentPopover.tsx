import {
  Icon,
  ListItem,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  UnorderedList
} from "@chakra-ui/react";

export function ContinentPopover() {
  return (
    <Popover>
      <PopoverTrigger>
        <Icon viewBox="0 0 16 16">
          <svg
            width="16"
            height="16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.99992 14.6667C11.6818 14.6667 14.6666 11.6819 14.6666 8.00001C14.6666 4.31811 11.6818 1.33334 7.99992 1.33334C4.31802 1.33334 1.33325 4.31811 1.33325 8.00001C1.33325 11.6819 4.31802 14.6667 7.99992 14.6667Z"
              stroke="#999999"
              strokeOpacity="0.5"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <path
              d="M8 10.6667V8"
              stroke="#999999"
              strokeOpacity="0.5"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 5.33334H8.01"
              stroke="#999999"
              strokeOpacity="0.5"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Icon>
      </PopoverTrigger>
      <PopoverContent
        bg={"gray.500"}
        color={"yellow.500"}
        fontSize={["14px"]}
        w={["150px"]}
      >
        <PopoverArrow bg={"gray.500"} />
        <PopoverCloseButton />
        <PopoverBody>
          <UnorderedList>
            <ListItem>Londres</ListItem>
            <ListItem>Paris</ListItem>
            <ListItem>Roma</ListItem>
            <ListItem>Praga</ListItem>
            <ListItem>Amsterdã</ListItem>
          </UnorderedList>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
