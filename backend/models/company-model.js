const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CompanySchema = new Schema({
    companyName: {
        type: String,
        required: true
    },
    adminUserId: {
        type: Schema.Types.ObjectId,
        ref: 'User',  // The admin user of the company
        required: true
    },
    employees: [{
        type: Schema.Types.ObjectId,
        ref: 'User'  // List of employees working in this company
    }],
    projects: [{
        type: Schema.Types.ObjectId,
        ref: 'Project'  // List of projects created by this company
    }]
});

module.exports = mongoose.model('Company', CompanySchema);
