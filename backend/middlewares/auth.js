import jwt from 'jsonwebtoken'

export const authUser = async (req, res, next) => {
    try {
        const { token } = req.headers;

        if(!token) {
            return res.json({success: false, message: 'Not Autherized Login Again'})
        }

        const token_decode = jwt.decode(token)
        req.body.clerkId = token_decode.clerkId

        next();
    } catch (err) {
        console.log(err.message);
        res.json({success: false, message: err.message})
    }
}