//游戏场景的切换
import Ready from "./scene/Ready.js" 
import Start from "./scene/start.js" 
import Config from "./component/config.js" 
export default class Scene{
    constructor(ctx){
        this.ctx = ctx
        // this.status = Config.a
        this.start  = new Start( this.ctx)
        this.ready  = new Ready( this.ctx)
        this.scenelist = [this.start , this.ready]     
    }
    render(){
        this.status = Config.a
        this.scenelist[this.status].render()
    }
}