import { httpEndpoint } from "./_generated/server";

export default httpEndpoint(async ({ runQuery }, request) => {
  const url = new URL(request.url);
  const category = url.searchParams.get("type") ??
    null;
  if (category === null) {
    return new Response(
      "Did not specify id as query param or header",
      {
        status: 400,
      }
    );
  }

  const items = await runQuery("queryItem");
  const filteredItems = items
    .filter(item => {
      return item.category.toLowerCase().includes(`${category}`.toLowerCase());
    })
    .map(item => {
      return item;
    });
  return new Response(JSON.stringify(filteredItems), {
    headers: {
      "content-type": "application/json",
    },
    status: 200,
  });
});
