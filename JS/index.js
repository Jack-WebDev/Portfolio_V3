const hamburger = document.getElementById("hamburger");
const modal = document.getElementById("modal");
const closeIcon = document.getElementById("closeIcon");
const navLinks = document.querySelectorAll(".nav__link");

const header = document.getElementById("header");
const main = document.getElementById("main");
const footer = document.getElementById('contact')
const loading = document.querySelector(".loader");

const openModal = () => {
  modal.classList.add("active");
};
const closeModal = () => {
  modal.classList.remove("active");
};

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    modal.classList.remove("active");
  });
});

["click", "keydown"].forEach((event) => {
  hamburger.addEventListener(event, openModal);
  closeIcon.addEventListener(event, closeModal);
});

function loader() {
  setTimeout(() => {
    loading.style.opacity = 0;
    loading.style.display = "none";

    header.style.display = "flex";
    main.style.display = "block";
    footer.style.display = "block";
    
    setTimeout(() => {
      header.style.opacity = 1;
      main.style.opacity = 1;
      footer.style.opacity = 1;
    }, 50);
  }, 4000);
}

loader();
