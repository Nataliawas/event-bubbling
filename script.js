function showModal() {
  var modal = document.getElementById("modal")
  return modal.style.display = "block"
}

function closeModal() {
  var modal = document.getElementById("modal")
  return modal.style.display = "none"
}

window.onclick = function (event) {
  var modal = document.getElementById("modal")
  if (event.target == modal) {
    modal.style.display = "none"
  }
}

var sizeChoice = document.getElementById("size-container")
sizeChoice.addEventListener('click', function (e) {
  if (e.target) {
    return size = e.target.value
  }
}, false)

var colorChoice = document.getElementById("color-container")
colorChoice.addEventListener('click', function (e) {
  if (e.target) {

    return color = e.target.value
  }
}, false)

var positionChoice = document.getElementById("position-container")
positionChoice.addEventListener('click', function (e) {
  if (e.target) {

    return position = e.target.value
  }
}, false)

function addNewRectangle() {
  return {
    size: size,
    color: color,
    position: position
  }
}


var rectangles = []

function populateRectangles() {

  if (color && size && position) {
    rectangles.push(addNewRectangle(size, color, position))
  }

}

function renderRectangles() {
  arrayContent = document.getElementById('content')
  arrayContent.innerHTML = ''

  rectangles.forEach(function (rectangle) {
    var content = `<div class="rectangle ${rectangle.size} ${rectangle.color} ${rectangle.size}"><button class="remove-btn" onclick="removeRectangle()"><i class="far fa-trash-alt"></i></button></div>`
    if (rectangle.size = 'start') {
      var elem = arrayContent.insertAdjacentHTML('afterbegin', content)
    } else {
      var elem = arrayContent.insertAdjacentHTML('beforeend', content)
    }
  })
}

function removeRectangle(index) {
  rectangles.splice(index, 1)
  renderRectangles()
}
