const contact = require('../models')

exports.createContactForm = async(req, res) => {
    try {
        let payload = {
            name: req.body.name,
            email: req.body.email,
            message: req.body.message,      
        }
        const newContact = await contact.create(payload)
        res.status(201).json({
           payload: newContact
        })
    } catch (error){
        res.status(500).json({
            error: error
        })
    }
} 

exports.getContactForm = async(req, res) => {
    try {
        
        const newContact = await contact.find({})
        res.status(201).json({
           formData: newContact
        })
    } catch (error){
        res.status(500).json({
            error: error
        })
    }
} 