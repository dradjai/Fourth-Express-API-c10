import express from 'express';

const PORT = 3000;

const app = express();


app.get('/', (req, res) => {
  res.send("Welcome to David's Website");
})

app.get('/about', (req, res) => {
  res.send("This is my about page");
})


app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
})