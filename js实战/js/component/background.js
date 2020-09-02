import Config from "./config.js"
export default class Background{
    constructor(ctx){
        this.ctx = ctx
        this.src = "../../flappybird/bg_day.png"
        this.img = new Image()
        this.img.src = this.src
        this.x = 0
    }
    render(){
        this.x -= 1
        if(this.x <- window.innerWidth /3){
            this.x = 0
        }
        this.ctx.clearRect(0, 0,window.innerWidth /3, window.innerHeight / 2)
        this.ctx.drawImage(this.img , this.x,0,window.innerWidth /3, window.innerHeight / 2) 
        this.ctx.drawImage(this.img , this.x+window.innerWidth / 3,0,window.innerWidth /3,window.innerHeight / 2) 
    }
}