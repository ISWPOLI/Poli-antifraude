var video;
var button;
var snapshots = [];
var counter = 0;
var vScale = 4;
var total;

function setup() {
    createCanvas(800, 300);
    background(51);
    video = createCapture(VIDEO);
    video.size(320, 240);
    setTimeout(tomarFoto,500);

    // button = createButton('snap');
    // button.mousePressed(takesnap);
}

function draw() {
    var w = 40;
    var h = 30;
    var x = 0;
    var y = 0;

    // How many cells fit in the canvas
    total = floor(width / w) * floor(height / h);

    /*snapshots[counter] = video.get();
     counter++;
     if (counter == total) {
     counter = 0;
     }*/

    for (var i = 0; i < snapshots.length; i++) {
        //tint(255, 50);
        var index = (i + frameCount) % snapshots.length;
        image(snapshots[index], x, y, w, h);
        x = x + w;
        if (x >= width) {
            x = 0;
            y = y + h;
        }
    }
}


function tomarFoto() {
    snapshots[counter] = video.get();
    counter++;
    if (counter == total) {
        snapshots = [];
    }
    createP('tomarFoto');
    setTimeout(tomarFoto, 500);
}

/**
 * Created by alejo on 5/18/2017.
 */
