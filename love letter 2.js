$(document).ready(function () {
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");

  envelope.click(function () {
    open();
  });
  btn_open.click(function () {
    open();
  });
  btn_reset.click(function () {
    close();
  });

  function open() {
    envelope.addClass("open").removeClass("close");
  }
  function close() {
    envelope.addClass("close").removeClass("open");
  }
});

const correctPin = "2109"; // 👈 CHANGE THIS
let enteredPin = "";

$(".key").click(function () {
  const val = $(this).text();

  if (val === "←") {
    enteredPin = enteredPin.slice(0, -1);
  } else if (val !== "✔") {
    enteredPin += val;
  }

  $("#pinInput").val("*".repeat(enteredPin.length));
});

$("#unlock").click(function () {
  if (enteredPin === correctPin) {
    $("#lockScreen").removeClass("active");
    $("#letterPage").addClass("active");
  } else {
    alert("Wrong PIN 💔");
    enteredPin = "";
    $("#pinInput").val("");
  }
});

/* Show memories button */
$("#showMemories").click(function () {
  $(".memory-gallery").fadeToggle();
});
