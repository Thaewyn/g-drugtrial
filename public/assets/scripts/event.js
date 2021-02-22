
function init() {
  console.log("init on event page. Get event from server to display.");
  $.ajax({
    url:"/api/event",
    method:"GET"
  }).done((data) => {
    console.log(data);
  })
}

$(document).ready(() => {
  console.log("js document ready on event");
  init();
})