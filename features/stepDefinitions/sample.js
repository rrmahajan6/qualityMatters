const { Given, When, Then, After } = require('@cucumber/cucumber');
const playwright = require('playwright')
const headless = process.env.HEADLESS !== 'false'

Given('user navigate to website',{timeout:5000}, async function () {
  await this.page.goto('https://www.lambdatest.com/selenium-playground/', { waitUntil: 'load', timeout: 30000 })
})

When('user can click on form submit', async function () {
  await this.page.getByRole('link', { name: 'Ajax Form Submit' }).click()
})

Then('verify user is on form submit page', async function () {
  await this.page.waitForLoadState('load')
  const currentUrl = this.page.url()
  if (!currentUrl.includes('ajax-form')) throw new Error(`Unexpected URL: ${currentUrl}`)
})

When('user enters {string} and {string}', function (name, surname) {
        console.log(name+" "+surname);
         });
        
When('user enters credentials {string} and {string}', function (username, password) {
  console.log(username + " " + password);
});