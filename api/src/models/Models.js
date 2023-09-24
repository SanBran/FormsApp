const mongoose = require('mongoose')

const formSchema = new mongoose.Schema({
    email: {type: String}, 
    form: {type: Object}, 
}
)
const Forms = mongoose.model('Forms', formSchema);

module.exports = Forms;
