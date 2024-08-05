(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[0,0,1044,1145]]},
		{name:"index_atlas_2", frames: [[0,1589,1123,305],[0,0,1125,985],[0,987,1000,600]]},
		{name:"index_atlas_3", frames: [[0,582,262,232],[0,0,1125,300],[264,582,262,232],[0,302,1125,278],[1056,582,209,209],[528,582,262,232],[1127,0,137,86],[792,582,262,232]]}
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



(lib.achievementButton = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg1 = function() {
	this.initialize(img.bg1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2436,2436);


(lib.bg_effect = function() {
	this.initialize(img.bg_effect);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1125,2436);


(lib.cellBG = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.dialogBG = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.footer = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.generatorButton = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.header = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.iconFrame = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.panel = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.shopButton = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.sushi = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.sushiIcon = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.upgradeButton = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(7);
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


(lib.シンボル1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.bg_effect();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.シンボル1, new cjs.Rectangle(0,0,1125,2436), null);


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
	this.shape.graphics.f("rgba(0,0,0,0.247)").s().p("AnzH0IAAvnIPnAAIAAPng");
	this.shape.setTransform(50,50);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MaskMC, new cjs.Rectangle(0,0,100,100), null);


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

	// レイヤー_3
	this.text = new cjs.Text("Sushi!!", "100px 'Potta One'", "#FF0000");
	this.text.textAlign = "center";
	this.text.lineHeight = 147;
	this.text.lineWidth = 816;
	this.text.parent = this;
	this.text.setTransform(490,335);

	this.Sps = new cjs.Text("123", "100px 'MS Gothic'", "#FF0000");
	this.Sps.name = "Sps";
	this.Sps.textAlign = "center";
	this.Sps.lineHeight = 102;
	this.Sps.lineWidth = 848;
	this.Sps.parent = this;
	this.Sps.setTransform(554.15,150.05);

	this.Sushi = new cjs.Text("123", "100px 'MS Gothic'", "#FF0000");
	this.Sushi.name = "Sushi";
	this.Sushi.textAlign = "center";
	this.Sushi.lineHeight = 102;
	this.Sushi.lineWidth = 816;
	this.Sushi.parent = this;
	this.Sushi.setTransform(538.15,20.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Sushi},{t:this.Sps},{t:this.text}]}).wait(1));

	// BG
	this.instance = new lib.header();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HeaderMC, new cjs.Rectangle(0,0,1125,481.8), null);


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


(lib.AchievementCellMC = function(mode,startPosition,loop,reversed) {
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
	this.title = new cjs.Text("aaaa", "100px 'MS Gothic'");
	this.title.name = "title";
	this.title.textAlign = "center";
	this.title.lineHeight = 102;
	this.title.lineWidth = 528;
	this.title.parent = this;
	this.title.setTransform(466.15,48.1);

	this.timeline.addTween(cjs.Tween.get(this.title).wait(1));

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00CC33").ss(4,1,1).p("EhOHgPnMCcPAAAIAAfPMicPAAAg");
	this.shape.setTransform(500,100);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC3333").s().p("EhOHAPoIAA/PMCcPAAAIAAfPg");
	this.shape_1.setTransform(500,100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.AchievementCellMC, new cjs.Rectangle(-2,-2,1004,204), null);


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
		
		this.CloseDesciption = function()
		{
		    createjs.Tween.get(this, {
		        override: true
		    })
		    .to({ scaleX: 0, scaleY: 0 }, 250, createjs.Ease.backInOut)
		    .call(() => {
		        this.visible = false;
		    });     
		}
		this.CloseButtonMC.addEventListener("click", this.CloseDesciption.bind(this));
		
		this.Open = function(cellMC)
		{
		    this.visible = true;
		    this.scaleX = 0;
		    this.scaleY = 0;    
		    
		    createjs.Tween.get(this, {
		        override: true
		    })
		    .to({ scaleX: this.parent.canvasScaleX, scaleY: this.parent.canvasScaleX }, 250, createjs.Ease.backInOut);  
		
		    if( this.bitmap !== undefined)
		        this.removeChild(this.bitmap);
		
		    //アイコン生成
		    this.bitmap = new createjs.Bitmap("images/Icon/Upgrade/" + upgradeData[cellMC.dataIndex]["icon"] + ".png");
		    this.addChild(this.bitmap);
		    this.bitmap.x = 26;
		    this.bitmap.y = 26;
		    this.bitmap.scaleX = 150 / 48;
		    this.bitmap.scaleY = 150 / 48;
		    this.bitmap.mouseEnabled = false;
		
		    this.title.text = upgradeData[cellMC.dataIndex]["name"];
		    this.desciption.text = upgradeData[cellMC.dataIndex]["desciption"];
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Button
	this.CloseButtonMC = new lib.ButtonMC();
	this.CloseButtonMC.name = "CloseButtonMC";
	this.CloseButtonMC.setTransform(500,500,1,1,0,0,0,50,50);

	this.timeline.addTween(cjs.Tween.get(this.CloseButtonMC).wait(1));

	// レイヤー_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00CC33").ss(4,1,1).p("ArtrtIXbAAIAAXbI3bAAg");
	this.shape.setTransform(101,101);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ArtLuIAA3bIXbAAIAAXbg");
	this.shape_1.setTransform(101,101);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// レイヤー_4
	this.count = new cjs.Text("999", "50px 'MS Gothic'");
	this.count.name = "count";
	this.count.lineHeight = 52;
	this.count.lineWidth = 106;
	this.count.parent = this;
	this.count.setTransform(428.2,114);

	this.desciption = new cjs.Text("aaaaa", "50px 'MS Gothic'");
	this.desciption.name = "desciption";
	this.desciption.lineHeight = 52;
	this.desciption.lineWidth = 938;
	this.desciption.parent = this;
	this.desciption.setTransform(28,202.1);

	this.title = new cjs.Text("sushi shokunin", "50px 'MS Gothic'");
	this.title.name = "title";
	this.title.lineHeight = 52;
	this.title.lineWidth = 596;
	this.title.parent = this;
	this.title.setTransform(188.3,28);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.title},{t:this.desciption},{t:this.count}]}).wait(1));

	// レイヤー_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00CC33").ss(5,1,1).p("EhOHhOHMCcPAAAMAAACcPMicPAAAg");
	this.shape_2.setTransform(499.95,500);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#996699").s().p("EhOHBOIMAAAicPMCcPAAAMAAACcPg");
	this.shape_3.setTransform(499.95,500);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.UpgradeDesciptionMC, new cjs.Rectangle(-2.5,-2.5,1005,1005), null);


(lib.UpgradeCellMC = function(mode,startPosition,loop,reversed) {
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
		
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Icon_Button
	this.IconButtonMC = new lib.ButtonMC();
	this.IconButtonMC.name = "IconButtonMC";
	this.IconButtonMC.setTransform(102,101,1.5,1.5,0,0,0,50,50);

	this.timeline.addTween(cjs.Tween.get(this.IconButtonMC).wait(1));

	// Button
	this.ButtonMC = new lib.ButtonMC();
	this.ButtonMC.name = "ButtonMC";
	this.ButtonMC.setTransform(501,99.8,10,2,0,0,0,50.1,49.9);

	this.timeline.addTween(cjs.Tween.get(this.ButtonMC).wait(1));

	// レイヤー_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00CC33").ss(4,1,1).p("ArtrtIXbAAIAAXbI3bAAg");
	this.shape.setTransform(101,101);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ArtLuIAA3bIXbAAIAAXbg");
	this.shape_1.setTransform(101,101);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// レイヤー_2
	this.count = new cjs.Text("999", "50px 'MS Gothic'");
	this.count.name = "count";
	this.count.lineHeight = 52;
	this.count.lineWidth = 106;
	this.count.parent = this;
	this.count.setTransform(836.25,73);

	this.cost = new cjs.Text("3,000,000", "50px 'MS Gothic'");
	this.cost.name = "cost";
	this.cost.lineHeight = 52;
	this.cost.lineWidth = 528;
	this.cost.parent = this;
	this.cost.setTransform(202.1,114);

	this.title = new cjs.Text("sushi shokunin", "50px 'MS Gothic'");
	this.title.name = "title";
	this.title.lineHeight = 52;
	this.title.lineWidth = 596;
	this.title.parent = this;
	this.title.setTransform(202,28);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.title},{t:this.cost},{t:this.count}]}).wait(1));

	// レイヤー_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00CC33").ss(4,1,1).p("EhOHgPnMCcPAAAIAAfPMicPAAAg");
	this.shape_2.setTransform(500,100);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC3333").s().p("EhOHAPoIAA/PMCcPAAAIAAfPg");
	this.shape_3.setTransform(500,100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.UpgradeCellMC, new cjs.Rectangle(-2,-2,1004,204), null);


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
		
		this.ClickHandler_Click = function()
		{
		
		
		var amount = main.computedTouchSps;
		
			
			//var amount = amount ? amount : main.computedTouchSpsCps;
			
			main.AddSushi(amount);
			
		}
		
		this.ButtonMC.addEventListener("click", this.ClickHandler_Click.bind(this));
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Image
	this.instance = new lib.sushi();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Button
	this.ButtonMC = new lib.ButtonMC();
	this.ButtonMC.name = "ButtonMC";
	this.ButtonMC.setTransform(498,298.8,10.0003,5.9999,0,0,0,49.8,49.8);

	this.timeline.addTween(cjs.Tween.get(this.ButtonMC).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SushiMC, new cjs.Rectangle(0,0,1000.1,600), null);


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
		
		this.CloseDesciption = function()
		{
			this.MaskMC.visible = false;
			
			createjs.Tween.get(this, {
				override: true
			})
			.to({ scaleX: 0, scaleY: 0 }, 250, createjs.Ease.backInOut)
			.call(() => {
				this.visible = false;
		    });	
			createjs.Ticker.removeEventListener('tick', this._Tick);	
		} 
		this.CloseButtonMC.addEventListener("click", this.CloseDesciption.bind(this));
		
		this.Open = function(cellMC)
		{
			this.dataIndex = cellMC.dataIndex;
			
			this.visible = true;
			this.scaleX = 0;
			this.scaleY = 0;	
			this.MaskMC.visible = true;
			
			createjs.Tween.get(this, {
				override: true
			})
			.to({ scaleX: this.parent.canvasScaleX, scaleY: this.parent.canvasScaleX }, 250, createjs.Ease.backInOut);	
		
			if( this.bitmap !== undefined)
				this.removeChild(this.bitmap);
		
			//アイコン生成
			this.bitmap = new createjs.Bitmap("images/Icon/Generator/" + buildingData[cellMC.dataIndex]["icon"] + ".png");
			this.addChild(this.bitmap);
			this.bitmap.x = 54;
			this.bitmap.y = 68;
			this.bitmap.scaleX = 193 / 64;
			this.bitmap.scaleY = 193 / 64;
			this.bitmap.mouseEnabled = false;
		
			this.title.text = buildingData[cellMC.dataIndex]["name"];
			this.desciption.text = buildingData[cellMC.dataIndex]["desciption"];
		
			this._Tick = createjs.Ticker.addEventListener("tick", this.Tick.bind(this));	
		}
		
		this._Tick;
		this.dataIndex;
		
		this.Tick = function(event)
		{
			var text1 = "各[x]が毎秒[y]Sushi生産";
			this.desciption1.text = 
				text1.replace("[x]", main.generators[this.dataIndex].name)
				.replace("[y]", Math.floor(main.generators[this.dataIndex].storedTotalSps));
			
			var text2 = "[x][y]が毎秒[z]Sushi生産(合計SpSの[w]%)";
			this.desciption2.text = 
				text2.replace("[x]", main.generators[this.dataIndex].amount)
				.replace("[y]", main.generators[this.dataIndex].name)
				.replace("[z]", Math.floor(main.generators[this.dataIndex].storedTotalSps))
				.replace("[w]", Math.floor(main.generators[this.dataIndex].storedTotalSps));
			
			var text3 = "これまで[x]Sushi生産";
			this.desciption3.text = text3.replace("[x]", Math.floor(main.generators[this.dataIndex].totalSushies));
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
	this.desciption = new cjs.Text("aaaaa", "50px 'MS Gothic'");
	this.desciption.name = "desciption";
	this.desciption.lineHeight = 52;
	this.desciption.lineWidth = 862;
	this.desciption.parent = this;
	this.desciption.setTransform(97.85,332.95);

	this.desciption3 = new cjs.Text("これまで[x]Sushi生産", "50px 'MS Gothic'");
	this.desciption3.name = "desciption3";
	this.desciption3.lineHeight = 52;
	this.desciption3.lineWidth = 896;
	this.desciption3.parent = this;
	this.desciption3.setTransform(62.05,948);

	this.desciption2 = new cjs.Text("[x][y]が毎秒[z]Sushi生産(合計SpSの[w]%)", "50px 'MS Gothic'");
	this.desciption2.name = "desciption2";
	this.desciption2.lineHeight = 52;
	this.desciption2.lineWidth = 938;
	this.desciption2.parent = this;
	this.desciption2.setTransform(39.8,774);

	this.count = new cjs.Text("999", "50px 'MS Gothic'");
	this.count.name = "count";
	this.count.lineHeight = 52;
	this.count.lineWidth = 106;
	this.count.parent = this;
	this.count.setTransform(428.2,152);

	this.desciption1 = new cjs.Text("各[x]が毎秒[y]Sushi生産", "50px 'MS Gothic'");
	this.desciption1.name = "desciption1";
	this.desciption1.lineHeight = 52;
	this.desciption1.lineWidth = 938;
	this.desciption1.parent = this;
	this.desciption1.setTransform(48,566.2);

	this.title = new cjs.Text("sushi shokunin", "50px 'MS Gothic'");
	this.title.name = "title";
	this.title.lineHeight = 52;
	this.title.lineWidth = 596;
	this.title.parent = this;
	this.title.setTransform(280.35,66.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.title},{t:this.desciption1},{t:this.count},{t:this.desciption2},{t:this.desciption3},{t:this.desciption}]}).wait(1));

	// BG
	this.instance_1 = new lib.dialogBG();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Mask
	this.MaskMC = new lib.MaskMC();
	this.MaskMC.name = "MaskMC";
	this.MaskMC.setTransform(500.05,500.05,50.0005,50.0005,0,0,0,50,50);

	this.timeline.addTween(cjs.Tween.get(this.MaskMC).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.GeneratorDesciptionMC, new cjs.Rectangle(-1999.9,-1999.9,5000,5000), null);


(lib.GeneratorCellMC = function(mode,startPosition,loop,reversed) {
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
		
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Icon_Button
	this.IconButtonMC = new lib.ButtonMC();
	this.IconButtonMC.name = "IconButtonMC";
	this.IconButtonMC.setTransform(22.55,38.25,2.66,2.5598,0,0,0,0.2,0.1);

	this.timeline.addTween(cjs.Tween.get(this.IconButtonMC).wait(1));

	// BG_Button
	this.ButtonMC = new lib.ButtonMC();
	this.ButtonMC.name = "ButtonMC";
	this.ButtonMC.setTransform(0,27,11.25,2.7998);

	this.timeline.addTween(cjs.Tween.get(this.ButtonMC).wait(1));

	// Icon
	this.instance = new lib.iconFrame();
	this.instance.setTransform(58,64);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Text
	this.count = new cjs.Text("999", "50px 'MS Gothic'");
	this.count.name = "count";
	this.count.lineHeight = 52;
	this.count.lineWidth = 106;
	this.count.parent = this;
	this.count.setTransform(921.3,145);

	this.cost = new cjs.Text("3,000,000", "50px 'MS Gothic'");
	this.cost.name = "cost";
	this.cost.lineHeight = 52;
	this.cost.lineWidth = 528;
	this.cost.parent = this;
	this.cost.setTransform(435.1,184);

	this.title = new cjs.Text("sushi shokunin", "50px 'MS Gothic'");
	this.title.name = "title";
	this.title.lineHeight = 52;
	this.title.lineWidth = 596;
	this.title.parent = this;
	this.title.setTransform(296.1,88);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.title},{t:this.cost},{t:this.count}]}).wait(1));

	// Sushi
	this.instance_1 = new lib.sushiIcon();
	this.instance_1.setTransform(280,164);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// BG
	this.instance_2 = new lib.cellBG();
	this.instance_2.setTransform(0,13);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.GeneratorCellMC, new cjs.Rectangle(0,13,1125,305), null);


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

	// Effect
	this.instance = new lib.シンボル1();
	this.instance.setTransform(562.5,1218,1,1,0,0,0,562.5,1218);
	this.instance.compositeOperation = "multiply";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// BG
	this.RadiationMC = new lib.RadiationMC();
	this.RadiationMC.name = "RadiationMC";
	this.RadiationMC.setTransform(609,1218,1,1,0,0,0,1218,1218);

	this.timeline.addTween(cjs.Tween.get(this.RadiationMC).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bgMC, new cjs.Rectangle(-609,0,2436,2436), null);


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

	// レイヤー_3
	this.AchievementCellMC = new lib.AchievementCellMC();
	this.AchievementCellMC.name = "AchievementCellMC";
	this.AchievementCellMC.setTransform(560,176,1,1,0,0,0,500,100);

	this.timeline.addTween(cjs.Tween.get(this.AchievementCellMC).wait(1));

	// レイヤー_2
	this.text = new cjs.Text("Achievement", "100px 'MS Gothic'");
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

}).prototype = getMCSymbolPrototype(lib.AchievementPanelMC, new cjs.Rectangle(-2.5,-2.5,1130,1405), null);


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

	// レイヤー_1
	this.UpgradeCellMC = new lib.UpgradeCellMC();
	this.UpgradeCellMC.name = "UpgradeCellMC";
	this.UpgradeCellMC.setTransform(65,20);

	this.timeline.addTween(cjs.Tween.get(this.UpgradeCellMC).wait(1));

	// BG
	this.ContentBGMC = new lib.ButtonMC();
	this.ContentBGMC.name = "ContentBGMC";
	this.ContentBGMC.setTransform(0,0,11.25,0.9999);

	this.timeline.addTween(cjs.Tween.get(this.ContentBGMC).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.UpgradeContentMC, new cjs.Rectangle(0,0,1125,222), null);


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
		this.OpenDesciption = function (cellMC) {
		    if (!isScrolled) {
		        this.parent.UpgradeDesciptionMC.Open(cellMC);
		    }
		}
		
		this.AddUpgrade = function (cellMC) {
		    if (!isScrolled) {
		
		    }
		}
		
		this.Create = function() 
		{
			for (var i = 0; i < upgradeData.length; i++){
				//セルの生成
				let clip = this.UpgradeContentMC.UpgradeCellMC.clone(true);
				clip.title.text = upgradeData[i]["name"];
				clip.cost.text = upgradeData[i]["display_cost"];
				clip.count.text = 123;
				clip.x = 65;
				clip.y = 20 + 220 * i;
				clip.dataIndex = i;
		
				//イベント
				this.UpgradeContentMC.addChild(clip);
				clip.IconButtonMC.addEventListener("click", function() {
					this.OpenDesciption.call(this, clip);
				}.bind(this));	
				clip.ButtonMC.addEventListener("click", function() {
					this.AddUpgrade.call(this, clip);
				}.bind(this));	
		
				//アイコン生成
				var bitmap = new createjs.Bitmap("images/Icon/Upgrade/" + upgradeData[i]["icon"] + ".png");
				clip.addChild(bitmap);
				bitmap.x = 26;
				bitmap.y = 26;
				bitmap.scaleX = 150 / 48;
				bitmap.scaleY = 150 / 48;
				bitmap.mouseEnabled = false;
			}
			this.UpgradeContentMC.UpgradeCellMC.visible = false;	
		}
		
		this.UpgradeContentMC.ContentBGMC.scaleY = (20 + 220 * upgradeData.length) * 0.01;
		var content = this.UpgradeContentMC;
		var startY;
		var startScrollY;
		var isScrolling = false;
		var velocity = 0;
		var friction = 0.95; // 慣性スクロールの減速率
		var minY = -(20 + 220 * upgradeData.length) + 1200;
		var maxY = 0;
		var lastY;
		var lastMoveTime;
		var isScrolled = false;
		
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
		    if (event.touches && event.touches.length > 0) {
		        return event.touches[0].clientY;
		    }
		    return event.stageY;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhX4BtYMAAAjavMCvxAAAMAAADavg");
	mask.setTransform(562.5,700);

	// レイヤー_3
	this.UpgradeContentMC = new lib.UpgradeContentMC();
	this.UpgradeContentMC.name = "UpgradeContentMC";

	var maskedShapeInstanceList = [this.UpgradeContentMC];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.UpgradeContentMC).wait(1));

	// BG
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00CC33").ss(5,1,1).p("EhX4htXMCvxAAAMAAADavMivxAAAg");
	this.shape.setTransform(562.5,700);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3399FF").s().p("EhX4BtYMAAAjavMCvxAAAMAAADavg");
	this.shape_1.setTransform(562.5,700);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.UpgradePanelMC, new cjs.Rectangle(-2.5,-2.5,1130,1405), null);


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
		this.OpenDesciption = function (cellMC) {
		    if (!isScrolled) {
		        this.parent.GeneratorDesciptionMC.Open(cellMC);
		    }
		}
		
		this.AddGenerator = function (cellMC) {
		    if (!isScrolled) {
		
		    }
		}
		
		this.Create = function() 
		{
			for (var i = 0; i < buildingData.length; i++){
				//セルの生成
				let clip = this.GeneratorContentMC.GeneratorCellMC.clone(true);
				clip.title.text = buildingData[i]["name"];
				clip.cost.text = buildingData[i]["display_cost"];
				clip.count.text = 123;
				clip.x = 0;
				clip.y = 0 + 280 * i;
				clip.dataIndex = i;
		
				//イベント
				this.GeneratorContentMC.addChild(clip);
				clip.IconButtonMC.addEventListener("click", function() {
					this.OpenDesciption.call(this, clip);
				}.bind(this));	
				clip.ButtonMC.addEventListener("click", function() {
					this.AddGenerator.call(this, clip);
				}.bind(this));	
		
				//アイコン生成
				var bitmap = new createjs.Bitmap("images/Icon/Generator/" + buildingData[i]["icon"] + ".png");
				clip.addChild(bitmap);
				bitmap.x = 66;
				bitmap.y = 72;
				bitmap.scaleX = 193 / 64;
				bitmap.scaleY = 193 / 64;
				bitmap.mouseEnabled = false;
			}
			this.GeneratorContentMC.GeneratorCellMC.visible = false;	
		}
		
		this.GeneratorContentMC.ContentBGMC.scaleY = (0 + 280 * buildingData.length) * 0.01;
		var content = this.GeneratorContentMC;
		var startY;
		var startScrollY;
		var isScrolling = false;
		var velocity = 0;
		var friction = 0.95; // 慣性スクロールの減速率
		var minY = -(50 + 280 * buildingData.length) + 914;
		var maxY = 0;
		var lastY;
		var lastMoveTime;
		var isScrolled = false;
		
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
		    if (event.touches && event.touches.length > 0) {
		        return event.touches[0].clientY;
		    }
		    return event.stageY;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhX4BEIMAAAiIPMCvxAAAMAAACIPg");
	mask.setTransform(562.5,476.7);

	// Cell
	this.GeneratorContentMC = new lib.GeneratorContentMC();
	this.GeneratorContentMC.name = "GeneratorContentMC";

	var maskedShapeInstanceList = [this.GeneratorContentMC];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.GeneratorContentMC).wait(1));

	// BG
	this.instance = new lib.panel();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.GeneratorPanelMC, new cjs.Rectangle(0,0,1125,985), null);


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
				this.name ="";
				this.id = 0;
				this.sps = 0;
				this.storedSps = 0;
				this.amount = 0;
				this.totalSushies = 0;
				this.storedTotalSps = 0;
		    }
		
			CalculateSps = function()
			{
				this.storedSps = this.sps;
			}
		}
		
		
		class Main
		{
		    constructor()
			{
				this.root = stage.getChildByName("root");
				
		        this.sushi = 0;
		        this.totalSushi = 0;
				this.upgrade = [];
				
				this.sushiPs = 0;
				this.add = 0;
				this.computedTouchCps = 0
				this.fractionSps = 0;
				
				this.upgrade.push(1);
				this.upgrade.push(2);
				this.upgrade.push(3);
				this.upgrade.push(4);
				
				this.upgrade.push(104);
				this.upgrade.push(105);
				this.upgrade.push(106);
				this.upgrade.push(107);
				
				this.computedTouchSps = this.TouchSps();
				
				this.cookiesPs ;
		
				this.generators = [];
				
				this.InitGenerators();
				
				this.generators[0].amount = 2;
				this.generators[1].amount = 3;		
				
				this.fps = 60;
		
				this.lastTickTime = 0;
				this.interval = 1000;
				
				createjs.Ticker.framerate = this.fps;
				createjs.Ticker.timingMode = createjs.Ticker.RAF;
				createjs.Ticker.addEventListener("tick", this.MainTick.bind(this));	
		    }
		
		    InitGenerators() 
			{
				for (var i = 0; i < buildingData.length; i++)
				{
					var	generator = new Generator();
					generator.name = buildingData[i]["name"];
					generator.sps = buildingData[i]["sps"];
					this.generators.push(generator);
				}
		    }
		
		    AddSushi(value) {
		        this.sushi += value;
		        this.totalSushi += value;
				this.root.HeaderMC.Sushi.text = main.sushi;
		    }
		
			ComputeCps = function(base,mult,bonus)
			{
				if (!bonus) bonus=0;
				return ((base)*(Math.pow(2,mult))+bonus);
			}
		
		    TouchSps() {
		
				var add = 0;
		
				//Fingers
				for (var i = 0; i < upgradeData.length; i++)
				{
					if(upgradeData[i].type == 2 && upgradeData[i].type2 == 3)
					if(this.upgrade.includes(upgradeData[i].id))
						add *= this.cookiesPs * upgradeData[i].sps;
				}
				
				//Pointer
				for (i = 0; i < upgradeData.length; i++)
				{
					if(upgradeData[i].type == 1)
					if(this.upgrade.includes(upgradeData[i].id))
						add += this.cookiesPs * upgradeData[i].sps;
				}
		
				var mult=1;
				var out = mult * this.ComputeCps(1, 1, add);
		
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
				}
				this.root.HeaderMC.Sps.text = "毎秒 : " + this.sushiPs;
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
		
		main = new Main();
		if (createjs.Touch.isSupported())
		    createjs.Touch.enable(stage);
		
		
		//this.name = "root";
		//stage.getChildByName("root").log1.text = new Date().getTime();	
		 
		 
		
		//1125 * 2436
		this.canvasScaleX = document.documentElement.clientWidth / 1125;
		this.canvasScaleY = document.documentElement.clientHeight / 2436;
		
		this.bgMC.scaleX = this.canvasScaleX;
		this.bgMC.scaleY = this.canvasScaleY;
		
		this.HeaderMC.scaleX = this.canvasScaleX;
		this.HeaderMC.scaleY = this.canvasScaleX;
		
		this.FooterMC.scaleX = this.canvasScaleX;
		this.FooterMC.scaleY = this.canvasScaleX;
		this.FooterMC.y = 2436 * this.canvasScaleY;
		
		
		
		this.executeNextFrame = function(callback) {
		    setTimeout(callback, 1000);
		}
		
		this.executeNextFrame(() => {
			this.GeneratorPanelMC.Create();
			this.UpgradePanelMC.Create();
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
		}
		this.GeneratorPanelMC.scaleX = this.canvasScaleX;
		this.GeneratorPanelMC.scaleY = this.canvasScaleX;
		this.GeneratorPanelMC.y = 2436 * this.canvasScaleY -300 * this.canvasScaleX;
		
		//UpgradePanel
		this.FooterMC.UpgradeButtonMC.addEventListener("click", ClickHandler_UpgradePanelOpen.bind(this));
		function ClickHandler_UpgradePanelOpen()
		{
			this.PanelOpen(2);
		}
		this.UpgradePanelMC.scaleX = this.canvasScaleX;
		this.UpgradePanelMC.scaleY = this.canvasScaleX;
		this.UpgradePanelMC.y = 2436 * this.canvasScaleY -300 * this.canvasScaleX;
		
		//ShopPanel
		this.FooterMC.ShopButtonMC.addEventListener("click", ClickHandler_ShopPanelOpen.bind(this));
		function ClickHandler_ShopPanelOpen()
		{
			this.PanelOpen(3);
		}
		this.ShopPanelMC.scaleX = this.canvasScaleX;
		this.ShopPanelMC.scaleY = this.canvasScaleX;
		this.ShopPanelMC.y = 2436 * this.canvasScaleY -300 * this.canvasScaleX;500
		
		//AchievementPanel
		this.FooterMC.AchievementButtonMC.addEventListener("click", ClickHandler_AchievementPanelOpen.bind(this));
		function ClickHandler_AchievementPanelOpen()
		{
			this.PanelOpen(4);
		}
		this.AchievementPanelMC.scaleX = this.canvasScaleX;
		this.AchievementPanelMC.scaleY = this.canvasScaleX;
		this.AchievementPanelMC.y = 2436 * this.canvasScaleY -300 * this.canvasScaleX;500
		
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
					break;
		    }	
		
			if(this.page != _page)
			{
				switch (_page)
				{
					case 1:
						this.Open(this.GeneratorPanelMC);
						this.GeneratorPanelMC.Open();
						break;
					case 2:
						this.Open(this.UpgradePanelMC);
						this.UpgradePanelMC.Open();
						break;
					case 3:
						this.Open(this.ShopPanelMC);
						break;
					case 4:
						this.Open(this.AchievementPanelMC);
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
			createjs.Tween.get(_targetMC, {
				override: true
			})
			.to({ x: 0, y: 2436 * this.canvasScaleY -300 * this.canvasScaleX + 914 * this.canvasScaleX }, 250, createjs.Ease.backInOut)
			.call(() => {
				_targetMC.visible = false;
		    });
		}
		
		this.Open = function (_targetMC)
		{
			_targetMC.y = 2436 + 1200 * this.canvasScaleX;
			_targetMC.visible = true;	
			
			createjs.Tween.get(_targetMC, {
				override: true
			})
			.to({ x: 0, y: 2436 * this.canvasScaleY -300 * this.canvasScaleX }, 250, createjs.Ease.expoOut);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Upgrade_Desciption
	this.UpgradeDesciptionMC = new lib.UpgradeDesciptionMC();
	this.UpgradeDesciptionMC.name = "UpgradeDesciptionMC";
	this.UpgradeDesciptionMC.setTransform(562.45,1218,1,1,0,0,0,499.9,500);

	this.timeline.addTween(cjs.Tween.get(this.UpgradeDesciptionMC).wait(1));

	// Generator_Desciption
	this.GeneratorDesciptionMC = new lib.GeneratorDesciptionMC();
	this.GeneratorDesciptionMC.name = "GeneratorDesciptionMC";
	this.GeneratorDesciptionMC.setTransform(562.45,1218,1,1,0,0,0,499.9,500);

	this.timeline.addTween(cjs.Tween.get(this.GeneratorDesciptionMC).wait(1));

	// Log
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.log1},{t:this.text}]}).wait(1));

	// Menu
	this.HeaderMC = new lib.HeaderMC();
	this.HeaderMC.name = "HeaderMC";

	this.FooterMC = new lib.FooterMC();
	this.FooterMC.name = "FooterMC";
	this.FooterMC.setTransform(0,2436,1,1,0,0,0,0,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.FooterMC},{t:this.HeaderMC}]}).wait(1));

	// Achievement
	this.AchievementPanelMC = new lib.AchievementPanelMC();
	this.AchievementPanelMC.name = "AchievementPanelMC";
	this.AchievementPanelMC.setTransform(0,2136,1,1,0,0,0,0,1200);

	this.timeline.addTween(cjs.Tween.get(this.AchievementPanelMC).wait(1));

	// Shop
	this.ShopPanelMC = new lib.ShopPanelMC();
	this.ShopPanelMC.name = "ShopPanelMC";
	this.ShopPanelMC.setTransform(0,2136,1,1,0,0,0,0,1200);

	this.timeline.addTween(cjs.Tween.get(this.ShopPanelMC).wait(1));

	// Upgrade
	this.UpgradePanelMC = new lib.UpgradePanelMC();
	this.UpgradePanelMC.name = "UpgradePanelMC";
	this.UpgradePanelMC.setTransform(0,2136,1,1,0,0,0,0,1200);

	this.timeline.addTween(cjs.Tween.get(this.UpgradePanelMC).wait(1));

	// Generator
	this.GeneratorPanelMC = new lib.GeneratorPanelMC();
	this.GeneratorPanelMC.name = "GeneratorPanelMC";
	this.GeneratorPanelMC.setTransform(0,2136,1,1,0,0,0,0,913);

	this.timeline.addTween(cjs.Tween.get(this.GeneratorPanelMC).wait(1));

	// Sushi
	this.SushiMC = new lib.SushiMC();
	this.SushiMC.name = "SushiMC";
	this.SushiMC.setTransform(563,1218,1,1,0,0,0,500,300);

	this.timeline.addTween(cjs.Tween.get(this.SushiMC).wait(1));

	// BG
	this.bgMC = new lib.bgMC();
	this.bgMC.name = "bgMC";

	this.timeline.addTween(cjs.Tween.get(this.bgMC).wait(1));

	// stageBackground
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1,3,true).p("EhZci/3MCy5AAAMAAAF/vMiy5AAAg");
	this.shape.setTransform(562.5,1218);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EhZcC/4MAAAl/vMCy5AAAMAAAF/vg");
	this.shape_1.setTransform(562.5,1218);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-1374.9,-64,4437.6,3782.1);
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
		{src:"images/bg_effect.png", id:"bg_effect"},
		{src:"images/index_atlas_1.png", id:"index_atlas_1"},
		{src:"images/index_atlas_2.png", id:"index_atlas_2"},
		{src:"images/index_atlas_3.png", id:"index_atlas_3"}
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