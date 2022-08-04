const express = require("express");
const next = require("next");
const krabs = require("krabs").default;
const dev = process.env.NODE_ENV !== "production";
const port = process.env.PORT || 3000;
const app = next({ dev });

async function main() {
  try {
    await app.prepare();

    const handle = app.getRequestHandler();
    const server = express();

    server
      .get("*", (req, res) => krabs(req, res, handle, app))
      .listen(port, () => console.log("server ready on port", port));
  } catch (err) {
    console.log(err.stack);
  }
}

main();
