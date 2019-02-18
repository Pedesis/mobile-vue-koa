// const Koa = require('koa')
// const app = new Koa()
// app.use(async(ctx)=>{
//     ctx.body = '<h1>hello Koa2</h1>'
// })
// app.listen(3000,()=>{
//     console.log('[Server] starting at port 3000')
// })
const Koa = require('koa')
const app = new Koa()
//与前端交互
const bodyParser = require('koa-bodyparser')
app.use(bodyParser())
//跨域
const cors = require('koa2-cors')
app.use(cors({
        origin:"*",
        credentials:true
    }
))
//路由
const Router = require('koa-router')
let user = require('./appApi/user.js')
let router = new Router();
router.use('/user',user.routes())
app.use(router.routes())
app.use(router.allowedMethods())
//
let goods = require('./appApi/goods.js')
router.use('/goods',goods.routes())
//
const mongoose = require('mongoose')
const {connect , initSchemas} = require('./database/init.js')
//立即执行函数
/*;(async () =>{
    await connect()
    initSchemas()
    const User = mongoose.model('User')
    let oneUser = new User({userName:'pess',password:'1234'})
    oneUser.save().then(()=>{
        console.log('插入成功')
    })
let  users = await  User.findOne({}).exec()
console.log('------------------')
console.log(users)
console.log('------------------')  
})()*/
;(async ()=>{
    await connect()
    initSchemas()
})()
// app.use(async(ctx)=>{
//     ctx.body = '<h1>hello Koa2</h1>'
// })
app.listen(3000,()=>{
    console.log('[Server] starting at port 3000')
})