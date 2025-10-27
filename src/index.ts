import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Muskan dev!");
});

export default app;
