export default async function TestPage() {
  const res = await fetch("http://localhost:3000/test/api/stuff", {
    method: "GET",
    // headers: {
    //   "Accept": "application/json",
    //   "Content-Type": "application/json"
    // }
  });

  const json = await res.json();
  console.log(json);

  const { name } = json.data;

  return (
    <div>
      <p>Testing Route Handler for this page</p>
      <p>{name}</p>
    </div>
  );
}
