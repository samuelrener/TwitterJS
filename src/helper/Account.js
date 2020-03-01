const nodemailer = require('nodemailer');
class Account{
    GenerateRandomId(){
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < 5; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    SendEmail(email, key){
        var transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465, 
            auth:{
                user: 'crioteksvg@gmail.com',
                pass: 'samuel28'
            }
        });

        var mailOptions = {
            from: 'crioteksvg@gmail.com',
            to: email,
            subject: '[CONDOR] Confirmação de Cadastro',
            text: 'O código de confirmação do seu email é: ['+key+']'
        };

        transporter.sendMail(mailOptions, function(error, info){
            if(error){
                console.log(error);
               return false;
            }else return true;
        });
    }
}
module.exports = new Account();