//server ts code

import app from "./app.js";
import type { Server } from "http";
const port = 3001;

async function main() {}
const server: Server = app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

main();
