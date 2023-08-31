var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')
var nameInput = document.getElementById('name')
var downloadBtn = document.getElementById('downloadb')

var image = new Image()
image.crossOrigin="anonymous";
image.src = 'c.jpg'
image.onload = function () {
	drawImage()
}

function drawImage() {
	// ctx.clearRect(0, 0, canvas.width, canvas.height)
	ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
	ctx.font = '50px sans-serif'
	ctx.fillStyle = '#000 center'
	ctx.fillText(nameInput.value, 450, 300)
}

nameInput.addEventListener('input', function () {
	drawImage()
})
ctx.textBaseline = 'middle';
  ctx.textAlign = "center";

downloadb.addEventListener('click', function () {
	downloadb.href = canvas.toDataURL('image/pdf')
	downloadb.download = 'Certificate - ' + nameInput.value
})