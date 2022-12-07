const { createApp } = Vue

const first =createApp({
    data() {
        return {
            message: '欢迎来到电影推荐网站'
        }
    }
}).mount('#app')

const swiper =createApp({
    data(){
        return {
            currentIndex :0,//当前所在图片下标
            timer:null,//定时轮询
            imgArr:[
                {	id:0,
                    url:"01.png",
                },{
                    id:1,
                    url:"02.png",
                },{
                    id:2,
                    url:"03.png",
                },{
                    id:3,
                    url:"04.png",
                },
            ]
        }
    },
    methods:{
        //开启定时器
        startInterval(){
            // 事件里定时器应该先清除在设置，防止多次点击直接生成多个定时器
            clearInterval(this.timer);
            this.timer = setInterval(()=>{
                this.currentIndex++;
                if(this.currentIndex > this.imgArr.length-1){
                    this.currentIndex = 0
                }
            },3000)
        },
        // 点击左右箭头
        clickIcon(val){
            if(val==='down'){
                this.currentIndex++;
                if(this.currentIndex===this.imgArr.length){
                    this.currentIndex = 0;
                }
            }else{
                if(this.currentIndex === 0){
                    this.currentIndex = this.imgArr.length;
                }
                this.currentIndex--;
            }
        },
        // 点击控制圆点
        changeImg(index){
            this.currentIndex = index
        },
        //鼠标移入移出控制
        changeInterval(val){
            if(val){
                clearInterval(this.timer)
            }else{
                this.startInterval()
            }
        }
    },
    //进入页面后启动计时器
    mounted(){
        this.startInterval()
        console.log(this)
    }
}).mount('#swiper')