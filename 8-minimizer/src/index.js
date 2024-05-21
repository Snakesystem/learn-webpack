import css from './style.scss'
import _ from 'lodash'
require('./vendor.js')
import { run } from './app/app.js'
import { AlertService } from './app/aler.service.js';
import { CalculatorService } from './app/calculator.service.js';
import { JokesService } from './app/jokes.service.js';

const alertService = new AlertService();
const calculatorService = new CalculatorService();
const jokesService = new JokesService();

run(alertService, calculatorService, jokesService);

console.log(_.toUpper('aku dari index.js'))

// jika menggunakan bootstrap maka harus menginstall 'bootstrap' dan '@popperjs/core'