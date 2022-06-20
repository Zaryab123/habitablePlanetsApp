const { parse } = require('csv-parse');
const fs = require('fs');

let habitualPlanets = [];

const isHabitualPlanet = (planet) => {
    return planet["koi_disposition"] == 'CONFIRMED'
    && planet["koi_insol"] > 0.36 && planet["koi_insol"] < 1.11
    && planet["koi_prad"] < 1.6;
}

//Reading file stream using file system stream functionality.
fs.createReadStream('kepler_data.csv')
.pipe(parse({
    comment: '#',
    columns: true
}))
.on('data', (data) => {

    if(isHabitualPlanet(data)){
        habitualPlanets.push(data);
    }

})
.on('error', (err) => {
    console.log(err);
})
.on('end', () => {

    console.log(habitualPlanets.map(planet => {
        return planet["kepler_name"];
    }));
    
    console.log(`${habitualPlanets.length} habitual planets have been found...`);
});