import jwt from 'jsonwebtoken';

export const KEY = 'supersecret';

export function createJSONToken(payload) {
  return jwt.sign(payload, KEY, { expiresIn: '7 days' });
}

export function validateJSONToken(token) {
  return jwt.verify(token, KEY);
}
