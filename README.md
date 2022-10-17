# Budibase Timer Plugin ⏳

[![Release](https://github.com/doggodoge/bb-timer/actions/workflows/release.yml/badge.svg?branch=main)](https://github.com/doggodoge/bb-timer/actions/workflows/release.yml)

![fancy-password](https://user-images.githubusercontent.com/8438991/193717758-fd590d3b-bbb1-4e51-99a5-339e989fc164.gif)

This budibase plugin adds a timer component. Click the timer input, and type in
a duration. Set an action to execute when the timer runs out.

## Features

- Timer with intuitive input.
- Somewhat pleasant presentation and decent UX.
- Integration with events, so you can run an action when the timer expires

## Description

This is a single input component that lets you input a duration for a timer, set
an action to execute when the timer expires, and allows you to start, stop, and
reset the timer.

### Use cases

- A quiz app with timer, with an action that saves answers on timeout.
- That's all I can think of 😅

## Instructions

To build your new plugin run the following in your Budibase CLI:

```shell
budi plugins --build
```

You can also re-build everytime you make a change to your plugin with the command:

```shell
budi plugins --watch
```
