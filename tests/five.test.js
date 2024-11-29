const { By, Builder, Browser } = require("selenium-webdriver");
const assert = require("assert");

// на другую страницу по url
(async function firstTest() {
  let driver;
  try {
    driver = await new Builder().forBrowser(Browser.FIREFOX).build();
    await driver.get("https://metanit.com");
    await driver.get("https://metanit.com/c/");
    console.log("pointer [ my_future* ] has been delete ERROR of memory");
  } catch (e) {
    console.log(e);
  } finally {
    await driver.quit();
  }
})();
