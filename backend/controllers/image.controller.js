import axios from 'axios';
import fs from 'fs';
import User from '../models/user.model.js';
import FormData from 'form-data';

export const removeBgImage = async (req, res) => {
    try {

        console.log("reacheed inside the remove bg miage in backend ")
        const { clerkId } = req.body;
        const user = await User.findOne({ clerkId });

        if (!user) {
            return res.json({ success: false, message: 'User Not Found' });
        }

        if (user.creditBalance === 0) {
            return res.json({ success: false, message: 'No Credit Balance', creditBalance: user.creditBalance });
        }

        const imagePath = req.file.path;
        const imageFile = fs.createReadStream(imagePath);

        // Prepare FormData
        const formData = new FormData();
        formData.append('image_file', imageFile);

        // Call Photoroom API
        const { data } = await axios.post('https://sdk.photoroom.com/v1/segment', formData, {
            headers: {
                'x-api-key': process.env.IMAGE_BACKGROUND_REMOVE_API, 
                ...formData.getHeaders(), 
            },
            responseType: 'arraybuffer',
        });

        const base64Image = Buffer.from(data, 'binary').toString('base64');
        const resultImage = `data:${req.file.mimetype};base64,${base64Image}`;

        await User.findByIdAndUpdate(user._id, { creditBalance: user.creditBalance - 1 });

        res.json({ success: true, resultImage, creditBalance: user.creditBalance - 1, message: 'Background Removed' });

    } catch (err) {
        console.log(err.message);
        res.json({ success: false, message: err.message });
    }
};
