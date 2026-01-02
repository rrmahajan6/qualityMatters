const{test,page} = require('@playwright/test');
const employee = JSON.parse(JSON.stringify(require("../tests/testData/employee.json")));

for(const data of employee){
    test(`test case name ${data.name}`,async ({page})=>{
    console.log(data.name);
});
}
