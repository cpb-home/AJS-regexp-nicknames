// TODO: write your code here
import Validator from './classes/Validator';

const login = [
    'n_A7m@e-a',
    'n_A7me-a',
    'n_A7Всe-a',
    '2n_A7me-a',
    'n_A7me-a5',
    '2n_A7me-a-',
    '_n_A7me-a',
    'n_A7me-a_',
    '-n_A7me-a',
    '2n_A7me-a@',
    'An_A7me-a@',
    'n_A7me-aJHJ ds',
    'n_A5647Fme-a',
    '@n_A7me-a#',
    '@n_A7me-a',
    'sdn_A7me-a#',
    'sdn_A745me-a',
    'sdn_A74me-a',
];

login.forEach(el => console.log(Validator.validateUsername(el)));
