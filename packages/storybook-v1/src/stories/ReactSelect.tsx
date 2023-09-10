import Select from "react-select";

export function ReactSelect({ options }: { options?: any[] }) {
  return <Select options={options} isSearchable={false} />;
}
