// CommonJS, every file is module (by default)
// Modules - ENcapsulated Code (only share minimum)
//function named sayHi

// Require function always starts with './'
const names = require('./namesForModules');
const say = require('./sayHiModule');
require('./mind-grenade');
say('Susan');
say(names.john)
say(names.peter)