import Image from "next/image";
import chevron from "../../public/expand_more.svg";

type BrandedSelectButtonProps = {
  options: string[];
  active: boolean;
  containerStyle?: React.CSSProperties;
  dropdownStyle?: React.CSSProperties;
};

export const BrandedSelectButton = ({
  options,
  active,
  containerStyle,
  dropdownStyle,
}: BrandedSelectButtonProps) => {
  const mapOptions = options.map((item, index) => (
    <option value={item} key={index}>
      {item}
    </option>
  ));

  function DropDown() {
    if (active) {
      return (
        <div
          style={{
            boxShadow: "0px 0px 4px 0px rgba(134, 134, 134, 0.25)",
            ...dropdownStyle,
          }}
          className="w-40 h-fit mt-2 rounded-md overflow-hidden"
        >
          <div className="text-gray-50 text-left flex flex-col justify-center h-16 pl-3 pr-3 bg-gray-800">
            <p className="font-bold">공장 A</p>
            <p className="text-xs">총: 1,263 명</p>
            <p className="text-xs">검: 623 명</p>
          </div>
          <div className="text-left flex flex-col justify-center h-16 pl-3 pr-3 bg-white border-b">
            <p className="font-bold">공장 B</p>
            <p className="text-xs">총: 1,263 명</p>
            <p className="text-xs">검: 623 명</p>
          </div>
          <div className="text-left flex flex-col justify-center h-16 pl-3 pr-3 bg-white">
            <p className="font-bold">공장 C</p>
            <p className="text-xs">총: 1,263 명</p>
            <p className="text-xs">검: 623 명</p>
          </div>
        </div>
      );
    } else return null;
  }
  return (
    <div className="flex flex-col items-end h-fit w-fit">
      <button
        style={{
          boxShadow: "0px 0px 1px 0px rgba(134, 134, 134, 0.25)",
          ...containerStyle,
        }}
        className="flex text-sm text-black pl-3 w-fit h-16 rounded-md bg-gray-50 border border-gray-100 hover:bg-gray-100 focus:outline-none"
      >
        <div className="text-left flex flex-col justify-center h-full pr-3">
          <p className="font-bold">공장 A</p>
          <p className="text-xs">총: 1,263 명</p>
          <p className="text-xs">검: 623 명</p>
        </div>
        <div className="flex ml-auto justify-center items-center w-fit h-full p-1 border-l">
          <Image src={chevron} alt="expand menu selection" />
        </div>
      </button>
      <DropDown />
    </div>
  );
};
