import Background from "../component/background.js"
import Logo from "../component/Logo.js"
import Config from "../component/config.js"
import Button from "../component/button.js"
export default class Start{
    constructor(ctx){
        this.ctx = ctx
        this.bg = new Background(this.ctx)
        this.logo = new Logo(this.ctx)
        this.canvas = Config.canvas
        this.buttton =new Button(this.ctx)
        this.register()
    }
    render(){
        this.bg.render()
        this.logo.render()
        this.buttton.render()
    }
    register(){
        this.canvas.addEventListener("click" ,(e) =>{
            if(e.offsetX > (window.innerWidth /3 - 116)/2 && e.offsetX < (window.innerWidth /3 - 116)/2 +116 && e.offsetY < 262 && e.offsetY > 200){
              Config.a = 1  
            }
        } )
    }
}