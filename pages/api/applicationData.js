import fs from 'fs';
export default async function  handler (req, res) {
    if(req.method=='POST')
    {   
        const {firstName,lastName,email,phone,selfNote}=req.body.data
        //now we save this data into Data or JSon File
        res.status(200).json({ data: req.body.data })
       
    }
  }