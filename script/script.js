/*main slider functions*/
function slider(z) {
	var a = z.src;
	document.getElementById("slider").setAttribute("style","background-image:url("+a+")");
}

/*main slider arrows function*/
var imagesMainSlider = ["images/slider/slide1_bg.jpg","images/slider/slide2_bg.jpg","images/slider/slide3_bg.jpg"];
var i = 0;
function next(){
var mainSlider = document.getElementById('slider');
i++;
if(i==imagesMainSlider.length){
  i=0;
  }
  mainSlider.setAttribute('style',"background-image:url("+imagesMainSlider[i]+")");
}
function previous(){
 var mainSlider = document.getElementById('slider');
 i--;

if(i<0){

  i=imagesMainSlider.length-1;

}

mainSlider.setAttribute('style',"background-image:url("+imagesMainSlider[i]+")");
 }

/*clean code section this will change titles when clicked*/
var cleanSpan = ["Clean","Technical","Responsive","Documentation","Quality","Support"];
var cleanP=["Code","Support"]; /*ihave some idea abot creating this section with js but there are some things unclear for me i decided that i may ask someone else*/

/*buy this template function (this will change text on a tag )*/
function changeTxt(txt){
  txt.innerHTML = "yes i want it"
}
function changeTxtAbove(txt){
  txt.innerHTML = "buy this theme"
}

/*featured works slider*/

/*featured works'sliders' images arrays here*/

var sliderFeaturedWorks = ["images/works/1.jpg","images/works/2.jpg","images/works/3.jpg","images/works/4.jpg","images/works/5.jpg","images/works/6.jpg","images/works/7.jpg"];
var zoomImage=["images/zoom.png"];

/*featured main playground*/
  var imageFrameWidth=0;
  var sum=0;
  var container=document.querySelector('.container');

  var imageFrame=document.querySelector('.imageFrame');

  var fprev=document.querySelector('.left');
  var fnext=document.querySelector('.right');
  var sliderNum=0;
  (function(){
    for (var i = 0; i < sliderFeaturedWorks.length; i++) {

      frame=document.createElement("div");
      img=document.createElement("img");
      featuredMiddle=document.createElement('div');
      featuredTitle=document.createElement('h1');
      featuredOverImage=document.createElement('img');
      featuredDate=document.createElement('p');

      frame.setAttribute("id","frame");
      img.setAttribute("src",sliderFeaturedWorks[i]);
      featuredMiddle.setAttribute('class','featuredMiddle')
      featuredTitle.setAttribute('class','featuredTitle');
      featuredOverImage.setAttribute('src',zoomImage[0]);
      featuredDate.setAttribute('class','featuredDate');

      imageFrame.appendChild(frame);
      frame.appendChild(img);
      frame.appendChild(featuredMiddle);
      featuredMiddle.appendChild(featuredTitle);
      featuredMiddle.appendChild(featuredDate);
      featuredMiddle.appendChild(featuredOverImage);
      
      featuredTitle.innerHTML="Ginger Beast";
      featuredDate.innerHTML="17 March 2041";

      imageFrameWidth+=frame.offsetWidth;
      imageFrame.style.width= "3000px";
      frame.style.width=container.offsetWidth/4 + "px";
    }
  })()

fnext.addEventListener("click",function(){
sum-=frame.clientWidth;
sliderNum++;
if (sliderNum>sliderFeaturedWorks.length-4) {
 sliderNum=0;
 sum=0;
}
imageFrame.style.left=sum+ "px";
})
  
fprev.addEventListener("click",function(){
    sum+=frame.clientWidth;
    sliderNum--;
    if (sliderNum<=-1) {
      sliderNum=sliderFeaturedWorks.length-4;
      sum=-((sliderFeaturedWorks.length-4)*frame.clientWidth);
    }
    imageFrame.style.left=sum+ "px";
  })
  
/*team section slider*/
/*our team's sliders' images arrays here*/
var sliderOurTeam = ["images/team/1.jpg","images/team/2.jpg","images/team/3.jpg","images/team/4.jpg","images/team/5.jpg","images/team/6.jpg","images/team/7.jpg","images/team/8.jpg"];
var ourTeamOverIcon={
  faceTwitter:'<i class="fa fa-facebook-square" aria-hidden="true"></i><i class="fa fa-twitter" aria-hidden="true"></i>',
  faceTwGoogle:'<i class="fa fa-facebook-square" aria-hidden="true"></i><i class="fa fa-twitter" aria-hidden="true"></i><i class="fa fa-google-plus" aria-hidden="true"></i>',
}
var teamMembers=['Sarah Brown','David Jones','Kate Smith','Peter Parker','Jim Moss','John Marks','Julia Anderson','Joe Mades']
var membersRoles=['Director','Creative Director','Manager','Manager','Designer','Designer','Developer','Developer'];

/*our team's main playground*/
  var teamImageFrameWidth=0;
  var teamSum=0;
  var teamContainer=document.querySelector('.teamContainer');
  var teamImageFrame=document.querySelector('.teamImageFrame');
  var teamPrev=document.querySelector('#tLeft');
  var teamNext=document.querySelector('#tRight');
  var teamSliderNum=0;

  (function(){
    for (var i = 0; i < sliderOurTeam.length; i++) {

      teamFrame=document.createElement("li");
      teamImg=document.createElement("img");
      teamOverlay=document.createElement("div");
      membersNames=document.createElement('h2');
      membersTitle=document.createElement('p');
      socialIcon=document.createElement('div');

      teamFrame.setAttribute("id","tFrame");
      teamImg.setAttribute("src",sliderOurTeam[i]);
      teamOverlay.setAttribute('id','teamOverlay');
      membersNames.setAttribute('class','teamMembers');
      membersTitle.setAttribute('class','membersTitle');
      socialIcon.setAttribute('class','teamSocialIcon');

      teamImageFrame.appendChild(teamFrame);
      teamFrame.appendChild(teamImg);
      teamFrame.appendChild(teamOverlay);
      teamOverlay.appendChild(membersNames);
      teamOverlay.appendChild(membersTitle);
      teamOverlay.appendChild(socialIcon);

      membersNames.innerHTML=teamMembers[i];
      membersTitle.innerHTML=membersRoles[i];
      if(i%2!=0){
        socialIcon.innerHTML=ourTeamOverIcon.faceTwitter;
      } else{
        socialIcon.innerHTML=ourTeamOverIcon.faceTwGoogle; 
      }

      teamImageFrameWidth+=teamFrame.offsetWidth;
      teamImageFrame.style.width= "3200px";
      teamFrame.style.width=teamContainer.offsetWidth/3 + "px";
    }
  })()

  teamNext.addEventListener("click",function(){
    teamSum-=teamFrame.clientWidth;
    teamSliderNum++;
    if (teamSliderNum>sliderOurTeam.length-3) {
      teamSliderNum=0;
      teamSum=0;
    }
    teamImageFrame.style.left=teamSum+ "px";
  })

  teamPrev.addEventListener("click",function(){
    teamSum+=teamFrame.clientWidth;
    teamSliderNum--;
    if (teamSliderNum<=-1) {
      teamSliderNum=sliderOurTeam.length-3;
      teamSum=-((sliderOurTeam.length-3)*teamFrame.clientWidth);
    }
    teamImageFrame.style.left=teamSum+ "px";
  })
  

/*client thoughts*/
var slideNum = 1;
showSlides(slideNum);
function prevNext(n) {
  showSlides(slideNum = n);
}

function showSlides(n) {
  var i;
  var slice = document.getElementsByClassName("txt");
  var bullet = document.getElementsByClassName("bullets");
  if (n > slice.length) {slideNum = 1}    
  if (n < 1) {slideNum = slice.length}
  for (i = 0; i < slice.length; i++) {
      slice[i].style.display = "none";
  }
  for (i = 0; i < bullet.length; i++) {
     bullet[i].className = bullet[i].className.replace(" active", "");
  }
  slice[slideNum-1].style.display = "block";  
  bullet[slideNum-1].className += " active";
}
/*news section's images overlay images*/
var postItemImages=document.querySelectorAll("#news .newsBottom .postItemImg");
(function(){
  for (var i = 0; i < postItemImages.length; i++) {

   newsImagesDiv=document.createElement("div");
   newsImagesZoom=document.createElement("img");

   newsImagesDiv.setAttribute("class","newsImagesDiv");
   newsImagesZoom.setAttribute("class","newsImagesZoom");

  postItemImages[i].appendChild(newsImagesDiv);
  newsImagesDiv.appendChild(newsImagesZoom);

  newsImagesZoom.setAttribute('src',zoomImage[0]);
 }
})()
  