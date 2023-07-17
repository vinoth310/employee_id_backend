const Router = require('express').Router();
const multer = require('multer');
const {get_profiles, post_profiles, upload_image, update_profile, delete_profile} = require('../controllers/profileData.js');



var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './public/images');
    },
    filename: (req, file, cb) => {
      console.log(file);
      var filetype = '';
      if(file.mimetype === 'image/gif') {
        filetype = 'gif';
      }
      if(file.mimetype === 'image/png') {
        filetype = 'png';
      }
      if(file.mimetype === 'image/jpeg') {
        filetype = 'jpg';
      }
      cb(null, 'image-' + Date.now() + '.' + filetype);
    }
});


var upload = multer({ storage: storage })

Router.get('/get',get_profiles);

Router.post('/postdata',post_profiles);

Router.put('/update/:id',update_profile);

Router.delete('/delete/:id',delete_profile);

Router.post('/uploadfile', upload.single('file'),upload_image);

module.exports = Router;