const { By, Builder, Browser } = require("selenium-webdriver");
const assert = require("assert");
(async function firstTest() {
  let driver;
  try {
    driver = await new Builder().forBrowser(Browser.FIREFOX).build();
    await driver.get("https://metanit.com");
    let title = await driver.getTitle();
    assert.equal("METANIT.COM - Сайт о программировании", title);
    await driver.manage().setTimeouts({ implicit: 500 });
    let search = await driver.findElement(By.id("magnifying-glass"));
    await search.click();
    let textBox = await driver.findElement(By.name("q"));
    let submitButton = await driver.findElement(By.name("sa"));
    await textBox.sendKeys("рекурсии lisp");
    await submitButton.click();
    console.log("оставайтесь на линии, оно обязательно закроется");
  } catch (e) {
    console.log(e);
  } finally {
    await driver.quit();
  }
})();
