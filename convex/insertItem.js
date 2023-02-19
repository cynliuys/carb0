import { mutation } from "./_generated/server";

export default mutation(async ({ db }, item) => {
  await db.insert("items", item);
});
