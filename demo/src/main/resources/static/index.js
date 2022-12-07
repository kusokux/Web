const { createApp } = Vue

const first =createApp({
    data() {
        return {
            message: '欢迎来到电影推荐系统'
        }
    }
}).mount('#app')