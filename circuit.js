
// Setter and Getter funcs: toggles/gets "active" on and off based on truth value/returns truth value

function setActive(id, active) {

    const el = document.getElementById(id);
    if (el) el.classList.toggle('active', active);
}

function getActive(id) {

    const el = document.getElementById(id);
    return el ? el.classList.contains('active') : false;
}

// Setter for text content inside of the svg text element

function setContent(id, content, condition = true) {

    const el = document.getElementById(id);
    if (el && condition) el.textContent = content;
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

// Circuit 5: Binary Decoder

const switchP5 = document.getElementById('switchP5');
const switchQ5 = document.getElementById('switchQ5');

const lampA5 = document.getElementById('lampA5');
const lampB5 = document.getElementById('lampB5');
const lampC5 = document.getElementById('lampC5');
const lampD5 = document.getElementById('lampD5');

function updateCircuit5() {

    const p = switchP5.classList.contains('on');
    const q = switchQ5.classList.contains('on');

    const notP = !p;
    const notQ = !q;

    const out1 = notP && notQ;
    const out2 = notP && q;
    const out3 = p && notQ;
    const out4 = p && q;

    setActive('wireP5', p);
    setActive('wireP5_2', p);
    setActive('wireInP5', p);
    setActive('wireInP5_2', p);
    setActive('wireInP5_3', p);

    setActive('wireQ5', q);
    setActive('wireQ5_2', q);
    setActive('wireInQ5', q);
    setActive('wireInQ5_2', q);
    setActive('wireInQ5_3', q);

    setActive('wireInN1P5', notP);
    setActive('wireInN2P5', notP);
    setActive('wireInN2P5_2', notP);

    setActive('wireInN1Q5', notQ);
    setActive('wireInN2Q5', notQ);
    setActive('wireInN2Q5_2', notQ);

    setActive('wireOutA5', out1);
    setActive('wireOutB5', out2);
    setActive('wireOutC5', out3);
    setActive('wireOutD5', out4);

    setContent('NumA5', Number(p))
    setContent('NumB5', Number(q))

    lampA5.classList.toggle('on', out1);
    lampB5.classList.toggle('on', out2);
    lampC5.classList.toggle('on', out3);
    lampD5.classList.toggle('on', out4);
}

switchP5.addEventListener('click', () => {

    switchP5.classList.toggle('on');
    updateCircuit5();
});

switchQ5.addEventListener('click', () => {

    switchQ5.classList.toggle('on');
    updateCircuit5();
});

// Circuit 6: SET-RESET circuit

const switchA6 = document.getElementById('switchA6');
const switchB6 = document.getElementById('switchB6');

function updateCircuit6() {

    const a = switchA6.classList.contains('on');
    const b = switchB6.classList.contains('on');
    const c = getActive('wireInNOut6');

    const out1 = a || c;
    const out2 = !b;
    const out = out1 && out2

    setActive('wireA6', a);
    setActive('wireB6', b);

    setActive('wireOutA6', out1);
    setActive('wireOutB6', out2);

    setActive('wireOutX6', out);
    setActive('wireOutX6_2', out);
    setActive('wireOutX6_3', out);
    setActive('wireOutX6_4', out);
    setActive('wireInNOut6', out);
    
    setActive('Out6', out);
    setContent('Out6', Number(out));
}

switchA6.addEventListener('click', () => {

    switchA6.classList.toggle('on');
    updateCircuit6();
    updateCircuit6();
});

switchB6.addEventListener('click', () => {

    switchB6.classList.toggle('on');
    updateCircuit6();
    updateCircuit6();
});

// Circuit 7: WRITE ENABLE circuit

const switchA7 = document.getElementById('switchA7');
const switchB7 = document.getElementById('switchB7');
const lamp7 = document.getElementById('lamp7');

function updateCircuit7() {

    const a = switchA7.classList.contains('on');
    const b = switchB7.classList.contains('on');
    const c = getActive('wireInNOut7');

    const notA = !a;

    const out1 = a && b;
    const out2 = notA && b;

    const out3 = out1 || c;
    const out4 = !out2;
    const out = out3 && out4;

    setActive('wireA7', a);
    setActive('wireConnA7', a);
    setActive('wireConnA7_2', a);

    setActive('wireB7', b);
    setActive('wireConnB7', b);
    setActive('wireConnB7_2', b);

    setActive('wireOutNA7', notA);

    setActive('wireOutA7', out1);
    setActive('wireOutB7', out2);

    setActive('wireOutC7', out3);
    setActive('wireOutD7', out4);

    setActive('wireOutX7', out);
    setActive('wireOutX7_2', out);
    setActive('wireOutX7_3', out);
    setActive('wireOutX7_4', out);

    setActive('wireInNOut7', out);
    
    setActive('Out7', out);
    setContent('Out7', Number(out));

    setActive('wireOut7', out);
    lamp7.classList.toggle('on', out);
}

switchA7.addEventListener('click', () => {

    switchA7.classList.toggle('on');
    updateCircuit7();
    updateCircuit7();
});

switchB7.addEventListener('click', () => {

    switchB7.classList.toggle('on');
    updateCircuit7();
    updateCircuit7();
});