import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-between p-24 bg-grey-800">
      <table className="border w-full">
        <tr className="bg-gray-100">
          <th className="w-fit">구분</th>
          <th className="w-fit border-l">1월</th>
          <th className="w-fit border-l">2월</th>
          <th className="w-fit border-l">3월</th>
          <th className="w-fit border-l">4월</th>
          <th className="w-fit border-l">5월</th>
          <th className="w-fit border-l">6월</th>
          <th className="w-fit border-l">7월</th>
          <th className="w-fit border-l">8월</th>
          <th className="w-fit border-l">9월</th>
          <th className="w-fit border-l">10월</th>
          <th className="w-fit border-l">11월</th>
          <th className="w-fit border-l">12월</th>
          <th className="w-fit border-l">Total</th>
        </tr>
        <tr>
          <td className="border-t">Posture</td>
          <td className="border-l border-t">-</td>
          <td className="border-l border-t">-</td>
          <td className="border-l border-t">-</td>
          <td className="border-l border-t">-</td>
          <td className="border-l border-t">-</td>
          <td className="border-l border-t">-</td>
          <td className="border-l border-t">-</td>
          <td className="border-l border-t">-</td>
          <td className="border-l border-t">-</td>
          <td className="border-l border-t">-</td>
          <td className="border-l border-t">-</td>
          <td className="border-l border-t">-</td>
          <td className="border-l border-t">-</td>
        </tr>
        <tr>
          <td className="border-t">ROM</td>
          <td className="border-l border-t">-</td>
          <td className="border-l border-t">-</td>
          <td className="border-l border-t">-</td>
          <td className="border-l border-t">-</td>
          <td className="border-l border-t">-</td>
          <td className="border-l border-t">-</td>
          <td className="border-l border-t">-</td>
          <td className="border-l border-t">-</td>
          <td className="border-l border-t">-</td>
          <td className="border-l border-t">-</td>
          <td className="border-l border-t">-</td>
          <td className="border-l border-t">-</td>
          <td className="border-l border-t">-</td>
        </tr>
        <tr className="bg-gray-100">
          <td className="border-t">Total</td>
          <td className="border-l border-t">-</td>
          <td className="border-l border-t">-</td>
          <td className="border-l border-t">-</td>
          <td className="border-l border-t">-</td>
          <td className="border-l border-t">-</td>
          <td className="border-l border-t">-</td>
          <td className="border-l border-t">-</td>
          <td className="border-l border-t">-</td>
          <td className="border-l border-t">-</td>
          <td className="border-l border-t">-</td>
          <td className="border-l border-t">-</td>
          <td className="border-l border-t">-</td>
          <td className="border-l border-t">-</td>
        </tr>
      </table>
    </main>
  );
}
