// const game= new Pharser.Game();
// Phaser 命名空间 JSON object
const Pharser={};
Pharser.Game=function(w,h,type,ele,options){
    // 函数被new运行，这是一个构造函数
    console.log('构造函数');
    this.width=w;
    this.height=h;

}
let zombiegame= new Phaser.Game(800,600);
console.log(zombiegame.width,zombiegame.height);