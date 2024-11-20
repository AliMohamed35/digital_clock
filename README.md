# Simple Digital Clock with ReactJS

This project is a simple **digital clock** created using **ReactJS**. It dynamically updates the current time in real-time and demonstrates the use of **React Hooks** like `useState` and `useEffect`.

---

## Features

- Displays the current time in **HH:MM:SS AM/PM** format.
- Updates the time every second in real-time.
- Built with clean, modular, and reusable React components.
- Lightweight and responsive design.

---

## Technologies Used

- **ReactJS**: Framework for building the UI.
- **JavaScript (ES6)**: For logic and interactivity.
- **CSS**: ForTechnologies Used
ReactJS: Framework for building the UI.
JavaScript (ES6): For logic and interactivity.
CSS: For styling the clock interface, providing a simple and clean design.
React Hooks (useState, useEffect): For managing state and handling side effects.

---
## How It Works
## State Management:

The useState hook is used to store the current time as a state variable.
The time is initially set to the current time when the component is mounted.
Time Update:

The useEffect hook is used to trigger a timer when the component mounts.
The timer updates the state every second (1000ms), ensuring that the time is refreshed in real-time.
The useEffect hook also ensures that the timer is cleared when the component unmounts, preventing memory leaks.
Rendering the Time:

The current time is displayed in a 12-hour format with AM/PM.
The time is updated every second and displayed dynamically.
