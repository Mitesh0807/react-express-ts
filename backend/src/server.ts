import express from 'express';
import user from '@/model/user';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  user();
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log('Server running on port', port);
});
