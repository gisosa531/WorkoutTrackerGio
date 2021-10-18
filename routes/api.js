const router = require('express').Router();
const Work = require('../models/Workout.js');

// Post route for creating a workout
router.post("/api/workouts", async ({ body }, res) => {
    try {
        const workoutInfo = await Work.create(body)
            // creates input body
            .then(workoutInfo => {
                res.json(workoutInfo);
            })
    } catch (err) {
        res.status(400).json(err);
    };
});

// Get route for displaying all of workout data
router.get("/api/workouts", async (req, res) => {
    try {
        const workInfo = Work.aggregate([
            {
                $addFields: {
                    totalDuration: { $sum: "$exercises.duration" },
                },
            },
        ])
            // added totalDuration field 
            .then(workInfo => {
                res.json(workInfo);
            })
    } catch (err) {
        res.status(400).json(err);
    };
});

// Put route to update workout with new exercise
router.put('/api/workouts/:id', async (req, res) => {
    try {
        const workUpdate = Work.findByIdAndUpdate(
            req.params.id,
            {
                $push: {
                    exercises: req.body
                }
            },
            { returnOriginal: false }
        )
            // pushes input body
            .then((workUpdate) => {
                res.json(workUpdate);
            })
    } catch (err) {
        res.status(400).json(err);
    };
});

// router.delete('/api/workouts', async ({ body }, res) => {
//     const _id = body.id;
//     try {
//         const workout = await Work.findByIdAndDelete(_id)
//             .then(() => {
//                 res.json(true);
//             })
//         if (!workout) return res.status(404);
//     } catch (err) {
//         res.status(400).json(err);
//     };
// });

// Get route for displaying data in exercise page with limitations
router.get('/api/workouts/range', async (req, res) => {
    try {
        const workRange = await Work.aggregate([
            {
                $addFields: {
                    totalDuration: { $sum: '$exercises.duration', },
                },
            },
        ])
            // descending sort
            .sort('-_id')
            // limits 7 workouts
            .limit(7)
            // includes added field of totalDuration to new data
            .then((workRange) => {
                console.log(workRange);
                res.json(workRange);
            })
    } catch (err) {
        res.status(400).json(err);
    };
});

module.exports = router;
