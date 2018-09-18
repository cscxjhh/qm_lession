const chior=[];  //乐队

// 只有会嘎嘎叫的才要 chedk
// 代码 流程 组成乐队 办事流程
var duck={
    duckSing:function(){
        console.log('嘎嘎嘎');
    }
}

// js 动态类型的语言
var chicken={
    chickSing:function(){
        console.log('咯咯咯');
    },
    duckSing:function(){
        console.log('嘎嘎嘎');
    }
}

// 如果他走起路来像鸭子，叫起来也像鸭子，那么就是鸭子，duck typing js 弱类型


// 1000只要求  999只duck
for(var i=0;i<999;i++){
    if(typeof duck.duckSing==='function'){
        chior.push(duck);
        
    }
}
/**
 *功能：加入合唱团
 *params:animal  动物对象
 chior 加入新成员
 */
function joinChior(animal){
    if(animal&&typeof animal.duckSing=='function'){
        chior.push(animal);
        console.log(chior.length);
    }

}

// 函数式编程呢个，将变成目的分成一个或多个函数，取代逐行式编程，
// 将流程是开发，函数式，完成封装
for(var i=0;i<999;i++){
    joinChior(duck);
}

// 现学  js  类，对象，动态的
chicken.duckSing+function(){
    console.log('嘎嘎嘎');

}

joinChior(chicken);
console.log(chior.length);