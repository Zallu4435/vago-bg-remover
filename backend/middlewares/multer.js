import multer from 'multer';
import path from 'path';


const storage = multer.memoryStorage(); // Store file in memory
export const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        const filetypes = /jpeg|jpg|png/; // Allow only images
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = filetypes.test(file.mimetype);

        if (extname && mimetype) {
            return cb(null, true);
        } else {
            cb(new Error('Only image files are allowed'), false);
        }
    }
}).single('image'); // 'image' is the field name used for the uploaded file in the form
