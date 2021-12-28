// Drum Arrays
let kicks = new Array[16].fill(false);
let snares = new Array[16].fill(false);
let hiHats = new Array[16].fill(false);
let rideCymbals = new Array[16].fill(false);

const toggleDrum = (arrayName, index) => {
  arrayName[index] = !arrayName[index];
};

const clear = (arrayName) => {
  arrayName.forEach((element) => (element = false));
};

const invert = (arrayName) => {
  arrayName.forEach((e) => {
    if (e) {
      e = false;
    } else {
      e = true;
    }
  });
};
