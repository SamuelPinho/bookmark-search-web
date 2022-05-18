import { Icon, IconProps } from "@chakra-ui/react";

export const BrowserIcon = (p: IconProps) => {
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
        d="M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3Zm1 15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-7h14ZM5 9V6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3Z"
      />
      <circle cx="8" cy="7.03" r="1" fill="currentColor" />
      <circle cx="12" cy="7.03" r="1" fill="currentColor" />
    </Icon>
  );
};
