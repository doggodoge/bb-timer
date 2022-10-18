# Budibase Timer Plugin ⏳

[![Release](https://github.com/doggodoge/bb-timer/actions/workflows/release.yml/badge.svg?branch=main)](https://github.com/doggodoge/bb-timer/actions/workflows/release.yml)

<p align="center">
  <img src="https://user-images.githubusercontent.com/8438991/196498963-e3769cc0-69b1-4769-a63c-a10bd0bf965e.gif" alt="timer" />
</p>

This budibase plugin adds a timer component. Click the timer input, and type in
a duration. Set an action to execute when the timer runs out.

## Features

- Timer with intuitive input.
- Somewhat pleasant presentation and decent UX.
- Integration with events, so you can run an action when the timer expires

> Note: this still does have a few wrinkles to work out, though they're more cosmetic
> than functional.

## Description

This is a single input component that lets you input a duration for a timer, set
an action to execute when the timer expires, and allows you to start, stop, and
reset the timer.

### Use cases

- A quiz app with timer, with an action that saves answers on timeout.
- That's all I can think of 😅

## Instructions

This project uses the `pnpm` package manager. You will need to install that before continuing:

```shell
npm install -g pnpm
```

To set up the project and pull dependencies, run:

```shell
pnpm install
```

To build your new plugin run the following:

```shell
pnpm run build
```

You can also re-build everytime you make a change to your plugin with the command:

```shell
pnpm run watch
```

To run tests:

```shell
pnpm run test
```
