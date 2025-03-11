const grid = document.getElementById("grid-container");

grid.addEventListener("click", e => {
  // check if clicked element a read more button
  if (e.target.classList.contains("readMoreBtn")) {
    e.preventDefault();

    // gather active button press
    const activeBtn = e.target;

    // gather neared small text section
    const smallText = e.target.previousElementSibling;

    // toggle read me/read less
    smallText.classList.toggle("line-clamp-5");
    activeBtn.textContent === "read more"
      ? (activeBtn.textContent = "read less")
      : (activeBtn.textContent = "read more");
  }
});
