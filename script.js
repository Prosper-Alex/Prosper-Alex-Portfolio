document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("dragstart", (img) => event.preventDefault());
});
