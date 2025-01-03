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
		
		var count = 0;
		var logHistory = [];
		
		this.addLog = function(message) {
			count++;
			message = count + "." + message;	
			
		    logHistory.push(message);
		
		    if (logHistory.length > 15) {
		        logHistory.shift(); 
		    }
		
		    // 表示用にテキストを結合して更新
		    exportRoot.log1.text = logHistory.join("\n");
		}
		
		this.Reload = function() 
		{
			this.content.ContentBGMC.scaleY = (0 + 240 * this.count) * 0.01;
			minY = -(50 + 240 * this.count) + 914;
		}
		
		this.SetSize = function(size) 
		{
			this.content.ContentBGMC.scaleY = size * 0.01;
			minY = -size + 914;
		}
		
		this.content.ContentBGMC.scaleY = (0 + 240 * this.count) * 0.01;
		
		var content = this.content;
		var startY;
		var startScrollY;
		
		var velocity = 0;
		var friction = 0.95; // 慣性スクロールの減速率
		var minY = -(50 + 240 * this.count) + 914;
		var maxY = 0;
		var lastY;
		var lastMoveTime;
		var isScroll = false;
		
		var isClicked = false;
		
		this.isScrolled =  function() 
		{
			return isScroll; 
		}
		
		
		
		// コンテンツにクリックイベントリスナーを追加
		this.Open = function() {
		    content.addEventListener("mousedown", startScroll);
		    stage.addEventListener("stagemousemove", doScroll);
		    stage.addEventListener("stagemouseup", endScroll);
		
			
		this._Tick = createjs.Ticker.addEventListener("tick", this.Tick.bind(this));	
			
			
		}
		
		this.Close = function() {
		    content.removeEventListener("mousedown", startScroll);
		    stage.removeEventListener("stagemousemove", doScroll);
		    stage.removeEventListener("stagemouseup", endScroll);
		    content.removeEventListener("click", handleClick, true);
		}
		
		function startScroll(event) {
			
		
		startScroll_event =event;
				
			
		exportRoot.PanelMC.ScrollMC.addLog("startScroll");
			
		    event.preventDefault();
			
		    startY = getY(event);
		    startScrollY = content.y;
		    velocity = 0;
		    lastY = getY(event);
		    lastMoveTime = new Date().getTime();
		
			
		    isScroll = false;
		    isClicked = true;
		}
			
		function doScroll(event) {
			
			if (isClicked) {
				if(Math.abs(startY - getY(event)) > 5)	
					isScroll = true;
			}
			
		    if (isScroll && isClicked) {
				
				exportRoot.PanelMC.ScrollMC.addLog("doScroll");			
				
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
		        if (timeDiff > 0) {
		            velocity = (getY(event) - lastY) / timeDiff * 1000;
		        }
		        lastY = getY(event);
		        lastMoveTime = now;
			
		    }
		
		}
		
		function endScroll(event) {
			
		exportRoot.PanelMC.ScrollMC.addLog("endScroll velocity : " + velocity);	
			
		    isClicked = false;
			isScrolled = false;
		    // 速度が小さい場合にリセット
		    if (Math.abs(velocity) < 0.5) {
		        velocity = 0;
		    }
		    // 慣性スクロールのためのタイマーを開始
		    createjs.Ticker.addEventListener("tick", applyInertia);
		}
		
		function applyInertia(event) {
		    if (isScroll) {
		        content.y += velocity * event.delta / 1000;
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
		            isScroll = false;
					velocity = 0;
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
		    return pt.y;
		}
		
		
		var startScroll_event;
		
		
		this._Tick;
		this.Tick = function(event)
		{
			exportRoot.log2.text = "isClicked :" + isClicked + "\n";
			exportRoot.log2.text += "isScroll :" + isScroll + "\n";
				exportRoot.log2.text += "velocity :" + velocity+ "\n";
			
			
			if(startScroll_event)
			exportRoot.log2.text += "touches :" + startScroll_event+ "\n";
		
		
			
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
		hitArea.graphics.beginFill("#FFF").drawRect(0, 0, 100, 100);
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


(lib.CellMC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Icon_Button
	this.IconButtonMC = new lib.ButtonMC();
	this.IconButtonMC.name = "IconButtonMC";
	this.IconButtonMC.setTransform(76.35,56.35,1.7,1.6999,0,0,0,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.IconButtonMC).wait(1));

	// BG_Button
	this.ButtonMC = new lib.ButtonMC();
	this.ButtonMC.name = "ButtonMC";
	this.ButtonMC.setTransform(49.1,34.2,3.6751,2.1202,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.ButtonMC).wait(1));

	// Icon
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC3366").s().p("AtPNQIAA6fIafAAIAAafg");
	this.shape.setTransform(161.2,141.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Title
	this.title = new cjs.Text("test data", "30px 'Potta One'");
	this.title.name = "title";
	this.title.lineHeight = 45;
	this.title.lineWidth = 166;
	this.title.parent = this;
	this.title.setTransform(248,116);

	this.timeline.addTween(cjs.Tween.get(this.title).wait(1));

	// BG
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCC66").s().p("EgiPARgMAAAgi/MBEfAAAMAAAAi/g");
	this.shape_1.setTransform(228.95,146);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CellMC, new cjs.Rectangle(9.7,34,438.5,224), null);


(lib.ContentMC = function(mode,startPosition,loop,reversed) {
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
	this.CellMC = new lib.CellMC();
	this.CellMC.name = "CellMC";

	this.timeline.addTween(cjs.Tween.get(this.CellMC).wait(1));

	// ScrollButton
	this.ContentBGMC = new lib.ButtonMC();
	this.ContentBGMC.name = "ContentBGMC";
	this.ContentBGMC.setTransform(0,0,4.7844,0.9999);

	this.timeline.addTween(cjs.Tween.get(this.ContentBGMC).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ContentMC, new cjs.Rectangle(0,0,478.5,258), null);


(lib.PanelMC = function(mode,startPosition,loop,reversed) {
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
		this.ScrollMC.content = this.ContentMC;
			
		this.OpenDesciption = function (str)
		{
			if (this.ScrollMC.isScrolled())
				return;
			
		this.ScrollMC.addLog("【OpenDesciption】");
			
		}
		
		this.AddGenerator = function (str)
		{
			if (this.ScrollMC.isScrolled())
				return;
			
		this.ScrollMC.addLog("【AddGenerator】");	
		}
		
		this.Create = function() 
		{
			for (let i = 0; i < 20; i++)
			{
				let clip = new lib.CellMC ();
				this.ContentMC.addChild(clip);
				clip.title.text = "test" + i;
				clip.x = 0;
				clip.y = 0 + 240 * i;
				
				clip.IconButtonMC.addEventListener("click", function() {
					this.OpenDesciption.call(this, clip.title);
				}.bind(this));
			
				clip.ButtonMC.addEventListener("click", function() {
					this.AddGenerator.call(this, clip.title);
				}.bind(this));
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// AS
	this.ScrollMC = new lib.ScrollMC();
	this.ScrollMC.name = "ScrollMC";
	this.ScrollMC.setTransform(-75,1240.05,1,1,0,0,0,25,25);

	this.timeline.addTween(cjs.Tween.get(this.ScrollMC).wait(1));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhX4BE6MAAAiJzMCvxAAAMAAACJzg");
	mask.setTransform(562.5,471);

	// Cell
	this.ContentMC = new lib.ContentMC();
	this.ContentMC.name = "ContentMC";

	var maskedShapeInstanceList = [this.ContentMC];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.ContentMC).wait(1));

	// BG
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#336666").s().p("EglMBzCMAAAjmDMBKZAAAMAAADmDg");
	this.shape.setTransform(238.1,736.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PanelMC, new cjs.Rectangle(-100.5,0,579,1472.4), null);


// stage content:
(lib.test = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
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
		if (createjs.Touch.isSupported())
			createjs.Touch.enable(stage);
		 
		stage.enableMouseOver(20); 
		
		//1秒後に実行
		setTimeout(() => {
			exportRoot.PanelMC.Create();
			exportRoot.PanelMC.ScrollMC.count = 20;
			exportRoot.PanelMC.ScrollMC.Reload();
			exportRoot.PanelMC.ScrollMC.Open();
		}, 1000);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// OBJ
	this.log2 = new cjs.Text("aaaaa", "30px 'MS Gothic'");
	this.log2.name = "log2";
	this.log2.lineHeight = 32;
	this.log2.lineWidth = 583;
	this.log2.parent = this;
	this.log2.setTransform(507,571.7);

	this.log1 = new cjs.Text("1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n1\n2\n3\n4\n5", "30px 'MS Gothic'");
	this.log1.name = "log1";
	this.log1.lineHeight = 32;
	this.log1.lineWidth = 585;
	this.log1.parent = this;
	this.log1.setTransform(507,29.65);

	this.PanelMC = new lib.PanelMC();
	this.PanelMC.name = "PanelMC";
	this.PanelMC.setTransform(0,913,1,1,0,0,0,0,913);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.PanelMC},{t:this.log1},{t:this.log2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(462,562.5,663,909.9000000000001);
// library properties:
lib.properties = {
	id: '969C0F3DFF839440AC4059700CCE57F9',
	width: 1125,
	height: 1125,
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