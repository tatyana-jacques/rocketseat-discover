function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/foto_cor.png")
    img.setAttribute(
      "alt",
      "Foto de Tatyana Jacques, blusa preta e fundo lilás"
    )
  } else {
    img.setAttribute("src", "./assets/foto.jpg")
    img.setAttribute(
      "alt",
      "Foto de Tatyana Jacques, blusa preta e fundo claro"
    )
  }
}
