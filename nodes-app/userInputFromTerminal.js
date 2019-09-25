const chalk = require('chalk');
const yargs = require('yargs');
const command = process.argv[2];


//change version
yargs.version('1.1.1');

// create add command

yargs.command({
    command: 'add',
    describe: 'Add a note',
    builder: {
            title:{
                describe: 'Note Title',
                demandOption: true,
                type: 'string'
            },
            body: {
                describe: 'Note Body',
                demandOption: true,
                type: 'string'
            } 
        },
    handler: function(argv){
       
    }
});



yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('removing a note');
    }
});


yargs.command({
    command: 'list',
    describe: 'List Your note',
    handler: function () {
        console.log('listing a note');
    }
});

yargs.command({
    command: 'read',
    describe: 'Read Your note',
    handler: function () {
        console.log('Reading a note');
    }
});

yargs.parse();
//console.log(yargs. );
