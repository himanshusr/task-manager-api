const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT


//Middleware function to make authentication logic (Please use it above the all app.use() code)
//call next to progress the middleware function to the rest of the code
// app.use((req, res,next)=>{
//     res.status(503).send('Site is in Maintenance mode!')
// })





app.use(express.json())
app.use(userRouter)
app.use(taskRouter)





app.listen(port, () => {
    console.log('Server is up and running on port', port)
})



// const Task = require('./models/task')
// const User = require('./models/user')
// const main = async () => {
//     // const task = await Task.findById('61ead14319c18a87ac7343f3')
//     // await task.populate('owner')
//     // console.log(task)
   
//     // console.log('Yay')

//     const user = await User.findById('61ead8aaea8753d2ec3d8c1a')
//     await user.populate('tasks')
//     console.log(user.tasks)
// }

// main()


//password --> hashed password (not vice versa)
//hashed password !--> password
