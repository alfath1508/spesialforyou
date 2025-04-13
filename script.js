
function sobekTiket() {
    const ticket = document.querySelector('.ticket');
    ticket.classList.add('torn');
    setTimeout(() => {
        ticket.innerHTML = "<p style='margin:auto;'>Yeay, ditunggu jawaban kamu ya!</p>";
        ticket.classList.remove('torn');
    }, 700);
}
