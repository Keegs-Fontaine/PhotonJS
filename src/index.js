import { createServer } from "node:http"

createServer((req, res) => res.end("Hello NPM!")).listen(9685) // Random port because im lazy
