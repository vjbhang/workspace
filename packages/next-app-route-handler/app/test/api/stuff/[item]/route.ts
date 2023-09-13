export async function GET(request, { params }) {
  const item = params.item;
  return new Response(`Welcome to my Next Application, item: ${item}`);
}
