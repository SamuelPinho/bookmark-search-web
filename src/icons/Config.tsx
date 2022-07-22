import { Icon, IconProps } from "@chakra-ui/react";

export const ConfigIcon = (p: IconProps) => {
  return (
    // @ts-ignore
    <Icon
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 48 48"
      {...p}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
        d="M41.5 10h-6m-8-4v8m0-4h-22m8 14h-8m16-4v8m22-4h-22m20 14h-6m-8-4v8m0-4h-22"
      />
    </Icon>
  );
};
