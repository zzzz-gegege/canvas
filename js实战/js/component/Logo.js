export default class Logo{
    constructor (ctx){
        this.ctx = ctx
        this.img = new Image()
        this.src = "../../flappybird/title.png"
        this.img.src = this.src
    }
    render(){
        this.ctx.drawImage(this.img ,(window.innerWidth /3 - 178)/2,100) 
    }
}
