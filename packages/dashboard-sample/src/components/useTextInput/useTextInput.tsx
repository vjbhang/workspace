import { useState } from "react";

export function useTextInput({
  type,
  containerStyle,
}: {
  type: string;
  containerStyle: React.CSSProperties;
}) {
  const [value, setValue] = useState("");
  const input = (
    <input
      type={type || "text"}
      style={containerStyle}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );

  return [value, input];
}
