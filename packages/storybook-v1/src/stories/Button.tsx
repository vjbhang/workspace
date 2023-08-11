import React from "react";

interface ButtonProps {
  label: string;
  backgroundColor?: string;
  size?: "small" | "medium" | "base" | "large" | "xlarge";
  containerStyle?: React.CSSProperties;
  textStyle?: React.CSSProperties;
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  label,
  backgroundColor,
  size = "medium",
  containerStyle,
  textStyle,
  ...props
}: ButtonProps) => {
  const setContainerTo = () => {
    switch (size) {
      case "small":
        return { height: "1.25rem" };
      case "medium":
        return null;
      case "large":
        return {
          height: "3rem",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
        };
      case "xlarge":
        return { height: "4rem", paddingLeft: "2rem", paddingRight: "2rem" };
    }
  };

  const setTextTo = () => {
    switch (size) {
      case "small":
        return { fontSize: "0.75rem", lineHeight: "1rem" };
      case "medium":
        return null;
      case "base":
        return { fontSize: "1rem", lineHeight: "1.5rem" };
      case "large":
        return { fontSize: "1.125rem", lineHeight: "1.75rem" };
      case "xlarge":
        return { fontSize: "1.25rem", lineHeight: "1.75rem" };
    }
  };

  let containerStyles: React.CSSProperties = {
    backgroundColor: backgroundColor,
    ...setContainerTo(),
    ...containerStyle,
  };

  let textStyles: React.CSSProperties = {
    ...setTextTo(),
    ...textStyle,
  };

  return (
    <button
      style={{
        boxShadow: "0px 0px 1px 0px rgba(134, 134, 134, 0.25)",
        ...containerStyles,
      }}
      className="px-4 w-fit h-6 rounded-md bg-gray-50 border border-gray-100 hover:bg-gray-100"
      onClick={props.onClick}
    >
      <p style={{ ...textStyles }} className="text-center text-sm text-black">
        {label}
      </p>
    </button>
  );
};
