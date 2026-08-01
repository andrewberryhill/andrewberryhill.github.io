# Dr. Andrew Berryhill — Academic Website

This repository contains the source for Andrew Berryhill's personal academic website. It reproduces the current ChatGPT-hosted site and is configured to publish as a static GitHub Pages website.

## Pages

- Home
- Research
- Teaching
- Short Bio
- Curriculum Vitae (PDF)

## Previewing locally

Install Node.js 22 and pnpm, then run:

```text
pnpm install
pnpm dev
```

Open the local address shown in the terminal.

## Publishing

The included GitHub Actions workflow builds, tests, and publishes the site automatically whenever changes are pushed to the `main` branch. In the repository's **Settings → Pages** screen, choose **GitHub Actions** as the publishing source.

The expected public address is:

```text
https://andrewberryhill.github.io/academic-website/
```
