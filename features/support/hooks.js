const {
  BeforeAll, AfterAll,
  Before, After,
  BeforeStep, AfterStep,
  Status
} = require('@cucumber/cucumber')
const playwright = require('playwright')

// Set HEADLESS=false to run in headed mode: HEADLESS=false npm run test:cucumber
const headless = process.env.HEADLESS !== 'false'

Before(async function () {
  this.browser = await playwright.chromium.launch({ headless })
  this.context = await this.browser.newContext()
  this.page = await this.context.newPage()
  // console.log("Before");
})

After(async function () {
  // console.log("After");
  if (this.page) await this.page.close()
  if (this.context) await this.context.close()
  if (this.browser) await this.browser.close()
})

BeforeStep(function () {
  // console.log('BeforeStep')
})

AfterStep(async function ({result}) {
    if(result.status == Status.FAILED){
        await this.page.screenshot({path: 'screenshot1.png'});
    }
  // console.log('AfterStep')
})

BeforeAll(function () 
{ 
  // console.log('BeforeAll') 
})
AfterAll(function () { 
  // console.log('AfterAll')
 })