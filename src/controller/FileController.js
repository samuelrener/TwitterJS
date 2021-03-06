const File = require('../model/File');
const Box = require('../model/Box');
class FileController{
    
    async Insert(req, res){
       const box = await Box.findById(req.params.id);

       const file = await File.create({
            title:  req.file.originalname,
            path: req.file.key,
       });
        
       box.files.push(file);

       await box.save();

       req.io.sockets.in(box._id).emit('file', file);
       return res.json(file);
    }
}

module.exports = new FileController();