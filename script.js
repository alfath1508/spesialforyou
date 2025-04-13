
function sobekTiket() {
    const ticket = document.querySelector('.ticket');
    ticket.classList.add('torn');
    setTimeout(() => {
        ticket.innerHTML = "<p style='margin:auto;'>Yeayyyyy, Saya ingin mengajak kamu untuk kita nonton bareng, jadi kapan nih? (btw chat ku dibalas yaaa)</p>";
        ticket.classList.remove('torn');
    }, 700);
}
