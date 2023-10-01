const buttons = document.querySelectorAll(".button");
const characters = document.querySelectorAll(".character");

buttons.forEach((characterButton, index) => {
  characterButton.addEventListener("click", () => {
    deselect(".button.selected");
    deselect(".character.selected");

    characterButton.classList.add("selected");
    characters[index].classList.add("selected");
  });
});

function deselect(item) {
  const selected = document.querySelector(item);
  selected.classList.remove("selected");
}
