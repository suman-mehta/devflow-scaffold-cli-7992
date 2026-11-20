# DevFlow Scaffold CLI

**Instant project scaffolding for modern developer workflows**

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT) 
[![Node.js >=20](https://img.shields.io/badge/Node-%3E%3D20-brightgreen.svg)](https://nodejs.org/) 
[![Version](https://img.shields.io/badge/Version-1.0.0-blue.svg)](https://github.com/yourusername/devflow-scaffold-cli) 
[![Build Status](https://img.shields.io/badge/Build-Passing-success.svg)](#) 
[![Downloads](https://img.shields.io/badge/Downloads-0-lightgrey.svg)](#)

---

## Installation & Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/devflow-scaffold-cli.git
cd devflow-scaffold-cli

# Run the CLI directly with Node
node src/index.js init my-awesome-project
```

The command above creates a `my-awesome-project` folder containing a minimal `package.json` and an `index.js` starter file.

---

## Visual Terminal Showcase

```bash
$ devflow-scaffold init hello-world
Project "hello-world" created successfully.
$ ls hello-world
index.js  package.json
$ cat hello-world/index.js
console.log('Hello from hello-world!');
```

---

## Architecture Flowchart

```mermaid
flowchart TD
    A[User invokes CLI] --> B{Parse arguments}
    B -->|init command| C[Create project directory]
    C --> D[Write package.json]
    C --> E[Write index.js]
    D --> F[Success message]
    E --> F
    B -->|--help| G[Show help]
    G --> H[Exit]
    F --> I["process.exit(0)"]
```

---

## Test Results

## 🧪 Real-World Test Telemetry

> [!NOTE]
> Verified automatically using Node.js native test runner (`node:test` & `node:assert/strict`).

```bash
▶ node --test
TAP version 13
# Subtest: CLI creates project scaffold
ok 1 - CLI creates project scaffold
  ---
  duration_ms: 34.74831
  ...
1..1
# tests 1
# suites 0
# pass 1
# fail 0
# cancelled 0
# skipped 0
# todo 0
# duration_ms 79.675529
```

---

## License

MIT License © 2026 Suman Mehta