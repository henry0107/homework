let dancingWords = [];
let rSlider, gSlider, bSlider;
class DanceSpan {
  constructor(element, x, y) {
    element.position(x, y);
    this.element = element;
    this.x = x;
    this.y = y;

  }

  brownian() {
    this.x += random(-2, 2);
    this.y += random(-2, 2);
    this.element.position(this.x, this.y);
      }
}

function setup() {
  createCanvas(710, 400);
  textSize(15);
  noStroke();
  createP(
    'I learn in this Letter, that Don Peter of Aragon, ' +
      ' comes this night to Messina' +
        ' 張 力 文 做'
  ).addClass('text').hide();
  const texts = selectAll('.text');
  rSlider = createSlider(0, 255, 100);
  rSlider.position(20, 20);
  gSlider = createSlider(0, 255, 0);
  gSlider.position(20, 50);
  bSlider = createSlider(0, 255, 255);
  bSlider.position(20, 80);

  for (let i = 0; i < texts.length; i++) {
    const paragraph = texts[i].html();
    const words = paragraph.split(' ');
    for (let j = 0; j < words.length; j++) {
      const spannedWord = createSpan(words[j]);
      const dw = new DanceSpan(spannedWord, random(600), random(200));
      dancingWords.push(dw);
  while (this.y>350){
      this.y=this.y-50
  while (this.x>600){
      this.x=this.x-50
        }
      }
    }
  }
}

function draw() {
  const r = rSlider.value();
  const g = gSlider.value();
  const b = bSlider.value();
  background(r, g, b);
  text('Immobile red', rSlider.x * 2 + rSlider.width, 35);
  text('Immobile green', gSlider.x * 2 + gSlider.width, 65);
  text('Immobile blue', bSlider.x * 2 + bSlider.width, 95);
  for (let i = 0; i < dancingWords.length; i++) {
    dancingWords[i].brownian();
  }
}