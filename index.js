const body = document.querySelector('body');
const container = document.createElement('div');
container.classList.add('container');
const text = document.createElement('textarea');
text.classList.add('text');
const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
const keys = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '←',
	'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\',
	'Caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter',
	'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Shift',
	'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '◄', '▼', '►', 'Ctrl'];
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
