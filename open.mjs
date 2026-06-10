// Opens the project in VS Code, starts the Next.js dev server,
// and launches the default browser at the server's actual URL.
// Zero dependencies — uses only Node built-ins.

import { spawn } from "node:child_process";

// 1. Open this folder in VS Code (ignore errors if `code` isn't installed).
spawn("code", ["."], { stdio: "ignore", shell: true }).on("error", () => {
  console.warn("Could not open VS Code (is the `code` command installed?).");
});

// 2. Open a URL in the default browser for the current platform.
function openBrowser(url) {
  const cmd =
    process.platform === "darwin"
      ? "open"
      : process.platform === "win32"
        ? "start"
        : "xdg-open";
  spawn(cmd, [url], { stdio: "ignore", shell: true }).on("error", () => {
    console.warn(`Open your browser at ${url}`);
  });
}

// 3. Start the Next.js dev server, scanning its output for the real URL.
//    Next.js may pick a different port (e.g. 3001) if 3000 is in use, so we
//    read the actual "Local: http://localhost:PORT" line instead of guessing.
const dev = spawn("npm", ["run", "dev"], { stdio: ["inherit", "pipe", "pipe"], shell: true });
dev.on("exit", (code) => process.exit(code ?? 0));

let opened = false;
function scan(chunk) {
  const text = chunk.toString();
  process.stdout.write(text); // forward dev server logs to this terminal
  if (opened) return;
  const match = text.match(/https?:\/\/localhost:\d+/);
  if (match) {
    opened = true;
    openBrowser(match[0]);
  }
}
dev.stdout.on("data", scan);
dev.stderr.on("data", scan);
