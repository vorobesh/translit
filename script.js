const {
  form,
} = document;

const hashTable = {
  а: 'a',
  б: 'b',
  в: 'v',
  г: 'g',
  д: 'd',
  е: 'e',
  ё: 'e',
  ж: 'zh',
  з: 'z',
  и: 'i',
  й: 'i',
  к: 'k',
  л: 'l',
  м: 'm',
  н: 'n',
  о: 'o',
  п: 'p',
  р: 'r',
  с: 's',
  т: 't',
  у: 'u',
  ф: 'f',
  х: 'kh',
  ц: 'ts',
  ч: 'ch',
  ш: 'sh',
  щ: 'shch',
  ъ: 'ie',
  ы: 'y',
  ь: '\'',
  э: 'e',
  ю: 'iu',
  я: 'ia',
  А: 'A',
  Б: 'B',
  В: 'V',
  Г: 'G',
  Д: 'D',
  Е: 'E',
  Ё: 'E',
  Ж: 'ZH',
  З: 'Z',
  И: 'I',
  Й: 'I',
  К: 'K',
  Л: 'L',
  М: 'M',
  Н: 'N',
  О: 'O',
  П: 'P',
  Р: 'R',
  С: 'S',
  Т: 'T',
  У: 'U',
  Ф: 'F',
  Х: 'KH',
  Ц: 'TS',
  Ч: 'CH',
  Ш: 'SH',
  Щ: 'SHCH',
  Ъ: 'IE',
  Ы: 'Y',
  Ь: '\'',
  Э: 'E',
  Ю: 'IU',
  Я: 'IA',
};

function playMusic(soundPath) {
  const music = new Audio(soundPath);
  music.play();
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function bottomBlink() {
  const button = document.getElementById('button-id');
  button.style.backgroundImage = "url('images/button-on.jpg')";
  await sleep(200);
  button.style.backgroundImage = "url('images/button-off.jpg')";
}

document.getElementById('input-id').addEventListener('input', (event) => {
  event.preventDefault();
  playMusic('sounds/lamp.mp3');
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  bottomBlink();
  playMusic('sounds/kasset.mp3');
  const enteredText = document.getElementById('input-id').value;
  if (enteredText.trim()) {
    const blockText = document.createElement('div');
    blockText.innerText = enteredText;
    blockText.className = 'block-text';
    blockText.setAttribute('data-title', enteredText);
    const pageLeft = document.getElementsByClassName('page-left')[0];
    const pageRight = document.getElementsByClassName('page-right')[0];
    pageLeft.appendChild(blockText);
    const blockTranslitText = document.createElement('div');
    blockTranslitText.className = 'block-text';

    blockTranslitText.innerText = enteredText
      .split('')
      .map((item) => hashTable[item] || item)
      .join('');

    blockTranslitText.setAttribute('data-title', blockTranslitText.innerText);

    pageRight.appendChild(blockTranslitText);
  }
  document.getElementById('input-id').value = null;
  // очищаем поле ввода
});
