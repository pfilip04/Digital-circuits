const circuits = {
    0: {
        inputs: { A: false },
        logic: (i) => i.A
    },
    1: {
        inputs: { A: false },
        logic: (i) => !i.A
    },
    2: {
        inputs: { A: false, B: false },
        logic: (i) => i.A && i.B
    },
    3: {
        inputs: { A: false, B: false },
        logic: (i) => i.A || i.B
    }
};

function updateCircuit() {
  Object.keys(circuits).forEach(num => {
    const circuit = circuits[num];
    const output = circuit.logic(circuit.inputs);

    Object.keys(circuit.inputs).forEach(key => {
        const state = circuit.inputs[key];

        document.getElementById(`switch${key}${num}`)
        .classList.toggle("on", state);

        document.querySelectorAll(`[id^="wire${key}${num}"]`)
        .forEach(el => el.classList.toggle("active", state));
    });

    document.querySelectorAll(`[id^="wireOut${num}"]`)
    .forEach(el => el.classList.toggle("active", output));

    document.getElementById(`lamp${num}`)
      .classList.toggle("on", output);
  });
}


Object.keys(circuits).forEach(num => {
  Object.keys(circuits[num].inputs).forEach(key => {
    const switchEl = document.getElementById(`switch${key}${num}`);

    switchEl.addEventListener("click", () => {
      circuits[num].inputs[key] = !circuits[num].inputs[key];
      updateCircuit();
    });
  });
});

updateCircuit();