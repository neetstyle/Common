(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[1127,0,488,182],[1617,0,262,232],[0,0,1125,300],[1127,184,262,232],[1881,88,48,48],[0,302,1125,278],[1127,418,209,209],[1391,234,262,232],[1881,0,137,86],[1655,234,262,232]]},
		{name:"index_atlas_2", frames: [[0,1589,1123,305],[0,0,1125,985],[0,987,1000,600]]},
		{name:"index_atlas_3", frames: [[0,0,1125,1000],[0,1002,1125,1000]]},
		{name:"index_atlas_4", frames: [[0,0,1044,1145]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_1 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.achievementButton = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bg1 = function() {
	this.initialize(img.bg1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2436,2436);


(lib.cellBG = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.dialogBG = function() {
	this.initialize(ss["index_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.footer = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.generatorButton = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hatena = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.header = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.iconFrame = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.panel = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.shopButton = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.sushi = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.sushiIcon = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.underBG = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.upgradeButton = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.upperBG = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.ShopPanelMC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_2
	this.text = new cjs.Text("Shop", "100px 'MS Gothic'");
	this.text.textAlign = "center";
	this.text.lineHeight = 102;
	this.text.lineWidth = 1121;
	this.text.parent = this;
	this.text.setTransform(562.5,602);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00CC33").ss(5,1,1).p("EhX4htXMCvxAAAMAAADavMivxAAAg");
	this.shape.setTransform(562.5,700);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3399FF").s().p("EhX4BtYMAAAjavMCvxAAAMAAADavg");
	this.shape_1.setTransform(562.5,700);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ShopPanelMC, new cjs.Rectangle(-2.5,-2.5,1130,1405), null);


(lib.SushiImageMC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.instance = new lib.sushi();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SushiImageMC, new cjs.Rectangle(0,0,1000,600), null);


(lib.ScrollMC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.content;
		this.count;
		
		this.Reload = function() 
		{
			this.content.ContentBGMC.scaleY = (0 + 280 * this.count) * 0.01;
			minY = -(50 + 280 * this.count) + 914;
		}
		
		this.SetSize = function(size) 
		{
			this.content.ContentBGMC.scaleY = size * 0.01;
			minY = -size + (document.documentElement.clientHeight / this.parent.parent.canvasScaleX)	-300 -278;
		}
		
		this.content.ContentBGMC.scaleY = (0 + 280 * this.count) * 0.01;
		
		var content = this.content;
		var startY;
		var startScrollY;
		var isScrolling = false;
		var velocity = 0;
		var friction = 0.95; // 慣性スクロールの減速率
		var minY = -(50 + 280 * this.count) + 914;
		var maxY = 0;
		var lastY;
		var lastMoveTime;
		isScrolled = false;
		
		this.isScrolled =  function() 
		{
			return isScrolled; 
		}
		
		this.Open =  function() 
		{
			content.addEventListener("mousedown", startScroll);
			stage.addEventListener("stagemousemove", doScroll);
			stage.addEventListener("stagemouseup", endScroll);
		}
		this.Close =  function() 
		{
			content.removeEventListener("mousedown", startScroll);
			stage.removeEventListener("stagemousemove", doScroll);
			stage.removeEventListener("stagemouseup", endScroll);
		}
		
		function startScroll(event) {
		    event.preventDefault();
		    isScrolling = true;
		    startY = getY(event);
		    startScrollY = content.y;
		    velocity = 0;
		    lastY = getY(event);
		    lastMoveTime = new Date().getTime();
			
			isScrolled = false;
		}
			
		function doScroll(event) {
		    if (isScrolling) {
		        event.preventDefault();
		        var dy = getY(event) - startY;
		        content.y = startScrollY + dy;
		
		        // スクロールの境界を設定
		        if (content.y < minY) {
		            content.y = minY;
		        }
		        if (content.y > maxY) {
		            content.y = maxY;
		        }
		
		        // 慣性用の速度を計算
		        var now = new Date().getTime();
		        var timeDiff = now - lastMoveTime;
		        if (timeDiff > 0) { // timeDiffがゼロでないことを確認
		            velocity = (getY(event) - lastY) / timeDiff * 1000; // ピクセル/秒に変換
		        }
		        lastY = getY(event);
		        lastMoveTime = now;
			
				isScrolled = true;
		    }
		}
		
		function endScroll(event) {
		    isScrolling = false;
		    // 速度が小さい場合にリセット
		    if (Math.abs(velocity) < 0.5) { // 閾値を適切に設定
		        velocity = 0;
		    }
		    // 慣性スクロールのためのタイマーを開始
		    createjs.Ticker.addEventListener("tick", applyInertia);
		}
		
		function applyInertia(event) {
		    if (!isScrolling) {
		        content.y += velocity * event.delta / 1000; // velocityをタイムデルタに合わせて調整
		        velocity *= friction;
		
		        // スクロールの境界を設定
		        if (content.y < minY) {
		            content.y = minY;
		            velocity = 0;
		        }
		        if (content.y > maxY) {
		            content.y = maxY;
		            velocity = 0;
		        }
		
		        // 慣性がほぼ止まったらタイマーを停止
		        if (Math.abs(velocity) < 1) {
		            createjs.Ticker.removeEventListener("tick", applyInertia);
		        }
		    }
		}
		
		function getY(event) {
			var y;	
		    if (event.touches && event.touches.length > 0) {
		        y = event.touches[0].clientY;
		    }
		    y = event.stageY;	
			var pt = stage.globalToLocal(0, y);
		    return pt.y   /   main.root.canvasScaleX;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// AS
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("Aj5j5IHzAAIAAHzInzAAg");
	this.shape.setTransform(25,25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("Aj5D6IAAnzIHzAAIAAHzg");
	this.shape_1.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ScrollMC, new cjs.Rectangle(-1,-1,52,52), null);


(lib.MaskMC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.498)").s().p("AnzH0IAAvnIPnAAIAAPng");
	this.shape.setTransform(50,50);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MaskMC, new cjs.Rectangle(0,0,100,100), null);


(lib.IconMC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.instance = new lib.iconFrame();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IconMC, new cjs.Rectangle(0,0,209,209), null);


(lib.DispNumMC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.num = new cjs.Text("+12345", "40px 'Potta One'", "#FFFFFF");
	this.num.name = "num";
	this.num.textAlign = "center";
	this.num.lineHeight = 60;
	this.num.parent = this;
	this.num.setTransform(0,-28.95);

	this.timeline.addTween(cjs.Tween.get(this.num).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DispNumMC, new cjs.Rectangle(-73.6,-30.9,147.3,61.9), null);


(lib.DebugMC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.status = new cjs.Text("Normal", "60px 'Potta One'", "#FFFFFF");
	this.status.name = "status";
	this.status.textAlign = "center";
	this.status.lineHeight = 89;
	this.status.lineWidth = 296;
	this.status.parent = this;
	this.status.setTransform(150,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("A3bnzMAu3AAAIAAPnMgu3AAAg");
	this.shape.setTransform(150,50);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C5253A").s().p("A3bH0IAAvnMAu3AAAIAAPng");
	this.shape_1.setTransform(150,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.status}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DebugMC, new cjs.Rectangle(-1,-1,302,102), null);


(lib.ButtonMC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		//元のは非表示
		this.shape.visible = false;	
		
		//当たり判定用のビットマップを生成
		var hitArea = new createjs.Shape();
		hitArea.graphics.beginFill("#F00").drawRect(0, 0, 100, 100);
		var bitmap = new createjs.Bitmap();
		bitmap.hitArea = hitArea;
		this.addChild(bitmap);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.247)").s().p("AnzH0IAAvnIPnAAIAAPng");
	this.shape.setTransform(50,50);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ButtonMC, new cjs.Rectangle(0,0,100,100), null);


(lib.UpperBGMC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.instance = new lib.upperBG();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.UpperBGMC, new cjs.Rectangle(0,0,1125,1000), null);


(lib.UnderBGMC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.instance = new lib.underBG();
	this.instance.setTransform(0,-490);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.UnderBGMC, new cjs.Rectangle(0,-490,1125,1000), null);


(lib.RadiationMC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.instance = new lib.bg1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.RadiationMC, new cjs.Rectangle(0,0,2436,2436), null);


(lib.UpgradeDesciptionMC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.bitmap;
		this.scaleX = this.parent.canvasScaleX;
		this.scaleY = this.parent.canvasScaleX;
		this.y = document.documentElement.clientHeight / 2;
		this.x = document.documentElement.clientWidth / 2;
		this.visible = false;
		this.CloseButtonMC.scaleX = document.documentElement.clientWidth / 100 / this.parent.canvasScaleX;
		this.CloseButtonMC.scaleY = document.documentElement.clientHeight / 100 / this.parent.canvasScaleY;	
		
		this.obj;
		
		this.CloseDesciption = function()
		{
			this.parent.MaskMC.visible = false;
			
			createjs.Tween.get(this, { override: true })
			.to({ scaleX: 0, scaleY: 0 }, 250, createjs.Ease.backInOut)
			.call(() => {
				this.visible = false;
		    });	
			createjs.Ticker.removeEventListener('tick', this._Tick);
			playSound("popup");
		} 
		this.CloseButtonMC.addEventListener("click", this.CloseDesciption.bind(this));
		
		this.Open = function(_obj)
		{
			this.obj = _obj;
			
			this.visible = true;
			this.scaleX = 0;
			this.scaleY = 0;
			
			this.parent.MaskMC.visible = true;
			
			createjs.Tween.get(this, { override: true })
			.to({ scaleX: this.parent.canvasScaleX, scaleY: this.parent.canvasScaleX }, 250, createjs.Ease.backInOut);
		
			if( this.bitmap !== undefined)
				this.removeChild(this.bitmap);
			
			//アイコン生成
			var bitmap = new createjs.Bitmap("images/Icon/" + this.obj.dir + "/" + this.obj.data["icon"] + ".png");
			this.addChild(bitmap);
			bitmap.x = 54;
			bitmap.y = 68;
			bitmap.scaleX = 193 / bitmap.image.width;
			bitmap.scaleY = 193 / bitmap.image.height;
			bitmap.mouseEnabled = false;
		
			this.title.text = this.obj.data["name"];
			this.desciption.text = this.obj.data["desciption"];
			
			SetWrapText(this.desciption);	
				
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Button
	this.CloseButtonMC = new lib.ButtonMC();
	this.CloseButtonMC.name = "CloseButtonMC";
	this.CloseButtonMC.setTransform(500,500,1,1,0,0,0,50,50);

	this.timeline.addTween(cjs.Tween.get(this.CloseButtonMC).wait(1));

	// IconBG
	this.instance = new lib.iconFrame();
	this.instance.setTransform(46,60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Text
	this.desciption = new cjs.Text("「押すだけで寿司が出てくる。\nたまにネタとシャリが逆さまですが。」", "50px 'Potta One'");
	this.desciption.name = "desciption";
	this.desciption.lineHeight = 72;
	this.desciption.lineWidth = 901;
	this.desciption.parent = this;
	this.desciption.setTransform(81.85,338.35);

	this.title = new cjs.Text("Sushi Syokunin", "60px 'Potta One'");
	this.title.name = "title";
	this.title.lineHeight = 87;
	this.title.lineWidth = 716;
	this.title.parent = this;
	this.title.setTransform(275,67);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.title},{t:this.desciption}]}).wait(1));

	// BG
	this.instance_1 = new lib.dialogBG();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.UpgradeDesciptionMC, new cjs.Rectangle(0,0,1044,1145), null);


(lib.UpgradeCellMC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {Active:0,Lock:9};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20));

	// Icon_Button
	this.IconButtonMC = new lib.ButtonMC();
	this.IconButtonMC.name = "IconButtonMC";
	this.IconButtonMC.setTransform(22.55,38.25,2.66,2.5598,0,0,0,0.2,0.1);

	this.timeline.addTween(cjs.Tween.get(this.IconButtonMC).wait(20));

	// BG_Button
	this.ButtonMC = new lib.ButtonMC();
	this.ButtonMC.name = "ButtonMC";
	this.ButtonMC.setTransform(0,27,11.25,2.7998);

	this.timeline.addTween(cjs.Tween.get(this.ButtonMC).to({_off:true},9).wait(11));

	// Mask
	this.MaskMC = new lib.MaskMC();
	this.MaskMC.name = "MaskMC";
	this.MaskMC.setTransform(28.5,38.25,10.8025,2.56,0,0,0,0.6,0.1);
	this.MaskMC.alpha = 0.5;
	this.MaskMC._off = true;

	this.timeline.addTween(cjs.Tween.get(this.MaskMC).wait(9).to({_off:false},0).wait(11));

	// Icon
	this.IconMC = new lib.IconMC();
	this.IconMC.name = "IconMC";
	this.IconMC.setTransform(162.5,168.5,1,1,0,0,0,104.5,104.5);

	this.timeline.addTween(cjs.Tween.get(this.IconMC).wait(20));

	// Text
	this.cost = new cjs.Text("3.158,759", "60px 'Potta One'", "#C5253A");
	this.cost.name = "cost";
	this.cost.lineHeight = 89;
	this.cost.lineWidth = 636;
	this.cost.parent = this;
	this.cost.setTransform(427.6,158.25);

	this.title = new cjs.Text("Sushi Syokunin", "60px 'Potta One'");
	this.title.name = "title";
	this.title.lineHeight = 89;
	this.title.lineWidth = 779;
	this.title.parent = this;
	this.title.setTransform(284.55,70.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.title},{t:this.cost}]}).wait(20));

	// Sushi
	this.instance = new lib.sushiIcon();
	this.instance.setTransform(280,164);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

	// BG
	this.instance_1 = new lib.cellBG();
	this.instance_1.setTransform(0,13);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,13,1125,305);


(lib.SushiMC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.bitmap;
		this.scaleX = this.parent.canvasScaleX;
		this.scaleY = this.parent.canvasScaleX;
		this.y = document.documentElement.clientHeight / 2;
		this.x = document.documentElement.clientWidth / 2;
		
		this.sushi = 0;
		this.totalSushi = 0;
		
		this.Click = function(evt)
		{
			var amount = main.computedTouchSps;
			main.AddSushi(amount);
			
			var clip = new lib.DispNumMC();
			this.parent.addChild(clip);
			clip.num.text = "+" + FormatShortNumber(amount, 0);	
			
			var pt = stage.globalToLocal(evt.stageX, evt.stageY);
			clip.x = pt.x + GetRandomInt(-200, 200) * this.parent.canvasScaleX;
			clip.y = pt.y + GetRandomInt(-150, 250) * this.parent.canvasScaleX;
			
			createjs.Tween.get(clip, { override: true })
				.to({ y: clip.y -50 }, 500, createjs.Ease.expoOut)
				.call(() => {
				this.parent.removeChild(clip);
				clip = null;
		    });
		}
		
		this.SushiImageMC.mouseEnabled = false;
		
		this.ButtonMC.on("mousedown", function(event) {
			createjs.Tween.get(this.parent.SushiImageMC, { override: true })
				.to({ scaleX: 0.9, scaleY: 0.9 }, 250, createjs.Ease.elasticOut);
		});
		
		this.ButtonMC.on("click", function(evt) {
			this.parent.Click(evt);
			createjs.Tween.get(this.parent.SushiImageMC, { override: true })
				.to({ scaleX: 1.0, scaleY: 1.0 }, 250, createjs.Ease.elasticOut);
			playSound("click");
		});
		
		this.ButtonMC.on("mouseover", function(event) {
			createjs.Tween.get(this.parent.SushiImageMC, { override: true })
				.to({ scaleX: 1.1, scaleY: 1.1 }, 250, createjs.Ease.elasticOut);
		});
		
		this.ButtonMC.on("mouseout", function(event) {
			createjs.Tween.get(this.parent.SushiImageMC, { override: true })
				.to({ scaleX: 1.0, scaleY: 1.0 }, 250, createjs.Ease.elasticOut);
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Image
	this.SushiImageMC = new lib.SushiImageMC();
	this.SushiImageMC.name = "SushiImageMC";
	this.SushiImageMC.setTransform(500,300,1,1,0,0,0,500,300);

	this.timeline.addTween(cjs.Tween.get(this.SushiImageMC).wait(1));

	// Button
	this.ButtonMC = new lib.ButtonMC();
	this.ButtonMC.name = "ButtonMC";
	this.ButtonMC.setTransform(498,298.8,10,6,0,0,0,49.8,49.8);

	this.timeline.addTween(cjs.Tween.get(this.ButtonMC).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SushiMC, new cjs.Rectangle(0,0,1000,600), null);


(lib.HeaderMC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Text
	this.Sps = new cjs.Text("per Second : 123,111 pieces", "50px 'Potta One'", "#DC962D");
	this.Sps.name = "Sps";
	this.Sps.textAlign = "center";
	this.Sps.lineHeight = 74;
	this.Sps.lineWidth = 1120;
	this.Sps.parent = this;
	this.Sps.setTransform(561.95,162);

	this.Sushi = new cjs.Text("123.221 pieces", "100px 'Potta One'", "#FFFFFF");
	this.Sushi.name = "Sushi";
	this.Sushi.textAlign = "center";
	this.Sushi.lineHeight = 147;
	this.Sushi.lineWidth = 1121;
	this.Sushi.parent = this;
	this.Sushi.setTransform(562.5,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Sushi},{t:this.Sps}]}).wait(1));

	// Debug
	this.DebugMC = new lib.DebugMC();
	this.DebugMC.name = "DebugMC";
	this.DebugMC.setTransform(973.95,50,1,1,0,0,0,150,50);

	this.timeline.addTween(cjs.Tween.get(this.DebugMC).wait(1));

	// BG
	this.instance = new lib.header();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HeaderMC, new cjs.Rectangle(0,-0.5,1125,278.5), null);


(lib.GeneratorDesciptionMC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.bitmap;
		this.scaleX = this.parent.canvasScaleX;
		this.scaleY = this.parent.canvasScaleX;
		this.y = document.documentElement.clientHeight / 2;
		this.x = document.documentElement.clientWidth / 2;
		this.visible = false;
		this.CloseButtonMC.scaleX = document.documentElement.clientWidth / 100 / this.parent.canvasScaleX;
		this.CloseButtonMC.scaleY = document.documentElement.clientHeight / 100 / this.parent.canvasScaleY;	
		
		this.obj;
		
		this.CloseDesciption = function()
		{
			this.parent.MaskMC.visible = false;
			
			createjs.Tween.get(this, { override: true })
			.to({ scaleX: 0, scaleY: 0 }, 250, createjs.Ease.backInOut)
			.call(() => {
				this.visible = false;
		    });	
			createjs.Ticker.removeEventListener('tick', this._Tick);
			playSound("popup");
		} 
		this.CloseButtonMC.addEventListener("click", this.CloseDesciption.bind(this));
		
		this.Open = function(_obj)
		{
			this.obj = _obj;
			
			this.visible = true;
			this.scaleX = 0;
			this.scaleY = 0;
			
			this.parent.MaskMC.visible = true;
			
			createjs.Tween.get(this, { override: true })
			.to({ scaleX: this.parent.canvasScaleX, scaleY: this.parent.canvasScaleX }, 250, createjs.Ease.backInOut);
		
			if( this.bitmap !== undefined)
				this.removeChild(this.bitmap);
		
			//アイコン生成
			var bitmap = new createjs.Bitmap("images/Icon/" + this.obj.dir + "/" + this.obj.data["icon"] + ".png");
			this.addChild(bitmap);
			bitmap.x = 54;
			bitmap.y = 68;
			bitmap.scaleX = 193 / bitmap.image.width;
			bitmap.scaleY = 193 / bitmap.image.height;
			bitmap.mouseEnabled = false;
		
			this.title.text = this.obj.data["name"];
			this.desciption.text = this.obj.data["desciption"];
			this.amount.text = this.obj.amount;
			
			SetWrapText(this.desciption);	
			
			this._Tick = createjs.Ticker.addEventListener("tick", this.Tick.bind(this));	
		}
		
		this._Tick;
		this.Tick = function(event)
		{
			var text1 = "各[x]が毎秒[y]Sushi生産";
			this.desciption1.text = 
				text1.replace("[x]", this.obj.data.name)
				.replace("[y]", Math.floor(this.obj.storedTotalSps));
			
			var text2 = "[x][y]が毎秒[z]Sushi生産(合計SpSの[w]%)";
			this.desciption2.text = 
				text2.replace("[x]", this.obj.amount)
				.replace("[y]", this.obj.data.name)
				.replace("[z]", Math.floor(this.obj.storedTotalSps))
				.replace("[w]", Math.floor(this.obj.storedTotalSps));
			
			var text3 = "これまで[x]Sushi生産";
			this.desciption3.text = text3.replace("[x]", Math.floor(this.obj.totalSushies));
		
			SetWrapText(this.desciption1);
			SetWrapText(this.desciption2);
			SetWrapText(this.desciption3);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Button
	this.CloseButtonMC = new lib.ButtonMC();
	this.CloseButtonMC.name = "CloseButtonMC";
	this.CloseButtonMC.setTransform(500,500,1,1,0,0,0,50,50);

	this.timeline.addTween(cjs.Tween.get(this.CloseButtonMC).wait(1));

	// IconBG
	this.instance = new lib.iconFrame();
	this.instance.setTransform(46,60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Text
	this.instance_1 = new lib.CachedBmp_1();
	this.instance_1.setTransform(271.6,153,0.5,0.5);

	this.desciption = new cjs.Text("「押すだけで寿司が出てくる。\nたまにネタとシャリが逆さまですが。」", "50px 'Potta One'");
	this.desciption.name = "desciption";
	this.desciption.lineHeight = 72;
	this.desciption.lineWidth = 901;
	this.desciption.parent = this;
	this.desciption.setTransform(81.85,338.35);

	this.desciption3 = new cjs.Text("各SushiFactoryが毎秒100.000million 生産", "50px 'Potta One'");
	this.desciption3.name = "desciption3";
	this.desciption3.lineHeight = 72;
	this.desciption3.lineWidth = 938;
	this.desciption3.parent = this;
	this.desciption3.setTransform(57,938);

	this.desciption2 = new cjs.Text("各SushiFactoryが毎秒100.000million 生産", "50px 'Potta One'");
	this.desciption2.name = "desciption2";
	this.desciption2.lineHeight = 72;
	this.desciption2.lineWidth = 938;
	this.desciption2.parent = this;
	this.desciption2.setTransform(57,759);

	this.amount = new cjs.Text("126", "60px 'Potta One'", "#C5253A");
	this.amount.name = "amount";
	this.amount.lineHeight = 87;
	this.amount.lineWidth = 220;
	this.amount.parent = this;
	this.amount.setTransform(517,155);

	this.desciption1 = new cjs.Text("各SushiFactoryが毎秒100.000million 生産", "50px 'Potta One'");
	this.desciption1.name = "desciption1";
	this.desciption1.lineHeight = 72;
	this.desciption1.lineWidth = 938;
	this.desciption1.parent = this;
	this.desciption1.setTransform(57,579.2);

	this.title = new cjs.Text("Sushi Syokunin", "60px 'Potta One'");
	this.title.name = "title";
	this.title.lineHeight = 87;
	this.title.lineWidth = 716;
	this.title.parent = this;
	this.title.setTransform(275,67);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.title},{t:this.desciption1},{t:this.amount},{t:this.desciption2},{t:this.desciption3},{t:this.desciption},{t:this.instance_1}]}).wait(1));

	// BG
	this.instance_2 = new lib.dialogBG();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.GeneratorDesciptionMC, new cjs.Rectangle(0,0,1044,1145), null);


(lib.GeneratorCellMC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Active":0,"Lock":9,Notice:19};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Icon_Button
	this.IconButtonMC = new lib.ButtonMC();
	this.IconButtonMC.name = "IconButtonMC";
	this.IconButtonMC.setTransform(22.55,38.25,2.66,2.5598,0,0,0,0.2,0.1);

	this.timeline.addTween(cjs.Tween.get(this.IconButtonMC).to({_off:true},19).wait(11));

	// BG_Button
	this.ButtonMC = new lib.ButtonMC();
	this.ButtonMC.name = "ButtonMC";
	this.ButtonMC.setTransform(0,27,11.25,2.7998);

	this.timeline.addTween(cjs.Tween.get(this.ButtonMC).to({_off:true},19).wait(11));

	// Mask
	this.MaskMC = new lib.MaskMC();
	this.MaskMC.name = "MaskMC";
	this.MaskMC.setTransform(28.5,38.25,10.8025,2.56,0,0,0,0.6,0.1);
	this.MaskMC.alpha = 0.5;
	this.MaskMC._off = true;

	this.timeline.addTween(cjs.Tween.get(this.MaskMC).wait(9).to({_off:false},0).wait(10).to({alpha:1},0).wait(11));

	// hatena
	this.text = new cjs.Text("???", "60px 'Potta One'");
	this.text.lineHeight = 89;
	this.text.lineWidth = 636;
	this.text.parent = this;
	this.text.setTransform(284.55,70.35);

	this.instance = new lib.hatena();
	this.instance.setTransform(67,72,4,4);

	this.instance_1 = new lib.IconMC();
	this.instance_1.setTransform(162.5,168.5,1,1,0,0,0,104.5,104.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.text}]},19).wait(11));

	// Icon
	this.IconMC = new lib.IconMC();
	this.IconMC.name = "IconMC";
	this.IconMC.setTransform(162.5,168.5,1,1,0,0,0,104.5,104.5);

	this.timeline.addTween(cjs.Tween.get(this.IconMC).to({_off:true},19).wait(11));

	// レイヤー_4
	this.amount = new cjs.Text("100", "100px 'Potta One'");
	this.amount.name = "amount";
	this.amount.lineHeight = 147;
	this.amount.lineWidth = 193;
	this.amount.parent = this;
	this.amount.setTransform(869.3,89);

	this.timeline.addTween(cjs.Tween.get(this.amount).to({_off:true},9).wait(21));

	// Text
	this.cost = new cjs.Text("3.158,759", "60px 'Potta One'", "#C5253A");
	this.cost.name = "cost";
	this.cost.lineHeight = 89;
	this.cost.lineWidth = 496;
	this.cost.parent = this;
	this.cost.setTransform(427.6,158.25);

	this.title = new cjs.Text("Sushi Syokunin", "60px 'Potta One'");
	this.title.name = "title";
	this.title.lineHeight = 89;
	this.title.lineWidth = 636;
	this.title.parent = this;
	this.title.setTransform(284.55,70.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.title},{t:this.cost}]}).to({state:[{t:this.cost}]},19).wait(11));

	// Sushi
	this.instance_2 = new lib.sushiIcon();
	this.instance_2.setTransform(280,164);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(30));

	// BG
	this.instance_3 = new lib.cellBG();
	this.instance_3.setTransform(0,13);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(30));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,13,1125,305);


(lib.UpgradeButtonMC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Image
	this.instance = new lib.upgradeButton();
	this.instance.setTransform(10,40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Button
	this.instance_1 = new lib.ButtonMC();
	this.instance_1.setTransform(140.6,150,2.8125,3,0,0,0,50,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.UpgradeButtonMC, new cjs.Rectangle(0,0,281.3,300), null);


(lib.ShopButtonMC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Image
	this.instance = new lib.shopButton();
	this.instance.setTransform(10,40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Button
	this.instance_1 = new lib.ButtonMC();
	this.instance_1.setTransform(140.6,150,2.8125,3,0,0,0,50,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ShopButtonMC, new cjs.Rectangle(0,0,281.3,300), null);


(lib.GeneratorButtonMC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Image
	this.instance = new lib.generatorButton();
	this.instance.setTransform(10,40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Button
	this.instance_1 = new lib.ButtonMC();
	this.instance_1.setTransform(140.6,150,2.8125,3,0,0,0,50,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.GeneratorButtonMC, new cjs.Rectangle(0,0,281.3,300), null);


(lib.AchievementButtonMC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Image
	this.instance = new lib.achievementButton();
	this.instance.setTransform(10,40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Button
	this.instance_1 = new lib.ButtonMC();
	this.instance_1.setTransform(140.6,150,2.8125,3,0,0,0,50,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.AchievementButtonMC, new cjs.Rectangle(0,0,281.3,300), null);


(lib.bgMC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		createjs.Tween.get(this.RadiationMC, { loop: true })
			.to({ rotation: 360 }, 50000);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// BG
	this.RadiationMC = new lib.RadiationMC();
	this.RadiationMC.name = "RadiationMC";
	this.RadiationMC.setTransform(563.75,1218,1,1,0,0,0,1218,1218);

	this.timeline.addTween(cjs.Tween.get(this.RadiationMC).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bgMC, new cjs.Rectangle(-654.2,0.1,2436,2435.9), null);


(lib.AchievementDesciptionMC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.bitmap;
		this.scaleX = this.parent.canvasScaleX;
		this.scaleY = this.parent.canvasScaleX;
		this.y = document.documentElement.clientHeight / 2;
		this.x = document.documentElement.clientWidth / 2;
		this.visible = false;
		this.CloseButtonMC.scaleX = document.documentElement.clientWidth / 100 / this.parent.canvasScaleX;
		this.CloseButtonMC.scaleY = document.documentElement.clientHeight / 100 / this.parent.canvasScaleY;	
		
		this.data;
		
		this.CloseDesciption = function()
		{
			this.parent.MaskMC.visible = false;
			
			createjs.Tween.get(this, { override: true })
			.to({ scaleX: 0, scaleY: 0 }, 250, createjs.Ease.backInOut)
			.call(() => {
				this.visible = false;
		    });	
			createjs.Ticker.removeEventListener('tick', this._Tick);
			playSound("popup");
		} 
		this.CloseButtonMC.addEventListener("click", this.CloseDesciption.bind(this));
		
		this.Open = function(_obj)
		{
			this.obj = _obj;
			
			this.visible = true;
			this.scaleX = 0;
			this.scaleY = 0;
			
			this.parent.MaskMC.visible = true;
			
			createjs.Tween.get(this, { override: true })
			.to({ scaleX: this.parent.canvasScaleX, scaleY: this.parent.canvasScaleX }, 250, createjs.Ease.backInOut);
		
			if( this.bitmap !== undefined)
				this.removeChild(this.bitmap);
		
			//アイコン生成
			var bitmap = new createjs.Bitmap("images/Icon/" + this.obj.dir + "/" + this.obj.data["icon"] + ".png");
			this.addChild(bitmap);
			bitmap.x = 54;
			bitmap.y = 68;
			bitmap.scaleX = 193 / bitmap.image.width;
			bitmap.scaleY = 193 / bitmap.image.height;
		
			this.title.text = this.obj.data["name"];
			this.desciption.text = this.obj.data["desciption"];
			
			SetWrapText(this.desciption);	
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Button
	this.CloseButtonMC = new lib.ButtonMC();
	this.CloseButtonMC.name = "CloseButtonMC";
	this.CloseButtonMC.setTransform(500,500,1,1,0,0,0,50,50);

	this.timeline.addTween(cjs.Tween.get(this.CloseButtonMC).wait(1));

	// IconBG
	this.instance = new lib.iconFrame();
	this.instance.setTransform(46,60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Text
	this.desciption = new cjs.Text("「押すだけで寿司が出てくる。\nたまにネタとシャリが逆さまですが。」", "50px 'Potta One'");
	this.desciption.name = "desciption";
	this.desciption.lineHeight = 72;
	this.desciption.lineWidth = 901;
	this.desciption.parent = this;
	this.desciption.setTransform(81.85,338.35);

	this.title = new cjs.Text("Sushi Syokunin", "60px 'Potta One'");
	this.title.name = "title";
	this.title.lineHeight = 87;
	this.title.lineWidth = 716;
	this.title.parent = this;
	this.title.setTransform(275,67);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.title},{t:this.desciption}]}).wait(1));

	// BG
	this.instance_1 = new lib.dialogBG();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.AchievementDesciptionMC, new cjs.Rectangle(0,0,1044,1145), null);


(lib.AchievementContentMC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Text
	this.upgradeTitle = new cjs.Text("アップグレード", "60px 'Potta One'");
	this.upgradeTitle.name = "upgradeTitle";
	this.upgradeTitle.lineHeight = 89;
	this.upgradeTitle.parent = this;
	this.upgradeTitle.setTransform(82,502);

	this.achievementTitle = new cjs.Text("アチーブメント", "60px 'Potta One'");
	this.achievementTitle.name = "achievementTitle";
	this.achievementTitle.lineHeight = 89;
	this.achievementTitle.parent = this;
	this.achievementTitle.setTransform(82,1094.2);

	this.text = new cjs.Text("提供中の寿司： 5.999 billion\n寿司生産数　5.999 billion\n施設数：23 ゲーム開始　7日, 1時間前\n毎秒の寿司提供数：359,343\n1タップあたりの寿司提供数：25\nタップ：234,432回", "40px 'Potta One'");
	this.text.lineHeight = 60;
	this.text.lineWidth = 959;
	this.text.parent = this;
	this.text.setTransform(84.2,148.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text},{t:this.achievementTitle},{t:this.upgradeTitle}]}).wait(1));

	// BG
	this.ContentBGMC = new lib.ButtonMC();
	this.ContentBGMC.name = "ContentBGMC";
	this.ContentBGMC.setTransform(0,0,11.25,0.9999);

	this.timeline.addTween(cjs.Tween.get(this.ContentBGMC).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.AchievementContentMC, new cjs.Rectangle(0,0,1125,1183.1), null);


(lib.UpgradeContentMC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Cell
	this.UpgradeCellMC = new lib.UpgradeCellMC();
	this.UpgradeCellMC.name = "UpgradeCellMC";

	this.timeline.addTween(cjs.Tween.get(this.UpgradeCellMC).wait(1));

	// BG
	this.ContentBGMC = new lib.ButtonMC();
	this.ContentBGMC.name = "ContentBGMC";
	this.ContentBGMC.setTransform(0,0,11.25,0.9999);

	this.timeline.addTween(cjs.Tween.get(this.ContentBGMC).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.UpgradeContentMC, new cjs.Rectangle(0,0,1125,318), null);


(lib.GeneratorContentMC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Cell
	this.GeneratorCellMC = new lib.GeneratorCellMC();
	this.GeneratorCellMC.name = "GeneratorCellMC";

	this.timeline.addTween(cjs.Tween.get(this.GeneratorCellMC).wait(1));

	// ScrollButton
	this.ContentBGMC = new lib.ButtonMC();
	this.ContentBGMC.name = "ContentBGMC";
	this.ContentBGMC.setTransform(0,0,11.25,0.9999);

	this.timeline.addTween(cjs.Tween.get(this.ContentBGMC).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.GeneratorContentMC, new cjs.Rectangle(0,0,1125,318), null);


(lib.FooterMC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Button
	this.AchievementButtonMC = new lib.AchievementButtonMC();
	this.AchievementButtonMC.name = "AchievementButtonMC";
	this.AchievementButtonMC.setTransform(843.75,0);

	this.ShopButtonMC = new lib.ShopButtonMC();
	this.ShopButtonMC.name = "ShopButtonMC";
	this.ShopButtonMC.setTransform(562.5,0);

	this.UpgradeButtonMC = new lib.UpgradeButtonMC();
	this.UpgradeButtonMC.name = "UpgradeButtonMC";
	this.UpgradeButtonMC.setTransform(281.25,0);

	this.GeneratorButtonMC = new lib.GeneratorButtonMC();
	this.GeneratorButtonMC.name = "GeneratorButtonMC";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.GeneratorButtonMC},{t:this.UpgradeButtonMC},{t:this.ShopButtonMC},{t:this.AchievementButtonMC}]}).wait(1));

	// BG
	this.instance = new lib.footer();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.FooterMC, new cjs.Rectangle(0,0,1125,300), null);


(lib.AchievementPanelMC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.OpenDesciption = function (data)
		{
		    if (!this.ScrollMC.isScrolled()) {
		        this.parent.AchievementDesciptionMC.Open(data);
				playSound("popup");
		    }
		}
		
		this.Create = function() 
		{
			//アップグレード
			var posY = 600;
			posY += 50;
			this.ContentMC.upgradeTitle.y = posY;
			posY += 100;
			
			var upgradeCount = 0; 
			for (var i = 0; i < main.upgrades.length; i++)
			{
				if(main.upgrades[i].amount == 0) continue;
		
				let upgrade = main.upgrades[i];
				
				let clipBG = new lib.IconMC ();
				this.ContentMC.addChild(clipBG);
				upgrade.clipBG = clipBG;
				clipBG.x = 80 + 250 * (upgradeCount % 4);
				clipBG.y = posY + 250 * Math.floor(upgradeCount / 4);
				
				//アイコン生成
				var bitmap = new createjs.Bitmap("images/Icon/Upgrade/" + upgrade.data["icon"] + ".png");
				this.ContentMC.addChild(bitmap);
				upgrade.clipBmp = bitmap;
				bitmap.x = clipBG.x + 8;
				bitmap.y = clipBG.y + 8;
				bitmap.scaleX = 193 / 48;
				bitmap.scaleY = 193 / 48;
				bitmap.mouseEnabled = false;
		
				//ボタン生成
				let clipButton = new lib.ButtonMC ();
				this.ContentMC.addChild(clipButton);
				upgrade.clipButton = clipButton;
				clipButton.x = clipBG.x;
				clipButton.y = clipBG.y;
				clipButton.scaleX = 209 / 100;
				clipButton.scaleY = 209 / 100;
		
				clipButton.addEventListener("click", function() {
					this.OpenDesciption.call(this, upgrade);
				}.bind(this));
			
				upgradeCount++;
			}
		
			this.ContentMC.upgradeTitle.text = "アップグレード："
				+ (upgradeCount/main.upgrades.length).toFixed(3) + "%"
				+ "(" + upgradeCount + "/" + main.upgrades.length +")";
		
			posY += 250 * Math.ceil(upgradeCount / 4);
		
			//アチーブメント
			posY += 50;
			this.ContentMC.achievementTitle.y = posY;
			posY += 100;
		
			var achievementCount = 0; 
			for (var i = 0; i < main.achievements.length; i++)
			{
				let achievement = main.achievements[i];
				
				let clipBG = new lib.IconMC ();
				this.ContentMC.addChild(clipBG);
				achievement.clipBG = clipBG;
				clipBG.x = 80 + 250 * (i % 4);
				clipBG.y = posY + 250 * Math.floor(i / 4);
				
				//アイコン生成
				var bitmap;
				if(achievement.unlock)
					bitmap = new createjs.Bitmap("images/Icon/Achievement/" + achievement.data["icon"] + ".png");
				else
					bitmap = new createjs.Bitmap("images/Icon/hatena.png");
				this.ContentMC.addChild(bitmap);
				achievement.clipBmp = bitmap;
				bitmap.x = clipBG.x + 8;
				bitmap.y = clipBG.y + 8;
				bitmap.scaleX = 193 / bitmap.image.width;
				bitmap.scaleY = 193 / bitmap.image.width;
				bitmap.mouseEnabled = false;
		
				if(achievement.unlock)
				{
					//ボタン生成
					let clipButton = new lib.ButtonMC ();
					this.ContentMC.addChild(clipButton);
					achievement.clipButton = clipButton;
					clipButton.x = clipBG.x;
					clipButton.y = clipBG.y;
					clipButton.scaleX = 209 / 100;
					clipButton.scaleY = 209 / 100;
		
					clipButton.addEventListener("click", function() {
						this.OpenDesciption.call(this, achievement);
					}.bind(this));
				}
				if(achievement.unlock)
					achievementCount++;
			}
		
			this.ContentMC.achievementTitle.text = "アチーブメント："
				+ (achievementCount/main.achievements.length).toFixed(3) + "%"
				+ "(" + achievementCount + "/" + main.achievements.length +")";
		
			posY += 250 * Math.ceil(main.achievements.length / 4);
		
			this.ScrollMC.SetSize(posY);
		}
		
		this.Reset = function() 
		{
			for (var i = 0; i < main.achievements.length; i++)
			{
				let achievement = main.achievements[i];
				this.ContentMC.removeChild(achievement.clipBG);
				this.ContentMC.removeChild(achievement.clipBmp);
				this.ContentMC.removeChild(achievement.clipButton);
				achievement.clipBG = null;
				achievement.clipBmp = null;
				achievement.clipButton = null;
			}
		
			for (var i = 0; i < main.upgrades.length; i++)
			{
				if(main.upgrades[i].clipBG === null) continue;		
				let upgrade = main.upgrades[i];
				this.ContentMC.removeChild(upgrade.clipBG);
				this.ContentMC.removeChild(upgrade.clipBmp);
				this.ContentMC.removeChild(upgrade.clipButton);
				upgrade.clipBG = null;
				upgrade.clipBmp = null;
				upgrade.clipButton = null;
			}
			this.Create();
		}
		
		this.Open =  function() 
		{
			this.Reset()
			this.ScrollMC.Open();
		}
		
		this.Close =  function() 
		{
			this.ScrollMC.Close();
		}
		
		this.ScrollMC.content = this.ContentMC;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// AS
	this.ScrollMC = new lib.ScrollMC();
	this.ScrollMC.name = "ScrollMC";
	this.ScrollMC.setTransform(-75,25,1,1,0,0,0,25,25);

	this.timeline.addTween(cjs.Tween.get(this.ScrollMC).wait(1));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhX4HUwMAAAupfMCvxAAAMAAAOpfg");
	mask.setTransform(562.5,3040.7);

	// Cell
	this.ContentMC = new lib.AchievementContentMC();
	this.ContentMC.name = "ContentMC";

	var maskedShapeInstanceList = [this.ContentMC];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.ContentMC).wait(1));

	// BG
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00CC33").ss(5,1,1).p("EhX4jqXMCvxAAAMAAAHUvMivxAAAg");
	this.shape.setTransform(562.5,1500);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3399FF").s().p("EhX4DqYMAAAnUvMCvxAAAMAAAHUvg");
	this.shape_1.setTransform(562.5,1500);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.AchievementPanelMC, new cjs.Rectangle(-100.5,-2.5,1228,3005), null);


(lib.UpgradePanelMC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.OpenDesciption = function (upgrade)
		{
		    if (!this.ScrollMC.isScrolled()) {
		        this.parent.UpgradeDesciptionMC.Open(upgrade);
				playSound("popup");
		    }
		}
		
		this.Addupgrade = function (upgrade)
		{
		    if (!this.ScrollMC.isScrolled()) {
				main.BuyUpgrade(upgrade);
		    }
		}
		
		this.Create = function() 
		{
			this.ContentMC.UpgradeCellMC.visible = false;
			
			for (var i = 0; i < main.upgradesInStore.length; i++)
			{
				let upgrade = main.upgradesInStore[i];
				
				let clip = new lib.UpgradeCellMC();
				this.ContentMC.addChild(clip);
				clip.gotoAndStop("On");
				clip.title.text = upgrade.data["name"];
				clip.cost.text = FormatNumber(upgrade.baseCost, 1);
				clip.x = 0;
				clip.y = 0 + 280 * i;
				upgrade.clip = clip;
			
				clip.IconButtonMC.addEventListener("click", function() {
					this.OpenDesciption.call(this, upgrade);
				}.bind(this));	
				clip.ButtonMC.addEventListener("click", function() {
					this.Addupgrade.call(this, upgrade);
				}.bind(this));	
		
				//アイコン生成
				var bitmap = new createjs.Bitmap("images/Icon/Upgrade/" + upgrade.data["icon"] + ".png");
				clip.IconMC.addChild(bitmap);
				bitmap.x = 10;
				bitmap.y = 10;
				bitmap.scaleX = 193 / 48;
				bitmap.scaleY = 193 / 48;
				bitmap.mouseEnabled = false;
			}
		}
		
		this.Reset = function() 
		{
			for (var i = 0; i < main.upgradesInStore.length; i++)
			{
				main.upgrades[i].clpi = null;
			}
			this.ContentMC.removeAllChildren();
			this.Create();
		}
		
		
		this.Open =  function() 
		{
			this.ScrollMC.Open();
			this._Tick = createjs.Ticker.addEventListener("tick", this.Tick.bind(this));	
		}
		
		this.Close =  function() 
		{
			this.ScrollMC.Close();
			createjs.Ticker.removeEventListener("tick", this._Tick);	
		}
		
		this.ScrollMC.content = this.ContentMC;
		
		this._Tick;
		this.Tick = function(event)
		{
			for (var i = 0; i < main.upgradesInStore.length; i++)
			{
				let upgrade = main.upgradesInStore[i];
				if(main.sushi >= upgrade.baseCost)
				{
					upgrade.clip.gotoAndStop("Active");
					upgrade.clip.cost.color ="#00FF00";
				}
				else
				{
					upgrade.clip.gotoAndStop("Lock");
					upgrade.clip.cost.color ="#C5253A";
				}
			}
			this.ScrollMC.count = main.upgradesInStore.length;
			this.ScrollMC.Reload();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// AS
	this.ScrollMC = new lib.ScrollMC();
	this.ScrollMC.name = "ScrollMC";
	this.ScrollMC.setTransform(-75,25,1,1,0,0,0,25,25);

	this.timeline.addTween(cjs.Tween.get(this.ScrollMC).wait(1));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhX4BEIMAAAiIPMCvxAAAMAAACIPg");
	mask.setTransform(562.5,476.7);

	// Cell
	this.ContentMC = new lib.UpgradeContentMC();
	this.ContentMC.name = "ContentMC";

	var maskedShapeInstanceList = [this.ContentMC];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.ContentMC).wait(1));

	// BG
	this.instance = new lib.panel();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.UpgradePanelMC, new cjs.Rectangle(-100.5,-0.5,1225.5,985.5), null);


(lib.GeneratorPanelMC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.OpenDesciption = function (generator)
		{
		    if (!this.ScrollMC.isScrolled()) {
		        this.parent.GeneratorDesciptionMC.Open(generator);
				playSound("popup");
		    }
		}
		
		this.AddGenerator = function (generator)
		{
		    if (!this.ScrollMC.isScrolled()) {
				main.BuyGenerator(generator);
		    }
		}
		
		this.Create = function() 
		{
			this.ContentMC.GeneratorCellMC.visible = false;
			
			for (var i = 0; i < main.generators.length; i++)
			{
				let generator = main.generators[i];
				
				let clip = new lib.GeneratorCellMC ();
				this.ContentMC.addChild(clip);
				clip.gotoAndStop("On");
				clip.title.text = generator.data["name"];
				clip.cost.text = FormatNumber(generator.storedCost, 1);
				clip.amount.text = generator.amount;
				clip.x = 0;
				clip.y = 0 + 280 * i;
				generator.clip = clip;
			
				clip.IconButtonMC.addEventListener("click", function() {
					this.OpenDesciption.call(this, generator);
				}.bind(this));	
				clip.ButtonMC.addEventListener("click", function() {
					this.AddGenerator.call(this, generator);
				}.bind(this));	
		
				//アイコン生成
				var bitmap = new createjs.Bitmap("images/Icon/" + generator.dir + "/" + generator.data["icon"] + ".png");
				clip.IconMC.addChild(bitmap);
				bitmap.x = 10;
				bitmap.y = 10;
				bitmap.scaleX = 193 / 64;
				bitmap.scaleY = 193 / 64;
				bitmap.mouseEnabled = false;
			}
		}
		
		this.Open =  function() 
		{
			this.ScrollMC.Open();
			this._Tick = createjs.Ticker.addEventListener("tick", this.Tick.bind(this));	
		}
		
		this.Close =  function() 
		{
			this.ScrollMC.Close();
			createjs.Ticker.removeEventListener("tick", this._Tick);	
		}
		
		this.ScrollMC.content = this.ContentMC;
		
		this._Tick;
		this.Tick = function(event)
		{
			var dispCount = 0;	
			var lastLocked = 0;
			for (var i = 0; i < main.generators.length; i++)
			{
				let generator = main.generators[i];
				
				generator.clip.visible = true;	
		
				if (generator.amount > 0)
				{
					generator.clip.gotoAndStop("Active");
					lastLocked = 0;
					dispCount++;
				}
				else if(main.sushi >= generator.storedCost)
				{
					generator.clip.gotoAndStop("Lock");
					dispCount++;
				}
				else
				{
					if(lastLocked < 2)
					{
						generator.clip.gotoAndStop("Notice");
						dispCount++;
					}
					else
					{
						generator.clip.visible = false;	
					}
				}
			
				lastLocked++;
				
				if(main.sushi >= generator.storedCost)
					generator.clip.cost.color ="#00FF00";
				else
					generator.clip.cost.color ="#C5253A";
			
			}
			this.ScrollMC.count = dispCount;
			this.ScrollMC.Reload();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// AS
	this.ScrollMC = new lib.ScrollMC();
	this.ScrollMC.name = "ScrollMC";
	this.ScrollMC.setTransform(-75,25,1,1,0,0,0,25,25);

	this.timeline.addTween(cjs.Tween.get(this.ScrollMC).wait(1));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhX4BEIMAAAiIPMCvxAAAMAAACIPg");
	mask.setTransform(562.5,476.7);

	// Cell
	this.ContentMC = new lib.GeneratorContentMC();
	this.ContentMC.name = "ContentMC";

	var maskedShapeInstanceList = [this.ContentMC];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.ContentMC).wait(1));

	// BG
	this.instance = new lib.panel();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.GeneratorPanelMC, new cjs.Rectangle(-100.5,-0.5,1225.5,985.5), null);


// stage content:
(lib.index = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.name = "root";
		
		class Generator
		{
		    constructor()
			{
				this.data;
				this.category = 1;
				this.dir = "Generator";
				this.sps = 0;
				this.storedSps = 0;
				this.amount = 0;//bought
				this.totalSushies = 0;
				this.storedTotalSps = 0;
				this.baseCost = 0;//basePrice
				this.storedCost = 0;
				this.lock = true;
				this.free = 0;//?
				
				this.clip = null;
		    }
		
			CalculateSps = function()
			{
				this.storedSps = this.sps;
			}
		}
		
		class Upgrade
		{
		    constructor()
			{
				this.data;
				this.category = 2;
				this.dir = "Upgrade";
		
				this.amount = 0;//bought
				this.baseCost = 0;//basePrice
				this.type = 0;
				this.type2 = 0;
				
				this.clip = null;
				this.clipBG = null;
				this.clipBmp = null;
				this.clipButton = null;
		    }
		
			//CalculateSps = function()
			//{
			//	this.storedSps = this.sps;
			//}
		}
		
		class Achievement
		{
		    constructor()
			{
				this.data;
				this.category = 3;
				this.dir = "Achievement";
				this.unlock = false;
				
				this.clip = null;
				this.clipBG = null;
				this.clipBmp = null;
				this.clipButton = null;
		    }
		}
		
		class Main
		{
		    constructor()
			{
				this.root = stage.getChildByName("root");
				
				this.isAddTouchCps = false;	
				
		        this.sushi = 0;
		        this.totalSushi = 0;
				this.upgrade = [];
				
				this.sushiPs = 0;
				this.add = 0;
				this.computedTouchCps = 0
				this.fractionSps = 0;
				
				this.priceIncrease = 1.15;
				
		
				this.generators = [];
				this.Init_Generators();
				
				this.upgradesInStore = [];
				this.upgrades = [];	
				this.Init_Upgrades();
				this.RebuildUpgrades();
				
				this.fps = 60;
				this.lastTickTime = 0;
				this.interval = 1000;		
				
				this.achievements = [];
				this.Init_Achievements();
		
				this.computedTouchSps = this.TouchSps();		
				
				createjs.Ticker.framerate = this.fps;
				createjs.Ticker.timingMode = createjs.Ticker.RAF;
				createjs.Ticker.addEventListener("tick", this.MainTick.bind(this));	
		    }
		
		
			RebuildUpgrades = function()
			{
				var list=[];
				for (var i = 0; i < this.upgrades.length; i++)
				{
					var upgrade = this.upgrades[i];
					if (upgrade.amount == 0)
					{
						list.push(upgrade);
					}
				}
				this.upgradesInStore=[];
				for (var i in list)
				{
					this.upgradesInStore.push(list[i]);
				}
			}
		
		    Init_Upgrades() 
			{
				for (var i = 0; i < upgradeData.length; i++)
				{
					var	upgrade = new Upgrade();
					upgrade.data = upgradeData[i];
					upgrade.baseCost = upgradeData[i]["cost"];
					upgrade.type = upgradeData[i]["type"];
					upgrade.type2 = upgradeData[i]["type2"];
					this.upgrades.push(upgrade);
				}
		    }
		
		    Init_Generators() 
			{
				for (var i = 0; i < generatorData.length; i++)
				{
					var	generator = new Generator();
					generator.data = generatorData[i];
					generator.sps = generatorData[i]["sps"];
					generator.baseCost = generatorData[i]["cost"];
					generator.storedCost = this.GetCost(generator);			
					this.generators.push(generator);
				}
		    }
		
		    Init_Achievements() 
			{
				for (var i = 0; i < achievementData.length; i++)
				{
					var	achievement = new Achievement();
					achievement.data = achievementData[i];	
					this.achievements.push(achievement);
					
		achievement.unlock = Math.random() < 0.5 ? true : false;	
					
				}
		    }
		
		    AddSushi(value) {
				if(this.isAddTouchCps)
					value = value * 1000;		
		        this.sushi += value;
		        this.totalSushi += value;
				this.root.HeaderMC.Sushi.text = FormatNumber(main.sushi, 1) + " pieces";
		    }
		
			ComputeCps = function(base,mult,bonus)
			{
				if (!bonus) bonus = 0;
				return ((base)*(Math.pow(2,mult))+bonus);
			}
		
		    TouchSps() {
		
				var add = 0;
		
				//Fingers
				for (var i = 0; i < this.upgrades.length; i++)
				{
					var upgrade = this.upgrades[i];			
					if(upgrade.amount == 0) continue;
					if(upgrade.type != 2) continue;
							
					if(upgrade.type2 == 2)
					{	
						add += upgradeData[i].sps;
					}
					else if(upgrade.type2 == 3)
					{
						add *= this.sushiPs * upgradeData[i].sps;
					}
				}
				
				//Pointer
				for (i = 0; i < this.upgrades.length; i++)
				{
					var upgrade = this.upgrades[i];			
					if(upgrade.amount == 0) continue;
					
					if(this.upgrades[i].type == 1)
						add += this.sushiPs * upgradeData[i].sps;
				}
		
				var mult=1;
				var out = mult * this.ComputeCps(1, 0, add);
		
				return out;
		    }
		
			CalculateGains = function()
			{
				this.sushiPs=0;
				var mult=1;
		
				for (var i = 0; i < this.generators.length; i++)
				{
					this.generators[i].CalculateSps();
					this.generators[i].storedTotalSps = this.generators[i].amount * this.generators[i].storedSps;
					this.sushiPs += this.generators[i].storedTotalSps;
					this.sushiPs = Number(this.sushiPs.toFixed(2));
				}
			
		
				this.root.HeaderMC.Sps.text = "per Second : " + FormatNumber(this.sushiPs, 1) + " pieces";
			}
		
			BuyGenerator = function(generator)
			{
				if(this.sushi >= generator.storedCost)
				{
					this.sushi -= generator.storedCost;
					generator.amount++;
					generator.clip.amount.text = generator.amount;
					main.CalculateGains();
					playSound("generator");
					generator.storedCost = this.GetCost(generator);
					generator.clip.cost.text = FormatNumber(generator.storedCost, 1);
				}
			}
		
			GetCost = function(generator)
			{
				var cost = generator.baseCost * Math.pow(this.priceIncrease, Math.max(0, generator.amount - generator.free));
				return Math.ceil(cost);
			}
		
			BuyUpgrade = function(upgrade)
			{
				if(this.sushi >= upgrade.baseCost)
				{
					this.sushi -= upgrade.baseCost;
					upgrade.amount++;
					main.CalculateGains();
					playSound("generator");
					this.RebuildUpgrades();
					this.CalculateGains();
				
					this.root.UpgradePanelMC.Reset();
				}
				this.computedTouchSps = this.TouchSps();
			}
		
			MainTick = function(event)
			{
				var now = createjs.Ticker.getTime();
				var delta = now - this.lastTickTime;
				while (delta >= this.interval) {
					//console.log("1秒経過");
					
					this.CalculateGains();
		
					for (var i = 0; i < this.generators.length; i++)
					{
						this.generators[i].totalSushies += this.generators[i].storedTotalSps;
					}
		
					var ammount = this.sushiPs + this.fractionSps;
					this.fractionSps = ammount - Math.floor(ammount);
					ammount -= this.fractionSps;
					this.AddSushi(ammount);
					
					delta -= this.interval;
					this.lastTickTime += this.interval;
				}
				this.lastTickTime = now - delta;
			}
		}
		
		this.HeaderMC.DebugMC.on("click", function(evt) {
			if(main.isAddTouchCps){
				main.isAddTouchCps = false;
				this.status.text = "Normal";
			}else{
				main.isAddTouchCps = true;
				this.status.text = "Debug";
			}
		});
		
		main = new Main();
		if (createjs.Touch.isSupported())
		    createjs.Touch.enable(stage);
		 
		stage.enableMouseOver(20); 
		 
		//this.name = "root";
		//stage.getChildByName("root").log1.text = new Date().getTime();	
		
		//1125 * 2436
		this.canvasScaleX = document.documentElement.clientWidth / 1125;
		this.canvasScaleY = document.documentElement.clientHeight / 2436;
		
		this.BgMC.scaleX = this.canvasScaleX;
		this.BgMC.scaleY = this.canvasScaleY;
		
		this.HeaderMC.scaleX = this.canvasScaleX;
		this.HeaderMC.scaleY = this.canvasScaleX;
		
		this.FooterMC.scaleX = this.canvasScaleX;
		this.FooterMC.scaleY = this.canvasScaleX;
		this.FooterMC.y = 2436 * this.canvasScaleY;
		
		this.UpperBGMC.scaleX = this.canvasScaleX;
		this.UpperBGMC.scaleY = this.canvasScaleX;
		
		this.UnderBGMC.scaleX = this.canvasScaleX;
		this.UnderBGMC.scaleY = this.canvasScaleX;
		this.UnderBGMC.y = 2436 * this.canvasScaleY;
		
		this.MaskMC.visible = false;
		
		this.executeNextFrame = function(callback) {
		    setTimeout(callback, 0);
		}
		
		this.executeNextFrame(() => {
			this.GeneratorPanelMC.Create();
			this.UpgradePanelMC.Create();
			this.AchievementPanelMC.Create();
		});
		this.page = 0;
		this.GeneratorPanelMC.visible = false;
		this.UpgradePanelMC.visible = false;
		this.ShopPanelMC.visible = false;
		this.AchievementPanelMC.visible = false;
		
		//GeneratorPanel
		this.FooterMC.GeneratorButtonMC.addEventListener("click", ClickHandler_GeneratorPanelOpen.bind(this));
		function ClickHandler_GeneratorPanelOpen()
		{
			this.PanelOpen(1);
			playSound("open");
		}
		this.GeneratorPanelMC.scaleX = this.canvasScaleX;
		this.GeneratorPanelMC.scaleY = this.canvasScaleX;
		this.GeneratorPanelMC.x = 0;
		this.GeneratorPanelMC.y = 2436 * this.canvasScaleY -300 * this.canvasScaleX + 914 * this.canvasScaleX;
		this.GeneratorPanelMC.visible = false;	
		
		//UpgradePanel
		this.FooterMC.UpgradeButtonMC.addEventListener("click", ClickHandler_UpgradePanelOpen.bind(this));
		function ClickHandler_UpgradePanelOpen()
		{
			this.PanelOpen(2);
			playSound("open");
		}
		this.UpgradePanelMC.scaleX = this.canvasScaleX;
		this.UpgradePanelMC.scaleY = this.canvasScaleX;
		this.UpgradePanelMC.x = 0;
		this.UpgradePanelMC.y = 2436 * this.canvasScaleY -300 * this.canvasScaleX;
		this.UpgradePanelMC.visible = false;	
		
		//ShopPanel
		this.FooterMC.ShopButtonMC.addEventListener("click", ClickHandler_ShopPanelOpen.bind(this));
		function ClickHandler_ShopPanelOpen()
		{
			this.PanelOpen(3);
			playSound("open");
		}
		this.ShopPanelMC.scaleX = this.canvasScaleX;
		this.ShopPanelMC.scaleY = this.canvasScaleX;
		this.ShopPanelMC.x = 0;
		this.ShopPanelMC.y = 2436 * this.canvasScaleY -300 * this.canvasScaleX;
		this.ShopPanelMC.visible = false;	
		
		//AchievementPanel
		this.FooterMC.AchievementButtonMC.addEventListener("click", ClickHandler_AchievementPanelOpen.bind(this));
		function ClickHandler_AchievementPanelOpen()
		{
			this.PanelOpen(4);
			playSound("open");
		}
		this.AchievementPanelMC.scaleX = this.canvasScaleX;
		this.AchievementPanelMC.scaleY = this.canvasScaleX;
		this.AchievementPanelMC.x = 0;
		this.AchievementPanelMC.y = 2436 * this.canvasScaleY -300 * this.canvasScaleX;
		this.AchievementPanelMC.visible = false;	
		
		this.PanelOpen = function (_page)
		{
			switch (this.page)
			{
				case 1:
					this.Close(this.GeneratorPanelMC);
					this.GeneratorPanelMC.Close();
					break;
				case 2:
					this.Close(this.UpgradePanelMC);
					this.UpgradePanelMC.Close();
					break;
				case 3:
					this.Close(this.ShopPanelMC);
					break;
				case 4:
					this.Close(this.AchievementPanelMC);
					this.AchievementPanelMC.Close();
					break;
		    }	
		
			if(this.page != _page)
			{
				switch (_page)
				{
					case 1:
						this.Open(this.GeneratorPanelMC, false);
						this.GeneratorPanelMC.Open();
						break;
					case 2:
						this.Open(this.UpgradePanelMC, false);
						this.UpgradePanelMC.Open();
						break;
					case 3:
						this.Open(this.ShopPanelMC, false);
						break;
					case 4:
						this.Open(this.AchievementPanelMC, true);
						this.AchievementPanelMC.Open();
						break;
				}
				this.page = _page;
		    }
			else
			{
				this.page = 0;
			}
		}
		
		this.Close = function (_targetMC)
		{
			//パネルの移動
			createjs.Tween.get(_targetMC, { override: true })
			.to({ x: 0, y: 2436 * this.canvasScaleY -300 * this.canvasScaleX + 914 * this.canvasScaleX }, 250, createjs.Ease.backInOut)
			.call(() => {
				_targetMC.visible = false;
		    });
		
			//寿司の移動
			createjs.Tween.get(this.SushiMC, { override: true })
			.to({ y: document.documentElement.clientHeight / 2 }, 250, createjs.Ease.cubicInOut);
		
			//背景も動かす場合
			//createjs.Tween.get(this.BgMC, { override: true })
			//.to({ y: 0 }, 250, createjs.Ease.backInOut);
		}
		
		this.Open = function (_targetMC, isFull)
		{
			//初期位置
			_targetMC.y =  2436 * this.canvasScaleY -300 * this.canvasScaleX + 914 * this.canvasScaleX;
			_targetMC.visible = true;	
			
			if(isFull)
			{
				//パネルの移動
				var y = (914 * this.canvasScaleX) + (278 * this.canvasScaleX);		
				createjs.Tween.get(_targetMC, { override: true })
				.to({ x: 0, y: y }, 250, createjs.Ease.bounceOut);
			}
			else
			{
				//パネルの移動
				createjs.Tween.get(_targetMC, { override: true })
					.to({ x: 0, y: 2436 * this.canvasScaleY -300 * this.canvasScaleX }, 250, createjs.Ease.bounceOut);
			
				//寿司の移動
				var y = ((2436 * this.canvasScaleY -300 * this.canvasScaleX -914 * this.canvasScaleX)
					- (278 * this.canvasScaleX)) / 2 + (278 * this.canvasScaleX);
				createjs.Tween.get(this.SushiMC, { override: true })
				.to({ y: y }, 250, createjs.Ease.cubicInOut);
			}
		
			//背景も動かす場合
			//createjs.Tween.get(this.BgMC, { override: true })
			//.to({ y: y - document.documentElement.clientHeight / 2 }, 250, createjs.Ease.expoOut);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// AS_Game
	this.instance = new lib.DispNumMC();
	this.instance.setTransform(-131.7,-100.85);

	this.text = new cjs.Text("16", "50px 'MS Gothic'", "#FF0000");
	this.text.lineHeight = 52;
	this.text.lineWidth = 90;
	this.text.parent = this;
	this.text.setTransform(34,-249.05);

	this.log1 = new cjs.Text("1", "50px 'MS Gothic'", "#FF0000");
	this.log1.name = "log1";
	this.log1.lineHeight = 52;
	this.log1.lineWidth = 580;
	this.log1.parent = this;
	this.log1.setTransform(24.05,-334.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.log1},{t:this.text},{t:this.instance}]}).wait(1));

	// Desciption
	this.AchievementDesciptionMC = new lib.AchievementDesciptionMC();
	this.AchievementDesciptionMC.name = "AchievementDesciptionMC";
	this.AchievementDesciptionMC.setTransform(-2453.7,1330.2,1,1,0,0,0,522,572.5);

	this.UpgradeDesciptionMC = new lib.UpgradeDesciptionMC();
	this.UpgradeDesciptionMC.name = "UpgradeDesciptionMC";
	this.UpgradeDesciptionMC.setTransform(-1409.7,185.2,1,1,0,0,0,522,572.5);

	this.GeneratorDesciptionMC = new lib.GeneratorDesciptionMC();
	this.GeneratorDesciptionMC.name = "GeneratorDesciptionMC";
	this.GeneratorDesciptionMC.setTransform(-2453.7,185.2,1,1,0,0,0,522,572.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.GeneratorDesciptionMC},{t:this.UpgradeDesciptionMC},{t:this.AchievementDesciptionMC}]}).wait(1));

	// Mask
	this.MaskMC = new lib.MaskMC();
	this.MaskMC.name = "MaskMC";
	this.MaskMC.setTransform(563,1218,50.0005,50.0005,0,0,0,50,50);

	this.timeline.addTween(cjs.Tween.get(this.MaskMC).wait(1));

	// Menu
	this.HeaderMC = new lib.HeaderMC();
	this.HeaderMC.name = "HeaderMC";

	this.FooterMC = new lib.FooterMC();
	this.FooterMC.name = "FooterMC";
	this.FooterMC.setTransform(0,2436,1,1,0,0,0,0,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.FooterMC},{t:this.HeaderMC}]}).wait(1));

	// Panel
	this.ShopPanelMC = new lib.ShopPanelMC();
	this.ShopPanelMC.name = "ShopPanelMC";
	this.ShopPanelMC.setTransform(-288.4,3875,1,1,0,0,0,0,1200);

	this.AchievementPanelMC = new lib.AchievementPanelMC();
	this.AchievementPanelMC.name = "AchievementPanelMC";
	this.AchievementPanelMC.setTransform(973.35,3594.6,1,1,0,0,0,0,919.6);

	this.UpgradePanelMC = new lib.UpgradePanelMC();
	this.UpgradePanelMC.name = "UpgradePanelMC";
	this.UpgradePanelMC.setTransform(-1790.7,3590.6,1,1,0,0,0,0,915.6);

	this.GeneratorPanelMC = new lib.GeneratorPanelMC();
	this.GeneratorPanelMC.name = "GeneratorPanelMC";
	this.GeneratorPanelMC.setTransform(-3098.95,3588,1,1,0,0,0,0,913);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.GeneratorPanelMC},{t:this.UpgradePanelMC},{t:this.AchievementPanelMC},{t:this.ShopPanelMC}]}).wait(1));

	// Sushi
	this.SushiMC = new lib.SushiMC();
	this.SushiMC.name = "SushiMC";
	this.SushiMC.setTransform(563,1218,1,1,0,0,0,500,300);

	this.timeline.addTween(cjs.Tween.get(this.SushiMC).wait(1));

	// BG
	this.UpperBGMC = new lib.UpperBGMC();
	this.UpperBGMC.name = "UpperBGMC";

	this.UnderBGMC = new lib.UnderBGMC();
	this.UnderBGMC.name = "UnderBGMC";
	this.UnderBGMC.setTransform(0,2436,1,1,0,0,0,0,509);

	this.BgMC = new lib.bgMC();
	this.BgMC.name = "BgMC";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.BgMC},{t:this.UnderBGMC},{t:this.UpperBGMC}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-2636.9,-64,5700,8779.7);
// library properties:
lib.properties = {
	id: '969C0F3DFF839440AC4059700CCE57F9',
	width: 1125,
	height: 2436,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg1.png", id:"bg1"},
		{src:"images/index_atlas_1.png", id:"index_atlas_1"},
		{src:"images/index_atlas_2.png", id:"index_atlas_2"},
		{src:"images/index_atlas_3.png", id:"index_atlas_3"},
		{src:"images/index_atlas_4.png", id:"index_atlas_4"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['969C0F3DFF839440AC4059700CCE57F9'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;