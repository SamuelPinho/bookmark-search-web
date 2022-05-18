import { Icon, IconProps } from "@chakra-ui/react";

export const BoltIcon = (p: IconProps) => {
  return (
    // @ts-ignore
    <Icon
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
      {...p}
    >
      <path
        fill="currentColor"
        d="M19.87 8.6A1 1 0 0 0 19 8h-4.58l1.27-4.74a1 1 0 0 0-.17-.87a1 1 0 0 0-.79-.39h-7a1 1 0 0 0-1 .74l-2.68 10a1 1 0 0 0 .17.87a1 1 0 0 0 .8.39h3.87l-1.81 6.74a1 1 0 0 0 1.71.93l10.9-12a1 1 0 0 0 .18-1.07Zm-9.79 8.68l1.07-4a1 1 0 0 0-.17-.87a1 1 0 0 0-.79-.39H6.35L8.49 4h4.93l-1.27 4.74a1 1 0 0 0 1 1.26h3.57Z"
      />
    </Icon>
  );
};
