/**
 * Created by kozmobot on 5.05.2016.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    username: String,
    password: String
});

mongoose.model('User', UserSchema);