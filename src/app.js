let videoOne = document.querySelector('video');
let buttonOne = document.querySelector('button');

class mediaPlayer {
    
    constructor(config) {
        this.media = config.el;
    }
    play() {
        this.media.play();
        // recurso : 
    }
}


            // instancia
const player = new mediaPlayer({el:videoOne});

// evento click
buttonOne.onclick = () => {
    player.play();
}