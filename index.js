const H1 = document.querySelector("h1")
let h1 = 0;
const departMinutes = 5
let temps = departMinutes * 60

const timerElement = document.getElementById("timer")

setInterval(() => {
    let minutes = parseInt(temps / 60, 10)
    let secondes = parseInt(temps % 60, 10)

    minutes = minutes < 10 ? "0" + minutes : minutes
    secondes = secondes < 10 ? "0" + secondes : secondes

    timerElement.innerText = `${minutes}:${secondes}`
    temps = temps <= 0 ? 0 : temps - 1




}, 100)


const fonct = () => {
    const Emoji = document.createElement("p")
    const son = () => {
        const audio = new Audio()
        audio.src = "/son.wav";
        audio.play();
    }
    document.body.appendChild(Emoji)

    Emoji.innerHTML = `😂`;

    Emoji.classList.add("style")

    Emoji.style.setProperty("--font", Math.random() * 10 + 3 + "rem");

    Emoji.style.top = Math.random() * 100 + 100 + "%";
    Emoji.style.left = Math.random() * 100 + "%";
    const minmax = Math.random() > 0.5 ? 1 : -1;
    Emoji.style.setProperty("--rotate", Math.random() * 10 + 30 * minmax + "deg")


    Emoji.addEventListener("click", () => {
        h1++;
        H1.textContent = h1;
        Emoji.remove()
        son();

    })

    setTimeout(() => {
        Emoji.remove()
    }, 9000)
}

setInterval(fonct, 1000)