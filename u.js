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


    /*
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
    */


        if (typeof num === 'bigint') {
        if (num >= 10n ** 42n) {
            return `${(Number(num) / 1e42).toFixed(f)} Tredecillion`;
        } else if (num >= 10n ** 39n) {
            return `${(Number(num) / 1e39).toFixed(f)} Duodecillion`;
        } else if (num >= 10n ** 36n) {
            return `${(Number(num) / 1e36).toFixed(f)} Undecillion`;
        } else if (num >= 10n ** 33n) {
            return `${(Number(num) / 1e33).toFixed(f)} Decillion`;
        } else if (num >= 10n ** 30n) {
            return `${(Number(num) / 1e30).toFixed(f)} Nonillion`;
        } else if (num >= 10n ** 27n) {
            return `${(Number(num) / 1e27).toFixed(f)} Octillion`;
        } else if (num >= 10n ** 24n) {
            return `${(Number(num) / 1e24).toFixed(f)} Septillion`;
        } else if (num >= 10n ** 21n) {
            return `${(Number(num) / 1e21).toFixed(f)} Sextillion`;
        } else if (num >= 10n ** 18n) {
            return `${(Number(num) / 1e18).toFixed(f)} Quintillion`;
        } else if (num >= 10n ** 15n) {
            return `${(Number(num) / 1e15).toFixed(f)} Quadrillion`;
        } else if (num >= 10n ** 12n) {
            return `${(Number(num) / 1e12).toFixed(f)} Trillion`;
        } else if (num >= 10n ** 9n) {
            return `${(Number(num) / 1e9).toFixed(f)} Billion`;
        } else if (num >= 10n ** 6n) {
            return `${(Number(num) / 1e6).toFixed(f)} Million`;
        } else if (num >= 10n ** 3n) {
            return `${(Number(num) / 1e3).toFixed(f)} Thousand`;
        } else {
            return num.toString(); // 1000未満の場合そのまま表示
        }
    } else {
        // 通常のNumber型の処理
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
            return parseFloat((num / 1e15).toFixed(f)) + ' Quadrillion';
        } else if (num >= 1e12) {
            return parseFloat((num / 1e12).toFixed(f)) + ' Trillion';
        } else if (num >= 1e9) {
            return parseFloat((num / 1e9).toFixed(f)) + ' Billion';
        } else if (num >= 1e6) {
            return parseFloat((num / 1e6).toFixed(f)) + ' Million';
        } else if (num >= 1e3) {
            return parseFloat((num / 1e3).toFixed(f)) + ' Thousand';
        } else {
            return num.toString(); // 1000未満の場合そのまま表示
        }
    }
}

function FormatNumber(num, n, f) {

/*
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
    */

    if (typeof num === 'bigint') {
        if (num >= 10n ** 42n) {
            return `${(Number(num) / 1e42).toFixed(f)} Tredecillion`;
        } else if (num >= 10n ** 39n) {
            return `${(Number(num) / 1e39).toFixed(f)} Duodecillion`;
        } else if (num >= 10n ** 36n) {
            return `${(Number(num) / 1e36).toFixed(f)} Undecillion`;
        } else if (num >= 10n ** 33n) {
            return `${(Number(num) / 1e33).toFixed(f)} Decillion`;
        } else if (num >= 10n ** 30n) {
            return `${(Number(num) / 1e30).toFixed(f)} Nonillion`;
        } else if (num >= 10n ** 27n) {
            return `${(Number(num) / 1e27).toFixed(f)} Octillion`;
        } else if (num >= 10n ** 24n) {
            return `${(Number(num) / 1e24).toFixed(f)} Septillion`;
        } else if (num >= 10n ** 21n) {
            return `${(Number(num) / 1e21).toFixed(f)} Sextillion`;
        } else if (num >= 10n ** 18n) {
            return `${(Number(num) / 1e18).toFixed(f)} Quintillion`;
        } else if (num >= 10n ** 15n) {
            return `${(Number(num) / 1e15).toFixed(f)} Quadrillion`;
        } else if (num >= 10n ** 12n) {
            return `${(Number(num) / 1e12).toFixed(f)} Trillion`;
        } else if (num >= 10n ** 9n) {
            return `${(Number(num) / 1e9).toFixed(f)} Billion`;
        } else if (num >= 10n ** 6n) {
            return `${(Number(num) / 1e6).toFixed(f)} Million`;
        } else if (num >= 10n ** 3n) {
            return `${(Number(num) / 1e3).toFixed(f)} Thousand`;
        } else {
            return num.toString(); // 1000未満の場合そのまま表示
        }
    } else {
        // 通常のNumber型の処理
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
            return parseFloat((num / 1e15).toFixed(f)) + ' Quadrillion';
        } else if (num >= 1e12) {
            return parseFloat((num / 1e12).toFixed(f)) + ' Trillion';
        } else if (num >= 1e9) {
            return parseFloat((num / 1e9).toFixed(f)) + ' Billion';
        } else if (num >= 1e6) {
            return parseFloat((num / 1e6).toFixed(f)) + ' Million';
        } else if (num >= 1e3) {
            return parseFloat((num / 1e3).toFixed(f)) + ' Thousand';
        } else {
            return num.toString(); // 1000未満の場合そのまま表示
        }
    }
}

function FormatBig(num, n, f, isDivisor) {
    let originalNum;

    if (isDivisor) {
        // numを1000で割り、スケールを考慮して小数を保持
        const divisor = 1000n;
        const integerPart = num / divisor; // 商（整数部分）
        const remainder = num % divisor; // 余り（小数部分）

        // 小数部分を計算（スケール適用）
        const decimalPart = Number(remainder) / Number(divisor);

        // 結合して元の値を計算
        originalNum = Number(integerPart) + decimalPart;
    } else {
        // そのまま num を使用（BigInt を Number に変換）
        originalNum = Number(num);
    }

    if (originalNum >= 1e42) {
        return `${(originalNum / 1e42).toFixed(f)} Tredecillion`;
    } else if (originalNum >= 1e39) {
        return `${(originalNum / 1e39).toFixed(f)} Duodecillion`;
    } else if (originalNum >= 1e36) {
        return `${(originalNum / 1e36).toFixed(f)} Undecillion`;
    } else if (originalNum >= 1e33) {
        return `${(originalNum / 1e33).toFixed(f)} Decillion`;
    } else if (originalNum >= 1e30) {
        return `${(originalNum / 1e30).toFixed(f)} Nonillion`;
    } else if (originalNum >= 1e27) {
        return `${(originalNum / 1e27).toFixed(f)} Octillion`;
    } else if (originalNum >= 1e24) {
        return `${(originalNum / 1e24).toFixed(f)} Septillion`;
    } else if (originalNum >= 1e21) {
        return `${(originalNum / 1e21).toFixed(f)} Sextillion`;
    } else if (originalNum >= 1e18) {
        return `${(originalNum / 1e18).toFixed(f)} Quintillion`;
    } else if (originalNum >= 1e15) {
        return `${(originalNum / 1e15).toFixed(f)} Quadrillion`;
    } else if (originalNum >= 1e12) {
        return `${(originalNum / 1e12).toFixed(f)} Trillion`;
    } else if (originalNum >= 1e9) {
        return `${(originalNum / 1e9).toFixed(f)} Billion`;
    } else if (originalNum >= 1e6) {
        return `${(originalNum / 1e6).toFixed(f)} Million`;
    } else if (originalNum >= 1e3) {
        return `${(originalNum / 1e3).toFixed(f)} Thousand`;
    } else {
        return originalNum.toFixed(f); // 1000未満はそのまま表示
    }
}

function FormatNumber1(num, f) {
    if (num >= 10n ** 42n) {
        return `${(Number(num) / 1e42).toFixed(f)} Tredecillion`;
    } else if (num >= 10n ** 39n) {
        return `${(Number(num) / 1e39).toFixed(f)} Duodecillion`;
    } else if (num >= 10n ** 36n) {
        return `${(Number(num) / 1e36).toFixed(f)} Undecillion`;
    } else if (num >= 10n ** 33n) {
        return `${(Number(num) / 1e33).toFixed(f)} Decillion`;
    } else if (num >= 10n ** 30n) {
        return `${(Number(num) / 1e30).toFixed(f)} Nonillion`;
    } else if (num >= 10n ** 27n) {
        return `${(Number(num) / 1e27).toFixed(f)} Octillion`;
    } else if (num >= 10n ** 24n) {
        return `${(Number(num) / 1e24).toFixed(f)} Septillion`;
    } else if (num >= 10n ** 21n) {
        return `${(Number(num) / 1e21).toFixed(f)} Sextillion`;
    } else if (num >= 10n ** 18n) {
        return `${(Number(num) / 1e18).toFixed(f)} Quintillion`;
    } else if (num >= 10n ** 15n) {
        return `${(Number(num) / 1e15).toFixed(f)} Quadrillion`;
    } else if (num >= 10n ** 12n) {
        return `${(Number(num) / 1e12).toFixed(f)} Trillion`;
    } else if (num >= 10n ** 9n) {
        return `${(Number(num) / 1e9).toFixed(f)} Billion`;
    } else if (num >= 10n ** 6n) {
        return `${(Number(num) / 1e6).toFixed(f)} Million`;
    } else if (num >= 10n ** 3n) {
        //return `${(Number(num) / 1e3).toFixed(f)} Thousand`;
        return num.toString(); // 1000未満はそのまま表示
    } else {
        return num.toString(); // 1000未満はそのまま表示
    }
}

function FormatNumber2(num, n) {
    if (num >= 10n ** 42n) {
        return 'Tredecillion';
    } else if (num >= 10n ** 39n) {
        return 'Duodecillion';
    } else if (num >= 10n ** 36n) {
        return 'Undecillion';
    } else if (num >= 10n ** 33n) {
        return 'Decillion';
    } else if (num >= 10n ** 30n) {
        return 'Nonillion';
    } else if (num >= 10n ** 27n) {
        return 'Octillion';
    } else if (num >= 10n ** 24n) {
        return 'Septillion';
    } else if (num >= 10n ** 21n) {
        return 'Sextillion';
    } else if (num >= 10n ** 18n) {
        return 'Quintillion';
    } else if (num >= 10n ** 15n) {
        return 'Quadrillion';
    } else if (num >= 10n ** 12n) {
        return 'Trillion';
    } else if (num >= 10n ** 9n) {
        return 'Billion';
    } else if (num >= 10n ** 6n) {
        if (n < 2) return 'Million';
        else return '';
    } else if (num >= 10n ** 3n) {
        //if (n < 1) return 'Thousand';
        //else return '';
        return '';
    } else {
        return '';
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
		this.size = size;

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

   	get base()
   	{
        return this.textC;
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

	set x(value)
    {
        this.textL.x = value - this.size;
        this.textU.x = value;
        this.textD.x = value
        this.textR.x = value + this.size;
        this.textC.x = value;
		this.textLU.x = value - this.size;
        this.textLD.x = value - this.size;
        this.textRU.x = value + this.size;
     	this.textRD.x = value + this.size;
    }

	get x()
    {
        return this.textC.x;
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

var COOKIES = COOKIES || {
    getCookie: function(cName) {
        if(cName != '' || cName != null) {
            var set_replace = '(?:(?:^|.*\s*)' + cName + '\s*\=\s*([^;]*).*$)|^.*$';
            return document.cookie.replace(new RegExp(set_replace), '$1');
        }
    },
    setCookie: function(cName, cValue, cTime) {
        var time = cTime ? (60 * 60 * 24) * cTime : '';
        if(cName != '' || cName != null) {
            document.cookie = cName + '=' + cValue + ';domain=' + location.hostname + ';max-age=' + time;
        }
    },
    deleteCookie: function(cName) {
        if(cName != '' || cName != null) {
            COOKIES.setCookie(cName, '', 0);
        }
    }
};

//var get_cookie = COOKIES.getCookie('hoge');
//COOKIES.setCookie('hoge', 'hogehoge', 30);
//COOKIES.deleteCookie('hoge');


//////////////////////////////////////////////////////////
//API
var authorization = window.Telegram.WebApp.initData;
if(Telegram.WebApp.initDataUnsafe.user === undefined)
	authorization = "query_id=AAHjfQgwAwAAAON9CDDlFPkV&user=%7B%22id%22%3A7248313827%2C%22first_name%22%3A%22NEETStyle%22%2C%22last_name%22%3A%22%22%2C%22language_code%22%3A%22ja%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1726546734&hash=ef00201ae2db1cd90e423aefc1574db5a33fa814815be426f5d9ad1a96f25b4a";
var api_host = "https://clicker-api-stg.sasaki-11c.workers.dev";
var deviceId ="";

function API_Request(options) {
    const maxAttempts = options.maxAttempts || 3;
    const baseDelay = 1000; // 初期待機時間（ミリ秒）

    function ajaxPromise(finalOptions) {
        return new Promise(function(resolve, reject) {
            $.ajax({
                ...finalOptions,
                success: resolve,
                error: function(jqXHR, textStatus, errorThrown) {
                    reject({ 
                        reason: textStatus === "timeout" ? "timeout" : "error", 
                        jqXHR, 
                        textStatus, 
                        errorThrown 
                    });
                }
            });
        });
    }

    return new Promise(async function(resolve, reject) {
        for (let attempt = 1; attempt <= maxAttempts; attempt++) {
            try {
                const defaultOptions = {
                    method: 'GET',
                    dataType: 'json',
                    contentType: 'application/json',
                    headers: {
                        'Authorization': authorization,
                        'Device-Id': deviceId
                    },
                    timeout: 10000 // 10秒のタイムアウト
                };

                const finalOptions = $.extend({}, defaultOptions, options);
                finalOptions.url = api_host + options.url;

                if (options.data) {
                    finalOptions.data = JSON.stringify(options.data);
                }

                const response = await ajaxPromise(finalOptions);
                resolve(response);
                return;

            } catch (error) {
                // タイムアウト以外のエラーは即座に終了
                if (error.reason !== "timeout") {
                    reject({
                        message: 'APIリクエストでエラーが発生しました',
                        details: error
                    });
                    return;
                }

                // タイムアウトの場合のみ再試行
                if (attempt === maxAttempts) {
                    reject({
                        message: `タイムアウトが${maxAttempts}回発生しました`,
                        details: error
                    });
                    return;
                }

                // 指数バックオフを実装（タイムアウト時のみ）
                const delay = baseDelay * Math.pow(2, attempt - 1);
                console.log(`タイムアウト 試行 ${attempt} 回目。${delay}ミリ秒後に再試行します。`);
                
                // 待機してから再試行
                await new Promise(resolve => setTimeout(resolve, delay));
            }
        }
    });
}

// 元のsetTransformメソッドを保存
const originalSetTransform = createjs.Text.prototype.setTransform;

// setTransformメソッドを上書き
createjs.Text.prototype.setTransform = function(x, y, ...args) {
    // iOS以外の場合はyを調整
    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (!isIOS) {
        y += 12; // 必要な調整値
    }
    // 元のsetTransformを呼び出し
    return originalSetTransform.call(this, x, y, ...args);
};



