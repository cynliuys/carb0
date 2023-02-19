import { mutation } from "./_generated/server";

export default mutation(async ({ db }, purchase) => {
  await db.insert("purchases", purchase);
});
