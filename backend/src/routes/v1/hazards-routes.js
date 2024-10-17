const express = require('express');
const router = express.Router();

const hazardsData = {
  fire: {
    precautions: ['Use fire extinguisher', 'Evacuate the area'],
    guidelines: ['Stay low', 'Call emergency services'],
    safetyMeasures: ['Install smoke detectors', 'Have fire drills'],
  },
  chemical: {
    precautions: ['Wear protective gear', 'Avoid direct contact'],
    guidelines: ['Read safety data sheet', 'Ventilate the area'],
    safetyMeasures: ['Use fume hoods', 'Store chemicals properly'],
  },
};

router.post('/general', (req, res) => {
  const hazardType = req.body.hazardType.toLowerCase();

  if (hazardsData[hazardType]) {
    res.json({
      precautions: hazardsData[hazardType].precautions,
      guidelines: hazardsData[hazardType].guidelines,
      safetyMeasures: hazardsData[hazardType].safetyMeasures,
    });
  } else {
    res.status(404).json({ error: 'Hazard type not found' });
  }
});

module.exports = router;
