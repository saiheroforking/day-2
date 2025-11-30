# Animated Calculator with Currying Demo

An interactive **animated calculator** built with HTML, CSS, and JavaScript, featuring:

* Smooth **CSS keyframe animations** for buttons and display.
* **Currying demonstrations** for JavaScript functional programming.
* **Advanced arithmetic features** like percentages, ± toggle, and backspace.
* Device info and help alerts.
* Call stack and hoisting demos.

---

## Features

### Calculator

* Standard arithmetic operations: `+`, `-`, `×`, `÷`.
* **Clear (`C`)** and **Backspace (`⌫`)** buttons.
* **Percentage (`%`)** and **Sign toggle (`±`)**.
* **Decimal support (`.`)**.
* Animated buttons and output display.
* Responsive layout for mobile devices.

### Currying Demo

* Interactive buttons for generating greetings and advanced curried addition.
* Demonstrates **function currying** in JavaScript.

### JavaScript Concepts Demonstrated

* **Hoisting** and **Temporal Dead Zone (TDZ)** behavior.
* **Call stack** demonstration via `stackA → stackB → stackC`.
* **Currying** for functional programming.

---

## Usage

1. Open `index.html` in a modern browser.
2. Use the calculator buttons to perform operations.
3. Click **"Generate Greeting"** or **"Advanced Add"** to see currying demos.
4. Click **"About"** to see device and browser information.
5. Click **"Help"** for quick tips on using the calculator.

---

## Project Structure

```
/
├─ index.html          # Main HTML page
├─ styles/
│   └─ main.css        # CSS for layout, animations, and responsive design
├─ Scripts/
│   └─ app.js          # JavaScript functionality for calculator & currying demo
└─ README.md           # This file
```

---

## Key Highlights

* **Responsive Design**: Stacks layout vertically on smaller screens.
* **Accessible**: ARIA labels for calculator and buttons.
* **Animations**: Glow effects on operators, shake on errors, pop-in for display.
* **Currying Example**:

```js
const add = (a) => (b) => a + b;
console.log(add(5)(7)); // 12
```

* **Advanced Add Example**:

```js
const add3 = (x) => (y) => (z) => x + y + z;
console.log(add3(2)(3)(5)); // 10
```

---

## Screenshots

* Animated Calculator UI with glowing operator buttons.
* Fixed Currying Demo panel on the right side of the screen.
* Responsive layout on mobile.
 ## 🚀 Live Demo
🔗 *GitHub Pages Link:*  
https://saiheroforking.github.io/day-2/

---

## 📸 Project Preview

![Project Screenshot](./Screenshot%202025-11-30%20225232.png)


---


---

## License

MIT License © SAIKANNA

---

## Acknowledgements

* Inspired by modern calculator UIs and functional programming tutorials in JavaScript.
* Uses `@keyframes` animations for smooth visual effects.
