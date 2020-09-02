import Background from "../component/background.js"
export default class Ready{
    constructor(ctx){
        this.ctx = ctx
        this.bg = new Background(this.ctx)
        this.img = new Image()
        this.src = "../../flappybird/text_ready.png"
        this.img.src = this.src
    }
    render(){
        this.bg.render()
        this.ctx.drawImage(this.img ,(window.innerWidth /3 - 196)/2,100)
    }
}