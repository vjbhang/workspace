import { HeaderButton } from "..";

export const StackedNavigationBar = ({
  children,
  links,
}: {
  children?: React.ReactNode;
  links: string[];
}) => {
  const navButtons = links.map((item, index) => {
    if (index === 0) {
      return (
        <HeaderButton
          label={item}
          key={index}
          selected={true}
          onClick={() => {}}
          containerStyle={containerStyle}
        />
      );
    }
    return (
      <HeaderButton
        label={item}
        key={index}
        selected={false}
        onClick={() => {}}
        containerStyle={containerStyle}
      />
    );
  });
  return (
    <div className="fixed top-0 left-0 flex justify-start items-center w-full h-fit bg-gray-800 px-12 py-6">
      <h1 className="text-white font-semibold text-3xl">exbody</h1>
      <div className="flex gap-2.5 ml-10 items-center h-full">{navButtons}</div>
      {children}
    </div>
  );
};

const containerStyle: React.CSSProperties = {
  width: "6.25rem",
};
