
require('dotenv').config()
const express = require('express')
const router = require('./src/app/routes/index')
const db = require('./src/db/index.ts')
const messages = require('./src/db/schema.ts')
const PORT = process.env.PORT || 5000
const cors = require('cors')
const app = express()
app.use(express.json());
app.use('/api', router)
app.use(cors())
app.get("/api/", async function(req, res){
    const data = await db.db
        .select()
        .from(messages.messages)
    res.send(data);
});

app.post("/api/", async function (req, res) {
    const out = await db.db.insert(messages.messages).values({
        message:req.body['value'],
    })
    res.send(out);
});


const start = async () => {
    try {
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}


start()
