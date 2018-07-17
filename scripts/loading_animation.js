(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
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


(lib.wing2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,1).p("AJMmeQjtDBA6E9AGCB0QlfgliBFFApLFmQEkhaCsCT");
	this.shape.setTransform(-17,-0.6,1,1,120);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AmFi+IjvKPQgCAGADAGQACAFAGADQAGACAFgDQAGgDACgFIARguIDcpbQAoAVAyAAQAVAAATgDQAPgDAOgFQAmgPAfgeQAMgMAJgNQAJgNAHgNQASgmABgtIKeAAIAYAAQAGAAAFgEQAEgFAAgGQAAgGgEgEQgFgFgGAAIq3AAQgIhAgvgvQg5g5hRAAQhQAAg5A5Qg5A5AABQQAABRA5A5QAKAKALAIQAMAJAOAIAhPlWQAAgCAAgCQAAgNgBgNAh3laQAABAgtAtQgtAthAAAQg/AAgtgtQgugtAAhAQAAg/AugtQAtguA/AAQBAAAAtAuQAtAtAAA/gAjpibIByKDIAHApQABAGAFADQAFAEAGgBQAGgBAEgGQADgEgBgGIgIgvIhxqAAhyjpIH3GmIAiAcQAEAEAHgBQAGAAAEgFQAEgEgBgHQAAgGgFgEIgegZIn+ms");
	this.shape_1.setTransform(-10.5,2.8,1,1,120);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AhrBtQgugtAAhAQAAg+AuguQAtgtA+AAQBAAAAtAtQAtAuAAA+QAABAgtAtQgtAthAAAQg+AAgtgtg");
	this.shape_2.setTransform(33.2,-3.6,1,1,120);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AhqIaQgFgDgBgGIgHgpIhyqDQAPgDAOgFQgOAFgPADQgTADgVAAQgyAAgogVQgOgIgMgJQAMAJAOAIIjcJbIgRAuQgCAFgGADQgFADgGgCQgGgDgCgFQgDgGACgGIDvqPQgLgIgKgKQg5g5AAhRQAAhQA5g5QA5g5BQAAQBRAAA5A5QAvAvAIBAIK3AAQAGAAAFAFQAEAEAAAGQAAAGgEAFQgFAEgGAAIgYAAIqeAAIAAgEQAAgNgBgNQABANAAANIAAAEQgBAtgSAmQgHANgJANQgJANgMAMQgfAegmAPIBxKAIAIAvQABAGgDAEQgEAGgGABIgDAAQgEAAgEgDgAl9nGQguAtAAA/QAABAAuAtQAtAtA/AAQBAAAAtgtQAtgtAAhAQAAg/gtgtQgtguhAAAQg/AAgtAugApHGuIDcpbQAoAVAyAAQAVAAATgDIByKDQitiTkjBZgAhbHdIhxqAQAmgPAfgeQAMgMAJgNQAJgNAHgNQASgmABgtIKeAAQjtDCA6E9In+msIH+GsIAeAZQAFAEAAAGQABAHgEAEQgEAFgGAAQgHABgEgEIgigcIn3mmIH3GmQlfgmiBFGgAlritIAAAAg");
	this.shape_3.setTransform(-10.5,2.8,1,1,120);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.wing2, new cjs.Rectangle(-53.6,-76.4,107.3,152.9), null);


(lib.wing1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,1).p("AmBB0QFfglCBFFAJMFmQkkhaitCTApLmeQDtDBg6E9");
	this.shape.setTransform(69.6,74.7,1,1,-120);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AB3laQAABAAtAtQAuAtA/AAQBAAAAtgtQAugtAAhAQAAg/gugtQgtguhAAAQg/AAguAuQgtAtAAA/gABRl0QAIhAAvgvQA5g5BQAAQBRAAA4A5QA5A5AABQQAABRg5A5QgKAKgKAIQgMAJgOAIQgpAVgyAAQgUAAgUgDQgPgDgOgFQglgPgfgeQgMgMgKgNQgJgNgGgNQgTgmgBgtQAAgCAAgCQAAgNACgNgAptlyQADgCADAAIK4AAABPlWIqdAAIgZAAQgDAAgDgBAJuHkQgBAAgBABQgGACgFgDQgHgDgCgFIgQguIjcpbAByjpIn3GmIghAcQgFAEgGgBQgHAAgEgFQgDgEAAgHQABgGAEgEIAegZIH/msADpibIhxKDIgHApQgBAGgFADQgFAEgGgBQgGgBgEgGQgDgEAAgGIAJgvIBwqAAGGi+IDoJ8");
	this.shape_1.setTransform(63.1,78.1,1,1,-120);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("ABgIdQgGgBgEgGQgDgEABgGIAIgvIBwqAQAOAFAPADIhxKDIgHApQgBAGgGADQgDADgEAAIgDAAgADpibQAUADAVAAQAxAAApgVQgpAVgxAAQgVAAgUgDQgPgDgOgFQglgPgfgeQgMgMgKgNQgJgNgGgNQgSgmgCgtQACAtASAmQAGANAJANIn3GmIghAcQgEAEgHgBQgHAAgEgFQgDgEABgHQAAgGAEgEIAfgZQA6k9jtjCIKdAAIAAgEQABgNABgNQAIhAAvgvQA5g5BRAAQBQAAA4A5QA5A5AABQQAABRg5A5QgKAKgKAIIDoJ8IAAAmIgDABQgFACgFgDQgGgDgDgFIgQguIjcpbQANgIANgJQgNAJgNAIIDcJbQkkhZisCTgAmbCpIH+msgAClnGQguAtABA/QgBBAAuAtQAtAtBAAAQA/AAAtgtQAugtAAhAQAAg/gugtQgtgug/AAQhAAAgtAugAmFC9IH3mmQAKANAMAMQAfAeAlAPIhwKAQiClGlfAmgAFsitgAByjpIAAAAgApOlWIgZAAQgDAAgDgBIAAgbQADgCADAAIK4AAQgBANgBANIAAAEgABRl0g");
	this.shape_2.setTransform(63.1,78.1,1,1,-120);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AhsBtQgtgtAAhAQAAg+AtguQAtgtA/AAQA/AAAtAtQAuAuAAA+QAABAguAtQgtAtg/AAQg/AAgtgtg");
	this.shape_3.setTransform(19.4,71.7,1,1,-120);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.wing1, new cjs.Rectangle(-1,-1,107.3,152.5), null);


(lib.Tween24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(3,1,1).p("AAUAqIgnhT");
	this.shape.setTransform(-5.2,-6.8,0.997,0.997,0,-60.7,119.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CCCCCC").ss(12,1,1).p("AAcA/Ig3h+");
	this.shape_1.setTransform(3.8,5.1,0.997,0.997,0,-60.7,119.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.4,-12.1,23.4,28.8);


(lib.Tween23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(3,1,1).p("AA5AAQAAALgRAIQgQAIgYAAQgXAAgQgIQgRgIAAgLQAAgKARgIQAQgIAXAAQAYAAAQAIQARAIAAAKg");
	this.shape.setTransform(-0.6,-0.8,0.997,0.997,0,-36.7,143.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AgoATQgQgIAAgLQAAgKAQgIQASgIAWAAQAYAAAQAIQARAIAAAKQAAALgRAIQgQAIgYAAQgWAAgSgIg");
	this.shape_1.setTransform(-0.6,-0.8,0.997,0.997,0,-36.7,143.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CCCCCC").ss(3,1,1).p("AA5AAQAAALgRAIQgQAIgYAAQgXAAgQgIQgRgIAAgLQAAgKARgIQAQgIAXAAQAYAAAQAIQARAIAAAKg");
	this.shape_2.setTransform(0.6,0.9,0.997,0.997,0,-36.7,143.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgoATQgQgIAAgLQAAgKAQgIQASgIAWAAQAYAAAQAIQARAIAAAKQAAALgRAIQgQAIgYAAQgWAAgSgIg");
	this.shape_3.setTransform(0.6,0.9,0.997,0.997,0,-36.7,143.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.9,-6.3,13.9,12.8);


(lib.Tween22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("ABbniQCRAaBuBuQCQCQAADKQAADLiQCQQgIAIgIAIQiLCAi/AAQjKAAiQiQQiPiQAAjLQAAjKCPiQQAngmArgcQB0hOCUAAQAvAAAsAIQGAFYiRH1AkImcQFUFjhMIk");
	this.shape.setTransform(0,0,0.999,0.999,0,-29.9,150.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AlaFbQiQiQAAjLQAAjKCQiQQAngmAqgdQEXEjAAGkQAABdgOBkQjKgBiQiPgAAOEqQAAmkkXkjQB1hMCUAAQAvAAAsAHQEWD6ABFLQAAB+goCKQiLCAi/AAQAOhkAAhdgAFKFrIAAAAgAFyBjQgBlLkWj6QCSAaBtBuQCQCQAADKQAADLiQCQIgQAQQAoiKAAh+g");
	this.shape_1.setTransform(0,0,0.999,0.999,0,-29.9,150.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AgRA2QgGgCgDgFQgCgFACgGQABgFAFgDQAEgDAFAAQAGABADADQAFAGgCAIQgBAHgHADIgFACIgFgBgAAHgYIgFAAQgJgCgCgLQgCgKAJgFIAAABIACgBQAGgEAFAEQAKgCAFAIIACAFQACALgKAFQgEACgDAAQgDAAgDgBg");
	this.shape_2.setTransform(-4.1,-40.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.1,-50.1,100.2,100.2);


(lib.Tween21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("ADpGzQgDgEgBgHQAAgFAEgEQADgEAGgBQAGAAAFAEIAEAEIABAGQABAFgFAGIgGAFIgEAAQgGAAgFgFgAgmG3QgLgBgCgLQgCgJAJgGQAEgDAGAAQAFABAEAEQAGAIgEAJQgEAIgJAAIgCAAgAC6F4QgIgFABgIQAAgGAFgFQAEgEAHABQALAAACALQABAFgCAEQgCAFgEACQgEACgDAAQgEAAgEgCgAhXF0QgFgBgEgDQgEgEAAgFQgBgJAHgFQAGgFAJAEQADABAEAGQACAGgBAFQgCAFgFACQgEADgEAAIgBAAgAiCEzQgFgBgDgFQgEgFABgGQACgGAFgEIAEgBQABgBAAAAQABAAAAAAQABAAAAAAQABAAABAAQAEAAAFAEQAEADAAAFQABAGgCAEQgDAFgEACIgGABIgEgBgACIEuQgHgFgBgIQABgJAGgEQAGgEAIADQAEACADAFQACADgBACQADAIgIAGQgEADgEAAQgEAAgEgCgAi3DsQgFgDAAgHQAAgGADgEQAEgEAGgBQAGAAAEADQAIAFgCAJQgBAIgJAEIgEAAQgGAAgEgEgABjDkQgHgDgDgGQgCgGADgHQADgFAHgCQAHgBAFAFIAEAEQACAFgBAEQAAAGgEACQgEAEgFAAIgFAAgAjUCfQgHgFABgJQABgJAJgCQAIgEAGAGIAEAEQACAFgBAEQAAAFgFAEQgCADgGABIgBAAQgFAAgEgDgAA9CSQgFgDgCgFQgCgGACgFQACgFAFgCQAGgDAFACIAEACIAFAFIABAFQABADgCAGQgEAFgFABIgFABIgGgBgAjqBJQgGgBgDgEQgEgFABgGQAAgGAEgDQAEgEAGAAQAGAAAEAEIADAEQADAFgBAFQgCAFgFAEQgDACgFAAIgCAAgAAkAzQgGgBgEgEQgDgEABgHQAAgFADgEQAFgEAGAAQAGAAAEADIADAEQADAGgCAFQgBAGgFACQgEADgEAAIgCAAgAj1gPQgKgCgCgKQgCgLAJgFQAAAAABAAIACgBQAJgDAHAIQAHAIgGAJQgEAHgIAAIgDAAgAAOgkQgIgEgBgJQgBgKAIgEIABAAIAAgBIADgBQAFgBAEACQAFACACAEQAGAKgIAIQgFAFgFAAIgGgBgAj1hdQgEgDgBgFQgBgFACgFQACgFAFgCQAJgGAIAHQAEADABAFQABAFgBAEQgEAFgEACIgHADQgFAAgFgDgAAFiBQgEgDgBgFQAAgGACgEQADgGAIgBQAHgBAFAFQAFAGgBAGQgBAIgGADQgEADgDAAQgFAAgFgFgAjnipQgMgCgBgNQgBgIAHgFQAHgFAHAEQAEACADAFQADAHgCAEQgCAFgEADQgEADgEAAIgBAAgAAEjgQgDgFABgGQAAgFADgDQAEgEAGAAQAFAAAFADIAFAFIAAAFQABAEgCAFQgEAHgIAAQgIAAgFgGgAjYj4QgKgBgCgKQgDgKAIgFQAIgGAIAFQADACADAEIACAEQAAADgBACIgBAGQgFAHgHAAIgDgBgAAPk8IgGgFQgFgJAFgHQAFgIAJABQAJACADAIQADAKgIAHQgFADgEAAQgDAAgDgCgAjKlDQgJgCgDgJQgCgKAJgGQAIgFAIAGQADABACAEIABAEQACAFgEAFQgEAHgIAAIgDAAgAAimcIgEgDQgEgGACgGQABgHAGgDQADgCADAAQAKAAAEAIQAEAJgGAHQgDAEgGABIgDAAQgEAAgDgCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.8,-44,51.7,88);


(lib.Tween20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(3,1,1).p("AAUAqIgnhT");
	this.shape.setTransform(1.9,-8.4,1,1,0,-10.6,169.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CCCCCC").ss(12,1,1).p("AAcA/Ig3h+");
	this.shape_1.setTransform(-1.5,6.2,1,1,0,-10.6,169.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9,-14.4,15.2,33.4);


(lib.Tween19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(3,1,1).p("AA5AAQAAALgRAIQgQAIgYAAQgXAAgQgIQgRgIAAgLQAAgKARgIQAQgIAXAAQAYAAAQAIQARAIAAAKg");
	this.shape.setTransform(0.3,-1,0.999,0.999,0,13.4,-166.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AgoATQgQgIAAgLQAAgKAQgIQASgIAWAAQAYAAAQAIQARAIAAAKQAAALgRAIQgQAIgYAAQgWAAgSgIg");
	this.shape_1.setTransform(0.3,-1,0.999,0.999,0,13.4,-166.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CCCCCC").ss(3,1,1).p("AA5AAQAAALgRAIQgQAIgYAAQgXAAgQgIQgRgIAAgLQAAgKARgIQAQgIAXAAQAYAAAQAIQARAIAAAKg");
	this.shape_2.setTransform(-0.2,1,0.999,0.999,0,13.4,-166.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgoATQgQgIAAgLQAAgKAQgIQASgIAWAAQAYAAAQAIQARAIAAAKQAAALgRAIQgQAIgYAAQgWAAgSgIg");
	this.shape_3.setTransform(-0.2,1,0.999,0.999,0,13.4,-166.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.3,-5.4,14.8,10.8);


(lib.Tween18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(3,1,1).p("AAUAqIgnhT");
	this.shape.setTransform(-2.4,-8.2,0.998,0.998,0,-39.9,140.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CCCCCC").ss(12,1,1).p("AAcA/Ig3h+");
	this.shape_1.setTransform(1.8,6.2,0.998,0.998,0,-39.9,140.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.1,-14.2,15.8,33.1);


(lib.Tween17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(3,1,1).p("AA5AAQAAALgRAIQgQAIgYAAQgXAAgQgIQgRgIAAgLQAAgKARgIQAQgIAXAAQAYAAAQAIQARAIAAAKg");
	this.shape.setTransform(-0.3,-1,0.998,0.998,0,-15.9,164.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AgoATQgQgIAAgLQAAgKAQgIQASgIAWAAQAYAAAQAIQARAIAAAKQAAALgRAIQgQAIgYAAQgWAAgSgIg");
	this.shape_1.setTransform(-0.3,-1,0.998,0.998,0,-15.9,164.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CCCCCC").ss(3,1,1).p("AA5AAQAAALgRAIQgQAIgYAAQgXAAgQgIQgRgIAAgLQAAgKARgIQAQgIAXAAQAYAAAQAIQARAIAAAKg");
	this.shape_2.setTransform(0.2,1,0.998,0.998,0,-15.9,164.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgoATQgQgIAAgLQAAgKAQgIQASgIAWAAQAYAAAQAIQARAIAAAKQAAALgRAIQgQAIgYAAQgWAAgSgIg");
	this.shape_3.setTransform(0.2,1,0.998,0.998,0,-15.9,164.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.2,-5.5,14.6,11);


(lib.Tween8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(3,1,1).p("AAUAqIgnhT");
	this.shape.setTransform(-5.2,-6.8,0.997,0.997,0,-60.7,119.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CCCCCC").ss(12,1,1).p("AAcA/Ig3h+");
	this.shape_1.setTransform(3.8,5.1,0.997,0.997,0,-60.7,119.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.4,-12.1,23.4,28.8);


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(3,1,1).p("AA5AAQAAALgRAIQgQAIgYAAQgXAAgQgIQgRgIAAgLQAAgKARgIQAQgIAXAAQAYAAAQAIQARAIAAAKg");
	this.shape.setTransform(-0.6,-0.8,0.997,0.997,0,-36.7,143.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AgoATQgQgIAAgLQAAgKAQgIQASgIAWAAQAYAAAQAIQARAIAAAKQAAALgRAIQgQAIgYAAQgWAAgSgIg");
	this.shape_1.setTransform(-0.6,-0.8,0.997,0.997,0,-36.7,143.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CCCCCC").ss(3,1,1).p("AA5AAQAAALgRAIQgQAIgYAAQgXAAgQgIQgRgIAAgLQAAgKARgIQAQgIAXAAQAYAAAQAIQARAIAAAKg");
	this.shape_2.setTransform(0.6,0.9,0.997,0.997,0,-36.7,143.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgoATQgQgIAAgLQAAgKAQgIQASgIAWAAQAYAAAQAIQARAIAAAKQAAALgRAIQgQAIgYAAQgWAAgSgIg");
	this.shape_3.setTransform(0.6,0.9,0.997,0.997,0,-36.7,143.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.9,-6.3,13.9,12.8);


(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("ABbniQCRAaBuBuQCQCQAADKQAADLiQCQQgIAIgIAIQiLCAi/AAQjKAAiQiQQiPiQAAjLQAAjKCPiQQAngmArgcQB0hOCUAAQAvAAAsAIQGAFYiRH1AkImcQFUFjhMIk");
	this.shape.setTransform(0,0,0.999,0.999,0,-29.9,150.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AlaFbQiQiQAAjLQAAjKCQiQQAngmAqgdQEXEjAAGkQAABdgOBkQjKgBiQiPgAAOEqQAAmkkXkjQB1hMCUAAQAvAAAsAHQEWD6ABFLQAAB+goCKQiLCAi/AAQAOhkAAhdgAFKFrIAAAAgAFyBjQgBlLkWj6QCSAaBtBuQCQCQAADKQAADLiQCQIgQAQQAoiKAAh+g");
	this.shape_1.setTransform(0,0,0.999,0.999,0,-29.9,150.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AgRA2QgGgCgDgFQgCgEACgHQABgGAFgDQAEgCAFABQAGAAADADQAFAGgCAIQgBAHgHAEIgFABIgFgBgAAHgZIgFAAQgJgCgCgJQgCgLAJgFIAAAAIACgBQAGgCAFADQAKgCAFAJIACAEQACAKgKAGQgEACgDAAQgDAAgDgCg");
	this.shape_2.setTransform(-4.1,-40.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.1,-50.1,100.2,100.2);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("ADpGzQgDgEgBgHQAAgFAEgEQADgEAGgBQAGAAAFAEIAEAEIABAGQABAFgFAGIgGAFIgEAAQgGAAgFgFgAgmG3QgLgBgCgLQgCgJAJgGQAEgDAGAAQAFABAEAEQAGAIgEAJQgEAIgJAAIgCAAgAC6F4QgIgFABgIQAAgGAFgFQAEgEAHABQALAAACALQABAFgCAEQgCAFgEACQgEACgDAAQgEAAgEgCgAhXF0QgFgBgEgDQgEgEAAgFQgBgJAHgFQAGgFAJAEQADABAEAGQACAGgBAFQgCAFgFACQgEADgEAAIgBAAgAiCEzQgFgBgDgFQgEgFABgGQACgGAFgEIAEgBQABgBAAAAQABAAAAAAQABAAAAAAQABAAABAAQAEAAAFAEQAEADAAAFQABAGgCAEQgDAFgEACIgGABIgEgBgACIEuQgHgFgBgIQABgJAGgEQAGgEAIADQAEACADAFQACADgBACQADAIgIAGQgEADgEAAQgEAAgEgCgAi3DsQgFgDAAgHQAAgGADgEQAEgEAGgBQAGAAAEADQAIAFgCAJQgBAIgJAEIgEAAQgGAAgEgEgABjDkQgHgDgDgGQgCgGADgHQADgFAHgCQAHgBAFAFIAEAEQACAFgBAEQAAAGgEACQgEAEgFAAIgFAAgAjUCfQgHgFABgJQABgJAJgCQAIgEAGAGIAEAEQACAFgBAEQAAAFgFAEQgCADgGABIgBAAQgFAAgEgDgAA9CSQgFgDgCgFQgCgGACgFQACgFAFgCQAGgDAFACIAEACIAFAFIABAFQABADgCAGQgEAFgFABIgFABIgGgBgAjqBJQgGgBgDgEQgEgFABgGQAAgGAEgDQAEgEAGAAQAGAAAEAEIADAEQADAFgBAFQgCAFgFAEQgDACgFAAIgCAAgAAkAzQgGgBgEgEQgDgEABgHQAAgFADgEQAFgEAGAAQAGAAAEADIADAEQADAGgCAFQgBAGgFACQgEADgEAAIgCAAgAj1gPQgKgCgCgKQgCgLAJgFQAAAAABAAIACgBQAJgDAHAIQAHAIgGAJQgEAHgIAAIgDAAgAAOgkQgIgEgBgJQgBgKAIgEIABAAIAAgBIADgBQAFgBAEACQAFACACAEQAGAKgIAIQgFAFgFAAIgGgBgAj1hdQgEgDgBgFQgBgFACgFQACgFAFgCQAJgGAIAHQAEADABAFQABAFgBAEQgEAFgEACIgHADQgFAAgFgDgAAFiBQgEgDgBgFQAAgGACgEQADgGAIgBQAHgBAFAFQAFAGgBAGQgBAIgGADQgEADgDAAQgFAAgFgFgAjnipQgMgCgBgNQgBgIAHgFQAHgFAHAEQAEACADAFQADAHgCAEQgCAFgEADQgEADgEAAIgBAAgAAEjgQgDgFABgGQAAgFADgDQAEgEAGAAQAFAAAFADIAFAFIAAAFQABAEgCAFQgEAHgIAAQgIAAgFgGgAjYj4QgKgBgCgKQgDgKAIgFQAIgGAIAFQADACADAEIACAEQAAADgBACIgBAGQgFAHgHAAIgDgBgAAPk8IgGgFQgFgJAFgHQAFgIAJABQAJACADAIQADAKgIAHQgFADgEAAQgDAAgDgCgAjKlDQgJgCgDgJQgCgKAJgGQAIgFAIAGQADABACAEIABAEQACAFgEAFQgEAHgIAAIgDAAgAAimcIgEgDQgEgGACgGQABgHAGgDQADgCADAAQAKAAAEAIQAEAJgGAHQgDAEgGABIgDAAQgEAAgDgCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.8,-44,51.7,88);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(3,1,1).p("AAUAqIgnhT");
	this.shape.setTransform(1.9,-8.4,1,1,0,-10.6,169.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CCCCCC").ss(12,1,1).p("AAcA/Ig3h+");
	this.shape_1.setTransform(-1.5,6.2,1,1,0,-10.6,169.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9,-14.4,15.2,33.4);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(3,1,1).p("AA5AAQAAALgRAIQgQAIgYAAQgXAAgQgIQgRgIAAgLQAAgKARgIQAQgIAXAAQAYAAAQAIQARAIAAAKg");
	this.shape.setTransform(0.3,-1,0.999,0.999,0,13.4,-166.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AgoATQgQgIAAgLQAAgKAQgIQASgIAWAAQAYAAAQAIQARAIAAAKQAAALgRAIQgQAIgYAAQgWAAgSgIg");
	this.shape_1.setTransform(0.3,-1,0.999,0.999,0,13.4,-166.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CCCCCC").ss(3,1,1).p("AA5AAQAAALgRAIQgQAIgYAAQgXAAgQgIQgRgIAAgLQAAgKARgIQAQgIAXAAQAYAAAQAIQARAIAAAKg");
	this.shape_2.setTransform(-0.2,1,0.999,0.999,0,13.4,-166.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgoATQgQgIAAgLQAAgKAQgIQASgIAWAAQAYAAAQAIQARAIAAAKQAAALgRAIQgQAIgYAAQgWAAgSgIg");
	this.shape_3.setTransform(-0.2,1,0.999,0.999,0,13.4,-166.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.3,-5.4,14.8,10.8);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(3,1,1).p("AAUAqIgnhT");
	this.shape.setTransform(-2.4,-8.2,0.998,0.998,0,-39.9,140.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CCCCCC").ss(12,1,1).p("AAcA/Ig3h+");
	this.shape_1.setTransform(1.8,6.2,0.998,0.998,0,-39.9,140.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.1,-14.2,15.8,33.1);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(3,1,1).p("AA5AAQAAALgRAIQgQAIgYAAQgXAAgQgIQgRgIAAgLQAAgKARgIQAQgIAXAAQAYAAAQAIQARAIAAAKg");
	this.shape.setTransform(-0.3,-1,0.998,0.998,0,-15.9,164.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AgoATQgQgIAAgLQAAgKAQgIQASgIAWAAQAYAAAQAIQARAIAAAKQAAALgRAIQgQAIgYAAQgWAAgSgIg");
	this.shape_1.setTransform(-0.3,-1,0.998,0.998,0,-15.9,164.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CCCCCC").ss(3,1,1).p("AA5AAQAAALgRAIQgQAIgYAAQgXAAgQgIQgRgIAAgLQAAgKARgIQAQgIAXAAQAYAAAQAIQARAIAAAKg");
	this.shape_2.setTransform(0.2,1,0.998,0.998,0,-15.9,164.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgoATQgQgIAAgLQAAgKAQgIQASgIAWAAQAYAAAQAIQARAIAAAKQAAALgRAIQgQAIgYAAQgWAAgSgIg");
	this.shape_3.setTransform(0.2,1,0.998,0.998,0,-15.9,164.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.2,-5.5,14.6,11);


(lib.gear3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(3,0,1).p("AAlAAQAAAPgLALQgLALgPAAQgOAAgLgLQgKgLAAgPQAAgOAKgLQALgLAOAAQAPAAALALQALALAAAOg");
	this.shape.setTransform(0.1,-0.3,0.229,0.229,-30);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgZAZQgLgKAAgPQAAgOALgLQALgLAOAAQAPAAAKALQALALAAAOQAAAPgLAKQgKAMgPAAQgOAAgLgMg");
	this.shape_1.setTransform(0.1,-0.3,0.229,0.229,-30);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#999999").ss(3,0,1).p("AgCG6IAFtz");
	this.shape_2.setTransform(0.1,0,0.229,0.229,-60,0,0,0.1,0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#999999").ss(3,0,1).p("AgCG6IAFtz");
	this.shape_3.setTransform(0.1,0,0.229,0.229,-90,0,0,-0.2,0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#999999").ss(3,0,1).p("AgCG6IAFtz");
	this.shape_4.setTransform(0.1,0.1,0.229,0.229,30,0,0,0.7,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#999999").ss(3,0,1).p("AgCG6IAFtz");
	this.shape_5.setTransform(0.1,0.1,0.229,0.229,0,0,0,0.3,0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#999999").ss(3,0,1).p("AgCG6IAFtz");
	this.shape_6.setTransform(0.1,0,0.229,0.229,60,0,0,0.2,-0.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#999999").ss(3,0,1).p("AgCG6IAFtz");
	this.shape_7.setTransform(0.1,-0.3,0.229,0.229,-30);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#999999").ss(3,1,1).p("AEwAAQAAB+hZBZQhZBZh+AAQh9AAhZhZQhZhZAAh+QAAh9BZhZQBZhZB9AAQB+AABZBZQBZBZAAB9g");
	this.shape_8.setTransform(0.1,-0.2,0.229,0.229,-30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.gear3, new cjs.Rectangle(-11.6,-11.6,23.3,23.3), null);


(lib.gear2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(7.9,0,1).p("AAlAAQAAAPgLALQgLALgPAAQgOAAgLgLQgKgLAAgPQAAgOAKgLQALgLAOAAQAPAAALALQALALAAAOg");
	this.shape.setTransform(0.2,-0.8,0.524,0.524,-30);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgZAZQgLgKAAgPQAAgOALgLQALgLAOAAQAPAAAKALQALALAAAOQAAAPgLAKQgKAMgPAAQgOAAgLgMg");
	this.shape_1.setTransform(0.2,-0.8,0.524,0.524,-30);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#666666").ss(7.9,0,1).p("AgCG6IAFtz");
	this.shape_2.setTransform(0,-0.3,0.524,0.524,-60,0,0,-0.1,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#666666").ss(7.9,0,1).p("AgCG6IAFtz");
	this.shape_3.setTransform(0.1,-0.4,0.524,0.524,-90,0,0,-0.1,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#666666").ss(7.9,0,1).p("AgCG6IAFtz");
	this.shape_4.setTransform(0,0,0.524,0.524,30);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#666666").ss(7.9,0,1).p("AgCG6IAFtz");
	this.shape_5.setTransform(0,0,0.524,0.524);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#666666").ss(7.9,0,1).p("AgCG6IAFtz");
	this.shape_6.setTransform(0,-0.4,0.524,0.524,60,0,0,-0.1,-0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#666666").ss(7.9,0,1).p("AgCG6IAFtz");
	this.shape_7.setTransform(0.3,-0.7,0.524,0.524,-30);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#666666").ss(7.9,1,1).p("AEwAAQAAB+hZBZQhZBZh+AAQh9AAhZhZQhZhZAAh+QAAh9BZhZQBZhZB9AAQB+AABZBZQBZBZAAB9g");
	this.shape_8.setTransform(0.2,-0.6,0.524,0.524,-30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.gear2, new cjs.Rectangle(-27.1,-27.1,54.3,54.3), null);


(lib.gear1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(7.2,0,1).p("AAlAAQAAAPgLALQgLALgPAAQgOAAgLgLQgKgLAAgPQAAgOAKgLQALgLAOAAQAPAAALALQALALAAAOg");
	this.shape.setTransform(0.4,-1.3,1,1,-30);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AgZAZQgLgKAAgPQAAgOALgLQALgLAOAAQAPAAAKALQALALAAAOQAAAPgLAKQgKAMgPAAQgOAAgLgMg");
	this.shape_1.setTransform(0.4,-1.3,1,1,-30);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CCCCCC").ss(9.7,0,1).p("AgCG6IAFtz");
	this.shape_2.setTransform(0.1,-0.8,1,1,-60);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#CCCCCC").ss(9.7,0,1).p("AgCG6IAFtz");
	this.shape_3.setTransform(0,-0.8,1,1,-90);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#CCCCCC").ss(9.7,0,1).p("AgCG6IAFtz");
	this.shape_4.setTransform(0,0.1,1,1,30);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#CCCCCC").ss(9.7,0,1).p("AgCG6IAFtz");
	this.shape_5.setTransform(0,0,1,1,0,0,0,-0.1,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#CCCCCC").ss(9.7,0,1).p("AgCG6IAFtz");
	this.shape_6.setTransform(0,-0.7,1,1,60,0,0,-0.1,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#CCCCCC").ss(9.7,0,1).p("AgCG6IAFtz");
	this.shape_7.setTransform(0.6,-1.2,1,1,-30);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#CCCCCC").ss(9.7,1,1).p("AEwAAQAAB+hZBZQhZBZh+AAQh9AAhZhZQhZhZAAh+QAAh9BZhZQBZhZB9AAQB+AABZBZQBZBZAAB9g");
	this.shape_8.setTransform(0.5,-1,1,1,-30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.gear1, new cjs.Rectangle(-49,-49,98.1,98.1), null);


(lib.gear3_spin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.gear3();
	this.instance.parent = this;
	this.instance.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.gear3_spin, new cjs.Rectangle(-11.6,-11.6,23.3,23.3), null);


(lib.gear2_test = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.gear2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.gear2_test, new cjs.Rectangle(-27.1,-27.1,54.3,54.3), null);


(lib.gear2_spin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.gear2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.gear2_spin, new cjs.Rectangle(-27.1,-27.1,54.3,54.3), null);


// stage content:
(lib.project_animated = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hat
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(4,0,1).p("AB4iwIjvFh");
	this.shape.setTransform(480.5,320.5,0.742,0.742);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CCCCCC").ss(4,1,1).p("AEJAAQAABhhOBEQhNBFhuAAQhsAAhOhFQhNhEAAhhQAAhgBNhFQBOhEBsAAQBuAABNBEQBOBFAABgg");
	this.shape_1.setTransform(476.1,318.1,0.742,0.742);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ai6CmQhNhFAAhhQAAhgBNhEQBNhFBtAAQBuAABNBFQBNBEAABgQAABhhNBFQhNBEhuAAQhtAAhNhEgAg7DSIDvlhg");
	this.shape_2.setTransform(476.1,318.1,0.742,0.742);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(2,0,1).p("ABliYIjJEx");
	this.shape_3.setTransform(435.6,323,0.742,0.742);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(9.2,0,1).p("AB8i5Ij3Fz");
	this.shape_4.setTransform(426.8,318.1,0.742,0.742);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#CCCCCC").ss(4,1,1).p("AEJAAQAABhhOBFQhGA+hhAGIAAAAQgKAAgKAAQhIAAg7geQgdgQgagWQhNhFAAhhQAAhgBNhFQBOhEBsAAQBKAAA8AfQAcAQAZAVQBOBFAABgg");
	this.shape_5.setTransform(426.8,318,0.742,0.742);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AiDDLQgdgPgagXQhNhEgBhhQABhgBNhFQBOhEBsAAQBKAAA8AfQAcAQAZAVQBOBFAABgQAABhhOBEQhGA/hhAGIAAAAIgUAAQhIAAg7gfgAASDdIDKkxgAh7C7ID4lyg");
	this.shape_6.setTransform(426.8,318,0.742,0.742);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(2,0,1).p("ABliYIjJEx");
	this.shape_7.setTransform(435.8,320.9,0.742,0.742);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(9.2,0,1).p("AB8i5Ij3Fz");
	this.shape_8.setTransform(427,316,0.742,0.742);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#CCCCCC").ss(4,1,1).p("AEJAAQAABhhOBFQhGA+hhAGIAAAAQgKAAgKAAQhIAAg7geQgdgQgagWQhNhFAAhhQAAhgBNhFQBOhEBsAAQBKAAA8AfQAcAQAZAVQBOBFAABgg");
	this.shape_9.setTransform(426.9,315.9,0.742,0.742);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AiDDLQgdgPgagXQhNhEgBhhQABhgBNhFQBOhEBsAAQBKAAA8AfQAcAQAZAVQBOBFAABgQAABhhOBEQhGA/hhAGIAAAAIgUAAQhIAAg7gfgAASDdIDKkxgAh7C7ID4lyg");
	this.shape_10.setTransform(426.9,315.9,0.742,0.742);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(4,0,1).p("AB4iwIjvFh");
	this.shape_11.setTransform(480.4,318,0.742,0.742);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#CCCCCC").ss(4,1,1).p("AEJAAQAABhhOBEQhNBFhuAAQhsAAhOhFQhNhEAAhhQAAhgBNhFQBOhEBsAAQBuAABNBEQBOBFAABgg");
	this.shape_12.setTransform(476,315.6,0.742,0.742);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("Ai6CmQhNhFAAhhQAAhgBNhEQBNhFBtAAQBuAABNBFQBNBEAABgQAABhhNBFQhNBEhuAAQhtAAhNhEgAg7DSIDvlhg");
	this.shape_13.setTransform(476,315.6,0.742,0.742);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(2,1,1).p("AhmlzQBDgJCCgQIiMBTQAcgCA6gBIgtAeQAtADAMAAIg4AfIAfAAQgEAQgSAGIAmAOQgDAKgJAHQgHAGgJAAQALABAHAJIhYApIBXAHQgDACgaARQAOAAALAIQgOANgHAMQAMgGAKANQAKAMABAQQABAJABAUQACARAIAIQgUAXgMAMQApARApABQg5AZglAPQATACAlABQgOADgLAJQgLAKgFANQANAKARAKIgnAeQAFALgFAMQgFANgKAFQAkAXAnADQgMAAgJALQgMAOAGAPQgZAGgZARQARALgEASIghAWQAfALAWACQgIAGgUAKABLD+QADAAADAA");
	this.shape_14.setTransform(470.2,288.4,0.742,0.742);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#CCCCCC").ss(14.4,1,1).p("Al5g3QDLBqCtAFQCrAEDQhe");
	this.shape_15.setTransform(449.4,317.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#CCCCCC").ss(4,1,1).p("AIxneQgiAsh9AjQgEABgDABQgGABgGACQikApjkAAQjxAAiqguQh3ghglgpQgOgSAAgVQAAhBCqgvQCqgvDxAAQDkAACkArQAKACAJACQApALAeAMQBjAnAAAyQAAASgLAQQgqB1geBvQhEDygQDMApAnZQAkB3AbBoQACAGABAGQA+DpASCTQACAQACAQQgGgJgJgGQgRgNgaACQgOACgMAEQgUAIgNARQgTAZgDAlQgCAfAJAmQAOA6AiA1QAFAHAFAIQAEAGAFAFQAuA+BDAtQB0BPCtAaQB2ARBmgFQBAgEA/gOQAIgDAegKQABAAABAAIABAAQAQgHApgUQAOgHANgHQAGgEAGgDQAZgPAXgQQAngfAmg3QAMgTAMgUQAUgmANgqQATg+gHgxQgFgkgMgdQgKgZgKgHQgPgMgUACQgPABgQAIQggAQgbAi");
	this.shape_16.setTransform(450.4,291.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(4,0,1).p("AmfhIQAEAqAAAgQAAAPgBANAGggxQgDAmgBAiQAAARAAAP");
	this.shape_17.setTransform(449.3,315.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AmbBxQh2ghglgqQgPgRAAgVQAAhACqgvQCrgvDwAAQDkAAClAqIATAFQApAKAeAMQBjAnAAAyQAAASgLAQQgiAsh9AjIgIACIgLACQilAqjkAAQjwAAirgug");
	this.shape_18.setTransform(449.5,240);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AhgIyQitgZh0hQQhDgtgug9IgJgMIgKgPQgig0gOg7QgJglACgfQADglATgZQANgSAUgHQAMgFAOgBQAagCARAMQAJAGAGAJIgEggQgSiSg+jqIgDgMQgbhngkh4QAlAqB3AgQCqAvDxAAQDkAACkgqIAMgCIAHgDQB9giAigsQgqB1geBuQhEDygQDNIgEBJIAAAgIAAggIAEhJIAIAAIADAAIALABQAbgiAggQQAQgJAPgBQAUgCAPAMQAKAHAKAZQAMAeAFAkQAHAxgTA+QgNApgUAmIgYAoQgmA3gnAeQgXARgZAOIgMAHIgbAOQgpAVgQAGIgBAAIgsAAIAEANQg/AOhAAEIgwABQhQAAhcgNgAgCDgQCbAAC5hRIABAAIARgIIAEgCIgEACIgRAIIgBAAQi5BRibAAIgBAAIAAAAIgPAAQitgFjLhqQDLBqCtAFIAPAAIAAAAIABAAgAmuC0IABgcQAAghgEgqQAEAqAAAhIgBAcg");
	this.shape_19.setTransform(451.1,300.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(2,1,1).p("AhmlzQBDgJCCgQIiMBTQAcgCA6gBIgtAeQAtADAMAAIg4AfIAfAAQgEAQgSAGIAmAOQgDAKgJAHQgHAGgJAAQALABAHAJIhYApIBXAHQgDACgaARQAOAAALAIQgOANgHAMQAMgGAKANQAKAMABAQQABAJABAUQACARAIAIQgUAXgMAMQApARApABQg5AZglAPQATACAlABQgOADgLAJQgLAKgFANQANAKARAKIgnAeQAFALgFAMQgFANgKAFQAkAXAnADQADAAADAAABLD+QgMAAgJALQgMAOAGAPQgZAGgZARQARALgEASIghAWQAfALAWACQgIAGgUAK");
	this.shape_20.setTransform(470.2,288.4,0.742,0.742);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_18},{t:this.shape_19},{t:this.shape_16},{t:this.shape_17},{t:this.shape_15},{t:this.shape_20},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_3},{t:this.shape_4},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},10).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_16},{t:this.shape_17},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_3},{t:this.shape_4},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},12).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_16},{t:this.shape_17},{t:this.shape_15},{t:this.shape_20},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_7},{t:this.shape_8},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},36).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_16},{t:this.shape_17},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_3},{t:this.shape_4},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},92).wait(1));

	// Text
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgnCOIAcgLIhXjtIgcALIgHgTIBwgpQAmgOAnAdQAnAcAYBBQAXA+gMAuQgMAtgoAOIhuApgAgZiEIgmAOIBWDtIAmgOQAjgNAEgnQABgQgFgUQgDgSgMghQgWg7gVgWQgUgVgXAAQgKAAgKAEg");
	this.shape_21.setTransform(532.5,411.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgzCPIAdgHIhCjyIgcAIIgFgTICkgsIAjBhIgNADIgLgbQgEgLgGgJQgIgKgHgFQgHgFgJgBQgLgBgMADIgnALIAcBrIAOgFQARgEADgNQABgNgHgaIANgDIAfB0IgNADQgHgagHgJQgJgLgQAFIgPAEIAfB1IAngLQAMgEAJgEQAJgGAEgIQAFgIACgJQACgIAAgMIgBgYIgFgcIAOgDIASB1IipAtg");
	this.shape_22.setTransform(513.6,416.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AhVCGIAegFIgsj4IgeAFIgDgUIBngSQAkgGAaASQAaATAGAhQADAXgIAUQgIAUgVANQAdAKAKAhIAFAQIAFASIAEAQIAFAOQAEAIAFAEQAEAEAGgBQAGgBAEgIQAEgJgCgOIAAgFIABgDIAEgDQAGgBACAJIAAAIIAAALIgDAOQgCAGgGAFQgGAFgIACQgZAEgQgJQgIgDgFgGQgFgGgDgJIgMgvIgDgPQgEgQgIgJQgLgMgPACIggAGIAVB1IAcgFIADAUIguAHIgwAJgAgfiDIgfAFIAUB1IAfgFQAMgDAJgFQAIgGAEgGQADgGAAgJIAAgQIgCgPIgDgRIgFgOQgFgJgFgEQgFgFgJgCIgKgBIgMABg");
	this.shape_23.setTransform(494.1,421.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AhNCEIAegCIgWj5IgeADIgCgVICqgOIARBmIgNABIgFgdQgDgLgFgKQgFgMgGgFQgGgHgKgCQgJgDgNABIgpAEIAKBtIAPgBQARgCAEgMQAFgMgDgbIANgBIALB3IgNABQgCgagHgMQgHgLgRACIgPABIALB5IApgEQAMgBAJgDQAJgFAGgGQAGgIAEgHQAEgIACgNIACgXIACgcIANgCIgDB3IiuAPg");
	this.shape_24.setTransform(470.1,424);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAACPIg9ABIAAgUIAqAAIAAj3IgUAAQgMAAgIAEQgJAFgEAGQgEAFgDANIgEAWIgBAcIgOAAIAGhnIC5AAIAFBnIgMAAIgCgcIgEgWQgDgNgFgGQgEgGgIgEQgIgEgLAAIgWAAIAAD3IArAAIAAAUg");
	this.shape_25.setTransform(449.8,424.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AA/CaIgFgBIgCgFIhykFIgTDeQgBAIABABIAHADIAOADIAHAAIgCAUIglgEIglgCIACgUIAHAAIAQABIAGgCQACgCABgHIAVjvIgegDIABgUIA/AGIAFABIAEAFIBaDQIAPisQABgHgBgBIgHgDIgOgDIgHgBIACgUIAlAFIAlACIgCAUIgHgBIgQAAIgGACIgCAJIgVD1QgBAJgBACQgCADgDAAIgCgBg");
	this.shape_26.setTransform(427,423.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgqCcQgogHgSggQgRghAIgtIAeirIgdgFIADgTIAwAJIAxAIIgDATIgdgFIgfCvIgDASIAAAUQAAANADAJQADAJAJAHQAIAJAOACQALACALgDQALgCAKgIQAKgIAIgPQAIgQAEgXIAcieIAAgIIgHgEIgOgEIgGgBIADgUIAkAIIAlAFIgEAUIgHgCIgOgBIgHACQgCABgBAHIgcCfQgIAqgYAbQgTAUgbAAIgOgBg");
	this.shape_27.setTransform(405,419.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgmCSQgtgMgQgvQgQgvAShAQARhCAmgiQAlgiAsANQAsALARAwQAPAwgSBCQgRBAglAhQgaAYgfAAQgMAAgMgDgAAIh/QgOAGgNAQQgUAbgQA7QgQA6ADAjQABAYAKAOQAKANANAEQAeAIAZgkQAUgcARg+QAPg4gDghQgCgVgKgNQgKgNgOgEIgJgBQgIAAgJADg");
	this.shape_28.setTransform(380.8,413);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("Ag3CPQgwgRgOgyQgNgyAWg+QAXg/ArgdQAqgeAvASQAeAKAMAjIAZgRQAEgDACABQABAAAAABQABAAAAABQABAAAAABQAAAAAAABIgCAJIggBWQgDAIgBABQgCACgFgCIgFgDIACgIQAJgngIgcQgJgcgVgIQghgMgeAYQgbAVgYBCQgWA7AFAiQAGApAlANQAWAIAYgOQAagOAPglIADgFIAFABIAFADQAAACgCAFQgNAlghAWQgTAOgVAAQgNAAgMgFg");
	this.shape_29.setTransform(362.6,405.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]},10).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]},12).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]},36).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]},92).wait(1));

	// leaf
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(2,1,1).p("ADCGpQgdgVgWAPQgUANgDAiQgDAjASAfQAVAkApAOQA1ASAxgeQA3gigChHQgCglgrg0QgEgGhNhRQg4g7gZgtQgSgegdhQQgIgwgMgqQgXhXgSAXQgDAFgCAxQgCArgGgCQgPgHgfhWQgghWgFgCQgagJAJA2QAEAbAAAGQgBANgMgKIgBAAQgWgSgOgPQgZgbgJgkQgFgWAIhMQADgagCgGQgDgIgNAQQgKANgbAmQgWASgBhHQgGhiAGg1QALg3ADgbQAGgwgRgCQgOgCgSAfQgRAdgOBKQgPBOAFAsQAHA2AKAmQAGAVgDAKQgDAJgRgPQgRgOgUgcQgLgPgEAIQgDAIAEAWQAMA5AjAjQANANA5AyQAuAsgcgEIhagiQgzgBBMA2QBIAyAxAOQAuAOApAYQAUAMALAKQAFAPgLAAQgGAAgXgGQgvgMgDAdQgCATApARIBSAfQBLAdA+A8QAkAkA9BJQAQASACAkQABAhgIAGQABgBgEgLQgHgXglgbg");
	this.shape_30.setTransform(486.8,445.9,0.533,0.533,0,41.8,-138.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#CCCCCC").s().p("ADFJGQgpgOgVgkQgSgfADgjQADgiAUgNQAWgPAdAVQAlAbAHAXQAEALgBABQAIgGgBghQgCgkgQgSQg9hJgkgkQg+g8hLgdIhSgfQgpgRACgTQADgdAvAMQAXAGAGAAQALAAgFgPQgLgKgUgMQgpgYgugOQgxgOhIgyQhMg2AzABIBaAiQAcAEgugsQg5gygNgNQgjgjgMg5QgEgWADgIQAEgIALAPQAUAcARAOQARAPADgJQADgKgGgVQgKgmgHg2QgFgsAPhOQAOhKARgdQASgfAOACQARACgGAwQgDAbgLA3QgGA1AGBiQABBHAWgSIAlgzQANgQADAIQACAGgDAaQgIBMAFAWQAJAkAZAbQAOAPAWASIABAAQAMAKABgNIgEghQgJg2AaAJQAFACAgBWQAfBWAPAHQAGACACgrQACgxADgFQASgXAXBXQAMAqAIAwQAdBQASAeQAZAtA4A7IBRBXQArA0ACAlQACBHg3AiQgeASghAAQgTAAgUgGg");
	this.shape_31.setTransform(486.8,445.9,0.533,0.533,0,41.8,-138.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(2,1,1).p("ACsHMQgqgfgoAuQgkApAXAoIAAABQATAiAqAIIABAAQAlAGAhgRQA9gfAFhNQAAgEAAgFQABhPg6grIAAgBQg2gohKANQhGANgrA1QgEAFgEAFQggAqgIA5QgIA/AaA3QAaA2A3AiQA1AiA9gCIABAAQBTgCA8g0QACgCACgCQACgBACgDQA0gxAZhSIAAgBQAIgcgGhGQgHhQgYgzQgLgXgYgpQgCgDgDgEQgJgPgJgOQAAAAAAgBQgWgigXgfQgOgShQhYQgyg2gVg3QgIgwgLgrQgXhXgSAXQgDAEgDAxQgCAtgGgDQgNgGghhXQgghWgFgCQgZgKAJA2QAEAcAAAGQgBAMgNgJIAAAAQgWgTgOgOQgagbgIglQgFgWAIhMQACgZgCgGQgDgIgMAQQgKANgbAlQgLAKgGgOQgBgCgBgCQgCgGgBgJQgBgMgBgRQgGhjAHg1QAKg3ADgbQAHgwgRgCQgHAAgIAIQgJAIgIAOQgRAdgPBKQgPBNAGAtQAFApAHAgQACAIACAHQAAACABABQAGAWgDAJQgDAKgRgPQgRgPgUgcQgLgPgEAIQgEAIAFAWQAMA6AjAiQANANA5AzQAtAsgcgEIhZgiQgzgCBLA2QBJA0AwAOQAvANAoAZQAUAMALAKQAFAOgLABQgFAAgXgGQgvgMgDAcQgCATAoATQAZALBLAcQCoBEBPByQALARAKARQAdAzAQA8QAXBSgPA3IAAgBQgJAegUAgQgUAegQAMQgvAkhAgMQg4gLgkglQgOgOgGgeQgGgaAEgYQACgTAKgVIAJgRQAPgSAPgJQAPgIAXgFIAZgBQAbAAAOAKQAOALAIAUQAEALACAIQgBASgPAQQgIAIgIAEQARgNgEgYQgCgNgLgHg");
	this.shape_32.setTransform(578.7,368.1,0.742,0.742,0,0,180);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#999999").s().p("AAcK+Qg3gigag2Qgag3AIg/QAIg5AggqIAIgKQArg1BGgNQBKgNA2AoIAAABQA6ArgBBPIAAAJQgFBNg9AfQghARglgGIgBAAQgqgIgTgiIAAgBQgXgoAkgpQAoguAqAfQALAHACANQAEAYgRANQAIgEAIgIQAPgQABgSQgCgIgEgLQgIgUgOgLQgOgKgbAAIgZABQgXAFgPAIQgPAJgPASIgJARQgKAVgCATQgEAYAGAaQAGAeAOAOQAkAlA4ALQBAAMAvgkQAQgMAUgeQAUggAJgeIAAABQAPg3gXhSQgQg8gdgzQgKgRgLgRQhPhyiohEQhLgcgZgLQgogTACgTQADgcAvAMQAXAGAFAAQALgBgFgOQgLgKgUgMQgogZgvgNQgwgOhJg0QhLg2AzACIBZAiQAcAEgtgsQg5gzgNgNQgjgigMg6QgFgWAEgIQAEgIALAPQAUAcARAPQARAPADgKQADgJgGgWIgBgDIgEgPQgHgggFgpQgGgtAPhNQAPhKARgdQAIgOAJgIQAIgIAHAAQARACgHAwQgDAbgKA3QgHA1AGBjQABARABAMIADAPIACAEQAGAOALgKIAlgyQAMgQADAIQACAGgCAZQgIBMAFAWQAIAlAaAbQAOAOAWATIAAAAQANAJABgMIgEgiQgJg2AZAKQAFACAgBWQAhBXANAGQAGADACgtQADgxADgEQASgXAXBXQALArAIAwQAVA3AyA2QBQBYAOASQAXAfAWAiIAAABIASAdIAFAHQAYApALAXQAYAzAHBQQAGBGgIAcIAAABQgZBSg0AxIgEAEIgEAEQg8A0hTACIgBAAIgFABQg6AAgzghg");
	this.shape_33.setTransform(578.7,368.1,0.742,0.742,0,0,180);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(2,1,1).p("ADCGpQgdgVgWAPQgUANgDAiQgDAjASAfQAVAkApAOQA1ASAxgeQA3gigChHQgCglgrg0QgEgGhNhRQg4g7gZgtQgSgegdhQQgIgwgMgqQgXhXgSAXQgDAFgCAxQgCArgGgCQgPgHgfhWQgghWgFgCQgagJAJA2QAEAbAAAGQgBANgMgKIgBAAQgWgSgOgPQgZgbgJgkQgFgWAIhMQADgagCgGQgDgIgNAQQgKANgbAmQgWASgBhHQgGhiAGg1QALg3ADgbQAGgwgRgCQgOgCgSAfQgRAdgOBKQgPBOAFAsQAHA2AKAmQAGAVgDAKQgDAJgRgPQgRgOgUgcQgLgPgEAIQgDAIAEAWQAMA5AjAjQANANA5AyQAuAsgcgEIhagiQgzgBBMA2QBIAyAxAOQAuAOApAYQAUAMALAKQAFAPgLAAQgGAAgXgGQgvgMgDAdQgCATApARIBSAfQBLAdA+A8QAkAkA9BJQAQASACAkQABAhgIAGQABgBgEgLQgHgXglgbg");
	this.shape_34.setTransform(413.5,445.1,0.533,0.533,-41.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#CCCCCC").s().p("ADFJGQgpgOgVgkQgSgfADgjQADgiAUgNQAWgPAdAVQAlAbAHAXQAEALgBABQAIgGgBghQgCgkgQgSQg9hJgkgkQg+g8hLgdIhSgfQgpgRACgTQADgdAvAMQAXAGAGAAQALAAgFgPQgLgKgUgMQgpgYgugOQgxgOhIgyQhMg2AzABIBaAiQAcAEgugsQg5gygNgNQgjgjgMg5QgEgWADgIQAEgIALAPQAUAcARAOQARAPADgJQADgKgGgVQgKgmgHg2QgFgsAPhOQAOhKARgdQASgfAOACQARACgGAwQgDAbgLA3QgGA1AGBiQABBHAWgSIAlgzQANgQADAIQACAGgDAaQgIBMAFAWQAJAkAZAbQAOAPAWASIABAAQAMAKABgNIgEghQgJg2AaAJQAFACAgBWQAfBWAPAHQAGACACgrQACgxADgFQASgXAXBXQAMAqAIAwQAdBQASAeQAZAtA4A7IBRBXQArA0ACAlQACBHg3AiQgeASghAAQgTAAgUgGg");
	this.shape_35.setTransform(413.5,445.1,0.533,0.533,-41.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(2,1,1).p("ACsHMQgqgfgoAuQgkApAXAoIAAABQATAiAqAIIABAAQAlAGAhgRQA9gfAFhNQAAgEAAgFQABhPg6grIAAgBQg2gohKANQhGANgrA1QgnAtgJBAQgIA/AaA3QAaA2A3AiQA1AiA9gCIABAAQBWgDA9g3QACgBACgDQA0gxAZhSIAAgBQAIgcgGhGQgHhQgYgzQgLgXgYgpQgCgDgDgEQgJgPgJgOQgWgigXggQgMgQhBhHQgIgJgJgKQgyg2gVg3QgIgwgLgrQgXhXgSAXQgDAEgDAxQgCAtgGgDQgNgGghhXQgghWgFgCQgZgKAJA2QAEAcAAAGQgBAMgNgJIAAAAQgWgTgOgOQgagbgIglQgFgWAIhMQACgZgCgGQgDgIgMAQQgKANgbAlQgLAKgGgOQgBgCgBgCQgCgGgBgJQgBgMgBgRQgGhjAHg1QAKg3ADgbQAHgwgRgCQgHAAgIAIQgJAIgIAOQgRAdgPBKQgPBNAGAtQAFApAHAgQACAIACAHQAAACABABQAGAWgDAJQgDAKgRgPQgRgPgUgcQgLgPgEAIQgEAIAFAWQAMA6AjAiQANANA5AzQAtAsgcgEIhZgiQgzgCBLA2QBJA0AwAOQAvANAoAZQAUAMALAKQAFAOgLABQgFAAgXgGQgvgMgDAcQgCATAoATQAZALBLAcQA7AZAxAdQBYA3AzBJQALARAKARQAdAzAQA8QAXBSgPA3IAAgBQgJAegUAgQgUAegQAMQgvAkhAgMQg4gLgkglQgOgOgGgeQgGgaAEgYQACgTAKgVIAJgRQAPgSAPgJQAPgIAXgFIAZgBQAbAAAOAKQAOALAIAUQAEALACAIQgBASgPAQQgIAIgIAEQARgNgEgYQgCgNgLgHg");
	this.shape_36.setTransform(316.5,362.8,0.742,0.742);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#999999").s().p("AAcK+Qg3gigag2Qgag3AIg/QAJhAAngtQArg1BGgNQBKgNA2AoIAAABQA6ArgBBPIAAAJQgFBNg9AfQghARglgGIgBAAQgqgIgTgiIAAgBQgXgoAkgpQAoguAqAfQALAHACANQAEAYgRANQAIgEAIgIQAPgQABgSQgCgIgEgLQgIgUgOgLQgOgKgbAAIgZABQgXAFgPAIQgPAJgPASIgJARQgKAVgCATQgEAYAGAaQAGAeAOAOQAkAlA4ALQBAAMAvgkQAQgMAUgeQAUggAJgeIAAABQAPg3gXhSQgQg8gdgzQgKgRgLgRQgzhJhYg3Qgxgdg7gZQhLgcgZgLQgogTACgTQADgcAvAMQAXAGAFAAQALgBgFgOQgLgKgUgMQgogZgvgNQgwgOhJg0QhLg2AzACIBZAiQAcAEgtgsQg5gzgNgNQgjgigMg6QgFgWAEgIQAEgIALAPQAUAcARAPQARAPADgKQADgJgGgWIgBgDIgEgPQgHgggFgpQgGgtAPhNQAPhKARgdQAIgOAJgIQAIgIAHAAQARACgHAwQgDAbgKA3QgHA1AGBjQABARABAMIADAPIACAEQAGAOALgKIAlgyQAMgQADAIQACAGgCAZQgIBMAFAWQAIAlAaAbQAOAOAWATIAAAAQANAJABgMIgEgiQgJg2AZAKQAFACAgBWQAhBXANAGQAGADACgtQADgxADgEQASgXAXBXQALArAIAwQAVA3AyA2IARATQBBBHAMAQQAXAgAWAiIASAdIAFAHQAYApALAXQAYAzAHBQQAGBGgIAcIAAABQgZBSg0AxIgEAEQg9A3hWADIgBAAIgFABQg6AAgzghg");
	this.shape_37.setTransform(316.5,362.8,0.742,0.742);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30}]}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30}]},10).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30}]},12).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30}]},36).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30}]},92).wait(1));

	// Layer 6
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(1,1,0,3).p("Aj5g5QAPgGAQAAQANAAASADQAKADAUAFQBZAUBJgHQAnAEAmgDQAhgDArgKQAKgDAVgFQARgEAOAAQAQAAAOAGQAQAIAJALQgHAAgNgBIgGAAQgBABgCAEQgHAIgDAHQgCAGAAAHIAAAIQAAADAFAGQADAHAHAFIAGAFIAAABQAGACAHAAIAQAAQgMASgWAIQgSAHgZAAQgRAAgcgFQgggGgKAAQgqgFhJAMQhPgNgtAEQgKACghAGQgbAEgRAAQgYABgUgIQgVgJgLgRIAPABQAJgBAEgCIABAAIAGgGQAFgFAFgGQAEgHABgCIAAgJQAAgHgDgGQgDgGgHgJQgBgDgCgBIgGAAQgMABgHAAQAJgMAPgHg");
	this.shape_38.setTransform(450,397.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#CCCCCC").s().p("ADOBAQgQAAgcgFQgggGgKAAQgqgFhKAMQhPgNgtAEIgqAIQgcAEgQAAQgYABgUgIQgVgJgMgRIAQABQAJgBADgCIABAAIAHgGQAFgFAEgGIAGgJIAAgJQgBgHgDgGQgCgGgHgJQgBgDgCgBIgGAAIgTABQAJgMAPgHQAOgGAQAAQANAAATADIAeAIQBZAUBIgHQAoAEAmgDQAhgDArgKIAegIQASgEAOAAQAQAAAOAGQAPAIAJALIgTgBIgGAAIgDAFQgIAIgCAHQgDAGAAAHIAAAIQABADAFAGQADAHAGAFIAHAFIAAABQAGACAGAAIARAAQgNASgVAIQgRAHgXAAIgEAAg");
	this.shape_39.setTransform(450,397.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39},{t:this.shape_38}]}).to({state:[{t:this.shape_39},{t:this.shape_38}]},10).to({state:[{t:this.shape_39},{t:this.shape_38}]},12).to({state:[{t:this.shape_39},{t:this.shape_38}]},36).to({state:[{t:this.shape_39},{t:this.shape_38}]},92).wait(1));

	// curve
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(2,1,1).p("AEng3QAGACAMABQAKABAEgBQAEgBALgFQAKgEAFgGQADgEAFgPQAFgNgDgLQgDgOgQgRQgSgUgZgFIgWgCQhIgEghA1IABgBQgjAsAQA+IAAAAQAMA1AtAfIABABQAkAaA0ADIABAAQApACAqgOIAAAAQAhgLAcgVIACgBQAfgbAQgdQAKgcADgcQABgTgCgmQgCgggIgcQgKglgRgUQgRgZgigZQghgagcgIQgagHgcgDIgBgBQhAgIhBAoIABAAQgxAcgoA3IAAgBQgiArhICbQgyBpg0AvQg3AuhXAWIgBABQg/ARgqgPIABAAQgTgIgJgQIgBAAQgHgMADgKQADgFAIgBIgBAAQADgBgBgCQANASAVAFQAXAEAUgMQAUgNAEgXQAFgYgNgTQgmg/hSATIgBAAQhLASgSBCIAAAAQgSA4AiA5QAdAwA0AXQBGAfBsgdIAAAAQBxgcBKg/IABgBQBCg6BAiFQBAiHAegpIABgBQAMgQAPgLQANgLAYgDQAWgEANACQAIABAOACQAaAGAKAGQAPAIASAaQAAAAAEAJQAEAKAAAFQABAEgCAOQgCAPgDAIQgEAHgOANQgRAQgJAAg");
	this.shape_40.setTransform(497.9,169.1,0.742,0.742,0,0,180);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#999999").s().p("AmZE5Qg0gXgdgwQgig5ASg4IAAAAQAShCBLgSIABAAQBSgTAmA/QANATgFAYQgEAXgUANQgUAMgXgEQgVgFgNgSQAAABAAAAQAAAAAAABQAAAAgBAAQAAABgBAAIABAAQgIABgDAFQgDAKAHAMIABAAQAJAQATAIIgBAAQAqAPA/gRIABgBQBXgWA3guQA0gvAyhpQBIibAigrIAAABQAog3AxgcIgBAAQBBgoBAAIIABABQAcADAaAHQAcAIAhAaQAiAZARAZQARAUAKAlQAIAcACAgQACAmgBATQgDAcgKAcQgQAdgfAbIgCABQgcAVghALIAAAAQgqAOgpgCIgBAAQg0gDgkgaIgBgBQgtgfgMg1IAAAAQgQg+AjgsIgBABQAhg1BIAEIAWACQAZAFASAUQAQARADAOQADALgFANQgFAPgDAEQgFAGgKAEIgPAGQgEABgKgBQgMgBgGgCIAjARQAJAAARgQQAOgNAEgHQADgIACgPQACgOgBgEQAAgFgEgKIgEgJQgSgagPgIQgKgGgagGIgWgDQgNgCgWAEQgYADgNALQgPALgMAQIgBABQgeAphACHQhACFhCA6IgBABQhKA/hxAcIAAAAQg0AOgrAAQguAAglgQg");
	this.shape_41.setTransform(497.9,169.1,0.742,0.742,0,0,180);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(2,1,1).p("AmDCcQADgBgBgCQANASAVAFQAXAEAUgMQAUgNAEgXQAFgYgNgTQgmg/hSATIgBAAQhLASgSBCIAAAAQgSA4AiA5QAdAwA0AXQBGAfBsgdIAAAAQBxgcBKg/IABgBQBCg6BAiFQA0huAegvQAAgBABgBQAGgKAFgHIABgBQAMgQAPgLQANgLAYgDQAWgEANACQAIABAOACQAaAGAKAGQAPAIASAaQAAAAAEAJQAEAKAAAFQABAEgCAOQgCAPgDAIQgEAHgOANQgRAQgJAAIgjgRQAGACAMABQAKABAEgBQAEgBALgFQAKgEAFgGQADgEAFgPQAFgNgDgLQgDgOgQgRQgSgUgZgFIgWgCQhIgEghA1IABgBQgjAsAQA+IAAAAQAMA1AtAfIABABQAkAaA0ADIABAAQApACAqgOIAAAAQAhgLAcgVIACgBQAfgbAQgdQAKgcADgcQABgTgCgmQgCgggIgcQgKglgRgUQgRgZgigZQghgagcgIQgagHgcgDIgBgBQhAgIhBAoIABAAQgxAcgoA3IAAgBQgiArhICbQgyBpg0AvQg3AuhXAWIgBABQg/ARgqgPIABAAQgTgIgJgQIgBAAQgHgMADgKQADgFAIgBg");
	this.shape_42.setTransform(401.6,169.1,0.742,0.742);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#999999").s().p("AmZE5Qg0gXgdgwQgig5ASg4IAAAAQAShCBLgSIABAAQBSgTAmA/QANATgFAYQgEAXgUANQgUAMgXgEQgVgFgNgSQAAABAAAAQAAAAAAABQAAAAgBAAQAAABgBAAIABAAQgIABgDAFQgDAKAHAMIABAAQAJAQATAIIgBAAQAqAPA/gRIABgBQBXgWA3guQA0gvAyhpQBIibAigrIAAABQAog3AxgcIgBAAQBBgoBAAIIABABQAcADAaAHQAcAIAhAaQAiAZARAZQARAUAKAlQAIAcACAgQACAmgBATQgDAcgKAcQgQAdgfAbIgCABQgcAVghALIAAAAQgqAOgpgCIgBAAQg0gDgkgaIgBgBQgtgfgMg1IAAAAQgQg+AjgsIgBABQAhg1BIAEIAWACQAZAFASAUQAQARADAOQADALgFANQgFAPgDAEQgFAGgKAEIgPAGQgEABgKgBQgMgBgGgCIAjARQAJAAARgQQAOgNAEgHQADgIACgPQACgOgBgEQAAgFgEgKIgEgJQgSgagPgIQgKgGgagGIgWgDQgNgCgWAEQgYADgNALQgPALgMAQIgBABIgLARIgBACQgeAvg0BuQhACFhCA6IgBABQhKA/hxAcIAAAAQg0AOgrAAQguAAglgQg");
	this.shape_43.setTransform(401.6,169.1,0.742,0.742);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40}]}).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40}]},10).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40}]},12).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40}]},36).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40}]},92).wait(1));

	// shield
	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#CCCCCC").ss(4,1,1).p("AD63EQAPgNAUgBQAQgCARAFQAmAKAZAfQAHAIAHALQAIAOAIASQADAHADAHQAJAYAQAvQAgBPA9A5QBAA8BOAQQBAAPAwgUQAMgFAKgHQANgIAKgMQAPgPAHgRQADgIABgIAs/yHQACAMAGALQAMAZAbASQAKAGAKAFQAcAMAgAAIAAAAQAUgBATgEQAUgEAWgJQAjgPAngcQBOg3Aig7QALgTARgpQAQgrALgTQARghAYgZQABgBAAgBQAagZAfgPQAYgMAbgEQAIgBAKAAQAmgCAfAPAjn3bQAIADASgBQASgBAIACQAPADAQADQAaAFAaAFIAAAAQAaADAaADQAhACAfABQABAAABAAQBDABBAgJQABgBABAAQAmgGAlgKQADgCAEAAQAFgCANAAQALgBAGgDAy1SzQMyGAMehoQGQg2GLiu");
	this.shape_44.setTransform(447.7,296.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(2,1,1).p("AAIREQA+gIAtgBIABAAQBCAAAtAAIABAAQA+AAA+gQQAIgBAagIQAFgBAGgBQAfgLAzgOQAWgIAXgGIABAAQCMgsBqgvQACgBABAAQAjgPAegQQBLglA+goQACgBABgBQBfg/A/hKQADgEAEgFQALgNAKgLQAJgLAIgKQAzg+Arg5QAJgLAIgKQBRhtAxhYQACgHAEgGQAdg1AWg3IAAgBQA3iFASiNQAGgsABgxQABg7gHhBQgEglgGgnQgCgSgEgTQgEgXgEgWQgIgkgIghQgPg3gTgvIAAgBQgWg4gcgtQjBAiiGhHQhtg5iQizQgEgFgFgDAMyxJQAvAAAZAiQCHCpBmA1QB/BDC3glQAIgDAHAEQAIADAEAGQAJANAHANQAAAAAAABQA2BaAhCDQAJAiAHAjQADASAEASQADAXAFAXQAFAnADAlQAGBBgBA7QAAA0gGAwQgZDEhcC0QgEAHgEAGQAAABAAABQgGALgHAMQgrBOhDBeQglAzgsA4QgrA3gzA8QgDACgCADQgPATgSASQhpBrixBWQiSBHjeBEQhAAUghAJQgGACgFABQgQAFgFABQhGARhEAAQgtAAhCAAQglABgvAFQgNABgMACQADAAAFABQAJABAIgFAAIREQgigFgegCQghgDgagBQhBAAguAAQg+AAhAgPQgQgFhuggIABAAQg3gRgygQIgBgBQiAgrhigtQAAAAgCgBQgOgGgNgIQhqgzhPg8QgBgBgCAAQhBgygug3QhXhnhChYQhShvgyhZQhoi8gajPQgGgsAAgvQAAgOAAgOQABhVAPhiQAAgGACgHIAAgBQABgHABgHQAJg3ANgxQAhiAA2hWQDBAiCGhHQBtg4CQi0IABAAQALgNASgBAs7xLQgoAFgWAdQiHCohmA3QiABCi3gmQgIgCgHAEQgHADgEAHQhEBkgmCdQgLAugJAyQgEASgCASQgPBhgBBWQAAAOAAAOQABA0AGAuQAcDZBuDGQArBOBEBfQBLBnBnB7QBvCBDMBlQCSBHDfBDQBwAiASAEQBFARBEAAQAuAABBAAQAiABAtAEAivxcQAJgEABgBQAmgMAsgGQASgCAvgFQBagCBiAhIATAIIAAAAADSxRIgIAAQgHAAgGgCQgBAAAAAAAAHR4QgJACgLABQgLABgJgHQgCgBgBgCQgGgFgBgJQgBgKAGgIQAHgKALAAQAPgDANgB");
	this.shape_45.setTransform(450.2,286.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#333333").s().p("Ag5TRIg7gEIhvAAQg+AAg/gPIh/glIABAAQg3gRgxgQIgCgBQiAgrhhgtIgCgBQgOgGgOgIQhqgzhOg8IgEgBQhAgygug3QhXhnhChYQhShvgyhZQhoi8gbjQQgGgrAAgvIAAgcQABhVAQhiIABgNIAAgBIACgOQAKg3ANgxQAhiAA1hWQDBAiCHhHQBtg4CPi0IACAAQALAYAbASQAKAHAKAEQAcANAgAAIABAAQATgBATgEQAVgFAWgJQAigPAngbQBOg4Aig6QALgTARgqQARgqAKgTQASghAYgaIABgBQAagZAfgQQAXgMAbgDIACABQAPALAXAZIAPATQAMAPAFAKQAFALAEAUQANA5gKAlIgHAaQgEAOAGAMIAEAFIAJgFQAngMArgGIBBgHQBbgCBiAhIASAIIgBAAIABAAQAHACAHAAIAIAAQACgSgCgMQgGgxACgmQABgYAFgiQABgPADgHQACgJAHgMIADgGIAXgpIAIgQQAQgCASAFQAlAJAaAfQAHAJAGALQAJAOAHARIAGAPIAaBHQAgBPA8A4QBAA8BPARQA/APAwgVQAMgFALgGQANgJAKgLQAPgPAHgSIAHAXIADACIAAABIAJAIQCPCzBtA5QCHBHDBgiQAcAtAWA4IAAABQASAvAQA3IAQBFIAIAtIAGAlQAGAnAEAlQAGBBgBA7QgBAxgFArQgTCOg2CFIAAABQgWA3gdA1IgHANQgxBYhRBtIgQAVQgsA5gzA+IgQAVIgWAYIgHAJQg+BKhgA/IgCACQg+AohMAlQgeAQgjAPIgCABQhrAviLAsIgCAAQgWAGgXAIQgzAOgeALIgMACQgZAIgIABQg/AQg9AAIgCAAIhvAAIAAAAQguABg9AIQgjgFgegCgAg1RfQgGACgEAGQgDABgCAGIAAAHQABAJAGAGQAFAEAGAAQAIACAFgDQAFgDAEgGQADgGgBgGQAAgGgFgFQgDgGgGgCIgGgBIgHABgADgRcQgHAAgGAFQgGAGgBAFQgBALAHAIQAGAIAMgBQAIAAAFgHQAGgHgBgJQAAgHgGgGQgGgGgIgBQAAABAAAAQAAAAAAAAQAAAAgBAAQAAAAgBAAgAlPRCQgFAGgBAHQgCAJAGAHQAFAGAIACQAGABAHgDQAGgDAEgIQADgGgBgHQgCgHgGgFQgFgEgIAAIgDAAQgHAAgFAFgAHtQ6QgJAAgFAGQgFAHAAAHQAAAJAFAFQAGAIALAAQAHABAGgEQAJgFACgKQABgLgHgHIgHgGIgHgBIgHABgAoxQRQgKAFgBAKQgDAKAGAIQADADAEADQADACAFAAQAHAAAHgDQAGgEACgHQADgHgDgHQgDgIgGgEQgFgDgGAAIgJACgALQPhQgHAJAFALQADAHAEADQAGAEAHAAQAGgBAGgDQAGgEABgHQADgGgDgHQgBgGgFgDQgFgEgGgCIgDAAQgKAAgHAJgAsOO9QgFADgCAFQgEAJAEAJQADAGAFADQAFAEAJgBQAJgBAEgFQAFgGAAgJQAAgIgFgGQgEgGgKgBIgCAAQgHAAgFAEgAOtN1QgIAAgGAGQgHAGAAAIQAAAHAFAGQAFAFAHACQAHADAGgDQAHgDADgHQAEgIgCgGQgBgHgGgFQgGgFgGAAgAvNNEQgHADgEAGQgFAFABAIQAAAEACADQABAEAFAEQAGAFAIAAQAIgBAGgFQAFgFABgIQABgHgDgGQgEgGgHgDIgJgBIgFAAgARALWQgGADgCAHQgCAIADAGQACAFAFAEQAJAIANgGQAFgCAEgFIADgKQAAgMgIgGQgGgFgHAAQgHAAgGAFgAxbKqQgLAGgBAMQAAAFADAFQAEAKAKACQAIABAHgDQAHgEACgIQADgHgDgHQgCgIgHgEQgFgCgFAAQgFAAgFACgAzVIOQgGAGgBAHQgCAMAKAIQAGAEAHAAQAHAAAGgEQAGgFABgGQADgIgDgGQgDgHgFgDQgIgEgGAAQgHABgFAFgATAH6QgHABgFAFQgGAGgBAHQAAAIAGAHQADAGAHACQAJACAGgEQAGgCADgIQAEgGgCgIQgBgHgGgEQgGgFgHAAgA00F4QgGAEgBAHQgDAHADAIQABADAGAFQAKAHALgFQALgFABgOQACgKgKgHQgGgFgHAAQgHAAgFAFgAU9EiQgIACgEAGQgFAHABAHQAAAEACADQABAEAFAEQAGAFAIgBQAIAAAGgGQAGgEAAgIQACgIgFgGQgDgGgHgCIgIgCIgFABgA2FC0QgJAEgCALIAAAGQABAGADADQAEAGAHADQAGACAGgCQAGgCAFgGQAEgFABgHQAAgHgEgFQgFgGgGgDIgGgBQgGAAgFADgAWDBSQgGACgGAFQgEAFgBAHQgBALAJAIQAKAHAMgFQAIgEADgIQADgJgEgIQgDgGgGgDQgFgCgEAAIgFAAgA2wg2QgGABgFAEQgGAFgBAHQgBADABAEQABAGADADQAFAGAHACQAHACAHgDQAGgDAEgHQADgGgCgHQgBgHgHgGQgEgEgEAAIgFgBIgCABgAWehwIgHAJQgFAKAGALQAGAJAMAAQAGABAEgCQAFgDADgFQAHgLgGgLQgGgKgNgBQAAAAAAABQAAAAAAAAQgBAAAAAAQgBAAgBAAQgDAAgGACgA20kbQgKAFAAAKIgBADQAAAJAGAGQAFAFAIACQAIAAAGgEQAGgEACgHIACgHQAAgFgCgDQgEgIgIgEIgIgBQgFAAgFADgAWFlnQgHABgEAGQgDAFgBAEQgBAEABADIAAAAQABAIAGAFQAEAEAHABQAIABAEgDQAGgDAEgGQACgDAAgEIAAgFQAAgGgFgFQgEgGgGgBIgGgBIgGABgA1/nUQgGABgFAFIgEAKIAAAHQABAIAGAGQAFADAGAAQAHACAGgDQAFgCADgGQAEgGAAgGQgCgHgEgFQgEgGgGgBIgGgBIgGABgAUln8QgGABgFAGQgEAEgBAIQgCALAKAIQAKAGALgEQAJgDADgKQADgIgEgJQgEgGgGgDQgEgCgFAAIgFABgAzFoMQgKACgGAIQgGAJAFAKIACAEIACADQADADAFACIAEABQAGABAFgCIADgCQAEgCADgEIABgEQADgHgBgHQgDgHgGgEQgGgEgHAAIgBAAgARYoNQgIAKAFALQADAGAEAEQAGADAGAAQAHAAAGgEQAFgEACgGQADgHgCgGQgCgGgFgEQgFgEgHgBIgCAAQgKAAgGAIgAwUpLQgGABgGAFQgGAFAAAHQgDANAKAHQAGAEAGABQAIAAAFgEQAHgFABgHQADgHgDgGQgCgHgGgEQgGgDgFAAIgDAAgAOSpwQgIAAgGAFQgGAFAAAIQgBAEABAEIADAFQAEAHAHACQAHADAHgDQAIgDAEgGQADgIgBgHQgCgHgHgFQgFgEgGAAIgCAAgAtZrDQgHAAgGAGQgFAFgBAHIAAAHQAAADADADQAEAHAHADQAIADAHgDQAHgDADgHQAEgIgBgHQgCgHgGgFQgHgEgHAAIgBAAgAKxrgQgGAFgBAIIAAAHIADAGQAEAHAHACQAIADAHgDQAHgDAEgHQAEgHgCgHQgCgIgGgFQgGgEgIAAQgHAAgGAGgApWsBQgGACgFAEQgCAEgCAGIgBAHQACAHAGAGQAEAEAGABQAIABAGgDQAFgDADgGQAEgFgBgHQAAgGgEgFQgFgFgFgCIgHgBIgGABgAHosCQgGAEgCAHQgDAHABAGQAEAJAIAEQAHADAHgDQAJgBADgGQAEgGAAgHQAAgJgFgEQgGgGgHgBIgCAAQgGAAgGADgAlYssQABABAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAIgFABQgJADgEAJQgEAJAEAIQAEAIAKADQAGACAIgBQAIgDAEgHQAFgHgCgIQgBgIgHgFQgGgFgIAAIgCAAgAEjszQgHAEgCAIQgDAIADAHQADAHAIADQAIAEAHgCQAIgCAEgHQAEgIgBgHQgBgHgFgGQgHgFgIAAQAAABAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAIgCAAQgEAAgEACgAiKtxQgGAHAAAIQAAAGAFAHQAEAFAHACQAJACAGgDQAHgDADgHQADgGgBgIQgCgHgGgEQgGgFgHAAIgBAAQgIAAgHAGgABMt7QgHABgGAFQgGAGgBAHQgBAJAFAHQAFAFAIACQAIABAGgDQAGgEAEgHQACgHgBgGQgCgHgGgFQgGgEgHAAIgBAAg");
	this.shape_46.setTransform(450.2,271.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#CCCCCC").s().p("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");
	this.shape_47.setTransform(450.2,272.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#CCCCCC").ss(4,1,1).p("AD63AQAPgNAUgBQAQgCARAFQAmAKAZAfQAHAIAHALQAIAOAIASQADAHADAHQAJAYAQAvQAgBPA9A5QBAA8BOAQQBAAPAwgUQAMgFAKgHQANgIAKgMQAPgPAHgRQADgIABgIAs/yDQACAMAGALQAMAZAbASQAKAGAKAFQAcAMAgAAIAAAAQAUgBATgEQAUgEAWgJQAjgPAngcQBOg3Aig7QALgTARgpQAQgrALgTQARghAYgZQABgBAAgBQAagZAfgPQAYgMAbgEQAIgBAKAAQAmgCAfAPAjl3hQAZAGAZAHQAPADAQADQAaAFAaAFIAAAAQAaADAaADQAhACAfABQABAAABAAQBDABBAgJQABgBABAAQAmgGAlgKQADgCAEAAQATgGAQgIAy1S3QMyGAMehoQGQg2GLiu");
	this.shape_48.setTransform(447.7,296.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(2,1,1).p("AAIREQA+gIAtgBIABAAQBCAAAtAAIABAAQA+AAA+gQQAIgBAagIQAFgBAGgBQAfgLAzgOQAWgIAXgGIABAAQCMgsBqgvQACgBABAAQAjgPAegQQBLglA+goQACgBABgBQBfg/A/hKQADgEAEgFQALgNAKgLQAJgLAIgKQAzg+Arg5QAJgLAIgKQBRhtAxhYQACgHAEgGQAdg1AWg3IAAgBQA3iFASiNQAGgsABgxQABg7gHhBQgEglgGgnQgCgSgEgTQgEgXgEgWQgIgkgIghQgPg3gTgvIAAgBQgWg4gcgtQjBAiiGhHQhtg5iQizQgEgFgFgDAMyxJQAvAAAZAiQCHCpBmA1QB/BDC3glQAIgDAHAEQAIADAEAGQAJANAHANQAAAAAAABQA2BaAhCDQAJAiAHAjQADASAEASQADAXAFAXQAFAnADAlQAGBBgBA7QAAA0gGAwQgZDEhcC0QgEAHgEAGQAAABAAABQgGALgHAMQgrBOhDBeQglAzgsA4QgrA3gzA8QgDACgCADQgPATgSASQhpBrixBWQiSBHjeBEQhAAUghAJQgGACgFABQgQAFgFABQhGARhEAAQgtAAhCAAQglABgvAFQgNABgMACQADAAAFABQAJABAIgFAAIREQgigFgegCQghgDgagBQhBAAguAAQg+AAhAgPQgQgFhuggIABAAQg3gRgygQIgBgBQiAgrhigtQAAAAgCgBQgOgGgNgIQhqgzhPg8QgBgBgCAAQhBgygug3QhXhnhChYQhShvgyhZQhoi8gajPQgGgsAAgvQAAgOAAgOQABhVAPhiQAAgGACgHIAAgBQABgHABgHQAJg3ANgxQAhiAA2hWQDBAiCGhHQBtg4CQi0IABAAQALgNASgBAs7xLQgoAFgWAdQiHCohmA3QiABCi3gmQgIgCgHAEQgHADgEAHQhEBkgmCdQgLAugJAyQgEASgCASQgPBhgBBWQAAAOAAAOQABA0AGAuQAcDZBuDGQArBOBEBfQBLBnBnB7QBvCBDMBlQCSBHDfBDQBwAiASAEQBFARBEAAQAuAABBAAQAiABAtAEADQxGIAAAAQgFgCghgMQhygnhKABQg3AFhaAcQgEABgGADAAHR4QgJACgLABQgLABgJgHQgCgBgBgCQgGgFgBgJQgBgKAGgIQAHgKALAAQAPgDANgB");
	this.shape_49.setTransform(450.2,286.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#333333").s().p("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AEgHQAEgHgCgHQgCgIgGgFQgGgEgIAAQgHAAgGAGgApWsBQgGACgFAEQgCAEgCAGIgBAHQACAHAGAGQAEAEAGABQAIABAGgDQAFgDADgGQAEgFgBgHQAAgGgEgFQgFgFgFgCIgHgBIgGABgAHosCQgGAEgCAHQgDAHABAGQAEAJAIAEQAHADAHgDQAJgBADgGQAEgGAAgHQAAgJgFgEQgGgGgHgBIgCAAQgGAAgGADgAlYssQABABAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAIgFABQgJADgEAJQgEAJAEAIQAEAIAKADQAGACAIgBQAIgDAEgHQAFgHgCgIQgBgIgHgFQgGgFgIAAIgCAAgAEjszQgHAEgCAIQgDAIADAHQADAHAIADQAIAEAHgCQAIgCAEgHQAEgIgBgHQgBgHgFgGQgHgFgIAAQAAABAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAIgCAAQgEAAgEACgAiKtxQgGAHAAAIQAAAGAFAHQAEAFAHACQAJACAGgDQAHgDADgHQADgGgBgIQgCgHgGgEQgGgFgHAAIgBAAQgIAAgHAGgABMt7QgHABgGAFQgGAGgBAHQgBAJAFAHQAFAFAIACQAIABAGgDQAGgEAEgHQACgHgBgGQgCgHgGgFQgGgEgHAAIgBAAgAC0u3QAHADAIgBIgZgKQADAFAHADg");
	this.shape_50.setTransform(450.2,271.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#CCCCCC").s().p("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");
	this.shape_51.setTransform(450.2,272.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44}]}).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48}]},150).wait(1));

	// Layer 11 copy
	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#CCCCCC").ss(3,1,1).p("AA5AAQAAALgRAIQgQAIgYAAQgXAAgQgIQgRgIAAgLQAAgKARgIQAQgIAXAAQAYAAAQAIQARAIAAAKg");
	this.shape_52.setTransform(334.2,214.5,0.74,0.74,0,-15.9,164.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#CCCCCC").s().p("AgoATQgQgIAAgLQAAgKAQgIQASgIAWAAQAYAAAQAIQARAIAAAKQAAALgRAIQgQAIgYAAQgWAAgSgIg");
	this.shape_53.setTransform(334.2,214.5,0.74,0.74,0,-15.9,164.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#CCCCCC").ss(3,1,1).p("AA5AAQAAALgRAIQgQAIgYAAQgXAAgQgIQgRgIAAgLQAAgKARgIQAQgIAXAAQAYAAAQAIQARAIAAAKg");
	this.shape_54.setTransform(334.6,216,0.74,0.74,0,-15.9,164.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#333333").s().p("AgoATQgQgIAAgLQAAgKAQgIQASgIAWAAQAYAAAQAIQARAIAAAKQAAALgRAIQgQAIgYAAQgWAAgSgIg");
	this.shape_55.setTransform(334.6,216,0.74,0.74,0,-15.9,164.1);

	this.instance = new lib.Tween17("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(334.6,215.3,0.742,0.742,0,0,0,0.2,0.2);
	this.instance._off = true;

	this.instance_1 = new lib.Tween1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(291.8,150.7,0.742,0.742,0,0,0,0.1,0.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52}]}).to({state:[{t:this.instance}]},18).to({state:[{t:this.instance_1}]},14).to({state:[{t:this.instance_1}]},12).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance_1}]},7).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance_1}]},7).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance_1}]},7).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance_1}]},7).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance_1}]},7).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance_1}]},7).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance_1}]},7).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(18).to({_off:false},0).to({_off:true,regX:0.1,x:291.8,y:150.7},14).wait(119));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(18).to({_off:false},14).wait(12).to({startPosition:0},0).to({regX:0.2,x:293.2,y:157.2},8).to({regX:0.1,x:291.8,y:150.7},7).to({regX:0.2,x:293.2,y:157.2},8).to({regX:0.1,x:291.8,y:150.7},7).to({regX:0.2,x:293.2,y:157.2},8).to({regX:0.1,x:291.8,y:150.7},7).to({regX:0.2,x:293.2,y:157.2},8).to({regX:0.1,x:291.8,y:150.7},7).to({regX:0.2,x:293.2,y:157.2},8).to({regX:0.1,x:291.8,y:150.7},7).to({regX:0.2,x:293.2,y:157.2},8).to({regX:0.1,x:291.8,y:150.7},7).to({regX:0.2,x:293.2,y:157.2},8).to({regX:0.1,x:291.8,y:150.7},7).wait(2));

	// Layer 9 copy
	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#666666").ss(3,1,1).p("AAUAqIgnhT");
	this.shape_56.setTransform(336.2,222.7,0.74,0.74,0,-39.9,140.1,-0.3,-0.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#CCCCCC").ss(12,1,1).p("AAcA/Ig3h+");
	this.shape_57.setTransform(339.3,233.5,0.74,0.74,0,-39.9,140.1,-0.2,0);

	this.instance_2 = new lib.Tween18("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(338,228.8,0.742,0.742,0,0,0,0.2,0.1);
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween2("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(295.4,164.2,0.742,0.742,0,0,0,0.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_57},{t:this.shape_56}]}).to({state:[{t:this.instance_2}]},18).to({state:[{t:this.instance_3}]},14).to({state:[{t:this.instance_3}]},118).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(18).to({_off:false},0).to({_off:true,regY:0,x:295.4,y:164.2},14).wait(119));

	// Layer 11
	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#CCCCCC").ss(3,1,1).p("AA5AAQAAALgRAIQgQAIgYAAQgXAAgQgIQgRgIAAgLQAAgKARgIQAQgIAXAAQAYAAAQAIQARAIAAAKg");
	this.shape_58.setTransform(368.7,217.1,0.741,0.741,0,13.4,-166.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#CCCCCC").s().p("AgoATQgQgIAAgLQAAgKAQgIQASgIAWAAQAYAAAQAIQARAIAAAKQAAALgRAIQgQAIgYAAQgWAAgSgIg");
	this.shape_59.setTransform(368.7,217.1,0.741,0.741,0,13.4,-166.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#CCCCCC").ss(3,1,1).p("AA5AAQAAALgRAIQgQAIgYAAQgXAAgQgIQgRgIAAgLQAAgKARgIQAQgIAXAAQAYAAAQAIQARAIAAAKg");
	this.shape_60.setTransform(368.3,218.5,0.741,0.741,0,13.4,-166.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#333333").s().p("AgoATQgQgIAAgLQAAgKAQgIQASgIAWAAQAYAAAQAIQARAIAAAKQAAALgRAIQgQAIgYAAQgWAAgSgIg");
	this.shape_61.setTransform(368.3,218.5,0.741,0.741,0,13.4,-166.6);

	this.instance_4 = new lib.Tween19("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(368.6,217.9,0.742,0.742,0,0,0,0.2,0.2);
	this.instance_4._off = true;

	this.instance_5 = new lib.Tween3("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(325.9,153.3,0.742,0.742,0,0,0,0.2,0.2);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58}]}).to({state:[{t:this.instance_4}]},18).to({state:[{t:this.instance_5}]},14).to({state:[{t:this.instance_5}]},5).to({state:[{t:this.instance_5}]},9).to({state:[{t:this.instance_5}]},7).to({state:[{t:this.instance_5}]},9).to({state:[{t:this.instance_5}]},7).to({state:[{t:this.instance_5}]},9).to({state:[{t:this.instance_5}]},7).to({state:[{t:this.instance_5}]},9).to({state:[{t:this.instance_5}]},7).to({state:[{t:this.instance_5}]},9).to({state:[{t:this.instance_5}]},7).to({state:[{t:this.instance_5}]},9).to({state:[{t:this.instance_5}]},7).to({state:[{t:this.instance_5}]},9).to({state:[{t:this.instance_5}]},7).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(18).to({_off:false},0).to({_off:true,x:325.9,y:153.3},14).wait(119));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(18).to({_off:false},14).wait(5).to({startPosition:0},0).to({regY:0.1,x:324,y:159.8},9).to({regY:0.2,x:325.9,y:153.3},7).to({regY:0.1,x:324,y:159.8},9).to({regY:0.2,x:325.9,y:153.3},7).to({regY:0.1,x:324,y:159.8},9).to({regY:0.2,x:325.9,y:153.3},7).to({regY:0.1,x:324,y:159.8},9).to({regY:0.2,x:325.9,y:153.3},7).to({regY:0.1,x:324,y:159.8},9).to({regY:0.2,x:325.9,y:153.3},7).to({regY:0.1,x:324,y:159.8},9).to({regY:0.2,x:325.9,y:153.3},7).to({regY:0.1,x:324,y:159.8},9).to({regY:0.2,x:325.9,y:153.3},7).wait(2));

	// Layer 9
	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#666666").ss(3,1,1).p("AAUAqIgnhT");
	this.shape_62.setTransform(366.5,225.2,0.741,0.741,0,-10.6,169.4,-0.2,0.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#CCCCCC").ss(12,1,1).p("AAcA/Ig3h+");
	this.shape_63.setTransform(363.9,236.1,0.741,0.741,0,-10.6,169.4,-0.1,0.2);

	this.instance_6 = new lib.Tween20("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(365,231.4,0.742,0.742,0,0,0,0.2,0.1);
	this.instance_6._off = true;

	this.instance_7 = new lib.Tween4("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(322.3,166.8,0.742,0.742,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_63},{t:this.shape_62}]}).to({state:[{t:this.instance_6}]},18).to({state:[{t:this.instance_7}]},14).to({state:[{t:this.instance_7}]},118).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(18).to({_off:false},0).to({_off:true,regX:0.1,x:322.3,y:166.8},14).wait(119));

	// Layer 8
	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#999999").s().p("ACtFCQgDgDAAgEQAAgEACgDQADgDAEAAIAJABIADADIAAAFQABAEgEAEIgFAEIgDAAQgEAAgDgEgAgcFFQgJgBgBgIQgBgGAGgFQADgCAFAAIAGAEQAEAGgCAGQgEAGgGAAIgBAAgACJEXQgFgEAAgGQAAgFAEgDQADgDAGAAQAHAAACAJQABADgBAEIgFAFIgFACQgDAAgEgCgAhBEUIgGgDQgDgDAAgEQgBgGAFgFQAFgDAGADIAFAFQACAEgBAEQgBAEgEACQgDACgCAAIgCAAgAhgDkQgEgCgCgDQgEgEABgEQACgEAEgDIADgCIADAAQADAAADAEQADACABAEQAAADgBADQgCADgEADIgDAAIgDAAgABlDfQgGgDAAgHQAAgFAGgDQAEgDAGACQADABABAEIABADQACAGgGAFQgCACgDAAQgDAAgDgCgAiICvQgEgCAAgFQAAgFADgDQADgDAEgBQAFAAADADQAFADgBAHQgBAGgGADIgDAAQgFAAgDgDgABJCpQgFgCgCgFQgBgFABgEQADgFAFgBQAFgBADAEIAEADQABAEAAADQgBAFgDABQgCAEgFAAIgDgBgAidB2QgGgEACgGQAAgHAGgCQAHgDAEAEIADADIABAHQgBAEgDADQgCACgEABIgCAAQgDAAgCgCgAAtBsQgEgCgCgEQgBgEABgEQACgEAEgCQAFgBADABIADABIAEAEQAAABAAABQAAABAAAAQAAAAAAABQAAAAAAAAQABACgBAFQgDAEgEABIgDAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAgAi0AyQgDgEAAgEQABgEACgCQAEgDAEAAQAFAAADADIACACQACAEgBAEQgBADgEADQgDACgEAAQgGAAgBgEgAAaAmQgEgBgDgDQgCgDAAgFQAAgEAEgDQACgDAFABQAEAAADACIACADQACAEgBAEQgBAEgDACQgDACgDAAIgCAAgAi2gLQgHgBgBgIQgCgIAHgEIACgBQAEgBAEACQAAAAABAAQAAAAABABQAAAAAAABQABAAAAABQAGAHgEAFQgDAGgIAAIgBAAgAAKgbQgFgCgBgDIgBgEQAAgHAGgEIABABIAAgBIABgBQAFgBACACQAEABABADQADAFgDAGIgBACQgDAEgEAAIgFgBgAi2hEQgDgDgBgFIABgHQACgDADgCQAHgEAGAFQADACABAEQABAEgBADIgGAGIgFACQgFAAgDgCgAADhgQgDgBAAgFIAAgHQADgEAHgCQAFAAADAEQAEAEAAAFQgBAFgFADQgDACgCAAQgEAAgEgEgAish+QgIgBgCgKQAAgFAFgEQAFgEAGADQADACACAEQADAEgCADQgBAEgDACQgCACgDAAIgDAAgAADimQgDgDAAgFQAAgEADgDQADgBAFAAQAEgCADADIAEADIAAAEQABAEgBACQgEAGgGAAQgGAAgDgEgAigi4QgHgBgCgHQgDgHAGgEQAGgFAGAEQADABABADIACAFIAAACIgCAEQgDAGgFAAIgCgBgAALjqIgFgEQgDgHADgEQAEgHAGABQAHABACAGQADAIgGAFQgEADgDAAIgEgCgAiWjvQgHgCgBgHQgCgHAGgFQAGgEAGAFIAEAEIABADQABAEgDADQgDAGgHAAIgBAAgAAZkyIgDgCQgEgEADgFQABgFADgCIAFgBQAHAAAEAGQACAGgEAFQgCAEgFAAIgBAAQgEAAgCgCg");
	this.shape_64.setTransform(346.8,269.5);

	this.instance_8 = new lib.Tween21("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(346.7,269.5,0.742,0.742,0,0,0,0.2,0.2);
	this.instance_8._off = true;

	this.instance_9 = new lib.Tween5("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(304.2,204.9,0.742,0.742,0,0,0,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_64}]}).to({state:[{t:this.instance_8}]},18).to({state:[{t:this.instance_9}]},14).to({state:[{t:this.instance_9}]},118).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(18).to({_off:false},0).to({_off:true,x:304.2,y:204.9},14).wait(119));

	// engine
	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(2,1,1).p("ABbniQCRAaBuBuQCQCQAADKQAADLiQCQQgIAIgIAIQiLCAi/AAQjKAAiQiQQiPiQAAjLQAAjKCPiQQAngmArgcQB0hOCUAAQAvAAAsAIQGAFYiRH1AkImcQFUFjhMIk");
	this.shape_65.setTransform(352.1,270.4,0.741,0.741,0,-29.9,150.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#666666").s().p("AlaFbQiQiQAAjLQAAjKCQiQQAngmAqgdQEXEjAAGkQAABdgOBkQjKgBiQiPgAAOEqQAAmkkXkjQB1hMCUAAQAvAAAsAHQEWD6ABFLQAAB+goCKQiLCAi/AAQAOhkAAhdgAFKFrIAAAAgAFyBjQgBlLkWj6QCSAaBtBuQCQCQAADKQAADLiQCQIgQAQQAoiKAAh+g");
	this.shape_66.setTransform(352.1,270.4,0.741,0.741,0,-29.9,150.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#666666").s().p("AgMAoQgFgCgCgDQgCgEACgFQABgEADgCQAEgBADAAQAFAAABADQAEAEgBAGQgBAFgFACQgBABAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAIgDgBgAAEgSIgDAAQgGgBgBgJQgCgGAGgEIAAAAIACgBQAEgCAEADQAHgDAFAIIABADQABAIgHAEIgGABIgFgBg");
	this.shape_67.setTransform(349.3,240);

	this.instance_10 = new lib.Tween22("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(352.3,270.2,0.742,0.742,0,0,0,0.1,0.2);
	this.instance_10._off = true;

	this.instance_11 = new lib.Tween6("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(309.6,205.7,0.742,0.742,0,0,0,0.1,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65}]}).to({state:[{t:this.instance_10}]},18).to({state:[{t:this.instance_11}]},14).to({state:[{t:this.instance_11}]},118).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(18).to({_off:false},0).to({_off:true,x:309.6,y:205.7},14).wait(119));

	// Layer 11 copy 2
	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#CCCCCC").ss(3,1,1).p("AA5AAQAAALgRAIQgQAIgYAAQgXAAgQgIQgRgIAAgLQAAgKARgIQAQgIAXAAQAYAAAQAIQARAIAAAKg");
	this.shape_68.setTransform(309.8,231.7,0.739,0.739,0,-36.7,143.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#CCCCCC").s().p("AgoATQgQgIAAgLQAAgKAQgIQASgIAWAAQAYAAAQAIQARAIAAAKQAAALgRAIQgQAIgYAAQgWAAgSgIg");
	this.shape_69.setTransform(309.8,231.7,0.739,0.739,0,-36.7,143.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#CCCCCC").ss(3,1,1).p("AA5AAQAAALgRAIQgQAIgYAAQgXAAgQgIQgRgIAAgLQAAgKARgIQAQgIAXAAQAYAAAQAIQARAIAAAKg");
	this.shape_70.setTransform(310.6,233,0.739,0.739,0,-36.7,143.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#333333").s().p("AgoATQgQgIAAgLQAAgKAQgIQASgIAWAAQAYAAAQAIQARAIAAAKQAAALgRAIQgQAIgYAAQgWAAgSgIg");
	this.shape_71.setTransform(310.6,233,0.739,0.739,0,-36.7,143.3);

	this.instance_12 = new lib.Tween23("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(310.4,232.2,0.742,0.742,0,0,0,0.2,0.2);
	this.instance_12._off = true;

	this.instance_13 = new lib.Tween7("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(267.7,168.8,0.742,0.742,0,0,0,0.2,0.2);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68}]}).to({state:[{t:this.instance_12}]},18).to({state:[{t:this.instance_13}]},14).to({state:[{t:this.instance_13}]},8).to({state:[{t:this.instance_13}]},8).to({state:[{t:this.instance_13}]},8).to({state:[{t:this.instance_13}]},8).to({state:[{t:this.instance_13}]},8).to({state:[{t:this.instance_13}]},8).to({state:[{t:this.instance_13}]},8).to({state:[{t:this.instance_13}]},8).to({state:[{t:this.instance_13}]},8).to({state:[{t:this.instance_13}]},8).to({state:[{t:this.instance_13}]},8).to({state:[{t:this.instance_13}]},8).to({state:[{t:this.instance_13}]},8).to({state:[{t:this.instance_13}]},8).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(18).to({_off:false},0).to({_off:true,x:267.7,y:168.8},14).wait(119));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(18).to({_off:false},14).to({x:271.3,y:173.7},8).to({x:267.7,y:168.8},8).to({x:271.3,y:173.7},8).to({x:267.7,y:168.8},8).to({x:271.3,y:173.7},8).to({x:267.7,y:168.8},8).to({x:271.3,y:173.7},8).to({x:267.7,y:168.8},8).to({x:271.3,y:173.7},8).to({x:267.7,y:168.8},8).to({x:271.3,y:173.7},8).to({x:267.7,y:168.8},8).to({x:271.3,y:173.7},8).to({x:267.7,y:168.8},8).wait(7));

	// Layer 9 copy 2
	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#666666").ss(3,1,1).p("AAUAqIgnhT");
	this.shape_72.setTransform(314.5,238.5,0.739,0.739,0,-60.7,119.3,-0.3,-0.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#CCCCCC").ss(12,1,1).p("AAcA/Ig3h+");
	this.shape_73.setTransform(321.3,247.4,0.739,0.739,0,-60.7,119.3,-0.2,0);

	this.instance_14 = new lib.Tween24("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(318.5,243.7,0.742,0.742,0,0,0,0.2,0.2);
	this.instance_14._off = true;

	this.instance_15 = new lib.Tween8("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(275.8,179,0.742,0.742,0,0,0,0.2,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_73},{t:this.shape_72}]}).to({state:[{t:this.instance_14}]},18).to({state:[{t:this.instance_15}]},14).to({state:[{t:this.instance_15}]},118).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(18).to({_off:false},0).to({_off:true,regY:0.1,x:275.8,y:179},14).wait(119));

	// Layer 19
	this.instance_16 = new lib.gear3_spin();
	this.instance_16.parent = this;
	this.instance_16.setTransform(614,194.7,0.742,0.742);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(28).to({_off:false},0).wait(1).to({rotation:15.2},0).wait(1).to({rotation:30.5},0).wait(1).to({rotation:45.7},0).wait(1).to({rotation:61},0).wait(1).to({rotation:76.2},0).wait(1).to({rotation:91.5},0).wait(1).to({rotation:106.7},0).wait(1).to({rotation:122,y:194.8},0).wait(1).to({rotation:137.2},0).wait(1).to({rotation:152.5},0).wait(1).to({rotation:167.7},0).wait(1).to({rotation:183,x:613.9},0).wait(1).to({rotation:198.2},0).wait(1).to({rotation:213.4},0).wait(1).to({rotation:228.7},0).wait(1).to({rotation:243.9},0).wait(1).to({rotation:259.2,y:194.7},0).wait(1).to({rotation:274.4},0).wait(1).to({rotation:289.7},0).wait(1).to({rotation:304.9},0).wait(1).to({rotation:320.2},0).wait(1).to({rotation:335.4},0).wait(1).to({rotation:350.7},0).wait(1).to({rotation:365.9,x:614},0).wait(1).to({rotation:381.1},0).wait(1).to({rotation:396.4},0).wait(1).to({rotation:411.6},0).wait(1).to({rotation:426.9},0).wait(1).to({rotation:442.1},0).wait(1).to({rotation:457.4},0).wait(1).to({rotation:472.6,y:194.8},0).wait(1).to({rotation:487.9},0).wait(1).to({rotation:503.1},0).wait(1).to({rotation:518.4},0).wait(1).to({rotation:533.6},0).wait(1).to({rotation:548.9,x:613.9},0).wait(1).to({rotation:564.1},0).wait(1).to({rotation:579.3},0).wait(1).to({rotation:594.6},0).wait(1).to({rotation:609.8,y:194.7},0).wait(1).to({rotation:625.1},0).wait(1).to({rotation:640.3},0).wait(1).to({rotation:655.6},0).wait(1).to({rotation:670.8},0).wait(1).to({rotation:686.1},0).wait(1).to({rotation:701.3},0).wait(1).to({rotation:716.6},0).wait(1).to({rotation:731.8,x:614},0).wait(1).to({rotation:747},0).wait(1).to({rotation:762.3},0).wait(1).to({rotation:777.5},0).wait(1).to({rotation:792.8},0).wait(1).to({rotation:808},0).wait(1).to({rotation:823.3},0).wait(1).to({rotation:838.5,y:194.8},0).wait(1).to({rotation:853.8},0).wait(1).to({rotation:869},0).wait(1).to({rotation:884.3},0).wait(1).to({rotation:899.5},0).wait(1).to({rotation:914.8,x:613.9},0).wait(1).to({rotation:930},0).wait(1).to({rotation:945.2},0).wait(1).to({rotation:960.5},0).wait(1).to({rotation:975.7,y:194.7},0).wait(1).to({rotation:991},0).wait(1).to({rotation:1006.2},0).wait(1).to({rotation:1021.5},0).wait(1).to({rotation:1036.7},0).wait(1).to({rotation:1052},0).wait(1).to({rotation:1067.2},0).wait(1).to({rotation:1082.5,x:614},0).wait(1).to({rotation:1097.7},0).wait(1).to({rotation:1113},0).wait(1).to({rotation:1128.2},0).wait(1).to({rotation:1143.4},0).wait(1).to({rotation:1158.7},0).wait(1).to({rotation:1173.9},0).wait(1).to({rotation:1189.2},0).wait(1).to({rotation:1204.4,y:194.8},0).wait(1).to({rotation:1219.7},0).wait(1).to({rotation:1234.9},0).wait(1).to({rotation:1250.2},0).wait(1).to({rotation:1265.4,x:613.9},0).wait(1).to({rotation:1280.7},0).wait(1).to({rotation:1295.9},0).wait(1).to({rotation:1311.1},0).wait(1).to({rotation:1326.4},0).wait(1).to({rotation:1341.6,y:194.7},0).wait(1).to({rotation:1356.9},0).wait(1).to({rotation:1372.1},0).wait(1).to({rotation:1387.4},0).wait(1).to({rotation:1402.6},0).wait(1).to({rotation:1417.9},0).wait(1).to({rotation:1433.1},0).wait(1).to({rotation:1448.4,x:614},0).wait(1).to({rotation:1463.6},0).wait(1).to({rotation:1478.9},0).wait(1).to({rotation:1494.1},0).wait(1).to({rotation:1509.3},0).wait(1).to({rotation:1524.6},0).wait(1).to({rotation:1539.8},0).wait(1).to({rotation:1555.1,y:194.8},0).wait(1).to({rotation:1570.3},0).wait(1).to({rotation:1585.6},0).wait(1).to({rotation:1600.8},0).wait(1).to({rotation:1616.1},0).wait(1).to({rotation:1631.3,x:613.9},0).wait(1).to({rotation:1646.6},0).wait(1).to({rotation:1661.8},0).wait(1).to({rotation:1677},0).wait(1).to({rotation:1692.3,y:194.7},0).wait(1).to({rotation:1707.5},0).wait(1).to({rotation:1722.8},0).wait(1).to({rotation:1738},0).wait(1).to({rotation:1753.3},0).wait(1).to({rotation:1768.5},0).wait(1).to({rotation:1783.8},0).wait(1).to({rotation:1799},0).wait(1).to({rotation:1814.3,x:614},0).wait(1).to({rotation:1829.5},0).wait(1).to({rotation:1844.8},0).wait(1).to({rotation:1860},0).wait(1));

	// gear3
	this.instance_17 = new lib.gear3();
	this.instance_17.parent = this;
	this.instance_17.setTransform(579.7,233,0.742,0.742,0,0,0,0.1,0.2);
	this.instance_17._off = true;

	this.instance_18 = new lib.gear3_spin();
	this.instance_18.parent = this;
	this.instance_18.setTransform(613.9,194.7,0.742,0.742,0,0,0,0.2,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_17}]},10).to({state:[{t:this.instance_18}]},18).to({state:[]},1).wait(122));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(10).to({_off:false},0).to({_off:true,regX:0.2,regY:0.1,x:613.9,y:194.7},18,cjs.Ease.get(0.2)).wait(123));

	// gear2 copy
	this.instance_19 = new lib.gear2_test();
	this.instance_19.parent = this;
	this.instance_19.setTransform(614.3,220.1,0.742,0.742,0,0,0,0,0.1);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(28).to({_off:false},0).wait(1).to({regX:0.2,regY:-0.6,rotation:15.2,x:614.5,y:219.7},0).wait(1).to({rotation:30.5,x:614.7,y:219.8},0).wait(1).to({rotation:45.7,y:219.9},0).wait(1).to({rotation:61,x:614.8,y:220.1},0).wait(1).to({rotation:76.2,x:614.9,y:220.2},0).wait(1).to({rotation:91.5,x:614.8,y:220.3},0).wait(1).to({rotation:106.7,y:220.5},0).wait(1).to({rotation:122,x:614.6,y:220.6},0).wait(1).to({rotation:137.2,x:614.5,y:220.7},0).wait(1).to({rotation:152.5,x:614.4},0).wait(1).to({rotation:167.7,x:614.2,y:220.8},0).wait(1).to({rotation:183,x:614.1,y:220.7},0).wait(1).to({rotation:198.2,x:613.9,y:220.6},0).wait(1).to({rotation:213.4,x:613.8,y:220.5},0).wait(1).to({rotation:228.7,x:613.7,y:220.4},0).wait(1).to({rotation:243.9,y:220.3},0).wait(1).to({rotation:259.2,x:613.6,y:220.1},0).wait(1).to({rotation:274.4,x:613.7,y:220},0).wait(1).to({rotation:289.7,x:613.8,y:219.8},0).wait(1).to({rotation:304.9,x:613.9,y:219.7},0).wait(1).to({rotation:320.2,x:614,y:219.6},0).wait(1).to({rotation:335.4,x:614.2},0).wait(1).to({rotation:350.7,x:614.3},0).wait(1).to({rotation:365.9,x:614.5},0).wait(1).to({rotation:381.1,x:614.6,y:219.7},0).wait(1).to({rotation:396.4,x:614.7,y:219.8},0).wait(1).to({rotation:411.6,x:614.8,y:219.9},0).wait(1).to({rotation:426.9,y:220.1},0).wait(1).to({rotation:442.1,y:220.2},0).wait(1).to({rotation:457.4,y:220.4},0).wait(1).to({rotation:472.6,x:614.7,y:220.5},0).wait(1).to({rotation:487.9,x:614.6,y:220.6},0).wait(1).to({rotation:503.1,x:614.5,y:220.7},0).wait(1).to({rotation:518.4,x:614.3},0).wait(1).to({rotation:533.6,x:614.2},0).wait(1).to({rotation:548.9,x:614},0).wait(1).to({rotation:564.1,x:613.9,y:220.6},0).wait(1).to({rotation:579.3,x:613.8,y:220.5},0).wait(1).to({rotation:594.6,x:613.7,y:220.4},0).wait(1).to({rotation:609.8,y:220.2},0).wait(1).to({rotation:625.1,y:220.1},0).wait(1).to({rotation:640.3,y:219.9},0).wait(1).to({rotation:655.6,x:613.8,y:219.8},0).wait(1).to({rotation:670.8,x:613.9,y:219.7},0).wait(1).to({rotation:686.1,x:614,y:219.6},0).wait(1).to({rotation:701.3,x:614.2},0).wait(1).to({rotation:716.6,x:614.3},0).wait(1).to({rotation:731.8,x:614.5,y:219.7},0).wait(1).to({rotation:747,x:614.7},0).wait(1).to({rotation:762.3,y:219.8},0).wait(1).to({rotation:777.5,x:614.8,y:220},0).wait(1).to({rotation:792.8,x:614.9,y:220.1},0).wait(1).to({rotation:808,x:614.8,y:220.3},0).wait(1).to({rotation:823.3,y:220.4},0).wait(1).to({rotation:838.5,x:614.7,y:220.6},0).wait(1).to({rotation:853.8,x:614.5},0).wait(1).to({rotation:869,x:614.4,y:220.8},0).wait(1).to({rotation:884.3,x:614.2},0).wait(1).to({rotation:899.5,x:614.1,y:220.7},0).wait(1).to({rotation:914.8,x:614},0).wait(1).to({rotation:930,x:613.8,y:220.6},0).wait(1).to({rotation:945.2,y:220.4},0).wait(1).to({rotation:960.5,x:613.7,y:220.3},0).wait(1).to({rotation:975.7,x:613.6,y:220.1},0).wait(1).to({rotation:991,x:613.7,y:220},0).wait(1).to({rotation:1006.2,y:219.9},0).wait(1).to({rotation:1021.5,x:613.9,y:219.7},0).wait(1).to({rotation:1036.7,x:614},0).wait(1).to({rotation:1052,x:614.1,y:219.6},0).wait(1).to({rotation:1067.2,x:614.3},0).wait(1).to({rotation:1082.5,x:614.4},0).wait(1).to({rotation:1097.7,x:614.6,y:219.7},0).wait(1).to({rotation:1113,x:614.7,y:219.8},0).wait(1).to({rotation:1128.2,x:614.8,y:219.9},0).wait(1).to({rotation:1143.4,y:220.1},0).wait(1).to({rotation:1158.7,x:614.9,y:220.2},0).wait(1).to({rotation:1173.9,x:614.8,y:220.4},0).wait(1).to({rotation:1189.2,x:614.7,y:220.5},0).wait(1).to({rotation:1204.4,x:614.6,y:220.6},0).wait(1).to({rotation:1219.7,x:614.5,y:220.7},0).wait(1).to({rotation:1234.9,x:614.3},0).wait(1).to({rotation:1250.2,x:614.2,y:220.8},0).wait(1).to({rotation:1265.4,x:614,y:220.7},0).wait(1).to({rotation:1280.7,x:613.9,y:220.6},0).wait(1).to({rotation:1295.9,x:613.8,y:220.5},0).wait(1).to({rotation:1311.1,x:613.7,y:220.4},0).wait(1).to({rotation:1326.4,y:220.3},0).wait(1).to({rotation:1341.6,y:220.1},0).wait(1).to({rotation:1356.9,y:219.9},0).wait(1).to({rotation:1372.1,x:613.8,y:219.8},0).wait(1).to({rotation:1387.4,x:613.9,y:219.7},0).wait(1).to({rotation:1402.6,x:614,y:219.6},0).wait(1).to({rotation:1417.9,x:614.2},0).wait(1).to({rotation:1433.1,x:614.3},0).wait(1).to({rotation:1448.4,x:614.5},0).wait(1).to({rotation:1463.6,x:614.6,y:219.7},0).wait(1).to({rotation:1478.9,x:614.7,y:219.8},0).wait(1).to({rotation:1494.1,x:614.8,y:219.9},0).wait(1).to({rotation:1509.3,y:220.1},0).wait(1).to({rotation:1524.6,y:220.3},0).wait(1).to({rotation:1539.8,y:220.4},0).wait(1).to({rotation:1555.1,x:614.7,y:220.6},0).wait(1).to({rotation:1570.3,x:614.6},0).wait(1).to({rotation:1585.6,x:614.5,y:220.7},0).wait(1).to({rotation:1600.8,x:614.3},0).wait(1).to({rotation:1616.1,x:614.2},0).wait(1).to({rotation:1631.3,x:614},0).wait(1).to({rotation:1646.6,x:613.9,y:220.6},0).wait(1).to({rotation:1661.8,x:613.8,y:220.5},0).wait(1).to({rotation:1677,x:613.7,y:220.4},0).wait(1).to({rotation:1692.3,y:220.2},0).wait(1).to({rotation:1707.5,y:220},0).wait(1).to({rotation:1722.8,y:219.9},0).wait(1).to({rotation:1738,x:613.8,y:219.8},0).wait(1).to({rotation:1753.3,x:614,y:219.7},0).wait(1).to({rotation:1768.5,x:614.1,y:219.6},0).wait(1).to({rotation:1783.8,x:614.3},0).wait(1).to({rotation:1799,x:614.4},0).wait(1).to({rotation:1814.3,x:614.5,y:219.7},0).wait(1).to({rotation:1829.5,x:614.7},0).wait(1).to({rotation:1844.8,y:219.9},0).wait(1).to({rotation:1860,x:614.8,y:220.1},0).wait(1));

	// gear2
	this.instance_20 = new lib.gear2_spin();
	this.instance_20.parent = this;
	this.instance_20.setTransform(580,258.2,0.742,0.742,0,0,0,0.2,0.1);
	this.instance_20._off = true;

	this.instance_21 = new lib.gear2_test();
	this.instance_21.parent = this;
	this.instance_21.setTransform(614.2,220.1,0.742,0.742,0,0,0,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_20}]},10).to({state:[{t:this.instance_21}]},18).to({state:[]},1).wait(122));
	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(10).to({_off:false},0).to({_off:true,regY:0.2,x:614.2,y:220.1},18,cjs.Ease.get(0.2)).wait(123));

	// gear1 copy
	this.instance_22 = new lib.gear1();
	this.instance_22.parent = this;
	this.instance_22.setTransform(573.7,188.7,0.742,0.742,0,0,0,0.1,0);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(28).to({_off:false},0).wait(1).to({regX:0.5,regY:-1,rotation:3,x:574.1,y:187.9},0).wait(1).to({rotation:6},0).wait(1).to({rotation:9},0).wait(1).to({rotation:12,x:574.2,y:188},0).wait(1).to({rotation:15},0).wait(1).to({rotation:18,x:574.3},0).wait(1).to({rotation:20.9,y:188.1},0).wait(1).to({rotation:23.9},0).wait(1).to({rotation:26.9,x:574.4},0).wait(1).to({rotation:29.9,x:574.3},0).wait(1).to({rotation:32.9,x:574.4,y:188.2},0).wait(1).to({rotation:35.9},0).wait(1).to({rotation:38.9},0).wait(1).to({rotation:41.9,x:574.5,y:188.3},0).wait(1).to({rotation:44.9,x:574.4},0).wait(1).to({rotation:47.9,x:574.5,y:188.4},0).wait(1).to({rotation:50.9},0).wait(1).to({rotation:53.9},0).wait(1).to({rotation:56.8,y:188.5},0).wait(1).to({rotation:59.8,x:574.6},0).wait(1).to({rotation:62.8,x:574.5,y:188.6},0).wait(1).to({rotation:65.8,x:574.6},0).wait(1).to({rotation:68.8},0).wait(1).to({rotation:71.8,x:574.5},0).wait(1).to({rotation:74.8,y:188.7},0).wait(1).to({rotation:77.8},0).wait(1).to({rotation:80.8,y:188.8},0).wait(1).to({rotation:83.8},0).wait(1).to({rotation:86.8},0).wait(1).to({rotation:89.8,y:188.9},0).wait(1).to({rotation:92.7},0).wait(1).to({rotation:95.7},0).wait(1).to({rotation:98.7,y:189},0).wait(1).to({rotation:101.7,x:574.4},0).wait(1).to({rotation:104.7,y:189.1},0).wait(1).to({rotation:107.7},0).wait(1).to({rotation:110.7},0).wait(1).to({rotation:113.7,y:189.2},0).wait(1).to({rotation:116.7,x:574.3,y:189.3},0).wait(1).to({rotation:119.7,y:189.2},0).wait(1).to({rotation:122.7,x:574.2,y:189.3},0).wait(1).to({rotation:125.7},0).wait(1).to({rotation:128.6},0).wait(1).to({rotation:131.6,x:574.1,y:189.4},0).wait(1).to({rotation:134.6,y:189.3},0).wait(1).to({rotation:137.6,y:189.4},0).wait(1).to({rotation:140.6,x:574},0).wait(1).to({rotation:143.6},0).wait(1).to({rotation:146.6},0).wait(1).to({rotation:149.6},0).wait(1).to({rotation:152.6,x:573.9},0).wait(1).to({rotation:155.6,x:573.8,y:189.5},0).wait(1).to({rotation:158.6},0).wait(1).to({rotation:161.6,y:189.4},0).wait(1).to({rotation:164.5,x:573.7},0).wait(1).to({rotation:167.5},0).wait(1).to({rotation:170.5,x:573.6},0).wait(1).to({rotation:173.5},0).wait(1).to({rotation:176.5},0).wait(1).to({rotation:179.5,x:573.5},0).wait(1).to({rotation:182.5},0).wait(1).to({rotation:185.5},0).wait(1).to({rotation:188.5,x:573.4},0).wait(1).to({rotation:191.5},0).wait(1).to({rotation:194.5,x:573.3,y:189.3},0).wait(1).to({rotation:197.5},0).wait(1).to({rotation:200.5,y:189.2},0).wait(1).to({rotation:203.4,x:573.2},0).wait(1).to({rotation:206.4},0).wait(1).to({rotation:209.4},0).wait(1).to({rotation:212.4},0).wait(1).to({rotation:215.4,x:573.1,y:189.1},0).wait(1).to({rotation:218.4},0).wait(1).to({rotation:221.4,x:573,y:189},0).wait(1).to({rotation:224.4,x:573.1},0).wait(1).to({rotation:227.4,x:573},0).wait(1).to({rotation:230.4,y:188.9},0).wait(1).to({rotation:233.4},0).wait(1).to({rotation:236.4,y:188.8},0).wait(1).to({rotation:239.3},0).wait(1).to({rotation:242.3,y:188.7},0).wait(1).to({rotation:245.3},0).wait(1).to({rotation:248.3},0).wait(1).to({rotation:251.3},0).wait(1).to({rotation:254.3,y:188.6},0).wait(1).to({rotation:257.3},0).wait(1).to({rotation:260.3},0).wait(1).to({rotation:263.3,y:188.5},0).wait(1).to({rotation:266.3},0).wait(1).to({rotation:269.3,y:188.4},0).wait(1).to({rotation:272.3},0).wait(1).to({rotation:275.2,x:573.1},0).wait(1).to({rotation:278.2,x:573,y:188.3},0).wait(1).to({rotation:281.2},0).wait(1).to({rotation:284.2,x:573.1,y:188.2},0).wait(1).to({rotation:287.2},0).wait(1).to({rotation:290.2,x:573.2},0).wait(1).to({rotation:293.2,y:188.1},0).wait(1).to({rotation:296.2,y:188},0).wait(1).to({rotation:299.2,x:573.3,y:188.1},0).wait(1).to({rotation:302.2,y:188},0).wait(1).to({rotation:305.2},0).wait(1).to({rotation:308.2},0).wait(1).to({rotation:311.1,x:573.4,y:187.9},0).wait(1).to({rotation:314.1,y:188},0).wait(1).to({rotation:317.1,y:187.9},0).wait(1).to({rotation:320.1,x:573.5},0).wait(1).to({rotation:323.1},0).wait(1).to({rotation:326.1,x:573.6},0).wait(1).to({rotation:329.1},0).wait(1).to({rotation:332.1,x:573.7},0).wait(1).to({rotation:335.1},0).wait(1).to({rotation:338.1,y:187.8},0).wait(1).to({rotation:341.1,x:573.8,y:187.9},0).wait(1).to({rotation:344.1},0).wait(1).to({rotation:347,x:573.9},0).wait(1).to({rotation:350},0).wait(1).to({rotation:353},0).wait(1).to({rotation:356,x:574},0).wait(1).to({rotation:359},0).wait(1).to({rotation:362,x:574.1},0).wait(1).to({rotation:365},0).wait(1));

	// gear1
	this.instance_23 = new lib.gear1();
	this.instance_23.parent = this;
	this.instance_23.setTransform(539.4,226.8,0.742,0.742,0,0,0,0.2,0.2);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(10).to({_off:false},0).to({x:573.7,y:188.6},18,cjs.Ease.get(0.2)).to({_off:true},1).wait(122));

	// wing2
	this.instance_24 = new lib.wing2();
	this.instance_24.parent = this;
	this.instance_24.setTransform(615.1,266.2,0.742,0.742,0,0,0,34,-1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(1).to({regX:-10.5,regY:2.8,x:582.1,y:269.2},0).wait(34).to({regX:33,regY:-1,scaleX:0.74,scaleY:0.74,rotation:-5.3,x:615.2,y:266.2},0).wait(1).to({regX:-10.5,regY:2.8,rotation:-8.8,x:583.8,y:273.9},0).wait(1).to({rotation:-12.1,x:584.3,y:275.7},0).wait(1).to({rotation:-15.5,x:584.9,y:277.4},0).wait(1).to({rotation:-18.8,x:585.6,y:279.2},0).wait(1).to({rotation:-22.1,x:586.4,y:280.8},0).wait(1).to({rotation:-25.4,x:587.3,y:282.5},0).wait(1).to({rotation:-28.7,x:588.3,y:284.1},0).wait(1).to({rotation:-31.9,x:589.3,y:285.5},0).wait(1).to({rotation:-35.2,x:590.5,y:287},0).wait(1).to({rotation:-38.4,x:591.7,y:288.3},0).wait(1).to({rotation:-41.6,x:593,y:289.6},0).wait(1).to({rotation:-44.9,x:594.3,y:290.8},0).wait(1).to({rotation:-48.1,x:595.7,y:292},0).wait(1).to({rotation:-51.3,x:597.2,y:293},0).wait(1).to({rotation:-54.4,x:598.7,y:293.9},0).wait(1).to({rotation:-57.6,x:600.3,y:294.8},0).wait(1).to({rotation:-60.8,x:601.9,y:295.6},0).wait(1).to({rotation:-63.9,x:603.5,y:296.3},0).wait(1).to({rotation:-67.1,x:605.1,y:296.9},0).wait(1).to({rotation:-70.2,x:606.8,y:297.4},0).wait(1).to({rotation:-73.3,x:608.6,y:297.8},0).wait(1).to({rotation:-76.4,x:610.2,y:298.1},0).wait(1).to({rotation:-79.5,x:612,y:298.3},0).wait(1).to({rotation:-82.5,x:613.7,y:298.4},0).wait(1).to({rotation:-85.6,x:615.4,y:298.5},0).wait(1).to({rotation:-88.6,x:617.1,y:298.4},0).wait(1).to({rotation:-91.7,x:618.9,y:298.2},0).wait(1).to({rotation:-94.7,x:620.6,y:298},0).wait(1).to({rotation:-97.7,x:622.2,y:297.7},0).wait(1).to({rotation:-100.7,x:623.9,y:297.3},0).wait(1).to({rotation:-103.7,x:625.5,y:296.8},0).wait(1).to({rotation:-106.7,x:627.1,y:296.2},0).wait(1).to({rotation:-109.7,x:628.6,y:295.5},0).wait(1).to({rotation:-112.6,x:630.1,y:294.8},0).wait(1).to({rotation:-115.6,x:631.5,y:294},0).wait(1).to({rotation:-118.5,x:632.9,y:293.1},0).wait(1).to({rotation:-120,x:633.7,y:292.7},0).wait(79));

	// wings
	this.instance_25 = new lib.wing1();
	this.instance_25.parent = this;
	this.instance_25.setTransform(287.9,268.1,0.742,0.742,0,0,0,18.4,72.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(1).to({regX:63.1,regY:78.1,x:321.1,y:272.4},0).wait(34).to({regX:17.3,regY:71.7,scaleX:0.74,scaleY:0.74,rotation:5.3,x:287.9,y:268},0).wait(1).to({regX:63.1,regY:78.1,rotation:8.8,x:320.6,y:277.9},0).wait(1).to({rotation:12.1,x:320,y:279.7},0).wait(1).to({rotation:15.5,x:319.3,y:281.6},0).wait(1).to({rotation:18.8,x:318.4,y:283.4},0).wait(1).to({rotation:22.1,x:317.4,y:285.1},0).wait(1).to({rotation:25.4,x:316.5,y:286.8},0).wait(1).to({rotation:28.7,x:315.3,y:288.4},0).wait(1).to({rotation:31.9,x:314.1,y:289.9},0).wait(1).to({rotation:35.2,x:312.8,y:291.4},0).wait(1).to({rotation:38.4,x:311.5,y:292.8},0).wait(1).to({rotation:41.6,x:310,y:294.1},0).wait(1).to({rotation:44.9,x:308.5,y:295.3},0).wait(1).to({rotation:48.1,x:307,y:296.4},0).wait(1).to({rotation:51.3,x:305.3,y:297.4},0).wait(1).to({rotation:54.4,x:303.7,y:298.3},0).wait(1).to({rotation:57.6,x:302,y:299.2},0).wait(1).to({rotation:60.8,x:300.2,y:299.9},0).wait(1).to({rotation:63.9,x:298.5,y:300.5},0).wait(1).to({rotation:67.1,x:296.7,y:301.1},0).wait(1).to({rotation:70.2,x:294.9,y:301.5},0).wait(1).to({rotation:73.3,x:293.1,y:301.8},0).wait(1).to({rotation:76.4,x:291.2,y:302.1},0).wait(1).to({rotation:79.5,x:289.4,y:302.2},0).wait(1).to({rotation:82.5,x:287.5},0).wait(1).to({rotation:85.6,x:285.8},0).wait(1).to({rotation:88.6,x:283.9,y:302},0).wait(1).to({rotation:91.7,x:282.2,y:301.7},0).wait(1).to({rotation:94.7,x:280.3,y:301.4},0).wait(1).to({rotation:97.7,x:278.6,y:300.9},0).wait(1).to({rotation:100.7,x:276.9,y:300.4},0).wait(1).to({rotation:103.7,x:275.2,y:299.8},0).wait(1).to({rotation:106.7,x:273.6,y:299.1},0).wait(1).to({rotation:109.7,x:272,y:298.3},0).wait(1).to({rotation:112.6,x:270.4,y:297.5},0).wait(1).to({rotation:115.6,x:268.9,y:296.5},0).wait(1).to({rotation:118.5,x:267.5,y:295.5},0).wait(1).to({rotation:120,x:266.8,y:295},0).wait(79));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(723.9,444.2,355.4,319.8);
// library properties:
lib.properties = {
	width: 900,
	height: 601,
	fps: 24,
	color: "#252525",
	opacity: 1.00,
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;