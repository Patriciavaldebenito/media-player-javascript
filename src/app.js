function MediaPLayer(config){
    this.media = config.el;
}

MediaPLayer.prototype.play= function(){
    this.media.play();
}

MediaPLayer.prototype.pause= function(){
    this.media.pause();
}

MediaPLayer.prototype.togglePlay= function(){
    if(this.media.paused){
        this.play();    
    }else{
        this.pause();
    }
}

const video = document.querySelector('video');
const player = new MediaPLayer({el:video});
const button = document.querySelector('button');

button.onclick = () => player.togglePlay();


