import Config from "./config.js"
export default class Button{
    constructor (ctx){
        this.ctx = ctx
        this.img = new Image()
        this.src = "../../flappybird/button_play.png"
        this.img.src = this.src
        this.canvas = Config.canvas
    }
    render(){
        this.ctx.drawImage(this.img ,(window.innerWidth /3 - 116)/2,200)
    }
 
} 