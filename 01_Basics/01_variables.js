const accountId = 144553
let accountEmail = "sakshamgoogle.com"
var accountPassword = "12345"
accountCity = "kanpur"
let accountstate;

// accountId = 2 not allowed
accountEmail = "sakshakkgoggle.com"
accountPassword = "1212121"
accountCity = "jaipur"

console.log(accountId);
/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountstate])