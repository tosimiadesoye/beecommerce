//a node middleware that is primarily used for uploading files
const multer = require('multer');
//the full path to the upload file
const path = require('path');
 
//where to store the files
//diskStorage a type of multer for determining the destination directory
const storage = multer.diskStorage({
    //   destination is the folder in which the image is to be stored
        destination: (req, file, callback) => {
            callback(null, path.join('./public/upload/'))
        },
        //filename is the name of the file within the destination
    filename: (req, file, callback) => {
            callback(null, Date.now() + file.originalname)
        }
})
//functions to control which files are accepted
const fileFilter = (req, file, callback) => {
    if (!file.originalname.match(/\.(png|jpg|jpeg)$/)) {
       req.fileValidationError = 'please upload a valid image'
       return callback(null, false)
    }
    callback(null, true);
   
}
    
exports.upload = multer({
    storage: storage,// a storage engine responsible for processing file upload via multer
    limits: {// an object responsible for specifying incoming limits on incoming data 
        fileSize: 1 * 1024 * 1024 // maximum size of each file in bytes 1mb
    },
    fileFilter: fileFilter //to control which files are uploaded
})





