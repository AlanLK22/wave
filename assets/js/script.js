const music = () => {
    const audio = new Audio('../music/resonance.mp3');
    document.querySelector('body').addEventListener('click', () => {
        audio.play();
    })
}


music();