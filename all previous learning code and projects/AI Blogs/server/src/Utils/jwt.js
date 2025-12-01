import jwt from 'jsonwebtoken'

const generateAccessToken = async (id) => {
     const token = jwt.sign({ id }, process.env.JWT_SECRET_KEY, { expiresIn: '1d' })
     return token;
}

export {
     generateAccessToken
}