let currentLine = 0;
let totalLines = 0;

$(document).ready(() => {
  console.log("js document ready on event");
  console.log("init on event page. Get event from server to display.");
  $.ajax({
    url:"/api/event",
    method:"GET"
  }).done((data) => {
    console.log(data);
    //pageData = data;
    totalLines = data.data.script.length;
    currentLine = 0;
    renderPage(data);
  });
});

function renderPage(pageData) {
  //update display with script bits. display next on click anywhere in page, or on keyboard spacebar.
  let script = pageData.data.script;
  for(let i=0; i<script.length; i++) {
    let item = script[i];

    let rowClass = "row speaker align-items-center line"+i;
    if(i > 0) {
      rowClass+=" hidden";
    }
    let newLine = $("<div class='"+rowClass+"'>"+
        "<div class='col-2'>"+
          "<div class='"+item.speaker+" text-light'>"+item.speaker+"</div>"+
        "</div>"+
        "<div class='col-10'>"+
          "<div class='card'>"+
            "<div class='card-body text'>"+
              item.line+
            "</div>"+
          "</div>"+
        "</div>"+
      "</div>");

    $("div.script > .col").append(newLine);
  }
  $("h1.eventTitle").text(pageData.eventName);
  $("button.endBtn").text(pageData.data.buttonText);
}

function skipPage() {

}

function showNext(e) {
  e.preventDefault();
  currentLine++;
  if(currentLine >= totalLines) {
    $(".row.footer").removeClass("hidden");
  } else {
    $(".line"+currentLine).removeClass("hidden");
  }
}

$(".main-content").on("click", showNext);