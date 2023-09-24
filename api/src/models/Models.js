const mongoose = require('mongoose')

const formSchema = new mongoose.Schema({
    email: {type: String}, 
    items: {type: Object}, 
}
)
const Forms = mongoose.model('Forms', formSchema);

module.exports = Forms;
