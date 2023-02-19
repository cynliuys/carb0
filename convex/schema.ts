import { defineSchema, defineTable, s } from "convex/schema";

export default defineSchema({
    items: defineTable({
        carbon_footprint: s.string(),
        category: s.string(),
        company: s.string(),
        id: s.string(),
        image: s.string(),
        name: s.string(),
    }),
});