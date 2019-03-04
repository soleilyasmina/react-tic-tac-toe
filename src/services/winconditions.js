const main = (spaces) => {
  for (let i = 0; i < 3; i++) {
    if (spaces[i] === spaces[i+3] &&
      spaces[i+3] === spaces[i+6] &&
      spaces[i] !== null) {
      console.log(i, 'vertical');
      return true; // vertical win
    } else if (spaces[3*i] === spaces[3*i+1] &&
      spaces[3*i+1] === spaces[3*i+2] &&
      spaces[3*i] !== null) {
      console.log(i, 'horizontal');
      return true;
    }
  }
  if (spaces[0] === spaces[4] && 
    spaces[4] === spaces[8] &&
    spaces[0] !== null) {
    console.log('diagonal 1');
    return true;
  }
  if (spaces[2] === spaces[4] &&
    spaces[4] === spaces[6] &&
    spaces[2] !== null) {
    console.log('diagonal 2');
    return true;
  }
  return false;
}

export default main;
