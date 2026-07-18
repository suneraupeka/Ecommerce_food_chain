import { createClient } from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: "4b8zyawr",
  dataset: "production", // Change this to your actual dataset name
  apiVersion: "2022-07-16",
  useCdn: true,
  token: 
  "skRWBcnxYG4HDoBUpJdUKMAuyKL4mpWpUXzu2kZ2ImraD4msutfCvb1Jc9NfeVQlEeqAIQ4dnda0ZdggfM1fTje2txSjS7zqHLPJVq55NhZWtmS85N5JHcEU8PxXkRAPDx37xXvj0onVdfXp55u1xDUhjRQmaZUvEU1AsvGN26n25Tfnjhq5", // or omit if you don't need it
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

export default client;