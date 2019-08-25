const fs = require('fs');
//fs.writeFileSync('node.txt', 'testing file created by node js');
fs.appendFileSync('node2.txt', 'this is the text i would love to add22s\n', (err) => {
    if (err) throw err;
    console.log('append successfully');
});
 fs.unlink('node2.txt', (err)=>{
     if(err) console.log(err);
     console.log('deleted successfully');
 });

