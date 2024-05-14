const mongoose = require('mongoose');
const { required } = require('nodemon/lib/config');

const userScheme = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Enter user name']
        },
        email: {
            type: String,
            required: [true, 'Enter email']
        },
        password:{
            type: String,
            required: [true, 'Enter password']
        },
        isAdmin: {
            type: Boolean,
            required: true
        }
    },
    {
        timestamps: true
    }
)

const User = mongoose.model('Product', userScheme);

module.exports = User;