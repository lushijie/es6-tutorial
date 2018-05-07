/*
* @Author: lushijie
* @Date:   2018-05-04 11:40:05
* @Last Modified by:   lushijie
* @Last Modified time: 2018-05-04 13:12:26
*/
const bcrypt = require('bcrypt');
const saltRounds = 12;
const myPlaintextPassword = 'lushijie1218';
const someOtherPlaintextPassword = 'lushijie4913';


(async function() {
  let hash = await bcrypt.hash(myPlaintextPassword, saltRounds);
  console.log(hash);
  hash = '$2b$10$BSHpubK8uvSxefdSZmDneuOHKMMuvnSlNH/34M3CGj8/shSyFu7Zq';
  console.log(hash.length)
  const res = await bcrypt.compare('a', hash);
  console.log(res);
})();

// bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
//   // Store hash in your password DB.
//   console.log('hash2=', hash);
// });




// bcrypt.compare(myPlaintextPassword, hash, function(err, res) {
//   // res == true
// });
