window.addEventListener("load", () => {
  const button = document.querySelector(".randomBtn button");
  const svg = document.querySelector(".randomBtn svg");

  button.addEventListener("click", () => {
    // Add the 'rotate' class to the SVG on every click
    svg.classList.add("rotate");

    // After the animation is finished (after 1 second), remove the 'rotate' class
    setTimeout(() => {
      svg.classList.remove("rotate");
    }, 1000);
  });
});
