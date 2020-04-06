const functions = require('firebase-functions');

const app = require('express')();

const FBAuth = require('./util/FBAuth');

const { getAllScreams , postOneScream } = require('./handles/screams');

const { signup, login } = require('./handles/users');
//, uploadImage

// Scream routes
app.get('/screams' , getAllScreams );
app.post('/scream' , FBAuth, postOneScream);

////Users routes
app.post('/signup' , signup);
app.post('/login', login);
//app.post('/user/image', FBAuth ,uploadImage);
 
exports.api = functions.https.onRequest(app);