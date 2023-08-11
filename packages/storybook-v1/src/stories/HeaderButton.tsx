interface HeaderButtonProps {
  label: string;
  selected: boolean;
  selectedStyle?: React.CSSProperties;
  containerStyle?: React.CSSProperties;
  textStyle?: React.CSSProperties;
  onClick: () => void;
}

export const HeaderButton = ({
  label,
  selected,
  selectedStyle,
  containerStyle,
  textStyle,
  ...props
}: HeaderButtonProps) => {
  const isSelected: React.CSSProperties | null = selected
    ? selectedStyle
      ? selectedStyle
      : { backgroundColor: "#111827" }
    : null;

  return (
    <button
      style={{ ...containerStyle, ...isSelected }}
      className="rounded-lg w-[4.623rem] h-10 bg-transparent hover:bg-gray-700"
      onClick={props.onClick}
    >
      <h1 style={{ ...textStyle }} className="text-center text-base text-white">
        {label}
      </h1>
    </button>
  );
};
