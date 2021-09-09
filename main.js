const els = {
	welcomeScreen: null;
	questionScreen: null;
	endScreen: null;
	welcomeBtn: null;
	answers: null;
	endBtn: null;
};

const init = () => {
	console.log('Page has loaded');

	els.welcomeScreen = document.querySelector('.welcomeScreen');
	els.questionScreen = document.querySelector('.questionScreen');
	els.endScreen = document.querySelector('.endScreen');
	els.welcomeBtn = els.welcomeScreen.querySelector('button');
	els.endBtn = els.endScreen.querySelector('button');

	els.welcomeBtn.addEventListener('click', () => {
		displaySreen('question');
	});
};

const displaySreen = (screenName) =>{
	els.welcomeScreen.style.display = 'none';
	els.questionScreen.style.display = 'none';
	els.endScreen.style.display = 'none';

	const screen = els[screenName + 'Screen'];
	screen.style.display = 'flex';
};


window.addEventListener('load', init);
