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
	this.shape.graphics.f().s("#00CC33").ss(5,1,1).p("EhX4hdvMCvxAAAMAAAC7fMivxAAAg");
	this.shape.setTransform(562.5,600);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3399FF").s().p("EhX4BdwMAAAi7fMCvxAAAMAAAC7fg");
	this.shape_1.setTransform(562.5,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.UpgradePanelMC, new cjs.Rectangle(-2.5,-2.5,1130,1205), null);


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
	this.shape.graphics.f().s("#00CC33").ss(5,1,1).p("EhX4hdvMCvxAAAMAAAC7fMivxAAAg");
	this.shape.setTransform(562.5,600);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3399FF").s().p("EhX4BdwMAAAi7fMCvxAAAMAAAC7fg");
	this.shape_1.setTransform(562.5,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ShopPanelMC, new cjs.Rectangle(-2.5,-2.5,1130,1205), null);


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
	this.shape.graphics.f().s("#00CC33").ss(5,1,1).p("EhX4hdvMCvxAAAMAAAC7fMivxAAAg");
	this.shape.setTransform(562.5,600);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3399FF").s().p("EhX4BdwMAAAi7fMCvxAAAMAAAC7fg");
	this.shape_1.setTransform(562.5,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.GeneratorPanelMC, new cjs.Rectangle(-2.5,-2.5,1130,1205), null);


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


(lib.InviteButtonMC = function(mode,startPosition,loop,reversed) {
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
	this.text = new cjs.Text("Invite", "40px 'MS Gothic'");
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

}).prototype = getMCSymbolPrototype(lib.InviteButtonMC, new cjs.Rectangle(-2.5,-2.5,230,305), null);


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
	this.shape.graphics.f().s("#00CC33").ss(5,1,1).p("EhX4hdvMCvxAAAMAAAC7fMivxAAAg");
	this.shape.setTransform(562.5,600);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3399FF").s().p("EhX4BdwMAAAi7fMCvxAAAMAAAC7fg");
	this.shape_1.setTransform(562.5,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.AchievementPanelMC, new cjs.Rectangle(-2.5,-2.5,1130,1205), null);


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
	this.InviteButtonMC = new lib.InviteButtonMC();
	this.InviteButtonMC.name = "InviteButtonMC";
	this.InviteButtonMC.setTransform(900,0);

	this.AchievementButtonMC = new lib.AchievementButtonMC();
	this.AchievementButtonMC.name = "AchievementButtonMC";
	this.AchievementButtonMC.setTransform(675,0);

	this.ShopButtonMC = new lib.ShopButtonMC();
	this.ShopButtonMC.name = "ShopButtonMC";
	this.ShopButtonMC.setTransform(450,0);

	this.UpgradeButtonMC = new lib.UpgradeButtonMC();
	this.UpgradeButtonMC.name = "UpgradeButtonMC";
	this.UpgradeButtonMC.setTransform(225,0);

	this.GeneratorButtonMC = new lib.GeneratorButtonMC();
	this.GeneratorButtonMC.name = "GeneratorButtonMC";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.GeneratorButtonMC},{t:this.UpgradeButtonMC},{t:this.ShopButtonMC},{t:this.AchievementButtonMC},{t:this.InviteButtonMC}]}).wait(1));

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00CC33").ss(5,1,1).p("EhX4gXbMCvxAAAMAAAAu3MivxAAAg");
	this.shape.setTransform(562.5,150);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#99CC99").s().p("EhX4AXcMAAAgu3MCvxAAAMAAAAu3g");
	this.shape_1.setTransform(562.5,150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.FooterMC, new cjs.Rectangle(-2.5,-2.5,1130,305), null);


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
		this.PanelOpen = function (_page)
		{
		    switch (_page) {
		      case 0:
				this.GeneratorPanelMC.visible = false;
				this.UpgradePanelMC.visible = false;
				this.ShopPanelMC.visible = false;
				this.AchievementPanelMC.visible = false;
				this.page = 0;
		        break;
		      case 1:
				this.GeneratorPanelMC.visible = this.GeneratorPanelMC.visible ? false : true;
				this.UpgradePanelMC.visible = false;
				this.ShopPanelMC.visible = false;
				this.AchievementPanelMC.visible = false;
				this.page = this.GeneratorPanelMC.visible ? _page : 0;
		        break;
		     case 2:
				this.GeneratorPanelMC.visible = false;
				this.UpgradePanelMC.visible = this.UpgradePanelMC.visible ? false : true;
				this.ShopPanelMC.visible = false;
				this.AchievementPanelMC.visible = false;
				this.page = this.UpgradePanelMC.visible ? _page : 0;
				break;
			case 3:
				this.GeneratorPanelMC.visible = false;
				this.UpgradePanelMC.visible = false;
				this.ShopPanelMC.visible = this.ShopPanelMC.visible ? false : true;
				this.AchievementPanelMC.visible = false;
				this.page = this.ShopPanelMC.visible ? _page : 0;
				break;
			case 4:
				this.GeneratorPanelMC.visible = false;
				this.UpgradePanelMC.visible = false;
				this.ShopPanelMC.visible = false;
				this.AchievementPanelMC.visible = this.AchievementPanelMC.visible ? false : true;
				this.page = this.AchievementPanelMC.visible ? _page : 0;
				break;
		    }
		}
		
		this.page = 0;
		this.GeneratorPanelMC.visible = false;
		this.UpgradePanelMC.visible = false;
		this.ShopPanelMC.visible = false;
		this.AchievementPanelMC.visible = false;
		
		//GeneratorPanel
		this.GeneratorPanelMC.visible = false;
		this.UnderMenuMC.GeneratorButtonMC.addEventListener("click", ClickHandler_GeneratorPanelOpen.bind(this));
		function ClickHandler_GeneratorPanelOpen()
		{
			this.PanelOpen(1);
		}
		this.GeneratorPanelMC.scaleX = this.canvasScaleX;
		this.GeneratorPanelMC.scaleY = this.canvasScaleX;
		this.GeneratorPanelMC.y = 2436 * this.canvasScaleY -300 * this.canvasScaleX;
		
		//UpgradePanel
		this.UpgradePanelMC.visible = false;
		this.UnderMenuMC.UpgradeButtonMC.addEventListener("click", ClickHandler_UpgradePanelOpen.bind(this));
		function ClickHandler_UpgradePanelOpen()
		{
			this.PanelOpen(2);
		}
		this.UpgradePanelMC.scaleX = this.canvasScaleX;
		this.UpgradePanelMC.scaleY = this.canvasScaleX;
		this.UpgradePanelMC.y = 2436 * this.canvasScaleY -300 * this.canvasScaleX;
		
		//ShopPanel
		this.ShopPanelMC.visible = false;
		this.UnderMenuMC.ShopButtonMC.addEventListener("click", ClickHandler_ShopPanelOpen.bind(this));
		function ClickHandler_ShopPanelOpen()
		{
			this.PanelOpen(3);
		}
		this.ShopPanelMC.scaleX = this.canvasScaleX;
		this.ShopPanelMC.scaleY = this.canvasScaleX;
		this.ShopPanelMC.y = 2436 * this.canvasScaleY -300 * this.canvasScaleX;500
		
		//AchievementPanel
		this.AchievementPanelMC.visible = false;
		this.UnderMenuMC.AchievementButtonMC.addEventListener("click", ClickHandler_AchievementPanelOpen.bind(this));
		function ClickHandler_AchievementPanelOpen()
		{
			this.PanelOpen(4);
		}
		this.AchievementPanelMC.scaleX = this.canvasScaleX;
		this.AchievementPanelMC.scaleY = this.canvasScaleX;
		this.AchievementPanelMC.y = 2436 * this.canvasScaleY -300 * this.canvasScaleX;500
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

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

	// Menu
	this.HeaderMC = new lib.HeaderMC();
	this.HeaderMC.name = "HeaderMC";

	this.FooterMC = new lib.FooterMC();
	this.FooterMC.name = "FooterMC";
	this.FooterMC.setTransform(0,2436,1,1,0,0,0,0,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.FooterMC},{t:this.HeaderMC}]}).wait(1));

	// BG
	this.bgMC = new lib.bgMC();
	this.bgMC.name = "bgMC";

	this.timeline.addTween(cjs.Tween.get(this.bgMC).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(560,1215.5,567.5,1223);
// library properties:
lib.properties = {
	id: '969C0F3DFF839440AC4059700CCE57F9',
	width: 1125,
	height: 2436,
	fps: 30,
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