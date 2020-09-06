// Timer
function getTimeRemaining(endtime) {
  let t = Date.parse(endtime) - Date.parse(new Date());
  let seconds = Math.floor((t / 1000) % 60);
  let minutes = Math.floor((t / 1000 / 60) % 60);
  let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  let days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  const daysDiv = document.querySelector('.timer__days');
  const hoursDiv = document.querySelector('.timer__hours');
  const minutesDiv = document.querySelector('.timer__min');
  const secondsDiv = document.querySelector('.timer__sec');
  console.log(daysDiv);


  function updateClock() {
    let t = getTimeRemaining(endtime);
    console.log(daysDiv);

    daysDiv.innerHTML = t.days;
    hoursDiv.innerHTML = ('0' + t.hours).slice(-2);
    minutesDiv.innerHTML = ('0' + t.minutes).slice(-2);
    secondsDiv.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  let timeinterval = setInterval(updateClock, 1000);
}

let deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000); // for endless timer
initializeClock('countdown', deadline);


// Exterior slider
let exteriorSlider = new Swiper('.exterior-container', {
  slidesPerView: 'auto',
  spaceBetween: 30,
  centeredSlides: true,
  scrollbar: {
    el: '.exterior-scrollbar',
    draggable: true,
    dragSize: '108',
    trackSize: '93%',

  },
});

// Interioir
function interiorSliderTop(slider) {
  let div = slider.firstElementChild;
  let range = document.createElement("input");
  range.type = "range";
  range.oninput = function() {
  div.style.width = this.value + "%";
  };
  slider.appendChild(range);
  };

interiorSliderTop(document.querySelector('.image-slider'));
