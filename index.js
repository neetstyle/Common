(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


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

	// レイヤー_2
	this.text = new cjs.Text("Upgrade", "100px 'MS Gothic'");
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

}).prototype = getMCSymbolPrototype(lib.UpgradePanelMC, new cjs.Rectangle(-2.5,-2.5,1130,1405), null);


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

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00CC33").ss(5,1,1).p("EhX4gXbMCvxAAAMAAAAu3MivxAAAg");
	this.shape.setTransform(562.5,150);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#99CC99").s().p("EhX4AXcMAAAgu3MCvxAAAMAAAAu3g");
	this.shape_1.setTransform(562.5,150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HeaderMC, new cjs.Rectangle(-2.5,-2.5,1130,305), null);


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

	// レイヤー_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00CC33").ss(4,1,1).p("ArtrtIXbAAIAAXbI3bAAg");
	this.shape.setTransform(102,101);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ArtLuIAA3bIXbAAIAAXbg");
	this.shape_1.setTransform(102,101);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// レイヤー_2
	this.rank = new cjs.Text("999", "50px 'MS Gothic'");
	this.rank.name = "rank";
	this.rank.lineHeight = 52;
	this.rank.lineWidth = 106;
	this.rank.parent = this;
	this.rank.setTransform(836.25,73);

	this.price = new cjs.Text("3,000,000", "50px 'MS Gothic'");
	this.price.name = "price";
	this.price.lineHeight = 52;
	this.price.lineWidth = 528;
	this.price.parent = this;
	this.price.setTransform(202.1,114);

	this.title = new cjs.Text("sushi shokunin", "50px 'MS Gothic'");
	this.title.name = "title";
	this.title.lineHeight = 52;
	this.title.lineWidth = 596;
	this.title.parent = this;
	this.title.setTransform(202,28);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.title},{t:this.price},{t:this.rank}]}).wait(1));

	// レイヤー_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00CC33").ss(4,1,1).p("EhOHgPnMCcPAAAIAAfPMicPAAAg");
	this.shape_2.setTransform(500,100);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC3333").s().p("EhOHAPoIAA/PMCcPAAAIAAfPg");
	this.shape_3.setTransform(500,100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.GeneratorCellMC, new cjs.Rectangle(-2,-2,1004,204), null);


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

	// レイヤー_2
	this.text = new cjs.Text("Upgrade", "40px 'MS Gothic'");
	this.text.textAlign = "center";
	this.text.lineHeight = 42;
	this.text.lineWidth = 221;
	this.text.parent = this;
	this.text.setTransform(112.5,132);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00CC33").ss(5,1,1).p("Axk3bMAjJAAAMAAAAu3MgjJAAAg");
	this.shape.setTransform(112.5,150);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9999CC").s().p("AxkXcMAAAgu3MAjJAAAMAAAAu3g");
	this.shape_1.setTransform(112.5,150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.UpgradeButtonMC, new cjs.Rectangle(-2.5,-2.5,230,305), null);


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

	// レイヤー_2
	this.text = new cjs.Text("Shop", "40px 'MS Gothic'");
	this.text.textAlign = "center";
	this.text.lineHeight = 42;
	this.text.lineWidth = 221;
	this.text.parent = this;
	this.text.setTransform(112.5,132);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00CC33").ss(5,1,1).p("Axk3bMAjJAAAMAAAAu3MgjJAAAg");
	this.shape.setTransform(112.5,150);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9999CC").s().p("AxkXcMAAAgu3MAjJAAAMAAAAu3g");
	this.shape_1.setTransform(112.5,150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ShopButtonMC, new cjs.Rectangle(-2.5,-2.5,230,305), null);


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

	// レイヤー_2
	this.text = new cjs.Text("Generator", "40px 'MS Gothic'");
	this.text.textAlign = "center";
	this.text.lineHeight = 42;
	this.text.lineWidth = 221;
	this.text.parent = this;
	this.text.setTransform(112.5,132);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00CC33").ss(5,1,1).p("Axk3bMAjJAAAMAAAAu3MgjJAAAg");
	this.shape.setTransform(112.5,150);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9999CC").s().p("AxkXcMAAAgu3MAjJAAAMAAAAu3g");
	this.shape_1.setTransform(112.5,150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.GeneratorButtonMC, new cjs.Rectangle(-2.5,-2.5,230,305), null);


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

	// レイヤー_2
	this.text = new cjs.Text("Achievement", "40px 'MS Gothic'");
	this.text.textAlign = "center";
	this.text.lineHeight = 42;
	this.text.lineWidth = 221;
	this.text.parent = this;
	this.text.setTransform(112.5,132);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00CC33").ss(5,1,1).p("Axk3bMAjJAAAMAAAAu3MgjJAAAg");
	this.shape.setTransform(112.5,150);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9999CC").s().p("AxkXcMAAAgu3MAjJAAAMAAAAu3g");
	this.shape_1.setTransform(112.5,150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.AchievementButtonMC, new cjs.Rectangle(-2.5,-2.5,230,305), null);


(lib.ContentBGMC = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#999999").s().p("EhX4AH0IAAvnMCvxAAAIAAPng");
	this.shape.setTransform(562.5,50);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ContentBGMC, new cjs.Rectangle(0,0,1125,100), null);


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

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(5,1,1).p("EhX4i+TMCvxAAAMAAAF8nMivxAAAg");
	this.shape.setTransform(562.5,1218);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("EhX4C+UMAAAl8nMCvxAAAMAAAF8ng");
	this.shape_1.setTransform(562.5,1218);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bgMC, new cjs.Rectangle(-2.5,-2.5,1130,2441), null);


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

	// レイヤー_1
	this.GeneratorCellMC = new lib.GeneratorCellMC();
	this.GeneratorCellMC.name = "GeneratorCellMC";
	this.GeneratorCellMC.setTransform(65,20);

	this.timeline.addTween(cjs.Tween.get(this.GeneratorCellMC).wait(1));

	// BG
	this.ContentBGMC = new lib.ContentBGMC();
	this.ContentBGMC.name = "ContentBGMC";

	this.timeline.addTween(cjs.Tween.get(this.ContentBGMC).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.GeneratorContentMC, new cjs.Rectangle(0,0,1125,222), null);


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

	// レイヤー_2
	this.AchievementButtonMC = new lib.AchievementButtonMC();
	this.AchievementButtonMC.name = "AchievementButtonMC";
	this.AchievementButtonMC.setTransform(843.75,0,1.25,1);

	this.ShopButtonMC = new lib.ShopButtonMC();
	this.ShopButtonMC.name = "ShopButtonMC";
	this.ShopButtonMC.setTransform(562.5,0,1.25,1);

	this.UpgradeButtonMC = new lib.UpgradeButtonMC();
	this.UpgradeButtonMC.name = "UpgradeButtonMC";
	this.UpgradeButtonMC.setTransform(281.25,0,1.25,1);

	this.GeneratorButtonMC = new lib.GeneratorButtonMC();
	this.GeneratorButtonMC.name = "GeneratorButtonMC";
	this.GeneratorButtonMC.setTransform(0,0,1.25,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.GeneratorButtonMC},{t:this.UpgradeButtonMC},{t:this.ShopButtonMC},{t:this.AchievementButtonMC}]}).wait(1));

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00CC33").ss(5,1,1).p("EhX4gXbMCvxAAAMAAAAu3MivxAAAg");
	this.shape.setTransform(562.5,150);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#99CC99").s().p("EhX4AXcMAAAgu3MCvxAAAMAAAAu3g");
	this.shape_1.setTransform(562.5,150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.FooterMC, new cjs.Rectangle(-3.1,-2.5,1131.3,305), null);


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

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhX4BtYMAAAjavMCvxAAAMAAADavg");
	mask.setTransform(562.5,700);

	// レイヤー_3
	this.GeneratorContentMC = new lib.GeneratorContentMC();
	this.GeneratorContentMC.name = "GeneratorContentMC";

	var maskedShapeInstanceList = [this.GeneratorContentMC];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.GeneratorContentMC).wait(1));

	// レイヤー_2
	this.text = new cjs.Text("Generator", "100px 'MS Gothic'");
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

}).prototype = getMCSymbolPrototype(lib.GeneratorPanelMC, new cjs.Rectangle(-2.5,-2.5,1130,1405), null);


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
		for (let i = 0; i < buildingData.length; i++){
		
		let newClip = this.GeneratorPanelMC.GeneratorContentMC.GeneratorCellMC.clone(true);
			newClip.title.text = buildingData[i]["name"];
			newClip.price.text = buildingData[i]["price"];
			newClip.rank.text = 123;
			newClip.x = 65;
			newClip.y = 20 + 220 * i;		
			this.GeneratorPanelMC.GeneratorContentMC.addChild(newClip);
		}
				
		this.GeneratorPanelMC.GeneratorContentMC.GeneratorCellMC.visible = false;	
				
		
		
		
		
		this.GeneratorPanelMC.GeneratorContentMC.ContentBGMC.scaleY = (20 + 220 * buildingData.length) * 0.01;
		
		
		
		
		
		var content = this.GeneratorPanelMC.GeneratorContentMC;
		var startY;
		var startScrollY;
		var isScrolling = false;
		var velocity = 0;
		var friction = 0.95; // 慣性スクロールの減速率
		var minY = -(20 + 220 * buildingData.length) + 1200;
		var maxY = 0;
		var lastY;
		var lastMoveTime;
		
		// マウスイベントのリスナーを追加
		content.addEventListener("mousedown", startScroll);
		stage.addEventListener("stagemousemove", doScroll);
		stage.addEventListener("stagemouseup", endScroll);
		
		// タッチイベントのリスナーを追加
		content.addEventListener("touchstart", startScroll);
		stage.addEventListener("touchmove", doScroll);
		stage.addEventListener("touchend", endScroll);
		
		function startScroll(event) {
		    event.preventDefault();
		    isScrolling = true;
		    startY = getY(event);
		    startScrollY = content.y;
		    velocity = 0;
		    lastY = getY(event);
		    lastMoveTime = new Date().getTime();
			
			
		stage.getChildByName("aaaaaa").log1.text = new Date().getTime();		
			
		}
		
		
		this.name = "aaaaaa";
		
			
		function doScroll(event) {
			
			
			stage.getChildByName("aaaaaa").log2.text = isScrolling +" / " +new Date().getTime();	
			
		    if (isScrolling) {
		        event.preventDefault();
		        var dy = getY(event) - startY;
		        content.y = startScrollY + dy;
		/*
		        // スクロールの境界を設定
		        if (content.y < minY) {
		            content.y = minY;
		        }
		        if (content.y > maxY) {
		            content.y = maxY;
		        }
		*/
		        // 慣性用の速度を計算
		        var now = new Date().getTime();
		        var timeDiff = now - lastMoveTime;
		        if (timeDiff > 0) { // timeDiffがゼロでないことを確認
		            velocity = (getY(event) - lastY) / timeDiff * 1000; // ピクセル/秒に変換
		        }
		        lastY = getY(event);
		        lastMoveTime = now;
		
		
			
			
			
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
		
			stage.getChildByName("aaaaaa").log3.text = new Date().getTime();	
			
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
					break;
				case 2:
					this.Close(this.UpgradePanelMC);
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
						break;
					case 2:
						this.Open(this.UpgradePanelMC);
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
			.to({ x: 0, y: 2436 * this.canvasScaleY -300 * this.canvasScaleX + 1200 * this.canvasScaleX }, 250, createjs.Ease.backInOut)
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

	// レイヤー_2
	this.log3 = new cjs.Text("1", "50px 'MS Gothic'", "#FF0000");
	this.log3.name = "log3";
	this.log3.lineHeight = 52;
	this.log3.lineWidth = 598;
	this.log3.parent = this;
	this.log3.setTransform(2,112.1);

	this.log2 = new cjs.Text("1", "50px 'MS Gothic'", "#FF0000");
	this.log2.name = "log2";
	this.log2.lineHeight = 52;
	this.log2.lineWidth = 598;
	this.log2.parent = this;
	this.log2.setTransform(2,57.05);

	this.log1 = new cjs.Text("1", "50px 'MS Gothic'", "#FF0000");
	this.log1.name = "log1";
	this.log1.lineHeight = 52;
	this.log1.lineWidth = 598;
	this.log1.parent = this;
	this.log1.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.log1},{t:this.log2},{t:this.log3}]}).wait(1));

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

	// Generator
	this.GeneratorPanelMC = new lib.GeneratorPanelMC();
	this.GeneratorPanelMC.name = "GeneratorPanelMC";
	this.GeneratorPanelMC.setTransform(0,2136,1,1,0,0,0,0,1200);

	this.timeline.addTween(cjs.Tween.get(this.GeneratorPanelMC).wait(1));

	// Upgrade
	this.UpgradePanelMC = new lib.UpgradePanelMC();
	this.UpgradePanelMC.name = "UpgradePanelMC";
	this.UpgradePanelMC.setTransform(0,2136,1,1,0,0,0,0,1200);

	this.timeline.addTween(cjs.Tween.get(this.UpgradePanelMC).wait(1));

	// BG
	this.bgMC = new lib.bgMC();
	this.bgMC.name = "bgMC";

	this.timeline.addTween(cjs.Tween.get(this.bgMC).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(559.4,1215.5,568.8000000000001,1223);
// library properties:
lib.properties = {
	id: '969C0F3DFF839440AC4059700CCE57F9',
	width: 1125,
	height: 2436,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
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