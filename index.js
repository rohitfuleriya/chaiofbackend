const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000

const data = [
  {
    "id": 1,
    "setup": "Why did the JavaScript developer go broke?",
    "punchline": "Because he used up all his cache."
  },
  {
    "id": 2,
    "setup": "Why do programmers prefer dark mode?",
    "punchline": "Because light attracts bugs."
  },
  {
    "id": 3,
    "setup": "How do you comfort a JavaScript bug?",
    "punchline": "You console it."
  },
  {
    "id": 4,
    "setup": "Why was the JavaScript developer sad?",
    "punchline": "Because he didn't know how to 'null' his feelings."
  },
  {
    "id": 5,
    "setup": "What do you call a function that doesn't return a value?",
    "punchline": "A void function."
  },
  {
    "id": 6,
    "setup": "Why was the variable afraid of the array?",
    "punchline": "Because the array kept pushing its buttons."
  },
  {
    "id": 7,
    "setup": "Why did the developer go broke?",
    "punchline": "Because he spent all his money on 'Node' packages."
  },
  {
    "id": 8,
    "setup": "How does a JavaScript developer fix a bug?",
    "punchline": "They console it until it works."
  },
  {
    "id": 9,
    "setup": "Why did the loop feel stuck?",
    "punchline": "Because it couldn't break out!"
  },
  {
    "id": 10,
    "setup": "What did the HTML tag say to the JavaScript function?",
    "punchline": "'Stay 'scripted'."
  }
]



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send("<h1>Thit is About</h1>")
})

app.get('/api/jokes', (req, res) => {
  res.send(data);
});
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})