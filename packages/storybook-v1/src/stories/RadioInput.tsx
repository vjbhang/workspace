interface RadioInputProps {
  name: string;
  options: string[];
}

export const RadioInput = ({ name, options }: RadioInputProps) => {
  const mappedOptions = options.map((item, index) => {
    return (
      <label className="flex items-center gap-2" key={index}>
        <input type="radio" name={name} value={item} />
        <p>{item}</p>
      </label>
    );
  });
  return <div className="w-fit flex gap-6">{mappedOptions}</div>;
};
