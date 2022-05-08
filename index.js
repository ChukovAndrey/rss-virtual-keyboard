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
container.append(text, keyboard);
body.append(container);

const k = document.querySelectorAll('.key');
const textArea = document.querySelector('.text');
k.forEach((key) => {
	key.addEventListener('click', () => {
		const buttonText = key.innerText;
		textArea.innerHTML += buttonText;
	});
});
