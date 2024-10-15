const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,  // Either "company" or "employee"
        required: true
    },
    companyId: {
        type: Schema.Types.ObjectId,
        ref: 'Company',  // If the user is an employee, reference the company they work for
        default: null
    }
});

module.exports = mongoose.model('User', UserSchema);
