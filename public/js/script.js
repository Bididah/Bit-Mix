// Drum Arrays
const createEmptyDrumArray = () => new Array(16).fill(false);
let kicks = createEmptyDrumArray();
let snares = createEmptyDrumArray();
let hiHats = createEmptyDrumArray();
let rideCymbals = createEmptyDrumArray();

const getDrumArrayByName = (name) => {
  switch (name) {
    case "kicks":
      return kicks;
    case "snares":
      return snares;
    case "hiHats":
      return hiHats;
    case "rideCymbals":
      return rideCymbals;
    default:
      return;
  }
};

const toggleDrum = (drumArrayName, index) => {
  const drums = getDrumArrayByName(drumArrayName);
  if (!drums || index > 15 || index < 0) {
    return;
  }
  drums[index] = !drums[index];
};

const clear = (drumArrayName) => {
  const drums = getDrumArrayByName(drumArrayName);
  drums.fill(false);
};

const invert = (drumArrayName) => {
  const drums = getDrumArrayByName(drumArrayName);
  console.log(drums);
  drums.forEach((e, index) => (drums[index] = !drums[index]));
  console.log(drums);
};
