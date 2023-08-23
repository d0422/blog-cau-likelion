import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function token(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { token } = req.body;
    await axios.post('http://front.cau-likelion.org', { token });
  } else {
    const tokens = await axios.get('http://front.cau-likelion.org/fcmtoken');
    res.status(200).json(tokens.data);
  }
}
