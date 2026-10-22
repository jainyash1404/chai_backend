import 'dotenv/config'
import connectDB from './db/db.js'


connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000 , () => {
        console.log('server is running')
    })
})
.catch((err) => {
    console.log("mongodb connect failed")
})
