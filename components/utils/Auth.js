import axios from "axios";
const SECRETE_API_KEY = "AIzaSyCFWgJwlh3mPtUy1r0_qhKra9yOHU-3u00";

async function authenticate(type, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${type}?key=${SECRETE_API_KEY}
  `;
  try {
    const response = await axios.post(url, {
      email: email,
      password: password,
      returnSecureToken: true,
    });
    return response;
  } catch (err) {
    throw err;
  }
}

export async function createUser(email, password) {
  await authenticate("signUp", email, password);
}

export async function loginUser(email, password) {
  await authenticate("signInWithPassword", email, password);
}
