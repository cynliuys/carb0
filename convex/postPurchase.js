import { httpEndpoint } from "./_generated/server";

export default httpEndpoint(async ({ runMutation }, request) => {
  const item = await request.json();

  await runMutation("insertPurchase", item);
  return new Response(null, {
    status: 200,
  });
});
