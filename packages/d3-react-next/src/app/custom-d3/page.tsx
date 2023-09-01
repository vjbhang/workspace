import AxisX from "./_component/AxisX";

export default function CustomD3Page() {
  return (
    <div className="w-screen h-screen flex flex-col items-center p-8">
      <h1 className="text-2xl">LETS FKN CREATE BESPOKE D3</h1>
      <AxisX domain={[0, 100]} range={[10, 550]} />
    </div>
  );
}
