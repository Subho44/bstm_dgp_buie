const Area = require('../models/Area');
const fs = require('fs');
const path = require('path');

//create area
exports.createArea = async(req,res)=>{
    const {name,city} = req.body;
    const image = req.file ? req.file.filename : null;
    const area = new  Area({name,city,image});
    await area.save();
    res.json(area);
};
//view
exports.getAreas = async(req,res) =>{
    const areas = await Area.find();
    res.json(areas);
}