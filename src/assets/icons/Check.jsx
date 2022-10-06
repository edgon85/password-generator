export const Check = ({ size, color }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.53001 12.7003L9.00001 16.1703L18.88 6.30031C19.27 5.91031 19.9 5.91031 20.29 6.30031C20.68 6.69031 20.68 7.32031 20.29 7.71031L9.71001 18.2903C9.32001 18.6803 8.69001 18.6803 8.30001 18.2903L4.12001 14.1103C3.73001 13.7203 3.73001 13.0903 4.12001 12.7003C4.51001 12.3103 5.14002 12.3103 5.53001 12.7003Z"
        fill={color}
      />
    </svg>
  );
};
