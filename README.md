# Task Tracker

A clean, minimal task management app built with React Native, Expo, and TypeScript.

## Setup

```bash
npm install
npx expo start
```

Scan the QR code with Expo Go (iOS/Android), or press `i` for iOS simulator / `a` for Android emulator.

## Libraries

 `@react-native-async-storage/async-storage`: This package is used for persisting state in React Native. Other dependencies are from spinning up a new project using `npx create-expo-app@latest`

No other third-party UI or utility libraries were used as the scope of the task is well covered by React Native's built in components.


## What I'd Improve With More Time

- **Splash Screen** — Add a splash screen that would be displayed when the app is loading.
- **Swipe-to-delete** — More natural on mobile than a visible delete button.
- **Edit task in-place** — Tap a task title to rename it inline.
- **Reorder via drag** — Allow manual prioritisation with a drag handle.
- **Task due dates** — add optional deadlines with overdue styling.
