document.getElementById('showme').addEventListener('click', autoScroll);
document.getElementById('scrollup').addEventListener('click', scrollToTop);

document.getElementById('ho').addEventListener('click', function(){setActiveOnClick('ho')});
document.getElementById('ab').addEventListener('click', function(){setActiveOnClick('ab')});
document.getElementById('po').addEventListener('click', function(){setActiveOnClick('po')});
document.getElementById('co').addEventListener('click', function(){setActiveOnClick('co')});
document.addEventListener('scroll', setActiveOnScroll);


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
  var lines = ['no', 'abline', 'poline', 'coline'];
  var headers = ['no', 'absection', 'posection', 'cosection'];
  var content = ['no', 'aboutinfo', 'projects', 'contactform'];

  for(i in divs){
    var div = document.getElementById(divs[i]).getBoundingClientRect();
    var ele = document.getElementById(tabs[i]);
    var line = document.getElementById(lines[i]);
    var header = document.getElementById(headers[i]);
    var cont = document.getElementById(content[i]);
    
    if(div.top <= 120 && div.bottom >= 120){
      ele.classList.add('active');

      if (lines[i] != 'no'){
        addHeader(header, line, cont);
        addContent(headers[i], cont);
      }

    } else {
      ele.classList.remove('active');
    }
  }
}

function addHeader(header, line, cont){
  header.style.color = '#424242';
  line.style.borderBottom = '0.5vw solid #424242';
  setTimeout(resizeLine, 100, line);
}

function resizeLine(line){
  line.style.width = '5vw';
}

function addContent(header, cont){
  cont.style.opacity = '1';

  if (header == 'absection') {
    document.getElementById('graphs').classList.add('come-in-right');
    document.getElementById('blurb').classList.add('come-in-left');
  } else if (header == 'posection') {
    document.getElementById('projects').classList.add('come-in-up');
  } else if (header == 'cosection') {
    document.getElementById('contactinput').classList.add('come-in-left');
    document.getElementById('sendbtn').classList.add('come-in-right');
  }
}