
/**
 * Created by Shashank on 3/4/2015.
 */
// app/models/nerd.js
// grab the mongoose module
// define our nerd model
// module.exports allows us to pass this to other files when it is called
//module.exports = mongoose.model('Nerd', {
//    name : {type : String, default: ''}
//});
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var nerdSchema = new Schema({
    name: String,
    title:  String,
    body:   String,
    date: { type: Date, default: Date.now },
    meta: {
        votes: Number,
        favs:  Number
    }
});

module.exports = mongoose.model('Nerd', nerdSchema)

