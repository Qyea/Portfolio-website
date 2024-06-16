function clipboard() {
  var copyText = document.getElementById("email-name");
  navigator.clipboard.writeText(copyText.textContent);
  alert("Copied the text: " + copyText.textContent);
}

(function () {
  const header = document.querySelector(".header");
  window.onscroll = () => {
    if (window.pageYOffset > 800) {
      header.classList.add("header_active");
    } else {
      header.classList.remove("header_active");
    }
  };
})();
