const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    projectName: {
        type: String,
        required: true
    },
    companyId: {
        type: Schema.Types.ObjectId,
        ref: 'Company',
        required: true
    },
    employees: [{
        type: Schema.Types.ObjectId,
        ref: 'User'  // List of employees assigned to this project
    }],
    tasks: [{
        type: Schema.Types.ObjectId,
        ref: 'Task'  // List of tasks within this project
    }]
});

module.exports = mongoose.model('Project', ProjectSchema);
