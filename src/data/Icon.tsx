import type { SVGProps } from "react";

export type IconName =
  | "search"
  | "heart"
  | "bag"
  | "menu"
  | "close"
  | "arrowRight"
  | "arrowLeft"
  | "star"
  | "instagram"
  | "phone"
  | "shield"
  | "diamond"
  | "flower";

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number;
  strokeWidth?: number;
}

export const icons = {
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
    </>
  ),

  heart: (
    <path d="M20.8 8.9c0 5.1-8.8 10.1-8.8 10.1S3.2 14 3.2 8.9A4.7 4.7 0 0 1 12 6.3a4.7 4.7 0 0 1 8.8 2.6Z" />
  ),

  bag: (
    <>
      <path d="M5 8h14l-1 13H6L5 8Z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    </>
  ),

  menu: (
    <>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </>
  ),

  close: (
    <>
      <path d="m6 6 12 12" />
      <path d="m18 6-12 12" />
    </>
  ),

  arrowRight: (
    <>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </>
  ),

  arrowLeft: (
    <>
      <path d="M19 12H5" />
      <path d="m11 18-6-6 6-6" />
    </>
  ),

  star: (
    <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z" />
  ),

  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r=".7" fill="currentColor" />
    </>
  ),

  phone: (
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 3.1 5.2 2 2 0 0 1 5.1 3h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L9 10.9a16 16 0 0 0 4.1 4.1l1.2-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7A2 2 0 0 1 22 16.9Z" />
  ),

  shield: (
    <>
      <path d="M12 3 20 6v6c0 5-3.4 8.5-8 9-4.6-.5-8-4-8-9V6l8-3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),

  diamond: (
    <>
      <path d="m2 9 4-5h12l4 5-10 11L2 9Z" />
      <path d="M2 9h20" />
      <path d="m8 4 4 16 4-16" />
    </>
  ),

  flower: (
    <>
      <path d="M12 21c-1.5-4.2-4.5-5.3-4.5-8.4 0-2.4 1.8-4.1 4.5-4.1s4.5 1.7 4.5 4.1C16.5 15.7 13.5 16.8 12 21Z" />
      <path d="M12 8.5c-2.8-2.5-2.5-5.2 0-6.5 2.5 1.3 2.8 4 0 6.5Z" />
      <path d="M8.3 11.5C4.6 11.7 2.5 9.8 3 7c2.8-.2 4.5 1.4 5.3 4.5Z" />
      <path d="M15.7 11.5C19.4 11.7 21.5 9.8 21 7c-2.8-.2-4.5 1.4-5.3 4.5Z" />
    </>
  ),
};

export const Icon = ({
  name,
  size = 20,
  strokeWidth = 1.5,
  ...props
}: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {icons[name]}
    </svg>
  );
};