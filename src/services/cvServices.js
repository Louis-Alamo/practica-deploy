const fs = require('fs');
const path = require('path');

exports.fetchCv = () => {
    try {
        const cvPath = path.join(__dirname, '../data/cv.json');
        const cvData = fs.readFileSync(cvPath, 'utf-8');
        return JSON.parse(cvData);
    } catch (error) {
        throw new Error('Error al leer el archivo CV. 😒');
    }
};
