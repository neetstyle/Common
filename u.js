

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

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function FormatShortNumber(num, n) {
    if (num >= 1e42) {
        return parseFloat((num / 1e42).toFixed(2)) + 'Tr'; // Tredecillion
    } else if (num >= 1e39) {
        return parseFloat((num / 1e39).toFixed(2)) + 'Du'; // Duodecillion
    } else if (num >= 1e36) {
        return parseFloat((num / 1e36).toFixed(2)) + 'U'; // Undecillion
    } else if (num >= 1e33) {
        return parseFloat((num / 1e33).toFixed(2)) + 'De'; // Decillion
    } else if (num >= 1e30) {
        return parseFloat((num / 1e30).toFixed(2)) + 'N'; // Nonillion
    } else if (num >= 1e27) {
        return parseFloat((num / 1e27).toFixed(2)) + 'O'; // Octillion
    } else if (num >= 1e24) {
        return parseFloat((num / 1e24).toFixed(2)) + 'S'; // Septillion
    } else if (num >= 1e21) {
        return parseFloat((num / 1e21).toFixed(2)) + 'Sx'; // Sextillion
    } else if (num >= 1e18) {
        return parseFloat((num / 1e18).toFixed(2)) + 'Q'; // Quintillion
    } else if (num >= 1e15) {
        return parseFloat((num / 1e15).toFixed(2)) + 'Qd'; // Quadrillion
    } else if (num >= 1e12) {
        return parseFloat((num / 1e12).toFixed(2)) + 'T'; // Trillion
    } else if (num >= 1e9) {
        return parseFloat((num / 1e9).toFixed(2)) + 'B'; // Billion
    } else if (num >= 1e6) {
		if(n < 2)
			return parseFloat((num / 1e6).toFixed(2)) + 'M'; // Million
		else
			return numberWithCommas(num);
    } else if (num >= 1e3) {
		if(n < 1)
			return parseFloat((num / 1e3).toFixed(2)) + 'K'; // Thousand
		else
			return numberWithCommas(num);
    } else {
        return numberWithCommas(num); // Less than a thousand
    }
}

function FormatNumber(num, n) {
    if (num >= 1e42) {
        return parseFloat((num / 1e42).toFixed(2)) + ' Tredecillion';
    } else if (num >= 1e39) {
        return parseFloat((num / 1e39).toFixed(2)) + ' Duodecillion';
    } else if (num >= 1e36) {
        return parseFloat((num / 1e36).toFixed(2)) + ' Undecillion';
    } else if (num >= 1e33) {
        return parseFloat((num / 1e33).toFixed(2)) + ' Decillion';
    } else if (num >= 1e30) {
        return parseFloat((num / 1e30).toFixed(2)) + ' Nonillion';
    } else if (num >= 1e27) {
        return parseFloat((num / 1e27).toFixed(2)) + ' Octillion';
    } else if (num >= 1e24) {
        return parseFloat((num / 1e24).toFixed(2)) + ' Septillion';
    } else if (num >= 1e21) {
        return parseFloat((num / 1e21).toFixed(2)) + ' Sextillion';
    } else if (num >= 1e18) {
        return parseFloat((num / 1e18).toFixed(2)) + ' Quintillion';
    } else if (num >= 1e15) {
        return parseFloat((num / 1e15).toFixed(2)) +  'Quadrillion';
    } else if (num >= 1e12) {
        return parseFloat((num / 1e12).toFixed(2)) + ' Trillion';
    } else if (num >= 1e9) {
        return parseFloat((num / 1e9).toFixed(2)) + ' Billion';
    } else if (num >= 1e6) {
		if(n < 2)
			return parseFloat((num / 1e6).toFixed(2)) + ' Million';
		else
        	return numberWithCommas(num);
    } else if (num >= 1e3) {
		if(n < 1)
			return parseFloat((num / 1e3).toFixed(2)) + 'Thousand';
		else
        	return numberWithCommas(num);
    } else {
        return numberWithCommas(num); // Less than a thousand
    }
}

function GetRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Accuracy(value) {
  return parseFloat(value.toFixed(2));
}
