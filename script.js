function showModal() {
  var modal = document.getElementById("modal")
  return modal.style.display = "block"
}

function closeModal() {
  var modal = document.getElementById("modal")
  return modal.style.display = "none"
}

var sizeChoice = document.getElementById("size-container")
sizeChoice.addEventListener('click', function(e) {
  if (e.target) {
    return size = e.target.value
  }
},false)

var colorChoice = document.getElementById("color-container")
colorChoice.addEventListener('click', function(e) {
  if (e.target) {
    
    return color = e.target.value 
  }
}, false)

function addNewRectangle() {
  return {
    size: size,
    color: color
  }
}

var rectangles = []

function populateRectangles() {
  
  if (color && size) {
    rectangles.push(addNewRectangle(size,color))
  } 
  
}



function renderRectangles() {
 arrayContent =  document.getElementById('content')
 arrayContent.innerHTML = ''

 rectangles.forEach(function(rectangle){
  var content = `<div class="rectangle ${rectangle.size} ${rectangle.color}"></div>`
  var elem  = arrayContent.insertAdjacentHTML('beforeend', content)
})
}