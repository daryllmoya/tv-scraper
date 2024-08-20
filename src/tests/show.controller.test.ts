import request from "supertest";
import app from "../app";

// Set the timeout for the entire test suite
jest.setTimeout(120000);

describe("GET /api/shows/fetch-and-store", () => {
  it("should fetch and store shows and cast data", async () => {
    const response = await request(app).get("/api/shows/fetch-and-store");
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("Shows and cast data saved.");
  });
});

describe("GET /api/shows", () => {
  it("should return a paginated list of shows with a maximum of 2 items", async () => {
    const response = await request(app).get("/api/shows?page=1&limit=2");
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body.length).toBeLessThanOrEqual(2);

    // Additional checks to verify the structure of the returned data
    if (response.body.length > 0) {
      response.body.forEach((show: any) => {
        expect(show).toHaveProperty("id");
        expect(show).toHaveProperty("name");
        expect(show).toHaveProperty("cast");
        expect(show.cast).toBeInstanceOf(Array);

        if (show.cast.length > 0) {
          show.cast.forEach((castMember: any) => {
            expect(castMember).toHaveProperty("id");
            expect(castMember).toHaveProperty("name");
            expect(castMember).toHaveProperty("birthday");
          });
        }
      });
    }
  });
});
