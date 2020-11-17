// interactive hamburger menu 
var navbar = document.querySelector(".navbar")
var ham = document.querySelector(".hamburger")

ham.addEventListener("click", toggleHamburger)

function toggleHamburger(){
    navbar.classList.toggle("showNav")
    ham.classList.toggle("showClose")
}

var menuLinks = document.querySelectorAll(".menuLink")

menuLinks.forEach( 
    function(menuLink) { 
      menuLink.addEventListener("click", toggleHamburger) 
    }
  )
  
    
// countdown clock
const deadline = '2020-12-01';
function getTimeRemaining(endtime){
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor( (total/1000) % 60 );
    const minutes = Math.floor( (total/1000/60) % 60 );
    const hours = Math.floor( (total/(1000*60*60)) % 24 );
    const days = Math.floor( total/(1000*60*60*24) );
  
    return {
        total,
        days,
        hours,
        minutes,
        seconds
      };
    }
    function initializeClock(id, endtime) {
        const clock = document.getElementById(id);
        const timeinterval = setInterval(() => {
          const t = getTimeRemaining(endtime);
          clock.innerHTML = 'days: ' + t.days + '<br>' +
                            'hours: '+ t.hours + '<br>' +
                            'minutes: ' + t.minutes + '<br>' +
                            'seconds: ' + t.seconds;
          if (t.total <= 0) {
            clearInterval(timeinterval);
          }
        },1000);
      }
      initializeClock('clockdiv', deadline);