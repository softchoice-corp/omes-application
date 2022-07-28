# omes-application

![alt text](https://raw.githubusercontent.com/kylelee24/omes/main/logo.png "Title")

## Overview

This is a sample NodeJS application repository which contains basic Javascript code.

## Pre-requisites

* Install NodeJS

```bash
# Examples

# macOS - Bash
curl "https://nodejs.org/dist/latest/node-${VERSION:-$(wget -qO- https://nodejs.org/dist/latest/ | sed -nE 's|.*>node-(.*)\.pkg</a>.*|\1|p')}.pkg" > "$HOME/Downloads/node-latest.pkg" && sudo installer -store -pkg "$HOME/Downloads/node-latest.pkg" -target "/"

# macOS - Homebrew
brew install node

# Windows - Chocolatey
cinst nodejs.install

# Windows - Winget
winget install OpenJS.NodeJS
```

## Usage

### Run server locally

```bash
npm install
npm run start
```

### Run tests

```bash
npm install
npm run test
```

Expected output:

```log
> sample-application@1.0.0 test
> jest

 PASS  test/calculator.test.js
  Calculator Tests
    ✓ Addition of 2 numbers
    ✓ Subtraction of 2 numbers
    ✓ Multiplication of 2 numbers
    ✓ Division of 2 numbers

Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        0.149 s, estimated 1 s
Ran all test suites.
```