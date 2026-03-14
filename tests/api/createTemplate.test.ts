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

describe("POST /api/createTemplate", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("returns 401 when not authenticated", async () => {
    mockAuth.mockResolvedValue({ userId: null });

    const { POST } = await import("@/app/api/createTemplate/route");
    const request = new Request("http://localhost/api/createTemplate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ templateName: "test", imageName: "img.png" }),
    });

    const response = await POST(request);
    expect(response.status).toBe(401);
  });

  it("returns 400 when required fields are missing", async () => {
    mockAuth.mockResolvedValue({ userId: "user_123" });

    const { POST } = await import("@/app/api/createTemplate/route");
    const request = new Request("http://localhost/api/createTemplate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ templateName: "" }),
    });

    const response = await POST(request);
    expect(response.status).toBe(400);
  });

  it("returns 409 when template name already exists", async () => {
    mockAuth.mockResolvedValue({ userId: "user_123" });
    mockFindOne.mockResolvedValue({ templateName: "existing" });

    const { POST } = await import("@/app/api/createTemplate/route");
    const request = new Request("http://localhost/api/createTemplate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ templateName: "existing", imageName: "img.png" }),
    });

    const response = await POST(request);
    expect(response.status).toBe(409);
  });

  it("creates template successfully", async () => {
    mockAuth.mockResolvedValue({ userId: "user_123" });
    mockFindOne.mockResolvedValue(null);
    mockInsertOne.mockResolvedValue({ insertedId: "abc" });

    const { POST } = await import("@/app/api/createTemplate/route");
    const request = new Request("http://localhost/api/createTemplate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        templateName: "new-template",
        imageName: "doc.png",
      }),
    });

    const response = await POST(request);
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body.message).toBe("Template created successfully");
    expect(mockInsertOne).toHaveBeenCalledOnce();
  });
});
