document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.createElement("button");
    toggleButton.id = "toggle-theme";
    toggleButton.textContent = "🌗 Cambiar Tema";
    document.body.appendChild(toggleButton);
  
    toggleButton.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
    });
  });
  