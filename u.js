
var isLoad_generatorData = false;
var isLoad_upgradeData = false;
var isLoad_shopData = false;
var isLoad_achievementData = false;

var generatorData;
fetch('generator.json')
.then(response => response.json())
.then(jsonData => {
	generatorData = jsonData;
	isLoad_generatorData = true;
	CheckInitializationData();
})
.catch(error => console.error('Error fetching JSON data:', error));

var upgradeData;
fetch('upgrade.json')
.then(response => response.json())
.then(jsonData => {
	upgradeData = jsonData;
	isLoad_upgradeData = true;
	CheckInitializationData();
})
.catch(error => console.error('Error fetching JSON data:', error));

var achievementData;
fetch('achievement.json')
.then(response => response.json())
.then(jsonData => {
	achievementData = jsonData;
	isLoad_achievementData = true;
	CheckInitializationData();
})
.catch(error => console.error('Error fetching JSON data:', error));

var shopData;
fetch('shop.json')
.then(response => response.json())
.then(jsonData => {
	shopData = jsonData;
	isLoad_shopData = true;
	CheckInitializationData();
})
.catch(error => console.error('Error fetching JSON data:', error));

function CheckInitializationData()
{
	if (isLoad_generatorData && isLoad_upgradeData && isLoad_shopData && isLoad_achievementData) {
		isLoad_data = true;
		checkInitialization();
	}
}

//--------------------------------------------------------------------------

//テキスト自動折り返し
function SetWrapText(textInstance)
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

function SetWrapOutlineText(textInstance)
{
	SetWrapText(textInstance.textL);
	SetWrapText(textInstance.textR);
	SetWrapText(textInstance.textU);
	SetWrapText(textInstance.textD);
	SetWrapText(textInstance.textC);
	SetWrapText(textInstance.textLU);
	SetWrapText(textInstance.textLD);
	SetWrapText(textInstance.textRU);
	SetWrapText(textInstance.textRD);
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function FormatShortNumber(num, n, f) {
    if (num >= 1e42) {
        return parseFloat((num / 1e42).toFixed(f)) + 'Tr'; // Tredecillion
    } else if (num >= 1e39) {
        return parseFloat((num / 1e39).toFixed(f)) + 'Du'; // Duodecillion
    } else if (num >= 1e36) {
        return parseFloat((num / 1e36).toFixed(f)) + 'U'; // Undecillion
    } else if (num >= 1e33) {
        return parseFloat((num / 1e33).toFixed(f)) + 'De'; // Decillion
    } else if (num >= 1e30) {
        return parseFloat((num / 1e30).toFixed(f)) + 'N'; // Nonillion
    } else if (num >= 1e27) {
        return parseFloat((num / 1e27).toFixed(f)) + 'O'; // Octillion
    } else if (num >= 1e24) {
        return parseFloat((num / 1e24).toFixed(f)) + 'S'; // Septillion
    } else if (num >= 1e21) {
        return parseFloat((num / 1e21).toFixed(f)) + 'Sx'; // Sextillion
    } else if (num >= 1e18) {
        return parseFloat((num / 1e18).toFixed(f)) + 'Q'; // Quintillion
    } else if (num >= 1e15) {
        return parseFloat((num / 1e15).toFixed(f)) + 'Qd'; // Quadrillion
    } else if (num >= 1e12) {
        return parseFloat((num / 1e12).toFixed(f)) + 'T'; // Trillion
    } else if (num >= 1e9) {
        return parseFloat((num / 1e9).toFixed(f)) + 'B'; // Billion
    } else if (num >= 1e6) {
		if(n < 2)
			return parseFloat((num / 1e6).toFixed(f)) + 'M'; // Million
		else
			return numberWithCommas(parseFloat(num.toFixed(f)));
    } else if (num >= 1e3) {
		if(n < 1)
			return parseFloat((num / 1e3).toFixed(f)) + 'K'; // Thousand
		else
			return numberWithCommas(parseFloat(num.toFixed(f)));
    } else {
        return numberWithCommas(parseFloat(num.toFixed(f))); // Less than a thousand
    }
}

function FormatNumber(num, n, f) {
    if (num >= 1e42) {
        return parseFloat((num / 1e42).toFixed(f)) + ' Tredecillion';
    } else if (num >= 1e39) {
        return parseFloat((num / 1e39).toFixed(f)) + ' Duodecillion';
    } else if (num >= 1e36) {
        return parseFloat((num / 1e36).toFixed(f)) + ' Undecillion';
    } else if (num >= 1e33) {
        return parseFloat((num / 1e33).toFixed(f)) + ' Decillion';
    } else if (num >= 1e30) {
        return parseFloat((num / 1e30).toFixed(f)) + ' Nonillion';
    } else if (num >= 1e27) {
        return parseFloat((num / 1e27).toFixed(f)) + ' Octillion';
    } else if (num >= 1e24) {
        return parseFloat((num / 1e24).toFixed(f)) + ' Septillion';
    } else if (num >= 1e21) {
        return parseFloat((num / 1e21).toFixed(f)) + ' Sextillion';
    } else if (num >= 1e18) {
        return parseFloat((num / 1e18).toFixed(f)) + ' Quintillion';
    } else if (num >= 1e15) {
        return parseFloat((num / 1e15).toFixed(f)) +  'Quadrillion';
    } else if (num >= 1e12) {
        return parseFloat((num / 1e12).toFixed(f)) + ' Trillion';
    } else if (num >= 1e9) {
        return parseFloat((num / 1e9).toFixed(f)) + ' Billion';
    } else if (num >= 1e6) {
		if(n < 2)
			return parseFloat((num / 1e6).toFixed(f)) + ' Million';
		else
        	return numberWithCommas(parseFloat(num.toFixed(f)));
    } else if (num >= 1e3) {
		if(n < 1)
			return parseFloat((num / 1e3).toFixed(f)) + 'Thousand';
		else
        	return numberWithCommas(parseFloat(num.toFixed(f)));
    } else {
        return numberWithCommas(parseFloat(num.toFixed(f))); // Less than a thousand
    }
}

function GetRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Accuracy(value) {
  return parseFloat(value.toFixed(2));
}

function RemoveCompletelyAndSafely(obj) {
    if (obj && obj.parent) {
        // 関連するすべてのTweenを削除
        createjs.Tween.removeTweens(obj);
        
        // 親のタイムラインから関連するTweenを削除（存在する場合）
        if (obj.parent.timeline && Array.isArray(obj.parent.timeline.tweens)) {
            obj.parent.timeline.tweens = obj.parent.timeline.tweens.filter(tween => tween.target !== obj);
        }
        
        // オブジェクトを親から削除
        obj.parent.removeChild(obj);
        
        // オブジェクトのプロパティをクリア
        for (let prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                obj[prop] = null;
            }
        }
    }
}

function GetTween(container, target)
{
	for (var i = 0; i < container.timeline.tweens.length; i++)
	{
	    if(container.timeline.tweens[i].target == target)
		{
			return container.timeline.tweens[i];
		}	
	}
	alert(target.parent+" / "+target);
}

class Outline
{
    constructor(lib, obj, size, color, outline)
	{
		this.container = new lib.ContainerMC();
		GetTween(obj.parent, obj).target = this.container;		
		
		this.textL = obj.clone();
		this.textL.color = outline;
		this.textL.x -= size;
		this.container.addChildAt(this.textL, 0);
		
		this.textR = obj.clone();
		this.textR.color = outline;
		this.textR.x += size;
		this.container.addChildAt(this.textR, 1);

		this.textU = obj.clone();
		this.textU.color = outline;
		this.textU.y += size;
		this.container.addChildAt(this.textU, 2);

		this.textD = obj.clone();
		this.textD.color = outline;
		this.textD.y -= size;
		this.container.addChildAt(this.textD, 3);

		this.textLU = obj.clone();
		this.textLU.color = outline;
		this.textLU.x -= size;
		this.textLU.y += size;
		this.container.addChildAt(this.textLU, 4);
		
		this.textLD = obj.clone();
		this.textLD.color = outline;
		this.textLD.x -= size;
		this.textLD.y -= size;
		this.container.addChildAt(this.textLD, 5);

		this.textRU = obj.clone();
		this.textRU.color = outline;
		this.textRU.x += size;
		this.textRU.y += size;
		this.container.addChildAt(this.textRU, 6);
		
		this.textRD = obj.clone();
		this.textRD.color = outline;
		this.textRD.x += size;
		this.textRD.y -= size;
		this.container.addChildAt(this.textRD, 7);

		this.textC = obj.clone();
		this.textC.color = color;
		this.container.addChildAt(this.textC, 8);
	}

   	get text()
   	{
        return this.textC.text;
    }

    set text(value)
    {
        this.textL.text = value;
        this.textU.text = value;
        this.textD.text = value;
        this.textR.text = value;
        this.textC.text = value;
		this.textLU.text = value;
        this.textLD.text = value;
        this.textRU.text = value;
     	this.textRD.text = value;
    }

	set color(color)
	{
		this.textC.color = color;
    }

	SetColor = function(color)
	{
		this.textC.color = color;
	}

	SetOutlineColor = function(outline)
	{
		this.textL.color = outline;
		this.textR.color = outline;
		this.textU.color = outline;
		this.textD.color = outline;
		this.textLU.color = outline;
		this.textLD.color = outline;
        this.textRU.color = outline;
        this.textRD.color = outline;
	}
}

function isMobile() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // iOS detection
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return true;
    }

    // Android detection
    if (/android/i.test(userAgent)) {
        return true;
    }

    // Windows Phone detection
    if (/windows phone/i.test(userAgent)) {
        return true;
    }

    // Other mobile detection
    if (/Mobile|Android|iP(ad|hone|od)|Opera Mini|IEMobile|WPDesktop/.test(userAgent)) {
        return true;
    }

    return false;
}