import Image, { StaticImageData } from "next/image";

export default function DashboardMainButton({
  title,
  icon,
}: {
  title: string;
  icon: StaticImageData;
}) {
  return (
    <button className="w-24 flex flex-col items-center justify-center p-2 rounded-lg transition-all hover:shadow hover:bg-gray-200 gap-1">
      <p>{title}</p>
      <Image src={icon} width={24} height={24} alt="icon-filler" />
    </button>
  );
}
