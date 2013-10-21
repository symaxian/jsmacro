//@replace MyGame.CANVAS_WIDTH 800
//@replace MyGame.CANVAS_HEIGHT 600

var MyGame = function(){

	this.canvas = Document.createElement('canvas');
	this.canvas.width = MyGame.CANVAS_WIDTH;
	this.canvas.height = MyGame.CANVAS_HEIGHT;

};