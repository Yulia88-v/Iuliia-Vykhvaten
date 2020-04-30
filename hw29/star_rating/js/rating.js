let rating = document.querySelector('.rating'),
    ratingItem = document.querySelectorAll('.fa-star'),
    btn = document.getElementById("button");

rating.onclick = function(event){
  let target = event.target;

  if(target.classList.contains('fa-star')){
    removeClass(ratingItem,'current-active')
    target.classList.add('active','current-active');
  }
}
btn.addEventListener("click",
        function(){
    let tex= document.getElementsByTagName('i');
        for(let i=0; i < tex.length; i++){
        ratingItem[i].classList.add('active','current-active');
  }});

rating.onmouseover = function(event) {
  let target = event.target;
  if(target.classList.contains('fa-star')){
    removeClass(ratingItem,'active')
    target.classList.add('active');
    mouseOverActiveClass(ratingItem)
  }
}
rating.onmouseout = function(){
  addClass(ratingItem,'active');
  mouseOutActiveClas(ratingItem);
}


function removeClass(arr) {
  for(let i = 0, iLen = arr.length; i <iLen; i ++) {
    for(let j = 1; j < arguments.length; j ++) {
      ratingItem[i].classList.remove(arguments[j]);
    }
  }
}
function addClass(arr) {
  for(let i = 0, iLen = arr.length; i <iLen; i ++) {
    for(let j = 1; j < arguments.length; j ++) {
      ratingItem[i].classList.add(arguments[j]);
    }
  }
}

function mouseOverActiveClass(arr){
  for(let i = 0, iLen = arr.length; i < iLen; i++) {
    if(arr[i].classList.contains('active')){
      break;
    }else {
      arr[i].classList.add('active');
    }
  }
}

function mouseOutActiveClas(arr){
  for(var i = arr.length-1; i >=1; i--) {
    if(arr[i].classList.contains('current-active')){
      break;
    }else {
      arr[i].classList.remove('active');
    }
  }
}

