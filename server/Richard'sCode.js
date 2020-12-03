// imports
const express = require('express')
const { MongoClient, ObjectId } = require('mongodb')

// initialise express app
const app = express()

// interact with json data
app.use(express.json())

const uri = "mongodb://localhost:27017"
const client = new MongoClient(uri);

const connect = async () => {
  try {
    await client.connect();
    console.log("Connected to Local Database");
  } catch (err) {
    console.log("an error occurred :(")
    console.error(err);
  }
}

connect()


app.get('/films', async (req, res) => {

  const allFilms = await client.db('movie').collection('films').find({}).toArray()

  res.json({
    message: 'Here are all your films!',
    films: allFilms
  })
})

app.post('/films', async (req, res) => {

  const createdFilm = await client.db('movie').collection('films').insertOne(req.body)

  res.json({
    message: 'Created a new film!',
    data: createdFilm
  })
})

app.get('/films/:id', async (req, res) => {

  const matchingFilm = await client.db('movie').collection('films').findOne({ _id: new ObjectId(req.params.id) })

  res.json({
    message: 'Here is that film',
    data: matchingFilm
  })
})

app.delete('/films/:id', async (req, res) => {

  await client.db('movie').collection('films').deleteOne({ _id: new ObjectId(req.params.id) })

  res.json({
    message: 'Deleted a film'
  })
})

app.patch('/films/:id', async (req, res) => {

  console.log(req.body)

  const updatedFilm = await client.db('movie').collection('films').updateOne({ _id: new ObjectId(req.params.id) }, { $set: req.body })

  const matchingFilm = await client.db('movie').collection('films').findOne({ _id: new ObjectId(req.params.id) }) 

  res.json({
    message: 'Updated a film',
    data: matchingFilm
  })
})




app.listen(4000, () => {
  console.log('Server is running')
})
