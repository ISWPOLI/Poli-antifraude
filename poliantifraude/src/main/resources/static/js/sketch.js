var video;
var button;
var snapshots = [];
var counter = 0;
var vScale = 4;
var total;
var ctracker;

function setup() {
    var canvas = createCanvas(760, 480);
    videoInput = createCapture(VIDEO);
    videoInput.size(400, 300);
    canvas.position(0,0);
   /* createCanvas(800, 300);
    background(51);
    video = createCapture(VIDEO);
    video.size(320, 240);
    setTimeout(tomarFoto,500);
*/
    // button = createButton('snap');
    // button.mousePressed(takesnap);
    ctracker = new clm.tracker();
    ctracker.init(pModel);
    ctracker.start(videoInput.elt);

}

function draw() {
    clear();




    // get array of face marker positions [x, y] format
    var positions = ctracker.getCurrentPosition();
    for (var i=0; i<positions.length; i++) {
        // set the color of the ellipse based on position on screen
        //fill(map(positions[i][0], width*0.33, width*0.66, 0, 255), map(positions[i][1], height*0.33, height*0.66, 0, 255), 255);
        // draw ellipse at each position point
        //ellipse(positions[i][0], positions[i][1], 8, 8);
        fill(map(positions[27][0], width*0.33, width*0.66, 0, 255), map(positions[27][1], height*0.33, height*0.66, 0, 255), 255);
        ellipse(positions[27][0], positions[0][1], 8, 8);
        fill(map(positions[32][0], width*0.33, width*0.66, 0, 255), map(positions[32][1], height*0.33, height*0.66, 0, 255), 255);
        ellipse(positions[32][0], positions[14][1], 8, 8);
        fill(map(positions[44][0], width*0.33, width*0.66, 0, 255), map(positions[44][1], height*0.33, height*0.66, 0, 255), 255);
        ellipse(positions[44][0], positions[0][1], 8, 8);
        fill(map(positions[50][0], width*0.33, width*0.66, 0, 255), map(positions[50][1], height*0.33, height*0.66, 0, 255), 255);
        ellipse(positions[50][0], positions[0][1], 8, 8);
    }
  /*  var w = 40;
    var h = 30;
    var x = 320;
    var y = 0;
*/
    // How many cells fit in the canvas
   // total = floor(width / w) * floor(height / h);

    /*snapshots[counter] = video.get();
    counter++;
    if (counter == total) {
        counter = 0;
    }*/
   /* image(video, 0, 0, 320, 240);
    filter(THRESHOLD, 0.5);
    for (var i = 0; i < snapshots.length; i++) {
        //tint(255, 50);
        var index = (i + frameCount) % snapshots.length;
        image(snapshots[index], x, y, w, h);
        x = x + w;
        if (x >= width) {
            x = 320;
            y = y + h;
        }
    }*/
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

