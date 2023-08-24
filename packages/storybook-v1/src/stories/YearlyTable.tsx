interface YearlyTableProps {
  tableStyle?: React.CSSProperties;
  postureData: number[];
  romData: number[];
}

export const YearlyTable = ({
  tableStyle,
  postureData,
  romData,
}: YearlyTableProps) => {
  return (
    <table
      className="border-separate w-full bg-gray-300 rounded-md text-center"
      style={{ ...tableStyle }}
    >
      <thead>
        <tr className="bg-gray-100">
          <th className="w-fit rounded-tl-md" style={grayBoxShadowStyle}>
            구분
          </th>
          <th className="w-fit" style={grayBoxShadowStyle}>
            1월
          </th>
          <th className="w-fit" style={grayBoxShadowStyle}>
            2월
          </th>
          <th className="w-fit" style={grayBoxShadowStyle}>
            3월
          </th>
          <th className="w-fit" style={grayBoxShadowStyle}>
            4월
          </th>
          <th className="w-fit" style={grayBoxShadowStyle}>
            5월
          </th>
          <th className="w-fit" style={grayBoxShadowStyle}>
            6월
          </th>
          <th className="w-fit" style={grayBoxShadowStyle}>
            7월
          </th>
          <th className="w-fit" style={grayBoxShadowStyle}>
            8월
          </th>
          <th className="w-fit" style={grayBoxShadowStyle}>
            9월
          </th>
          <th className="w-fit" style={grayBoxShadowStyle}>
            10월
          </th>
          <th className="w-fit" style={grayBoxShadowStyle}>
            11월
          </th>
          <th className="w-fit" style={grayBoxShadowStyle}>
            12월
          </th>
          <th className="w-fit rounded-tr-md" style={grayBoxShadowStyle}>
            Total
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-white">
          <td className="" style={whiteBoxShadowStyle}>
            Posture
          </td>
          <td className="" style={whiteBoxShadowStyle}>
            {postureData[0]}
          </td>
          <td className="" style={whiteBoxShadowStyle}>
            {postureData[1]}
          </td>
          <td className="" style={whiteBoxShadowStyle}>
            {postureData[2]}
          </td>
          <td className="" style={whiteBoxShadowStyle}>
            {postureData[3]}
          </td>
          <td className="" style={whiteBoxShadowStyle}>
            {postureData[4]}
          </td>
          <td className="" style={whiteBoxShadowStyle}>
            {postureData[5]}
          </td>
          <td className="" style={whiteBoxShadowStyle}>
            {postureData[6]}
          </td>
          <td className="" style={whiteBoxShadowStyle}>
            {postureData[7]}
          </td>
          <td className="" style={whiteBoxShadowStyle}>
            {postureData[8]}
          </td>
          <td className="" style={whiteBoxShadowStyle}>
            {postureData[9]}
          </td>
          <td className="" style={whiteBoxShadowStyle}>
            {postureData[10]}
          </td>
          <td className="" style={whiteBoxShadowStyle}>
            {postureData[11]}
          </td>
          <td className="" style={whiteBoxShadowStyle}>
            {postureData[0] +
              postureData[1] +
              postureData[2] +
              postureData[3] +
              postureData[4] +
              postureData[5] +
              postureData[6] +
              postureData[7] +
              postureData[8] +
              postureData[9] +
              postureData[10] +
              postureData[11]}
          </td>
        </tr>
        <tr className="bg-white">
          <td className="" style={whiteBoxShadowStyle}>
            ROM
          </td>
          <td className="" style={whiteBoxShadowStyle}>
            {romData[0]}
          </td>
          <td className="" style={whiteBoxShadowStyle}>
            {romData[1]}
          </td>
          <td className="" style={whiteBoxShadowStyle}>
            {romData[2]}
          </td>
          <td className="" style={whiteBoxShadowStyle}>
            {romData[3]}
          </td>
          <td className="" style={whiteBoxShadowStyle}>
            {romData[4]}
          </td>
          <td className="" style={whiteBoxShadowStyle}>
            {romData[5]}
          </td>
          <td className="" style={whiteBoxShadowStyle}>
            {romData[6]}
          </td>
          <td className="" style={whiteBoxShadowStyle}>
            {romData[7]}
          </td>
          <td className="" style={whiteBoxShadowStyle}>
            {romData[8]}
          </td>
          <td className="" style={whiteBoxShadowStyle}>
            {romData[9]}
          </td>
          <td className="" style={whiteBoxShadowStyle}>
            {romData[10]}
          </td>
          <td className="" style={whiteBoxShadowStyle}>
            {romData[11]}
          </td>
          <td className="" style={whiteBoxShadowStyle}>
            {romData[0] +
              romData[1] +
              romData[2] +
              romData[3] +
              romData[4] +
              romData[5] +
              romData[6] +
              romData[7] +
              romData[8] +
              romData[9] +
              romData[10] +
              romData[11]}
          </td>
        </tr>
        <tr className="bg-gray-100">
          <td className="rounded-bl-md" style={grayBoxShadowStyle}>
            Total
          </td>
          <td className="" style={grayBoxShadowStyle}>
            {postureData[0] + romData[0]}
          </td>
          <td className="" style={grayBoxShadowStyle}>
            {postureData[1] + romData[1]}
          </td>
          <td className="" style={grayBoxShadowStyle}>
            {postureData[2] + romData[2]}
          </td>
          <td className="" style={grayBoxShadowStyle}>
            {postureData[3] + romData[3]}
          </td>
          <td className="" style={grayBoxShadowStyle}>
            {postureData[4] + romData[4]}
          </td>
          <td className="" style={grayBoxShadowStyle}>
            {postureData[5] + romData[5]}
          </td>
          <td className="" style={grayBoxShadowStyle}>
            {postureData[6] + romData[6]}
          </td>
          <td className="" style={grayBoxShadowStyle}>
            {postureData[7] + romData[7]}
          </td>
          <td className="" style={grayBoxShadowStyle}>
            {postureData[8] + romData[8]}
          </td>
          <td className="" style={grayBoxShadowStyle}>
            {postureData[9] + romData[9]}
          </td>
          <td className="" style={grayBoxShadowStyle}>
            {postureData[10] + romData[10]}
          </td>
          <td className="" style={grayBoxShadowStyle}>
            {postureData[11] + romData[11]}
          </td>
          <td className="rounded-br-md" style={grayBoxShadowStyle}>
            {postureData[0] +
              postureData[1] +
              postureData[2] +
              postureData[3] +
              postureData[4] +
              postureData[5] +
              postureData[6] +
              postureData[7] +
              postureData[8] +
              postureData[9] +
              postureData[10] +
              postureData[11] +
              romData[0] +
              romData[1] +
              romData[2] +
              romData[3] +
              romData[4] +
              romData[5] +
              romData[6] +
              romData[7] +
              romData[8] +
              romData[9] +
              romData[10] +
              romData[11]}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

const whiteBoxShadowStyle: React.CSSProperties = {
  boxShadow: "0 0 0 0.6px white",
};

const grayBoxShadowStyle: React.CSSProperties = {
  boxShadow: "0 0 0 0.6px #F3F4F6",
};
