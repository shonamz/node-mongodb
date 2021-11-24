// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;
 
// var favoriteSchema = new Schema({
    
//     user: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User'
//     },
         
//     dishes:[
//         {
//         type:mongoose.Schema.Types.ObjectId,
//         ref: 'Dish'
//  }]
// },{
//     timestamps: true 
//  });

 
//  var Favorites = mongoose.model('Favorite', favoriteSchema);

// module.exports = Favorites;

 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FavoriteSchema = new Schema({
    user: {
        //Stores reference to the id of the user document
        //Reference the user object with user's object id
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', //Reference to the User Schema
        unique: true
    },
    dishes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Dish',
        unique: true
    }]
},{
    timestamps: true
});

var Favorites = mongoose.model('Favorite', FavoriteSchema);
module.exports = Favorites;