const body = document.querySelector('body');
const container = document.createElement('div');
container.classList.add('container');
const text = document.createElement('textarea');
text.classList.add('text');
const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
keyboard.dataset.lang = 'en';
keyboard.dataset.caps = 'false';
const keys = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '←',
  'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\',
  'Caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter',
  'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Shift',
  'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '◄', '▼', '►', 'Ctrl'];
const keysEng = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=',
  'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\',
  'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'",
  'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'];
const keysEngShifted = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+',
  'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|',
  'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"',
  'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?'];
const keysRu = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=',
  'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\',
  'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э',
  'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.'];
const keysRuShifted = ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+',
  'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/',
  'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э',
  'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ','];
for (let i = 0; i <= 62; i += 1) {
  const button = document.createElement('button');
  button.classList.add('key');
  button.innerHTML = keys[i];
  switch (keys[i]) {
    case 'Tab':
      button.dataset.name = 'tab';
      break;
    case 'Caps':
      button.dataset.name = 'caps';
      break;
    case 'Shift':
      button.dataset.name = 'shift';
      break;
    case 'Ctrl':
      button.dataset.name = 'ctrl';
      break;
    case 'Win':
      button.dataset.name = 'win';
      break;
    case 'Alt':
      button.dataset.name = 'alt';
      break;
    case 'Space':
      button.dataset.name = 'space';
      break;
    case 'Enter':
      button.dataset.name = 'enter';
      break;
    case '←':
      button.dataset.name = 'bspace';
      break;
    case '▲':
      button.dataset.name = 'arrow';
      break;
    case '◄':
      button.dataset.name = 'arrow';
      break;
    case '▼':
      button.dataset.name = 'arrow';
      break;
    case '►':
      button.dataset.name = 'arrow';
      break;
    default:
      button.dataset.name = 'shiftable';
      break;
  }
  keyboard.append(button);
}
const subText = document.createElement('div');
subText.classList.add('subtext');
subText.innerText = 'Use Ctrl + Alt to switch language';
container.append(text, keyboard, subText);
body.append(container);

const shiftableKeys = document.querySelectorAll('[data-name="shiftable"]');

const shiftAllKeys = (lang) => {
  const shifted = lang === 'en' ? keysEngShifted : keysRuShifted;
  shiftableKeys.forEach((key, i) => {
    key.innerHTML = shifted[i];
  });
};

const unshiftAllKeys = (lang) => {
  const unshifted = lang === 'en' ? keysEng : keysRu;
  shiftableKeys.forEach((key, i) => {
    key.innerHTML = unshifted[i];
  });
};

const switchLang = () => {
  const { lang } = keyboard.dataset;
  if (lang === 'en') {
    if (keyboard.dataset.caps === 'false') {
      shiftableKeys.forEach((key, i) => {
        key.innerHTML = keysRu[i];
      });
    } else {
      shiftableKeys.forEach((key, i) => {
        key.innerHTML = keysRuShifted[i];
      });
    }
    keyboard.dataset.lang = 'ru';
  } else {
    if (keyboard.dataset.caps === 'false') {
      shiftableKeys.forEach((key, i) => {
        key.innerHTML = keysEng[i];
      });
    } else {
      shiftableKeys.forEach((key, i) => {
        key.innerHTML = keysEngShifted[i];
      });
    }
    keyboard.dataset.lang = 'en';
  }
};

const toggleCaps = () => {
  const status = keyboard.dataset.caps;
  if (status === 'false') {
    shiftableKeys.forEach((key) => {
      key.innerHTML = key.innerText.toUpperCase();
    });
    keyboard.dataset.caps = 'true';
  } else {
    shiftableKeys.forEach((key) => {
      key.innerHTML = key.innerText.toLowerCase();
    });
    keyboard.dataset.caps = 'false';
  }
};

const shiftKeys = document.querySelectorAll('[data-name="shift"]');
shiftKeys[0].dataset.side = 'left';
shiftKeys[1].dataset.side = 'right';
const controlKeys = document.querySelectorAll('[data-name="ctrl"]');
controlKeys[0].dataset.side = 'left';
controlKeys[1].dataset.side = 'right';
shiftKeys.forEach((key) => {
  key.addEventListener('mousedown', () => {
    const { lang } = keyboard.dataset;
    shiftAllKeys(lang);
  });
  key.addEventListener('mouseup', () => {
    const { lang } = keyboard.dataset;
    unshiftAllKeys(lang);
  });
});

const capsKey = document.querySelector('[data-name="caps"]');
capsKey.addEventListener('mousedown', () => {
  toggleCaps();
  capsKey.classList.add('pressed');
});
capsKey.addEventListener('mouseup', () => {
  capsKey.classList.remove('pressed');
});

const textArea = document.querySelector('.text');
shiftableKeys.forEach((key) => {
  key.addEventListener('mousedown', () => {
    key.classList.add('pressed');
    const buttonText = key.innerText;
    textArea.innerHTML += buttonText;
  });
  key.addEventListener('mouseup', () => {
    key.classList.remove('pressed');
  });
});

const spaceKey = document.querySelector('[data-name="space"]');
spaceKey.addEventListener('mousedown', () => {
  spaceKey.classList.add('pressed');
  textArea.innerHTML += ' ';
});
spaceKey.addEventListener('mouseup', () => {
  spaceKey.classList.remove('pressed');
});

const tabKey = document.querySelector('[data-name="tab"]');
tabKey.addEventListener('mousedown', () => {
  tabKey.classList.add('pressed');
  textArea.innerHTML += '\t';
});
tabKey.addEventListener('mouseup', () => {
  tabKey.classList.remove('pressed');
});

const enterKey = document.querySelector('[data-name="enter"]');
enterKey.addEventListener('mousedown', () => {
  enterKey.classList.add('pressed');
  textArea.innerHTML += '\n';
});
enterKey.addEventListener('mouseup', () => {
  enterKey.classList.remove('pressed');
});

const bspaceKey = document.querySelector('[data-name="bspace"]');
bspaceKey.addEventListener('mousedown', () => {
  bspaceKey.classList.add('pressed');
  const sliced = textArea.innerHTML.substring(0, textArea.innerHTML.length - 1);
  textArea.innerHTML = sliced;
});
bspaceKey.addEventListener('mouseup', () => {
  bspaceKey.classList.remove('pressed');
});

const arrowKeys = document.querySelectorAll('[data-name="arrow"]');
arrowKeys.forEach((key) => {
  key.addEventListener('mousedown', () => {
    key.classList.add('pressed');
    textArea.innerHTML += key.innerHTML;
  });
  key.addEventListener('mouseup', () => {
    key.classList.remove('pressed');
  });
});

document.addEventListener('keydown', (event) => {
  const keyPressed = event.key;
  let index;
  if (keyboard.dataset.caps === 'false') {
    index = keysEng.indexOf(keyPressed) !== -1 ? keysEng.indexOf(keyPressed)
      : keysRu.indexOf(keyPressed);
  } else if (keyboard.dataset.caps === 'true') {
    index = keysEngShifted.indexOf(keyPressed) !== -1 ? keysEngShifted.indexOf(keyPressed)
      : keysRuShifted.indexOf(keyPressed);
  }
  if (keyPressed.toLowerCase() !== keyPressed) {
    index = keysEngShifted.indexOf(keyPressed) !== -1 ? keysEngShifted.indexOf(keyPressed)
      : keysRuShifted.indexOf(keyPressed);
  }

  const { lang } = keyboard.dataset;
  const myKey = lang === 'en' ? keysEng[index] : keysRu[index];

  const shiftableKey = document.querySelectorAll('[data-name="shiftable"]');
  shiftableKey.forEach((key) => {
    if (myKey && key.innerHTML.toLowerCase() === myKey.toLowerCase()) {
      key.classList.add('pressed');
      textArea.innerHTML += key.innerHTML;
    }
  });
  if (keyPressed === 'Shift') {
    if (event.location === KeyboardEvent.DOM_KEY_LOCATION_LEFT) {
      const pressedShift = document.querySelector('[data-side="left"]');
      pressedShift.classList.add('pressed');
    } else {
      const pressedShift = document.querySelector('[data-side="right"]');
      pressedShift.classList.add('pressed');
    }
    shiftAllKeys(lang);
  } else if (keyPressed === 'Tab') {
    const tab = document.querySelector('[data-name="tab"]');
    tab.classList.add('pressed');
    textArea.innerHTML += '\t';
  } else if (keyPressed === ' ') {
    const space = document.querySelector('[data-name="space"]');
    space.classList.add('pressed');
    textArea.innerHTML += ' ';
  } else if (keyPressed === 'Enter') {
    const enter = document.querySelector('[data-name="enter"]');
    enter.classList.add('pressed');
    textArea.innerHTML += '\n';
  } else if (keyPressed === 'Backspace') {
    const bspace = document.querySelector('[data-name="bspace"]');
    bspace.classList.add('pressed');
    const sliced = textArea.innerHTML.substring(0, textArea.innerHTML.length - 1);
    textArea.innerHTML = sliced;
  } else if (keyPressed === 'CapsLock') {
    const caps = document.querySelector('[data-name="caps"]');
    caps.classList.add('pressed');
    toggleCaps();
  } else if (keyPressed === 'ArrowLeft') {
    const arrows = document.querySelectorAll('[data-name="arrow"]');
    arrows[1].classList.add('pressed');
    textArea.innerHTML += '◄';
  } else if (keyPressed === 'ArrowRight') {
    const arrows = document.querySelectorAll('[data-name="arrow"]');
    arrows[3].classList.add('pressed');
    textArea.innerHTML += '►';
  } else if (keyPressed === 'ArrowUp') {
    const arrows = document.querySelectorAll('[data-name="arrow"]');
    arrows[0].classList.add('pressed');
    textArea.innerHTML += '▲';
  } else if (keyPressed === 'ArrowDown') {
    const arrows = document.querySelectorAll('[data-name="arrow"]');
    arrows[2].classList.add('pressed');
    textArea.innerHTML += '▼';
  } else if (event.ctrlKey && event.altKey) {
    switchLang();
  }
});
document.addEventListener('keyup', (event) => {
  const keyPressed = event.key;
  const { lang } = keyboard.dataset;
  const shiftableKey = document.querySelectorAll('[data-name="shiftable"]');
  shiftableKey.forEach((key) => {
    if (key.innerHTML === keyPressed) {
      key.classList.remove('pressed');
    }
  });
  if (keyPressed === 'Shift') {
    if (event.location === KeyboardEvent.DOM_KEY_LOCATION_LEFT) {
      const pressedShift = document.querySelector('[data-side="left"]');
      pressedShift.classList.remove('pressed');
    } else {
      const pressedShift = document.querySelector('[data-side="right"]');
      pressedShift.classList.remove('pressed');
    }
    unshiftAllKeys(lang);
  } else if (keyPressed === 'Tab') {
    const tab = document.querySelector('[data-name="tab"]');
    tab.classList.remove('pressed');
  } else if (keyPressed === ' ') {
    const space = document.querySelector('[data-name="space"]');
    space.classList.remove('pressed');
  } else if (keyPressed === 'Enter') {
    const enter = document.querySelector('[data-name="enter"]');
    enter.classList.remove('pressed');
  } else if (keyPressed === 'Backspace') {
    const bspace = document.querySelector('[data-name="bspace"]');
    bspace.classList.remove('pressed');
  } else if (keyPressed === 'CapsLock') {
    const caps = document.querySelector('[data-name="caps"]');
    caps.classList.remove('pressed');
  } else if (keyPressed === 'ArrowLeft') {
    const arrows = document.querySelectorAll('[data-name="arrow"]');
    arrows[1].classList.remove('pressed');
  } else if (keyPressed === 'ArrowRight') {
    const arrows = document.querySelectorAll('[data-name="arrow"]');
    arrows[3].classList.remove('pressed');
  } else if (keyPressed === 'ArrowUp') {
    const arrows = document.querySelectorAll('[data-name="arrow"]');
    arrows[0].classList.remove('pressed');
  } else if (keyPressed === 'ArrowDown') {
    const arrows = document.querySelectorAll('[data-name="arrow"]');
    arrows[2].classList.remove('pressed');
  }
});
