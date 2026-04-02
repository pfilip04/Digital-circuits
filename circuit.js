
// Function setActive: toggles "active" on and off based on truth value

function setActive(id, active) {
    const el = document.getElementById(id);
    if (el) el.classList.toggle('active', active);
}


// Circuit 0: TRANSISTOR

const switchA0 = document.getElementById('switchA0');
const lamp0 = document.getElementById('lamp0');

function updateCircuit0() {
    const on = switchA0.classList.contains('on');

    setActive('wireB0', on);
    setActive('wireB0_2', on);
    setActive('wireOutA0', on);
    setActive('wireOutA0_2', on);

    lamp0.classList.toggle('on', on);
}

switchA0.addEventListener('click', () => {
    switchA0.classList.toggle('on');
    updateCircuit0();
});


// Circuit 1: INVERTER gate

const switchA1 = document.getElementById('switchA1');
const lamp1 = document.getElementById('lamp1');

function updateCircuit1() {
    const on = switchA1.classList.contains('on');
    const out = !on;


    setActive('wireB1', on);
    setActive('wireB1_2', on);
    setActive('wireA1', on);
    setActive('wireA1_2', on);
    setActive('wireOutA1', on);
    setActive('wireOutA1_2', on);

    setActive('wireSourceB1', out);
    setActive('wireSourceB1_2', out);
    setActive('wireOutB1', out);
    setActive('wireOutB1_2', out);

    lamp1.classList.toggle('on', out);
}

switchA1.addEventListener('click', () => {
    switchA1.classList.toggle('on');
    updateCircuit1();
});


// Circuit 2: AND gate

const switchA2 = document.getElementById('switchA2');
const switchB2 = document.getElementById('switchB2');
const lamp2 = document.getElementById('lamp2');

function updateCircuit2() {
    const a = switchA2.classList.contains('on');
    const b = switchB2.classList.contains('on');
    const out = a && b;

    setActive('wireB2', a);
    setActive('wireB2_2', a);
    setActive('wireOutA2', a);
    setActive('wireOutA2_2', a);

    setActive('wireC2', a);
    setActive('wireC2_2', a);

    setActive('wireD2', b);
    setActive('wireD2_2', b);

    setActive('wireOutB2', out);
    setActive('wireOutB2_2', out);

    lamp2.classList.toggle('on', out);
}

switchA2.addEventListener('click', () => {
    switchA2.classList.toggle('on');
    updateCircuit2();
});

switchB2.addEventListener('click', () => {
    switchB2.classList.toggle('on');
    updateCircuit2();
});


// Circuit 3: OR gate

const switchA3 = document.getElementById('switchA3');
const switchB3 = document.getElementById('switchB3');
const lamp3 = document.getElementById('lamp3');

function updateCircuit3() {
    const a = switchA3.classList.contains('on');
    const b = switchB3.classList.contains('on');
    const out = a || b;

    setActive('wireB3', a);
    setActive('wireB3_2', a);
    setActive('wireOutA3', a);
    setActive('wireOutA3_2', a);

    setActive('wireD3', b);
    setActive('wireD3_2', b);
    setActive('wireOutB3', b);
    setActive('wireOutB3_2', b);

    setActive('wireOutC3_top', a);
    setActive('wireOutC3_bot', b);
    setActive('wireOutC3_2', out);

    lamp3.classList.toggle('on', out);
}

switchA3.addEventListener('click', () => {
    switchA3.classList.toggle('on');
    updateCircuit3();
});

switchB3.addEventListener('click', () => {
    switchB3.classList.toggle('on');
    updateCircuit3();
});


// Circuit 4: XOR gate

const switchA4 = document.getElementById('switchA4');
const switchB4 = document.getElementById('switchB4');
const lamp4 = document.getElementById('lamp4');

function updateCircuit4() {
    const a = switchA4.classList.contains('on');
    const b = switchB4.classList.contains('on');

    const outA1 = !a;
    const outB1 = !b;

    const outA2 = a && outB1;
    const outB2 = outA1 && b;

    const out = outA2 || outB2;

    setActive('wireB4', a);
    setActive('wireB4_2', a);
    setActive('wireC4', a);
    setActive('wireC4_2', a);
    setActive('wireN4', a);
    setActive('wireN4_2', a);
    setActive('wireConnectorA4', a);
    setActive('wireOutA4', a);
    setActive('wireOutA4_2', a);
    setActive('wireOutG4', a);
    setActive('wireOutG4_2', a);

    setActive('wireJ4', b);
    setActive('wireJ4_2', b);
    setActive('wireF4', b);
    setActive('wireF4_2', b);
    setActive('wireConnectorB4', b);
    setActive('wireOutC4', b);
    setActive('wireOutC4_2', b);


    setActive('wireL4', outA1);
    setActive('wireL4_2', outA1);
    setActive('wireOutF4', outA1);
    setActive('wireOutF4_2', outA1);
    setActive('wireI4', outA1);
    setActive('wireI4_2', outA1);

    setActive('wireD4', outB1);
    setActive('wireD4_2', outB1);

    setActive('wireH4', outA2);
    setActive('wireH4_2', outA2);
    setActive('wireOutD4', outA2);
    setActive('wireOutD4_2', outA2);
    setActive('wireOutB4', outA2);
    setActive('wireOutB4_2', outA2);
    setActive('wireOutI4', outA2);

    setActive('wireP4', outB2);
    setActive('wireP4_2', outB2);
    setActive('wireOutH4', outB2);
    setActive('wireOutH4_2', outB2);
    setActive('wireOutE4', outB2);
    setActive('wireOutE4_2', outB2);
    setActive('wireOutI4_2', outB2);

    setActive('wireOutI4_3', out);
    setActive('wireOutJ4', out);
    setActive('wireOutJ4_2', out);
    setActive('wireOutJ4_3', out);

    lamp4.classList.toggle('on', out);
}

switchA4.addEventListener('click', () => {
    switchA4.classList.toggle('on');
    updateCircuit4();
});

switchB4.addEventListener('click', () => {
    switchB4.classList.toggle('on');
    updateCircuit4();
});