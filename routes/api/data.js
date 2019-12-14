const router = require('express').Router()
const uuidv4 = require('uuid/v4');

const Data = require('../../models/Data')

// @route   GET api/data/water-schedule
// @desc    Gets all plant data
// @access  Public
router.get('/water-schedule', async (req, res) => {
  try {
    const plantData = await Data.find({})
    res.json(plantData)
  } catch (error) {
    console.log(error)
  }
})

// @route   POST api/data/add-plant
// @desc    Adds a specified plant
// @access  Public
router.post('/add-plant', async (req, res) => {
  try {
    const { name, days_water_after } = req.body
    const newPlantAdded = await new Data({
      plantId: uuidv4(),
      name,
      days_water_after
    }).save()

    res.json({
      msg: 'Thank you, your plant has been added!',
      info: newPlantAdded
    })
  }
  catch (error) {
    console.log(error)
  }
})

// @route   POST api/data/add-multiple-plants
// @desc    Adds multiple plants
// @access  Public
router.post('/add-multiple-plants', (req, res) => {
  try {
    Promise.all(req.body.map(async ({ name, days_water_after }) => {
      const plantData = await new Data({
        plantId: uuidv4(),
        name,
        days_water_after
      }).save()

      return plantData
    }))
    .then((data) => {
      res.json({
        msg: 'Thank you, your plants have been added!',
        info: data
      })
    })
  }
  catch (error) {
    console.log(error)
  }
})

// @route   PUT api/data/update-plant
// @desc    Updates a specified plant
// @access  Public
router.put('/update-plant', async (req, res) => {
  try {
    const match = await Data.findOne({ plantId: req.body.plantId })
    if (!match) {
      res.sendStatus(400).json({ msg: 'No plant found.' })
    }

    const { plantId, name, days_water_after } = match
    const { newName, newDaysWaterAfter } = req.body

    const condition = { plantId }
    const plantUpdate = {
      name: newName ? newName : name,
      days_water_after: newDaysWaterAfter ? newDaysWaterAfter : days_water_after
    }

    const updatedPlant = await Data.findOneAndUpdate(
      condition,
      plantUpdate,
      {new:true}
    )

    res.json({
      msg: 'Thank you, your plant has been updated!',
      info: updatedPlant
    })
  }
  catch (error) {
    console.log(error)
  }
})

// @route   DELETE api/data/delete-plant
// @desc    Deletes a specified plant
// @access  Public
router.delete('/delete-plant', async (req, res) => {
  try {
    const { plantId } = req.body
    const match = await Data.findOne({ plantId })

    if (!match) {
      res.sendStatus(400).json({ msg: 'No plant found.' })
    }

    const deletedPlant = await Data.deleteOne({plantId})

    res.json({ msg: 'Plant was removed.', info: match })
  }
  catch (error) {
    console.log(error)
  }
})

module.exports = router;