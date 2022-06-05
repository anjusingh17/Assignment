// changing active class on tabs click and also changing content top heading color
document.addEventListener("click", (e) => {
  if (e.target.matches("a") || e.target.closest("a")) {
    document
      .querySelectorAll("a")
      .forEach((element) => element.classList.remove("active"));
    e.target.classList.add("active");
    document.querySelectorAll("h5").forEach((element) => {
      element.classList.remove("blue_text");
      if (e.target.hash.includes(element.innerHTML.toLowerCase())) {
        element.classList.add("blue_text");
      }
    });
  }
});

// code copied on button click
function copyToClipboard(containerid) {
  if (document.selection) {
    var range = document.body.createTextRange();
    range.moveToElementText(document.getElementById(containerid));
    range.select().createTextRange();
    document.execCommand("copy");
  } else if (window.getSelection) {
    var range = document.createRange();
    range.selectNode(document.getElementById(containerid));
    window.getSelection().addRange(range);
    document.execCommand("copy");
    alert("Text has been copied, now you can paste it");
  }
}

// change tabs on content scroll
function onScroll(event) {
  var scrollPos = $(document).scrollTop() + 250;
  $("li>a").each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if (
      refElement.position().top <= scrollPos &&
      refElement.position().top + refElement.height() > scrollPos
    ) {
      $("li>a.active").removeClass("active");
      currLink.addClass("active");
    } else {
      currLink.removeClass("active");
    }
  });
}
$(document).ready(function () {
  $(".progress_bar_wrapper").on("scroll", onScroll);
});
