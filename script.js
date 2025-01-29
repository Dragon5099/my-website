const display = document.getElementById('display');
let shiftActive = false;

function appendValue(value) {
    if (display.innerText === '0') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
    addActiveEffect(event.target);
    addHackerEffect();
}

function clearDisplay() {
    display.innerText = '0';
    addActiveEffect(event.target);
}

function calculate() {
    try {
        display.innerText = eval(display.innerText);
    } catch (error) {
        display.innerText = 'Error';
    }
    addActiveEffect(event.target);
    addHackerEffect();
}

function calculateTrig(func) {
    try {
        const value = parseFloat(display.innerText);
        let result;
        switch (func) {
            case 'sin':
                result = Math.sin(value * Math.PI / 180); // Convert degrees to radians
                break;
            case 'cos':
                result = Math.cos(value * Math.PI / 180); // Convert degrees to radians
                break;
            case 'tan':
                result = Math.tan(value * Math.PI / 180); // Convert degrees to radians
                break;
        }
        display.innerText = result;
    } catch (error) {
        display.innerText = 'Error';
    }
    addActiveEffect(event.target);
    addHackerEffect();
}

function toggleShift() {
    shiftActive = !shiftActive;
    document.querySelector('.button.shift').classList.toggle('shift-active', shiftActive);
}

function applyShiftFunction(func) {
    if (!shiftActive) {
        appendValue(func);
        return;
    }
    let result;
    const value = parseFloat(display.innerText);
    switch (func) {
        case 'sqrt':
            result = Math.sqrt(value);
            break;
        case 'pow':
            const exp = parseFloat(prompt("Enter the exponent:"));
            result = Math.pow(value, exp);
            break;
        case 'inv':
            result = 1 / value;
            break;
        case 'exp':
            result = Math.exp(value);
            break;
        case 'log':
            result = Math.log(value);
            break;
        // ÃÖÝ æÙÇÆÝ ÅÖÇÝíÉ åäÇ
    }
    display.innerText = result;
    shiftActive = false;
    document.querySelector('.button.shift').classList.remove('shift-active');
    addActiveEffect(event.target);
    addHackerEffect();
}

function addActiveEffect(button) {
    button.classList.add('active');
    setTimeout(() => {
        button.classList.remove('active');
    }, 100);
}

function addHackerEffect() {
    display.classList.add('hacker');
    setTimeout(() => {
        display.classList.remove('hacker');
    }, 1000);
}
