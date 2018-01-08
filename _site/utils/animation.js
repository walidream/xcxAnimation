/**
 * Created by Administrator on 2017/12/25.
 */

//导出动画类
export class loadAnimation{
    constructor(self){
        this.self = self;
    }
    add(obj){
        this.self.setData(obj);
        return this;
    }
    clear(obj,ms){
        let delay = 1000;
        if(ms) delay = ms;
        setTimeout(()=>{
            this.self.setData(obj);
        },delay);
        return this;
    }
}































