import Scene from "./Scene.js"
export default class Game{
    constructor(canvas){
        this.canvas = canvas
        this.ctx = this.canvas.getContext("2d")
    }
    restart(){
        this.scene = new Scene( this.ctx)
        this.render()
    }
    render(){
        this.canvas.width = window.innerWidth / 3
        this.canvas.height = window.innerHeight / 2
        requestAnimationFrame(() => this.render())
        this.scene.render()
    }
}