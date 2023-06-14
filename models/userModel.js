//El modelo viene siendo el hecho de cómo se va a recibir la información que se quiere trabajar.
// despues de admin, está la contraseña, en la URI 
const mongoose = require("mongoose")

const uri = "mongodb+srv://admin:QKLdA2qZ9BgMzwIz@dbuser.scynizi.mongodb.net/UserDb?retryWrites=true&w=majority&ssl=true";

mongoose.connect(uri, {useNewUrlParser:true, useUnifiedTopology:true})

const userSchema = new mongoose.Schema ({
    username: {type: String, required:true},
    email: {type: String, required:true},
    password: {type: String, required:true}
})

module.exports = mongoose.model('Users', userSchema);


