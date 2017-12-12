
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 400;
canvas.height = 400;
document.getElementById("gameView").appendChild(canvas);

var requestAnimFrame = (function(){
    return window.requestAnimationFrame       ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        window.oRequestAnimationFrame      ||
        window.msRequestAnimationFrame     ||
        function(callback){
            window.setTimeout(callback, 1000 / 60);
        };
})();

function init() {
    //terrainPattern = ctx.createPattern(resources.get('img/terrain.png'), 'repeat');

    reset();
    lastTime = Date.now();
    main();
}

var lastTime;
var gameTime = 0;

function main() {
    var now = Date.now();
    var dt = (now - lastTime) / 1000.0;

    update(dt);
    render();

    lastTime = now;
    requestAnimFrame(main);
}

function update(dt) {
    gameTime += dt;
}

function render() {
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function reset() {
    gameTime = 0;
};

init ();
