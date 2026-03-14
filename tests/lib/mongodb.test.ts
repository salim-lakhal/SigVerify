import { describe, it, expect, vi, beforeEach } from "vitest";

describe("mongodb client", () => {
  beforeEach(() => {
    vi.resetModules();
  });

  it("exports a client promise when URI is set", async () => {
    process.env.MONGODB_URI = "mongodb://localhost:27017/test";

    const mod = await import("@/lib/mongodb");
    expect(mod.default).toBeDefined();
  });
});
