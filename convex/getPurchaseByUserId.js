import { httpEndpoint } from "./_generated/server";

export default httpEndpoint(async ({ runQuery }, request) => {
  const url = new URL(request.url);
  const id = url.searchParams.get("userId") ??
    null;
  if (id === null) {
    return new Response(
      "Did not specify id as query param or header",
      {
        status: 400,
      }
    );
  }

  const items = await runQuery("queryPurchase");
  const filteredItems = items
    .filter(item => {
      return item.id === `${id}`;
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
