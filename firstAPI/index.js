const express = require('express');
const app = express()


app.get('/:name', (req,res) => {
  res.send('jello' + req.params.name)
})

app.listen(3000)