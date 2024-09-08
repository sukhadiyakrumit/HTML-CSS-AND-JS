console.log("Hello World");

const accountID = 365601
let accountEmail = "krumit@gmail.com"
var accountPassword = "12345"
accountCity = "gujarat"
let accountState;

// accountID = 365610 //not allowed
accountEmail = "kobi@kobi.com"
accountPassword = "232323"
accountCity = "kutch"

console.log(accountID);
/* 
    Prefere not to use var
    because of issue in block scope and functional scope
*/

console.table([ accountID, accountEmail, accountPassword, accountCity, accountState])