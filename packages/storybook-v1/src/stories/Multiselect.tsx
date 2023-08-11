interface MultiselectProps {
  options: string[];
  containerStyle?: React.CSSProperties;
}

export const Multiselect = ({ options, containerStyle }: MultiselectProps) => {
  const mapOptions = options.map((item, index) => (
    <option value={item} key={index}>
      {item}
    </option>
  ));
  return (
    <select
      style={{
        boxShadow: "0px 0px 1px 0px rgba(134, 134, 134, 0.25)",
        ...containerStyle,
      }}
      className="text-sm text-black pl-5 pr-3 w-fit h-6 rounded-md bg-gray-50 border border-gray-100 hover:bg-gray-100 focus:outline-none"
    >
      {mapOptions}
    </select>
  );
};
