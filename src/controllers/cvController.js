const cvService = require('../services/cvServices');

exports.getCv = (req, res) => {
    try {
        const cv = cvService.fetchCv();
        res.json(cv);
    } catch (error) {
        console.error("Oh no, algo falló 🙄:", error);
        res.status(500).json({ message: 'Error al obtener el CV' });
    }
};
