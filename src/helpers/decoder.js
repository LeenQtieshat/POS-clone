import jwt_decode from "jwt-decode";

const decodeAccessToken = (token) => {
  try {
    const decoded = jwt_decode(token);
    return decoded;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export default decodeAccessToken;
