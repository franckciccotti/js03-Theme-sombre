const toggle = document.querySelector("#toggle");
toggle.addEventListener("click", Switch);
function Switch() {
    let root = document.body;
    toggle.innerText = "🌞" ? (toggle.innerText = "🌞") : (toggle.innerText = "🌜");
    root.classList.toggle("lightMode");
}