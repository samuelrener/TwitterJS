 
const Post = require('../model/Post');

class PostController{
    async Insert(req,res){
        var usuario = req.body.Post;
        const Post = await Post.create(usuario);
        return res.json(Post); 
    }
    async Like(req, res){
        const Post = await Post.findOneAndUpdate({Texto: req.body.Texto},{Like = req.body.Like}).populate();
        
        return res.json(Post); 

    } 
    
}
module.exports = new PostController();