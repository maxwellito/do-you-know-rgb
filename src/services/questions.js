export function generateQuiz () {
  const dataset = [];
  for (let i = 0; i < 20; i++) {
    dataset.push(generateQuestion(20-i));
  }
  return dataset;
}

function generateQuestion(margin) {
  const color = [
    Math.floor(Math.random() * 16),
    Math.floor(Math.random() * 16),
    Math.floor(Math.random() * 16),
  ]
  const choices = [colorToRGB(color)];

  do {
    let wrongColor;
    let wrongColorRGB;
    do {
      let marginLeft = margin;
      const gaps = [0,0,1].map(e => {
        const output = Math.round(Math.random()*marginLeft);
        marginLeft -= output;
        return e ? marginLeft : output
      }).sort(rand);
      wrongColor = color.map((x,i) => x + (Math.random() > .5 ? gaps[i] : -gaps[i]))
      wrongColorRGB = colorToRGB(wrongColor);
    } while (!isColorValid(wrongColor) || choices.includes(wrongColorRGB))
    choices.push(wrongColorRGB);
  } while (choices.length < 4)

  return {answer: colorToRGB(color), choices: choices.sort(rand), result: undefined}
}

function colorToRGB (color) {
  return '#' + color.map(h => h.toString(16)).join('')
}

function isColorValid (color) {
  return !color.some(x => x < 0 || x > 15)
}

function rand () {return Math.random() > .5 ? 1 : -1}
console.log(generateQuiz())