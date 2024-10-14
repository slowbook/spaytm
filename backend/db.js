const mongoose = require('mongoose') ;
const dotenv = require('dotenv');
dotenv.config();
mongoose.connect(process.env.DATABASE_URI);

const usersc= new mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String
})

const User=mongoose.model('User',usersc)
const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, // Reference to User model
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
});

const Account = mongoose.model('Account', accountSchema);

module.exports={
    User,Account
}






