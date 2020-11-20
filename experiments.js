document.querySelector(".button-container").addEventListener("click", function(event) {
    if (event.target.tagName === "BUTTON") {
      alert(`You clicked on button ${event.target.innerText}`);
    }
    event.stopPropagation();
  });