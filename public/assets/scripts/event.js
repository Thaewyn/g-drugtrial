let currentLine = 0;
let totalLines = 0;

$(document).ready(() => {
  //console.log("js document ready on event");
  $.ajax({
    url:"/api/event",
    method:"GET"
  }).done((data) => {
    //console.log(data);
    //pageData = data;
    totalLines = data.data.script.length;
    currentLine = 0;
    renderPage(data);
  });

  $(".main-content").on("click", showNext);
  $(document).on("keyup", showNextKey);
  $(".skipBtn").on("click", skipPage);
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
    let newLine = $("<div class='"+rowClass+" "+item.speaker+"'>"+
        "<div class='col-2'>"+
          "<div class='speaker text-light'>"+item.speaker+"</div>"+
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
  $(".hidden").removeClass("hidden");
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

function showNextKey(e) {
  e.preventDefault();
  //console.log(e);
  if(e.code == "Space") {
    showNext(e);
  }
}
