
  function onloading(){
    var flag=false; //in case it's a 404.
    if ((location.hash=="#Home")||(location.hash=="")||(location.hash==null)){
      show(0);
      flag = true;
    }
    if (location.hash=="#Playlist"){
      show(1);
      flag = true;
    }
    if (location.hash=="#Starred"){
      show(2);
      flag = true;
    }
    if (location.hash=="#Movie"){
      show(3);
      flag = true;
    }
    if (location.hash.slice(0, 7)=="#MovieP"){
      var playme = document.getElementById('audio');
      playme.pause();
      document.getElementById("theaudiobar").style.display="none";
      document.getElementById("homey").style.display="none";
      document.getElementById("playlisty").style.display="none";
      document.getElementById("starry").style.display="none";
      document.getElementById("moviey").style.display="table-cell";
      document.getElementById("movieplaying").style.display="none";
      document.getElementById("searchy").style.display="none";
      document.getElementById('hometop').style.fill='#000';
      document.getElementById('playlisttop').style.fill='#000';
      document.getElementById('startop').style.fill='#000';
      document.getElementById('movietop').style.fill='#00962a';
      document.getElementById('searchbar').style.borderColor ='#000';
      document.getElementById('searchbar').style.backgroundImage = "url('icons/search.svg')";
      document.getElementById('searchbar').style.color ='#000';
      playingmovie(location.hash.slice(8, location.hash.length));
      flag = true;
    }
    if (location.hash=="#Search"){
      show(4);
      flag = true;
      document.getElementById('searchbar').style.backgroundImage = "url('icons/searchfocus.svg')";
    }
    if ((location.hash=="#404")||(!flag)){
        show(404);
      }
    }

    function playingmovie(movieid){
        location.hash = 'MovieP&'+movieid;
        document.getElementById("moviey").style.display="none";
        document.getElementById("movieplaying").style.display="table-cell";
        document.getElementById('moviename').innerHTML = (movieid.slice(0, -4).slice(7,));
        document.getElementById('videoplayer').setAttribute("src", movieid);
        document.getElementById('videoplayer').load();
    }


  function updateSource(name){
    var playme = document.getElementById('audio');
    document.getElementById("starbot").classList.add("botbutton");
    document.getElementById("playlistbot").classList.add("botbutton");
    if (name=="rand"){
      //it should randomize between every single song.. currently there are two - 1.mp3 and 2.mp3 so it randomizes between them.
      var x = Math.floor((Math.random() * 2) + 1)
        playme.src = "songs/"+x+".mp3";
        document.title = x;
        document.getElementById("recentactivity").innerHTML+= "גילעד פדר מנגן <b>"+x+"</b><br>";
    }
    else{
        playme.src='songs/'+name+'.mp3';
        document.title = name;
        document.getElementById("recentactivity").innerHTML+= "גילעד פדר מנגן <b>"+name+"</b><br>";
    }
    playme.play();
    $('#recentactivity').scrollTop($('#recentactivity')[0].scrollHeight);
  }

  function star(TheID) {
          document.getElementById('star1').src='icons/cardstarfill.svg';
      }

  function show(nr) {
        if (nr==0){
          location.hash = 'Home';
          document.getElementById("error").style.display="none";
          document.getElementById("theaudiobar").style.display="table-row";
          document.getElementById("homey").style.display="table-cell";
          document.getElementById("playlisty").style.display="none";
          document.getElementById("starry").style.display="none";
          document.getElementById("moviey").style.display="none";
          document.getElementById("movieplaying").style.display="none";
          document.getElementById("searchy").style.display="none";
          document.getElementById('hometop').style.fill='#00962a';
          document.getElementById('playlisttop').style.fill='#000';
          document.getElementById('startop').style.fill='#000';
          document.getElementById('movietop').style.fill='#000';
          document.getElementById('searchbar').style.borderColor ='#000';
          document.getElementById('searchbar').style.backgroundImage = "url('icons/search.svg')";
          document.getElementById('searchbar').style.color ='#000';
        }
        if (nr==1){
          location.hash = 'Playlist';
          document.getElementById("error").style.display="none";
          document.getElementById("theaudiobar").style.display="table-row";
          document.getElementById("homey").style.display="none";
          document.getElementById("playlisty").style.display="table-cell";
          document.getElementById("starry").style.display="none";
          document.getElementById("moviey").style.display="none";
          document.getElementById("movieplaying").style.display="none";
          document.getElementById("searchy").style.display="none";
          document.getElementById('hometop').style.fill='#000';
          document.getElementById('playlisttop').style.fill='#00962a';
          document.getElementById('startop').style.fill='#000';
          document.getElementById('movietop').style.fill='#000';
          document.getElementById('searchbar').style.borderColor ='#000';
          document.getElementById('searchbar').style.backgroundImage = "url('icons/search.svg')";
          document.getElementById('searchbar').style.color ='#000';
        }
        if (nr==2){
          location.hash = 'Starred';
          document.getElementById("error").style.display="none";
          document.getElementById("theaudiobar").style.display="table-row";
          document.getElementById("homey").style.display="none";
          document.getElementById("playlisty").style.display="none";
          document.getElementById("starry").style.display="table-cell";
          document.getElementById("moviey").style.display="none";
          document.getElementById("movieplaying").style.display="none";
          document.getElementById("searchy").style.display="none";
          document.getElementById('hometop').style.fill='#000';
          document.getElementById('playlisttop').style.fill='#000';
          document.getElementById('startop').style.fill='#00962a';
          document.getElementById('movietop').style.fill='#000';
          document.getElementById('searchbar').style.borderColor ='#000';
          document.getElementById('searchbar').style.backgroundImage = "url('icons/search.svg')";
          document.getElementById('searchbar').style.color ='#000';
        }
      if (nr==3){
        location.hash = 'Movie';
        var playme = document.getElementById('audio');
        playme.pause();
        document.getElementById("error").style.display="none";
        document.getElementById("theaudiobar").style.display="none";
        document.getElementById("homey").style.display="none";
        document.getElementById("playlisty").style.display="none";
        document.getElementById("starry").style.display="none";
        document.getElementById("moviey").style.display="table-cell";
        document.getElementById("movieplaying").style.display="none";
        document.getElementById("searchy").style.display="none";
        document.getElementById('hometop').style.fill='#000';
        document.getElementById('playlisttop').style.fill='#000';
        document.getElementById('startop').style.fill='#000';
        document.getElementById('movietop').style.fill='#00962a';
        document.getElementById('searchbar').style.borderColor ='#000';
        document.getElementById('searchbar').style.backgroundImage = "url('icons/search.svg')";
        document.getElementById('searchbar').style.color ='#000';
      }
      if (nr==4){
        location.hash = 'Search';
        document.getElementById("error").style.display="none";
        document.getElementById("theaudiobar").style.display="table-row";
        document.getElementById("homey").style.display="none";
        document.getElementById("playlisty").style.display="none";
        document.getElementById("starry").style.display="none";
        document.getElementById("searchy").style.display="table-cell";
        document.getElementById("moviey").style.display="none";
        document.getElementById("movieplaying").style.display="none";
        document.getElementById('hometop').style.fill='#000';
        document.getElementById('playlisttop').style.fill='#000';
        document.getElementById('startop').style.fill='#000';
        document.getElementById('movietop').style.fill='#000';
        document.getElementById('searchbar').style.borderColor ='#00962a';
        document.getElementById('searchbar').style.color ='#00962a';
      }
      if (nr==404){
        location.hash = '404';
        document.getElementById("error").style.display="table-cell";
        document.getElementById("theaudiobar").style.display="table-row";
        document.getElementById("homey").style.display="none";
        document.getElementById("playlisty").style.display="none";
        document.getElementById("starry").style.display="none";
        document.getElementById("moviey").style.display="none";
        document.getElementById("movieplaying").style.display="none";
        document.getElementById("searchy").style.display="none";
        document.getElementById('hometop').style.fill='#000';
        document.getElementById('playlisttop').style.fill='#000';
        document.getElementById('startop').style.fill='#000';
        document.getElementById('movietop').style.fill='#000';
        document.getElementById('searchbar').style.borderColor ='#000';
        document.getElementById('searchbar').style.backgroundImage = "url('icons/search.svg')";
        document.getElementById('searchbar').style.color ='#000';
      }
            document.getElementById('hometop').style.transition = "0.375s";
            document.getElementById('playlisttop').style.transition = "0.375s";
            document.getElementById('startop').style.transition = "0.375s";
            document.getElementById('movietop').style.transition = "0.375s";
            document.getElementById('acctop').style.transition = "0.375s";
            document.getElementById('searchbar').style.transition = "0.375s";
      }

      console.log("MADE ALL BY HAND BY GILAD FEDER.");

function searching(valofrad){
  if ((document.getElementById("searchbar").value==null)||(document.getElementById("searchbar").value=="")||(document.getElementById("searchbar").value==" ")||(document.getElementById("searchbar").value=="הכל")||(document.getElementById("searchbar").value=="all")||(document.getElementById("searchbar").value=="All"))
  {
    //shows everything
    document.getElementsByClassName("textofsearch")[0].innerHTML= "מציג הכל!";

  }
  else{
    //shows specific
  document.getElementsByClassName("textofsearch")[0].innerHTML = document.getElementById("searchbar").value;
  }
}


function randchatcolor(){
  var letters = '012345'.split('');
  var color = '#';
  color += letters[Math.round(Math.random() * 5)];
  letters = '0123456789ABCDEF'.split('');
  for (var i = 0; i < 5; i++) {
    color += letters[Math.round(Math.random() * 15)];
  }
  document.getElementById("input-color").value = color;
  savedcolor = color;
}


$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

function resizing() {
    var w = window.outerWidth;
    var h = window.outerHeight;

    if ((w<=1430)||(h<=758)){ //if screen size is too small
      for (var i=0; i<10 ; i++) //loops through all elements (10 in homescreen)
      {
        //widths and heights of elements
        document.getElementsByClassName('cardphoto')[i].style.width = "115px";
        document.getElementsByClassName('cardphoto')[i].style.height = "115px";
        document.getElementsByClassName('card')[i].style.width = "115px";
        document.getElementsByClassName('card')[i].style.height = "115px";
        document.getElementsByClassName('overflowing')[i].style.width = "115px";
        document.getElementsByClassName('movcardphoto')[i].style.width = "115px";
        document.getElementsByClassName('movcardphoto')[i].style.height = "162px";
        document.getElementsByClassName('movcard')[i].style.width = "115px";
        document.getElementsByClassName('movoverflowing')[i].style.width = "115px";

        //button icons sizes
        document.getElementsByClassName('play')[i].style.width= "60px";
        document.getElementsByClassName('playlist')[i].style.width= "24px";
        document.getElementsByClassName('star')[i].style.width= "24px";
        document.getElementsByClassName('movplay')[i].style.width= "60px";

        //buttons icons location
        document.getElementsByClassName('playit')[i].style.top= "-3px";
        document.getElementsByClassName('playit')[i].style.left= "27px";
        document.getElementsByClassName('loveit')[i].style.top= "40px";
        document.getElementsByClassName('loveit')[i].style.left= "3px";
        document.getElementsByClassName('playlistit')[i].style.top= "42px";
        document.getElementsByClassName('playlistit')[i].style.left= "88px";
        document.getElementsByClassName('movplayit')[i].style.top= "25px";
        document.getElementsByClassName('movplayit')[i].style.left= "27px";

        //font sizes
        document.getElementsByClassName('songname')[i].style.fontSize= "0.6em";
        document.getElementsByClassName('artistname')[i].style.fontSize= "0.5em";
        document.getElementsByClassName('movname')[i].style.fontSize= "0.6em";
        document.getElementsByClassName('movgenre')[i].style.fontSize= "0.5em";
      }
    }
    else{ //if screen size is good OR if it was too small and reverted back to normal.
      for (i=0; i<10 ; i++) //loops through all elements (10 in homescreen)
      {
        //widths and heights of elements
        document.getElementsByClassName('cardphoto')[i].style.width = "230px";
        document.getElementsByClassName('cardphoto')[i].style.height = "230px";
        document.getElementsByClassName('card')[i].style.width = "230px";
        document.getElementsByClassName('card')[i].style.height = "230px";
        document.getElementsByClassName('overflowing')[i].style.width = "230px";
        document.getElementsByClassName('movcardphoto')[i].style.width = "230px";
        document.getElementsByClassName('movcardphoto')[i].style.height = "325px";
        document.getElementsByClassName('movcard')[i].style.width = "230px";
        document.getElementsByClassName('movoverflowing')[i].style.width = "230px";

        //button icons sizes
        document.getElementsByClassName('play')[i].style.width= "120px";
        document.getElementsByClassName('playlist')[i].style.width= "36px";
        document.getElementsByClassName('star')[i].style.width= "36px";
        document.getElementsByClassName('movplay')[i].style.width= "120px";

        //buttons icons location
        document.getElementsByClassName('playit')[i].style.top= "55px";
        document.getElementsByClassName('playit')[i].style.left= "55px";
        document.getElementsByClassName('loveit')[i].style.top= "98px";
        document.getElementsByClassName('loveit')[i].style.left= "16px";
        document.getElementsByClassName('playlistit')[i].style.top= "100px";
        document.getElementsByClassName('playlistit')[i].style.left= "180px";
        document.getElementsByClassName('movplayit')[i].style.top= "102px";
        document.getElementsByClassName('movplayit')[i].style.left= "55px";

        //font sizes
        document.getElementsByClassName('songname')[i].style.fontSize= "inherit";
        document.getElementsByClassName('artistname')[i].style.fontSize= "inherit";
        document.getElementsByClassName('movname')[i].style.fontSize= "inherit";
        document.getElementsByClassName('movgenre')[i].style.fontSize= "inherit";
      }
    }
}



var timeout;
function coolgifs(){
  clearTimeout(timeout);
  document.getElementById('coolcircle').src = "pictures/load"+Math.floor((Math.random() * 17) + 1)+".gif";
  document.getElementById('amancircle').style.display="none";
  document.getElementById('coolcircle').style.display="inline";
  timeout = setTimeout(function() {
    document.getElementById('amancircle').style.display="inline";
    document.getElementById('coolcircle').style.display="none";
  }, 4000);

}

function loadingding() {
    setTimeout(function(){
      document.getElementById("loading").style.display="none";
      document.getElementById("realone").style.display="table";
    }, 1000+Math.floor(Math.random() * 2000));
}

var timing, lastsent = null, diff;
function chatUpdate() {
  timing = new Date();
  diff = timing - lastsent;
  if (diff>1000){ //not to spam more than 1 message per second.
    document.getElementById('chat').innerHTML += "<font style='color:"+document.getElementById("input-color").value+";font-weight:bold;' >גילעד פדר:</font> "+document.getElementById('chatting').value+"<br>";
    document.getElementById("chatting").value = null;
    document.getElementById("chat").scrollTop = document.getElementById("chat").scrollHeight;
  lastsent = new Date();
  }
  else{
    document.getElementById('chat').innerHTML += "<div style='text-align: center;'><font style='font-weight: bold;color:#d43f3a;'>נא לא להספים את הצ'אט. :)</font></div>"
  }
}

function hovsvg(num){
  if (num==1){
    document.getElementById("searchbar").style.backgroundImage= "url(icons/searchhover.svg)";
  }
  if (num==0){
    if (location.hash == '#Search'){
      document.getElementById('searchbar').style.backgroundImage = "url('icons/searchfocus.svg')";
    }
    else{
      document.getElementById('searchbar').style.backgroundImage = "url('icons/search.svg')";
    }
  }
}

var savedcolor;
function isvalidcolor(){
  var r,g,b,lum;
  var hex = document.getElementById("input-color").value.toString(16);
  hex = hex.replace('#','');
  r = parseInt(hex.substring(0,2), 16);
  g = parseInt(hex.substring(2,4), 16);
  b = parseInt(hex.substring(4,6), 16);
  lum = (r+r+b+g+g+g)/6;
  if (lum>191){
    $("#colorproblem").fadeIn("slow");
     document.getElementById("input-color").value = savedcolor;
    setTimeout(function(){ $("#colorproblem").fadeOut("slow"); }, 3000);
  }
  savedcolor = document.getElementById("input-color").value;
  }
