const express = require('express');

const router = express.Router();

let voitures = [
    { id: 1, name: "clio" },
    { id: 2, name: "megane" },
    { id: 3, name: "range" }
];

// API to add a car to the voitures 

router.post('/', (req, res) => {
    const { id, name } = req.body;
    voitures.push({ id, name });
    res.status(201).send('Car added successfully');
});

// list all cars
router.get('/all', (req, res) => {
    res.json(voitures);
});

// API to get a car by id
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const voiture = voitures.find(v => v.id === id);
    if (voiture) {
        res.json(voiture);
    } else {
        res.status(404).send('Car not found');
    }
});

// API to modify a car by  id
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { name } = req.body;
    const voitureIndex = voitures.findIndex(v => v.id === id);
    if (voitureIndex !== -1) {
        voitures[voitureIndex].name = name;
        res.send('Car modified successfully');
    } else {
        res.status(404).send('Car not found');
    }
});

// API to delete a car by its id
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const voitureIndex = voitures.findIndex(v => v.id === id);
    if (voitureIndex !== -1) {
        voitures.splice(voitureIndex, 1);
        res.send('Car deleted successfully');
    } else {
        res.status(404).send('Car not found');
    }
});

module.exports = router;
