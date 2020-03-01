const Box = require('../model/Box');

class BoxController{
    
    async insert(req, res){
        const box = await Box.create({ title:  req.body.title }); 
        return res.json(box);
    }

    async showSingle(req, res){
        const box = await Box.findById(req.params.id).populate({
            path: 'files',
            options: {sort: { createdAt: -1 }}
        });

        return res.json(box);
    }
}

module.exports = new BoxController();