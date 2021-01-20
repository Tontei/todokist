import { defaults } from 'autoprefixer';

const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    key : String,
    items: []
})



module.exports = mongoose.models.User || mongoose.model('User', userSchema);
