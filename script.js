const themeButton = document.getElementById("theme-button");

// Load the saved theme on page load
if (localStorage.getItem("differentColor") === "true") {
  document.documentElement.classList.add("different-color");
}

// Toggle the color theme when clicking the button
themeButton.addEventListener("click", () => {
  document.documentElement.classList.toggle("different-color");

  // Save the current theme state in localStorage so it doesnt change when switching pages
  const isDifferentColor = document.documentElement.classList.contains("different-color");
  localStorage.setItem("differentColor", isDifferentColor);
});