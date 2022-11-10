// ========================== menu activation ==========================
let menuBar = document.querySelector("#menu-bar");
let menu = document.querySelector(".menu");
let close = document.querySelector("#close");

menuBar.onclick = () => {
  menu.classList.add("active");
};
close.onclick = () => {
  menu.classList.remove("active");
};

// ========================== menu activation ==========================

// ========================== Typed js ==========================
var typed = new Typed(".type", {
  strings: [
    "<p>Front End <span>Developer</span> </p>",
    "<p>Back End <span>Developer</span> </p>",
    "<p><span> Freelancer</span></p>",
  ],
  typeSpeed: 80,
  backSpeed: 60,
  loop: true,
});
// ========================== Typed js ==========================

// ========================== skills progress ==========================

let progress = document.querySelectorAll(".the-progress span");

window.addEventListener("scroll", topFunction);

function topFunction() {
  progress.forEach((span) => {
    span.style.width = span.dataset.width;
  });
}

// ========================== skills progress ==========================

// ========================== Swiper ==========================
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  speed: 1500,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    800: {
      slidesPerView: 3,
    },
  },
});
// ========================== Swiper ==========================

// ========================== on scroll ==========================
let section = document.querySelectorAll(".section");
let navLinks = document.querySelectorAll(".nav .menu a");

window.addEventListener("scroll", downFunction);
function downFunction() {
  menu.classList.remove("active");
  section.forEach((sect) => {
    let top = window.scrollY;
    let height = sect.offsetHeight;
    let offset = sect.offsetTop - 80;
    let id = sect.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        let link = document.querySelector(".nav .menu a[href*=" + id + "] ");
        link.classList.add("active");
      });
    }
  });
}
// ========================== on scroll ==========================
// ========================== Add Class Active ==========================
$(".nav .menu a").click(function () {
  $(this).addClass("active").siblings().removeClass("active");
});
// ========================== Add Class Active ==========================

// ###################### smooth scroll to div ###########################
$(".nav .menu a").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#" + $(this).data("value")).offset().top - 70,
    },
    1000
  );
});

$("#btt").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#about").offset().top - 60,
    },
    1000
  );
});
$("#hire").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#contact").offset().top - 60,
    },
    1000
  );
});

// ###################### smooth scroll to div ###########################

// ###################### nav ###########################
let nav = document.querySelector(".nav");
window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.pageYOffset > 0) {
    nav.style.backgroundColor = "#000";
  } else {
    nav.style.backgroundColor = "transparent";
  }
}

// ###################### nav ###########################

// ###################### louder ###########################
function louder() {
  document.querySelector(".loader").classList.add("fade-out");
}

function fadeOut() {
  setInterval(louder, 3000);
}

window.onload = fadeOut;
// ###################### louder ###########################

// ###################### on scroll ###########################
let back = document.querySelector("#back-to-top");

window.addEventListener("scroll", backFunction);

function backFunction() {
  if (window.pageYOffset >= 750) {
    back.style.opacity = "1";
  } else {
    back.style.opacity = "0";
  }
}

back.onclick = function () {
  $("html, body").animate(
    {
      scrollTop: $("#particles-js").offset().top,
    },
    1000
  );
};
// ###################### on scroll ###########################

// ###################### count to ###########################
$(".timer").countTo();
// ###################### count to ###########################

// ###################### Form Validation ###########################
let userName = document.querySelector("#name");
let email = document.querySelector("#email");
let phone = document.querySelector("#phone");
let subject = document.querySelector("#subject");
let textarea = document.querySelector("#textarea");
let form = document.querySelector("#form");
let button = document.querySelector("#button");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  nameValue = userName.value.trim();
  emailValue = email.value.trim();
  phoneValue = phone.value.trim();
  subjectValue = subject.value.trim();
  textareaValue = textarea.value.trim();

  if (nameValue === "") {
    toastr.error(
      "Please fill the name field and it should be more than 3 letters."
    );
    userName.style.border = "1px solid red";
  } else {
    userName.style.border = "1px solid transparent";
  }
  if (emailValue === "") {
    toastr.error("Please fill the email field.");
    email.style.border = "1px solid red";
  } else {
    email.style.border = "1px solid transparent";
  }
  if (phoneValue === "") {
    toastr.error("Please fill the phone field.");
    phone.style.border = "1px solid red";
  } else {
    phone.style.border = "1px solid transparent";
  }
  if (subjectValue === "") {
    toastr.error("Please fill the message field.");
    subject.style.border = "1px solid red";
  } else {
    subject.style.border = "1px solid transparent";
  }
  if (textareaValue === "") {
    toastr.error("Please fill the subject field.");
    textarea.style.border = "1px solid red";
  } else {
    textarea.style.border = "1px solid transparent";
  }
  if (
    nameValue !== "" &&
    emailValue !== "" &&
    phoneValue !== "" &&
    subjectValue !== "" &&
    textareaValue !== ""
  ) {
    toastr.success("Great, Your Message Has Been Delivered");
    userName.value = "";
    email.value = "";
    phone.value = "";
    subject.value = "";
    textarea.value = "";
  }
}

$("[placeholder]")
  .focus(function () {
    $(this).attr("data-text", $(this).attr("placeholder"));
    $(this).attr("placeholder", "");
  })
  .blur(function () {
    $(this).attr("placeholder", $(this).attr("data-text"));
  });
