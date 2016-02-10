//cross function
function home(){
  document.body.scrollTop = document.documentElement.scrollTop = 0;
}
//event functions
function eventC(){
  document.getElementById("person-name").innerHTML = "Stephanie Saunders";
  document.getElementById("person-description").innerHTML = "Stephanie is the youngest of Rachel’s two younger sisters.";
  document.getElementById("person-picture").innerHTML = "<img src=\"img/bridal_party/steph.jpg\">";

}
function eventR(){
  document.getElementById("person-name").innerHTML = "Stephanie Saunders";
  document.getElementById("person-description").innerHTML = "Stephanie is the youngest of Rachel’s two younger sisters.";
  document.getElementById("person-picture").innerHTML = "<img src=\"img/bridal_party/steph.jpg\">";

}
function eventP(){
  document.getElementById("person-name").innerHTML = "Stephanie Saunders";
  document.getElementById("person-description").innerHTML = "Stephanie is the youngest of Rachel’s two younger sisters.";
  document.getElementById("person-picture").innerHTML = "<img src=\"img/bridal_party/steph.jpg\">";

}

//bridesmaid funtions
function steph(){
  document.getElementById("person-name").innerHTML = "Stephanie Saunders";
  document.getElementById("person-description").innerHTML = "Stephanie is the youngest of Rachel’s two younger sisters.";
  document.getElementById("person-picture").innerHTML = "<img src=\"img/bridal_party/steph.jpg\">";

}
function monica(){
  document.getElementById("person-name").innerHTML = "Monica Saunders";
  document.getElementById("person-description").innerHTML = "Monica is the eldest of Rachel’s two younger sisters. She and Rachel grew up playing softball and music together...";
  document.getElementById("person-picture").innerHTML = "<img src=\"img/bridal_party/monica.jpg\">";

}
function katie(){
  document.getElementById("person-name").innerHTML = "Katie Hagan";
  document.getElementById("person-description").innerHTML = "Katie is Rachel’s best friend from childhood.  They first met during freshman year volleyball tryouts, when Katie boldly placed a frozen water bottle on the back of Rachel’s neck, and elicited a terrifyingly loud shriek.  She smiled mischievously, and apologized.  Within a few months, they became close friends, and though they currently live almost 3000 miles apart, they still make time to pursue their favorite shared hobby together over skype sessions:  listening to music and analyzing every possible aspect of the songs.";
  document.getElementById("person-picture").innerHTML = "<img src=\"img/bridal_party/katie.png\">";

}
function estelle(){
  document.getElementById("person-name").innerHTML = "Estelle Richardson";
  document.getElementById("person-description").innerHTML = "Estelle is one of Rachel’s closest friends from college.  They first met in their on-campus Christian Fellowship, where Estelle joined a bible study co-led by Rachel.  The following year when Rachel graduated, Estelle took on co-leadership of that same bible study, and the two stayed in touch!  After Estelle graduated, she and Rachel both worked side-by-side as recruiters in the same office.  When she’s not hiring the best tech talent around, you can find Estelle reading intellectual books, building things with wood…";
  document.getElementById("person-picture").innerHTML = "<img src=\"img/bridal_party/estelle.jpg\">";

}
function kayla(){
  document.getElementById("person-name").innerHTML = "Kayla Carroll";
  document.getElementById("person-description").innerHTML = "Kayla is Matt’s only sibling and beloved younger sister.  Rachel and Matthew attended her wedding in July 2015, not yet aware that within four months they themselves would be engaged! Kayla enjoys…";
  document.getElementById("person-picture").innerHTML = "<img src=\"img/bridal_party/kayla.jpg\">";

}
function kenna(){
  document.getElementById("person-name").innerHTML = "Kenna McKenzie";
  document.getElementById("person-description").innerHTML = "SKenna is the one responsible for unintentionally kicking off the journey that led to this marriage.  Being the older sister of Matthew’s closest childhood friend, she’s known him most of  her life, and is the one who invited him to join her for Bible study at Rachel’s house.  In her spare time, Kenna loves cooking (paleo cuisine, specifically) and is quite the excellent chef!";
  document.getElementById("person-picture").innerHTML = "<img src=\"img/bridal_party/kenna.jpg\">";

}
function kaitie(){
  document.getElementById("person-name").innerHTML = "Kaitie Meador";
  document.getElementById("person-description").innerHTML = "Kaitie is Rachel\’s former roommate, and co-led the Bible study in which Rachel & Matthew met.  Rachel was actually a bridesmaid in Kaitie\’s wedding last year!  In her free time, Kaitie magically brings struggling plants back to health, creates beautiful pottery, and enjoys tackling home-remodel projects alongside her husband!";
  document.getElementById("person-picture").innerHTML = "<img src=\"img/bridal_party/kaitie.jpg\">";

}
//GROOMSMEN
function weston(){
  document.getElementById("person-name").innerHTML = "Weston Freels";
  document.getElementById("person-description").innerHTML = "Weston is Matthew\’s best man.  After meeting at UCSB, Weston and Matthew became best friends and, because they share many of the same interests, have gone on innumerable outdoors adventures together, some of the most memorable being those in which mutual friends came to know the Lord.  Weston is currently working with one of UCSB’s on-campus Fellowships to build Christian community amongst current students.";
  document.getElementById("person-picture").innerHTML = "<img src=\"img/bridal_party/weston.jpg\">";

}
function kendall(){
  document.getElementById("person-name").innerHTML = "Kendall McKenzie";
  document.getElementById("person-description").innerHTML = "Kendall is Matthew’s closest childhood friend, and has known him practically since birth.  They attended the same church all through high school, and both studied engineering in college.  In his spare time, Kendall loves building things, and is a master woodworker!";
  document.getElementById("person-picture").innerHTML = "<img src=\"img/bridal_party/kendall.jpg\">";

}
function travis(){
  document.getElementById("person-name").innerHTML = "Travis Pappa";
  document.getElementById("person-description").innerHTML = "Travis is one of Matthew’s...";
  document.getElementById("person-picture").innerHTML = "<img src=\"img/bridal_party/travis.jpg\">";

}
function greg(){
  document.getElementById("person-name").innerHTML = "Gregory Saunders";
  document.getElementById("person-description").innerHTML = "Gregory is Rachel’s only brother.  Currently studying business in San Diego, in his spare time you will find him singing and playing guitar / piano, recording music, surfing, mentoring high school students at his church, redesigning various things, and perfecting the fine art of brewing good ol’ cups of coffee!";
  document.getElementById("person-picture").innerHTML = "<img src=\"img/bridal_party/greg.jpg\">";

}
var end = new Date('09/10/2016 15:00');

  var _second = 1000;
  var _minute = _second * 60;
  var _hour = _minute * 60;
  var _day = _hour * 24;
  var timer;

  function showRemaining() {
      var now = new Date();
      var distance = end - now;
      if (distance < 0) {

          clearInterval(timer);
          document.getElementById('countdown').innerHTML = 'Now!!';

          return;
      }
      var days = Math.floor(distance / _day);
      var hours = Math.floor((distance % _day) / _hour);
      var minutes = Math.floor((distance % _hour) / _minute);
      var seconds = Math.floor((distance % _minute) / _second);

      document.getElementById('countdown').innerHTML = days + ' days ';
      document.getElementById('countdown').innerHTML += hours + ' hours ';
      document.getElementById('countdown').innerHTML += minutes + ' minutes ';
      document.getElementById('countdown').innerHTML += seconds + ' seconds';
  }

  timer = setInterval(showRemaining, 1000);