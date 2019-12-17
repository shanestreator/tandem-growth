const router = require('express').Router()
const uuidv4 = require('uuid/v4');

const Data = require('../../../../models/Data')

// @route   GET api/data/plants/:id
// @desc    Gets data of one plant
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const plantData = await Data.find({ plantId: req.params.id })

    res.json(plantData)
  } catch (error) {
    console.log(error)
  }
})

// @route   GET api/data/plants
// @desc    Gets all plant data
// @access  Public
router.get('/', async (req, res) => {
  try {
    const plantData = await Data.find({})
    res.json(plantData)
  } catch (error) {
    console.log(error)
  }
})

// // @route   POST api/data/plants
// // @desc    Adds a plant
// // @access  Public
// router.post('/', async (req, res) => {
//   try {
//     const { name, days_water_after } = req.body
//     const newPlantAdded = await new Data({
//       plantId: uuidv4(),
//       name,
//       days_water_after
//     }).save()

//     res.json({
//       msg: 'Thank you, your plant has been added!',
//       info: newPlantAdded
//     })
//   }
//   catch (error) {
//     console.log(error)
//   }
// })

// // @route   POST api/data/plants/many
// // @desc    Adds many plants (array of objects)
// // @access  Public
// router.post('/many', (req, res) => {
//   try {
//     Promise.all(req.body.map(async ({ name, days_water_after }) => {
//       const plantData = await new Data({
//         plantId: uuidv4(),
//         name,
//         days_water_after
//       }).save()

//       return plantData
//     }))
//     .then((data) => {
//       res.json({
//         msg: 'Thank you, your plants have been added!',
//         info: data
//       })
//     })
//   }
//   catch (error) {
//     console.log(error)
//   }
// })

// // @route   PUT api/data/plants/:id
// // @desc    Updates a specified plant
// // @access  Public
// router.put('/:id', async (req, res) => {
//   try {
//     const match = await Data.findOne({ plantId: req.params.id })
//     if (!match) {
//       res.status(400).json({ msg: 'No plant found.' })
//     }

//     const { plantId, name, days_water_after } = match
//     const { newName, newDaysWaterAfter } = req.body

//     const condition = { plantId }
//     const plantUpdate = {
//       name: newName ? newName : name,
//       days_water_after: newDaysWaterAfter ? newDaysWaterAfter : days_water_after
//     }

//     const updatedPlant = await Data.findOneAndUpdate(
//       condition,
//       plantUpdate,
//       {new:true}
//     )

//     res.json({
//       msg: 'Thank you, your plant has been updated!',
//       info: updatedPlant
//     })
//   }
//   catch (error) {
//     console.log(error)
//   }
// })

// // @route   DELETE api/data/plants/:id
// // @desc    Deletes one plant
// // @access  Public
// router.delete('/:id', async (req, res) => {
//   try {
//     const { plantId } = req.body
//     const match = await Data.findOne({ plantId })

//     if (!match) {
//       res.status(400).json({ msg: 'No plant found.' })
//     }

//     const deletedPlant = await Data.deleteOne({plantId})

//     res.json({ msg: 'Plant was removed.', info: match })
//   }
//   catch (error) {
//     console.log(error)
//   }
// })

module.exports = router;