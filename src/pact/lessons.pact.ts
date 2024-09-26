import { Pact } from "@pact-foundation/pact";
import * as path from "path";
import { eachLike } from "@pact-foundation/pact/src/dsl/matchers";
import axios from "axios";
import { ILesson } from "../interfaces/ILesson";

const lessons: ILesson[] = [
  {
    id: "1",
    date: "2024-12-01",
    type: "article",
    imageUrl: "avatar.jpg",
    title: "A fun lesson",
    level: "advanced",
    content: "This is a fun lesson",
    description: "A fun lesson",
    favouritedByCurrentUser: false,
    readByCurrentUser: false,
  },
];

const provider = new Pact({
  consumer: "DuConsumer",
  provider: "DuProvider",
  port: 1234,
  log: path.resolve(process.cwd(), "logs", "pact.log"),
  dir: path.resolve(process.cwd(), "pacts"),
  pactfileWriteMode: "update",
  logLevel: "info",
});

describe("lessons", () => {
  beforeAll(() => provider.setup());
  afterEach(() => provider.verify());
  afterAll(() => provider.finalize());

  describe("getLessons", () => {
    beforeAll(() => {
      return provider.addInteraction({
        state: "a list of lessons",
        uponReceiving: "a request for a list of lessons",
        withRequest: {
          method: "GET",
          path: "/api/v1/lessons",
        },
        willRespondWith: {
          status: 200,
          headers: {
            "Content-Type": "application/json",
          },
          body: eachLike({
            id: lessons[0].id,
            date: lessons[0].date,
            type: lessons[0].type,
            imageUrl: lessons[0].imageUrl,
            title: lessons[0].title,
            level: lessons[0].level,
          }),
        },
      });
    });

    it("should return a successful body", async () => {
      const response = await axios.get("http://127.0.0.1:1234/api/v1/lessons");
      expect(response.status).toBe(200);
    });
  });
});
