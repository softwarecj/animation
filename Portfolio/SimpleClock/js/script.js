setInterval(function(){
  const digitalClock = document.querySelector('.time');
  let time = new Date();
  let sec = time.getSeconds();
  let min = time.getMinutes();
  let hr = time.getHours();
  let day = 'AM';
  
  if (hr>12) {
    day= 'PM';
    hr= hr-12;
  }
  //Adding a 0 in front of number 9 and under
  
  if (hr == 0) {
    hr=12;
  }
  
  if (sec < 10) {
    sec = '0' + sec;
  }
  
  if (min < 10) {
    min = '0' + min;
  }
  
  if (hr < 10) {
    hr = '0' + hr;
  }
  //text.Content is faster than innerHTML. HTML parses content as HTML.
  //text.Content uses straight text and does not parse HTML
  digitalClock.textContent = hr + ':' + min + ':' + sec + " " + day;
});
