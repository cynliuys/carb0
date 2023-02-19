import { httpEndpoint } from "./_generated/server";

export default httpEndpoint(async ({ runMutation }, request) => {
  const item = await request.json();

  await runMutation("insertItem", item);
  return new Response(null, {
    status: 200,
  });
});
