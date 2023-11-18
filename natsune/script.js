const pagetop_btn = document.querySelector(".pagetop");


pagetop_btn.addEventListener("click", scroll_top);


function scroll_top() {
window.scroll({ top: 0, behavior: "smooth" });
}


window.addEventListener("scroll", scroll_event);
function scroll_event() {
if (window.pageYOffset > 100) {
    pagetop_btn.style.opacity = "1";
} else if (window.pageYOffset < 100) {
    pagetop_btn.style.opacity = "0";
}
}



const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    header.classList.toggle("active");
    const accordionContent = header.nextElementSibling;
    const icon = header.querySelector(".accordion-icon");

    if (accordionContent.style.display === "block") {
      accordionContent.style.display = "none";
      icon.style.transform = "translateY(-50%) rotate(135deg)";
    } else {
      accordionContent.style.display = "block";
      icon.style.transform = "translateY(-50%) rotate(-45deg)";
    }
  });
});