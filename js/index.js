/* ===========================================================
   Lógica da página index.html
=========================================================== */

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("conselho-do-dia").textContent = conselhoDoDia();
  const frase = fraseDoDia();
  if (frase) {
    document.getElementById("frase-do-dia").innerHTML = `
      <p>"${escapeHTML(frase.frase)}"</p>
      <span class="autor">— ${escapeHTML(frase.autor)}</span>
    `;
  }
});
