"use client";
import AccountIcon from "../../../public/icons/perm_identity.png";
import SettingsIcon from "../../../public/icons/settings.png";

import DashboardMainButton from "@/components/dashboard-main-button";

export default function Dashboard() {
  return (
    <div className="w-fit h-fit flex flex-col items-center justify-center ">
      <h2 className="text-center">Dashboard</h2>
      <div className="w-full h-fit flex items-center justify-evenly border-round px-4 py-2 mt-3 gap-2">
        <DashboardMainButton title="내 계좌" icon={AccountIcon} />
        <DashboardMainButton title="설정" icon={SettingsIcon} />
      </div>
    </div>
  );
}
