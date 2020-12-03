const db = require('./models/app');

const Role = db.role // Model { Role }

exports.initial = () => {
    //estimatedDocumentCount - estimates the num of docs in the mongodb collection
  return  Role.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            //new Role Model constructor Provides the interface to MongoDB collections as well as creates document instances.
            new Role({
                name: "user"
            }).save(err => { //save - saves the new Role document
                if (err) console.error(err)
                console.log('added \'users\' to roles collection')
            });

            new Role({
                name: 'moderator'
            }).save(err => {
                if (err) console.error(err)
                console.log("added 'moderator' to roles collecton")
            });

            new Role({
                name: "admin"
              }).save(err => {
                if (err) {
                  console.log("error", err);
                }
        
                console.log("added 'admin' to roles collection");
              });
        
        }
    })
}



