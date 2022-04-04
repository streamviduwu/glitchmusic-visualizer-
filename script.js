// let url = `https://api.soundcloud.com/resolve.json?url=${encodeURI(
//   "https://soundcloud.com/cementcity-1/undertale-cement-city-remix"
// )}&client_id=${"6gsNBd4mJwXr0LxTBh8VKBOrViK6Aj56"}`;

let trackId = '272083179'
let clientId = '6gsNBd4mJwXr0LxTBh8VKBOrViK6Aj56'
// let url = `https://young-fjord-13133.herokuapp.com/https://api-v2.soundcloud.com/tracks/${trackId}?client_id=${clientId}`;

var audioElement = document.getElementById("audioElement");
// audioElement.crossOrigin = "anonymous";
audioElement.volume = 1;
async function getTrack(url) {
    // let res = await fetch(url);
    // let data = await res.json();

    // audioElement.src = await `${
    //   data.stream_url
    // }?client_id=${"6gsNBd4mJwXr0LxTBh8VKBOrViK6Aj56"}`;
    // let media = await fetch(`https://young-fjord-13133.herokuapp.com/${data.media.transcodings[1].url}?client_id=${clientId}`)

    // let mediaData = await media.json()
    // audioElement.src = url
    await audioElement.play();
    await rain.play();
}

var canvas = document.getElementById("mycanvas");
let ctx = canvas.getContext("2d");

// webkitAudioContext for safari
var audioCtx = new AudioContext();

let analyser = audioCtx.createAnalyser();

// we need to set the fftsize
// which  will be divided by 2
// and should contain the array size
// and it has to be a power of 2
// 2048 is the max apparently
analyser.fftSize = 2048;
// can only connect once
let source = audioCtx.createMediaElementSource(audioElement);
source.connect(analyser);

// // connect it back to speakers or headphones
analyser.connect(audioCtx.destination);

// unsigned array to store audio data
// same size as fftSize divided 2
var data = new Uint8Array(analyser.frequencyBinCount - 382);

// loops 60 frames peUndertale (Cement City Remix).mp3r second
requestAnimationFrame(loopingFunction);

function loopingFunction() {
    requestAnimationFrame(loopingFunction);
    // populate data array
    // passing data array by reference
    // read data from analyser
    analyser.getByteFrequencyData(data);

    analyser.smoothingTimeConstant = 0.85;
    // draw based on data
    draw(data);
    // drawCircle(data);
}
var startX = canvas.width / 2,
    startY = canvas.height / 2;
window.onload = window.onresize = function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    startX = canvas.width / 2;
    startY = canvas.height / 2;
};

function draw(data) {
    // conver data from unsigned uint8 array to regular array
    data = [...data];
    // while (data[data.length - 1] === 0) data.pop();
    // clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let space = 60 / data.length;
    ctx.beginPath();
    ctx.arc(startX, startY, 60, 0, 2 * Math.PI);
    ctx.stroke();
    let currAngle = (Math.PI * 2 * 3) / 4;
    let nextX = startX + 60 * Math.cos(currAngle);
    let nextY = startY + 60 * Math.sin(currAngle);
    let spaceArc = (Math.PI * 2.0) / data.length;
    // increase radius
    // and calculate
    data.forEach((value, i) => {
        ctx.beginPath();
        ctx.moveTo(nextX, nextY);
        ctx.lineTo(
            nextX + value * Math.cos(currAngle),
            nextY + value * Math.sin(currAngle)
        );
        var gradient = ctx.createLinearGradient(
            nextX,
            nextY,
            nextX + value * Math.cos(currAngle),
            nextY + value * Math.sin(currAngle)
        );
        gradient.addColorStop("0", "rgba(121, 224, 201, 1)");
        gradient.addColorStop("0.3", "#00193F");
        gradient.addColorStop("1", "black");
        ctx.strokeStyle = gradient;
        ctx.stroke();
        nextX = startX + 60 * Math.cos(currAngle);
        nextY = startY + 60 * Math.sin(currAngle);
        currAngle += spaceArc;

        // if (currAngle >= Math.pi * 2) currAngle = 0;
    });
}

function drawCircle(data) {
    // conver data from unsigned uint8 array to regular array
    data = [...data];
    // while (data[data.length - 1] === 0) data.pop();
    // clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let space = 60 / data.length;
    ctx.beginPath();
    ctx.arc(startX, startY, 60, 0, 2 * Math.PI);
    ctx.stroke();
    let startAngle = (Math.PI * 2 * 3) / 4;
    let currAngle = (Math.PI * 2 * 3) / 4;
    let nextX = startX + 60 * Math.cos(currAngle);
    let nextY = startY + 60 * Math.sin(currAngle);
    let spaceArc = (Math.PI * 2.0) / data.length;
    // increase radius
    // and calculate
    var lastValue = data[0];
    var lastX = startX + 60 * Math.cos(currAngle);
    var lastY = startY + 60 * Math.sin(currAngle);
    var lastAngle = currAngle;
    data.forEach((value, i) => {
        if (i % 15 === 0 && i < data.length - 15) {
            ctx.beginPath();
            ctx.moveTo(
                startX + (60 + data[i]) * Math.cos(i * spaceArc + startAngle),
                startY + (60 + data[i]) * Math.sin(i * spaceArc + startAngle)
            );
            ctx.lineTo(
                // startX + (60 + data[i + 7]) * Math.cos((i + 7) * spaceArc + startAngle),
                // startY + (60 + data[i + 7]) * Math.sin((i + 7) * spaceArc + startAngle),
                startX +
                (60 + data[i + 15]) * Math.cos((i + 15) * spaceArc + startAngle),
                startY +
                (60 + data[i + 15]) * Math.sin((i + 15) * spaceArc + startAngle)
                // 10
            );
            var gradient = ctx.createLinearGradient(
                nextX,
                nextY,
                nextX + value * Math.cos(currAngle),
                nextY + value * Math.sin(currAngle)
            );
            // gradient.addColorStop("0", "rgba(121, 224, 201, 1)");
            // gradient.addColorStop("0.3", "#00193F");
            // gradient.addColorStop("1", "black");
            ctx.strokeStyle = "white";
            ctx.stroke();
            lastX = startX + (60 + data[i]) * Math.cos(i * spaceArc + startAngle);
            lastY = startY + (60 + data[i]) * Math.sin(i * spaceArc + startAngle);
            // lastAngle = currAngle;

            // lastValue = value;
        }
        // nextX = startX + 60 * Math.cos(currAngle);
        // nextY = startY + 60 * Math.sin(currAngle);
        // currAngle += spaceArc;

        // if (currAngle >= Math.pi * 2) currAngle = 0;
    });
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(
        // startX + (60 + data[i + 5]) * Math.cos((i + 5) * spaceArc + startAngle),
        // startY + (60 + data[i + 5]) * Math.sin((i + 5) * spaceArc + startAngle),
        startX + (60 + data[0]) * Math.cos(0 * spaceArc + startAngle),
        startY + (60 + data[0]) * Math.sin(0 * spaceArc + startAngle)
        // 10
    );
    ctx.strokeStyle = "white";
    ctx.stroke();
}
var rain = document.getElementById("rain");
rain.volume = 0.4;
// rain.loop = true;
audioElement.onplay = () => {
    audioCtx.resume();
};
audioElement.onended = () => {
    rain.pause();
};
var state = "stops";
let playButton = document.getElementById("play-btn");
playButton.onclick = () => {
    //
    if (state === "play") {
        playButton.children[0].classList.remove("fa-pause");
        playButton.children[0].classList.add("fa-play");
        state = "pause";
        audioElement.pause();
        rain.pause();
    } else if (state === "pause") {
        playButton.children[0].classList.remove("fa-play");
        playButton.children[0].classList.add("fa-pause");
        state = "play";
        audioElement.play();
        rain.play();
    } else {
        playButton.children[0].classList.remove("fa-play");
        playButton.children[0].classList.add("fa-pause");
        state = "play";
        getTrack();
    }
};