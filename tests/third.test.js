const { By, Builder, Browser } = require("selenium-webdriver");
const assert = require("assert");
(async function firstTest() {
  let driver;
  try {
    driver = await new Builder().forBrowser(Browser.FIREFOX).build();
    await driver.get("https://metanit.com");
    let rightSite = await driver.findElement(By.className("centerRight"));
    let leftSite = await driver.findElement(By.className("centerLeft"));
    console.log(await rightSite.getText());
    console.log(await leftSite.getText());
  } catch (e) {
    console.log(e);
  } finally {
    await driver.quit();
  }
})();
