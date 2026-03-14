import { describe, it, expect, vi, beforeEach } from "vitest";

const mockAuth = vi.fn();
const mockFindOne = vi.fn();
const mockInsertOne = vi.fn();
const mockCollection = vi.fn(() => ({
  findOne: mockFindOne,
  insertOne: mockInsertOne,
}));
const mockDb = vi.fn(() => ({ collection: mockCollection }));
const mockClientPromise = Promise.resolve({ db: mockDb });

vi.mock("@clerk/nextjs/server", () => ({
  auth: mockAuth,
}));

vi.mock("@/lib/mongodb", () => ({
  default: mockClientPromise,
}));

describe("POST /api/checkUser", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("returns 401 when user is not authenticated", async () => {
    mockAuth.mockResolvedValue({ userId: null });

    const { POST } = await import("@/app/api/checkUser/route");
    const response = await POST();
    const body = await response.json();

    expect(response.status).toBe(401);
    expect(body.error).toBe("Unauthorized");
  });

  it("creates a new user if not found", async () => {
    mockAuth.mockResolvedValue({ userId: "user_123" });
    mockFindOne.mockResolvedValue(null);
    mockInsertOne.mockResolvedValue({ insertedId: "abc" });

    const { POST } = await import("@/app/api/checkUser/route");
    const response = await POST();
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body.userId).toBe("user_123");
    expect(mockInsertOne).toHaveBeenCalledOnce();
  });

  it("skips creation if user already exists", async () => {
    mockAuth.mockResolvedValue({ userId: "user_123" });
    mockFindOne.mockResolvedValue({ userId: "user_123" });

    const { POST } = await import("@/app/api/checkUser/route");
    const response = await POST();

    expect(response.status).toBe(200);
    expect(mockInsertOne).not.toHaveBeenCalled();
  });
});
