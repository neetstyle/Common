
WebFont.load({
    google: {
        families: ['Potta One']
    }
});

window.addEventListener('DOMContentLoaded', () => {
	const body = document.getElementsByTagName('body')[0];
	body.classList.toggle('no_scroll');
});
//https://stackoverflow.com/questions/76842573/a-bug-with-collapsing-when-scrolling-in-web-app-for-telegram-bot
window.Telegram.WebApp.expand();
window.Telegram.WebApp.disableVerticalSwipes();
document.addEventListener("touchmove", function (event) { event.preventDefault(); }, { passive: false });

var buildingData;
document.addEventListener("DOMContentLoaded", function() {
	fetch('building.json')
	.then(response => response.json())
    .then(jsonData => {
		//jsonData.forEach(item => {
		//	console.log(`ID: ${item.id}, Name: ${item.name}, Detail: ${item.detail}`);
		//});
		buildingData = jsonData;
	})
	.catch(error => console.error('Error fetching JSON data:', error));
});
var upgradeData;
document.addEventListener("DOMContentLoaded", function() {
	fetch('upgrade.json')
	.then(response => response.json())
    .then(jsonData => {
		upgradeData = jsonData;
	})
	.catch(error => console.error('Error fetching JSON data:', error));
});

//テキスト自動折り返し
function SetWrapText(textInstance, text)
{
	var text = 	textInstance.text;
	var initWidth = textInstance.lineWidth;
	var textArray = text.split('');
	var i = -1;
	var prevText = '';
	var lines = [];

	textInstance.text = '';

	while (textArray[++i])
	{
		textInstance.text += textArray[i];

		if (textInstance.getMeasuredWidth() > initWidth && prevText !== '') {
			lines.push(prevText);
			textInstance.text = textArray[i];
			prevText = textInstance.text;
		}
		else
		{
			prevText = textInstance.text;
		}
	}
	lines.push(prevText);
	textInstance.text = lines.join('\n');
}