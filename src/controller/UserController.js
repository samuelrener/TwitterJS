const Account = require('../helper/Account');
const User = require('../model/User');

class UserController{
    async Insert(req,res){
        var usuario = req.body.user;
        usuario.Ativo = 'a';
        usuario.ConfirmationKey = Account.GenerateRandomId();
        Account.SendEmail(usuario.Email, usuario.ConfirmationKey);
        const user = await User.create(usuario);
        return res.json(user); 
    }
    async Login(req, res){
        const user = await User.find({Login: req.body.Login, Pass: req.body.Pass}).populate();
        if(user.Ativo != 's'){
        return res.json(user);
        }
        else {return res.json(null);};

    }
    async ConfirmSignIn(req, res){
        const user = await User.findOneAndUpdate({ConfirmationKey: req.params.key},{Ativo: 's', ConfirmationKey: ''});
        return res.json(user);
    }
    
}
module.exports = new UserController();