const express = require('express')
const router = new express.Router()
const fs = require('fs')
const objectModel = require('../models/model')

router.post('/main', async (req, res) => {
    try {
        fs.writeFileSync('objects.txt', JSON.stringify(req.body))


        res.send({ message: "success" })
    }
    catch (e) {
        res.status(500).send(e)
    }
})

router.get('/main', async (req, res) => {

    let file = JSON.parse(fs.readFileSync('objects.txt'))
    // let q = 10
    // for (let [key, value] of Object.entries(file)) {
    //     for (let [ckey, cvalue] of Object.entries(key)) {
    //         q++
    //         ckey = eval(cvalue)
    //         console.log(ckey)
    //     }
    // }
    console.log(file)
    res.send(file)
    try {
        
    } catch (e) {
        res.status(500).send(e)
    }
})

router.post('/create', async (req, res) => {
    try {
        const user = new objectModel(req.body)

        await user.save()
        res.send({ message: "Your data created" })
    } catch (e) {
        res.send({ message: "Your data dont created" })
    }
})



module.exports = router