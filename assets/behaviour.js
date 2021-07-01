document.getElementById('showme').addEventListener('click', autoScroll);
document.getElementById('scrollup').addEventListener('click', scrollToTop);

document.getElementById('ho').addEventListener('click', function(){setActiveOnClick('ho')});
document.getElementById('ab').addEventListener('click', function(){setActiveOnClick('ab')});
document.getElementById('po').addEventListener('click', function(){setActiveOnClick('po')});
document.getElementById('co').addEventListener('click', function(){setActiveOnClick('co')});
document.addEventListener('scroll', setActiveOnScroll);
document.addEventListener('scroll', stickyTop);


function stickyTop(){
  var nav = document.getElementById('navbar');
  var about = document.getElementById('about');
  var bar = about.getBoundingClientRect();
  
  if(bar.top <= -100){
    nav.classList.add('sticky-top');
  } else {
    nav.classList.remove('sticky-top');
  }
}

function autoScroll(){
  window.scrollTo(0, document.getElementById('about').offsetTop);
}

function scrollToTop(){
  window.scrollTo(0, 0);
}

function setActiveOnClick(name){
  var lis = ['ho', 'ab', 'po', 'co'];

  for (i in lis){
    var ele = document.getElementById(lis[i]);
    if (lis[i] == name){
      ele.classList.add('active');
    } else {
      ele.classList.remove('active');
    }
  }
}

function setActiveOnScroll(){
  var divs = ['home', 'about', 'portfolio', 'contact'];
  var tabs = ['ho', 'ab', 'po', 'co'];

  for(i in divs){
    var ele = document.getElementById(tabs[i]);
    var div = document.getElementById(divs[i]).getBoundingClientRect();
    if(div.top <= 5 && div.bottom >= 5){
      ele.classList.add('active');
    } else {
      ele.classList.remove('active');
    }
  }
}