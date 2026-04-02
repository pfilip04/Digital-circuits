function setActive(id, active) {
    const el = document.getElementById(id);
    if (el) el.classList.toggle('active', active);
}

// ── Circuit 0: TRANSISTOR

const switch0 = document.getElementById('switch0');
const lamp0   = document.getElementById('lamp0');

function updateCircuit0() {
    const on = switch0.classList.contains('on');

    setActive('wireB0',    on);
    setActive('wireB0_2',  on);
    setActive('wireOut0',  on);
    setActive('wireOut0_2', on);

    lamp0.classList.toggle('on', on);
}

switch0.addEventListener('click', () => {
    switch0.classList.toggle('on');
    updateCircuit0();
});

// ── Circuit 1: AND GATE

const switchA1 = document.getElementById('switchA1');
const switchB1 = document.getElementById('switchB1');
const lamp1    = document.getElementById('lamp1');

function updateCircuit1() {
    const a   = switchA1.classList.contains('on');
    const b   = switchB1.classList.contains('on');
    const out = a && b;

    // First transistor — controlled by switchA1
    setActive('wireB1',     a);
    setActive('wireB1_2',   a);
    setActive('wireOutA1',  a);
    setActive('wireOutA1_2', a);

    // Wire between the two transistors is live only when A is on
    setActive('wireC1',   a);
    setActive('wireC1_2', a);

    // Second transistor — controlled by switchB1
    setActive('wireD1',   b);
    setActive('wireD1_2', b);

    // Output — only lit when both are on
    setActive('wireOutB1',   out);
    setActive('wireOutB1_2', out);

    lamp1.classList.toggle('on', out);
}

switchA1.addEventListener('click', () => {
    switchA1.classList.toggle('on');
    updateCircuit1();
});

switchB1.addEventListener('click', () => {
    switchB1.classList.toggle('on');
    updateCircuit1();
});

// ── Circuit 2: OR GATE

const switchA2 = document.getElementById('switchA2');
const switchB2 = document.getElementById('switchB2');
const lamp2    = document.getElementById('lamp2');

function updateCircuit2() {
    const a   = switchA2.classList.contains('on');
    const b   = switchB2.classList.contains('on');
    const out = a || b;

    // Top branch — controlled by switchA2
    setActive('wireB2',     a);
    setActive('wireB2_2',   a);
    setActive('wireOutA2',  a);
    setActive('wireOutA2_2', a);

    // Bottom branch — controlled by switchB2
    setActive('wireD2',     b);
    setActive('wireD2_2',   b);
    setActive('wireOutB2',  b);
    setActive('wireOutB2_2', b);

    // Shared output wire — live when either branch is on
    setActive('wireOutC2_top', a);
    setActive('wireOutC2_bot', b);
    setActive('wireOutC2_2', out);

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