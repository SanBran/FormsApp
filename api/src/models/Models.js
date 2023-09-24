const mongoose = require('mongoose')

const formSchema = new mongoose.Schema({
    email: {type: String}, 
    items: {type: Object}, 
}
)
const Forms = mongoose.model('Forms', formSchema);

const filledFormSchema = new mongoose.Schema({
    form: {type: Array}, 
}
)
const FilledForms = mongoose.model('FilledForms', filledFormSchema);

module.exports = {Forms, FilledForms};
