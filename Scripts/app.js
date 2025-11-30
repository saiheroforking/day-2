const display = document.getElementById("display");
const output = document.getElementById("output");
const historyBox = document.getElementById("history");

const pad = document.getElementById("pad");
const btnClear = document.getElementById("clear");
const btnBack = document.getElementById("back");
const btnPercent = document.getElementById("percent");
const btnPlusMinus = document.getElementById("plusminus");
const btnDot = document.getElementById("dot");
const btnEquals = document.getElementById("equals");
const btnAbout = document.getElementById("btn-about");
const btnHelp = document.getElementById("btn-help");
const curryOutput = document.getElementById("curry-output");
const btnGreet = document.getElementById("btn-greet");
const btnAdvAdd = document.getElementById("btn-advadd");

function print(msg) {
    console.log(msg);
    curryOutput.textContent += msg + "\n";
}

let current = "0";
let prev = "";
let operator = null;
let lastInputType = "";

function updateDisplay() {
    output.textContent = current;
    historyBox.textContent = prev + " " + (operator || "");
}

function handleNumber(num) {
    if (current === "0" || lastInputType === "op" || lastInputType === "equal") {
        current = num;
    } else {
        current += num;
    }
    lastInputType = "num";
    updateDisplay();
}

function handleOperator(op) {
    if (operator && lastInputType !== "op") calculate();
    prev = current;
    operator = op;
    lastInputType = "op";
    updateDisplay();
}

function calculate() {
    if (!operator || lastInputType === "op") return;

    const a = parseFloat(prev);
    const b = parseFloat(current);
    let res = 0;

    switch (operator) {
        case "+": res = a + b; break;
        case "-": res = a - b; break;
        case "*": res = a * b; break;
        case "/":
            if (b === 0) return showError("Cannot divide by 0");
            res = a / b;
            break;
    }

    current = String(res);
    prev = "";
    operator = null;
    lastInputType = "equal";
    updateDisplay();
}

function showError(msg) {
    output.textContent = msg;
    display.classList.add("error");

    setTimeout(() => {
        display.classList.remove("error");
        current = "0";
        updateDisplay();
    }, 900);
}

btnClear.addEventListener("click", () => {
    current = "0";
    prev = "";
    operator = null;
    updateDisplay();
});

btnBack.addEventListener("click", () => {
    current = current.length > 1 ? current.slice(0, -1) : "0";
    updateDisplay();
});

btnPercent.addEventListener("click", () => {
    current = String(parseFloat(current) / 100);
    updateDisplay();
});

btnPlusMinus.addEventListener("click", () => {
    current = String(parseFloat(current) * -1);
    updateDisplay();
});

btnDot.addEventListener("click", () => {
    if (!current.includes(".")) current += ".";
    updateDisplay();
});

btnEquals.addEventListener("click", calculate);

pad.addEventListener("click", (e) => {
    if (e.target.dataset.num) handleNumber(e.target.dataset.num);
    if (e.target.dataset.op) handleOperator(e.target.dataset.op);
});

btnAbout.addEventListener("click", () => {
    alert(
        `📱 Device Info\n` +
        `Platform: ${navigator.platform}\n` +
        `Browser: ${navigator.userAgent}\n` +
        `Language: ${navigator.language}`
    );
});

btnHelp.addEventListener("click", () => {
    alert(
        "🔥 Quick Tips:\n" +
        "• Buttons use CSS keyframe animations\n" +
        "• ⌫ removes last digit\n" +
        "• % converts to percentage\n" +
        "• ± toggles sign\n" +
        "• Currying demo added above calculator"
    );
});

print(hoistFn());

function hoistFn() {
    return "Hoisting: Function is hoisted!";
}

try {
    print(tdzVar);
} catch {
    print("TDZ: Cannot access 'tdzVar' before initialization");
}

let tdzVar = "Now initialized!";

const curryAdd = (a)=>(b) => a + b;
print("Currying Example: 5 + 7 = " + curryAdd(5)(7));

function stackA() { stackB(); }
function stackB() { stackC(); }
function stackC() { print("Call Stack Demo → stackA → stackB → stackC"); }

stackA();


btnGreet.addEventListener("click", () => {
    const greet = (msg) => (name) => `${msg}, ${name}!`;
    const gm = greet("Good Morning");
    print(gm("Sai"));
});

btnAdvAdd.addEventListener("click", () => {
    const add = (x)=>(y)=>(z) => x + y + z;
    print("Advanced Add (2+3+5) = " + add(2)(3)(5));
});
