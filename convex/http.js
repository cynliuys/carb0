import { httpRouter } from "convex/server";
import getItemById from "./getItemById";
import getItemsByType from "./getItemsByType";
import getItemsByTypeSort from "./getItemsByTypeSort";
import postItem from "./postItem";
import postPurchase from "./postPurchase";
import getPurchaseByUserId from "./getPurchaseByUserId";

import { httpEndpoint } from "./_generated/server";

const postMessage = httpEndpoint(async ({ runMutation }, request) => {
  const { author, body } = await request.json();

  await runMutation("sendMessage", `Sent via HTTP endpoint: ${body}`, author);
  return new Response(null, {
    status: 200,
  });
});

const http = httpRouter();

// item table
http.route({
  path: "/postItem",
  method: "POST",
  handler: postItem,
});
http.route({
  path: "/getItemById",
  method: "GET",
  handler: getItemById,
});
http.route({
  path: "/getItemsByType",
  method: "GET",
  handler: getItemsByType,
});
http.route({
  path: "/getItemsByTypeSort",
  method: "GET",
  handler: getItemsByTypeSort,
});

// purchase table
http.route({
  path: "/postPurchase",
  method: "POST",
  handler: postPurchase,
});

http.route({
  path: "/getPurchaseByUserId",
  method: "GET",
  handler: getPurchaseByUserId,
});

// Convex expects the router to be the default export of `convex/http.js`.
export default http;
