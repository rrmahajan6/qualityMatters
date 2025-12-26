const { test: base, expect } = require('@playwright/test');
const userdata = require('../testData/userdata.json');
const creditcardInfo = require('../testData/crditcardInfo.json');

exports.test = base.extend({
  userData: async ({}, use) => {
    await use(userdata);
  },
  creditcardInfo: async ({}, use) => {
    await use(creditcardInfo);
  },
});
exports.expect = expect;
