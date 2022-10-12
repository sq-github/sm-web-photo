var photosDiv = document.getElementById("photosDiv");
initPhoto();
function initPhoto() {
  var temHtml = "";
  for (var i = 0; i < photoData.length; i++) {
    var temDiv =
      '<div class="photoCon"><img class="photo" src="' +
      photoData[i].src +
      '" alt="" /><div class="time"></div>' +
      photoData[i].time +
      "</div></div>";
    temHtml = temHtml + temDiv;
  }
  photosDiv.innerHTML = temHtml;
}
