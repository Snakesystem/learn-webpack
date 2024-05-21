const alertService = require('./app/aler.service')
const calculatorService = require('./app/calculator.service')
const jokesService = require('./app/jokes.service')
const run = require('./app/app')

run(alertService, calculatorService, jokesService);
