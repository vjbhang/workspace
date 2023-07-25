import { useRouter } from "next/navigation";

export default function DashboardLayout(props: {
  children: React.ReactNode;
  login: React.ReactNode;
}) {
  return (
    <div className="w-screen h-fit flex min-h-screen flex-col items-center p-24">
      {props.children}
    </div>
  );
}
