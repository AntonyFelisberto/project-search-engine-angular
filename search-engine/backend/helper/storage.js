const multer = require('multer')

const diskStorage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'pics')
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        cb(null, Date.now() + ext);
    }
})

const fileFilter = (req,file,cb) => {
    const allowedMimeTypes = ['image/png','image/jpeg','image/jpg']
    allowedMimeTypes.includes(file.mimetype) ? cb(null, true) : cb(null, false)
}

const upload = multer({ storage: diskStorage, fileFilter: fileFilter }).single('image');
module.exports = upload;