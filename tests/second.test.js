const { By, Builder, Browser } = require("selenium-webdriver");
const assert = require("assert");
(async function firstTest() {
  let driver;
  try {
    driver = await new Builder().forBrowser(Browser.FIREFOX).build();
    await driver.get("https://metanit.com");
    let headerMenu = await driver.findElement(By.className("menu"));
    console.log(await headerMenu.getText());
    console.log("благодаря им, ты никогда не узнаешь что такое женское тепло");
  } catch (e) {
    console.log(e);
  } finally {
    await driver.quit();
  }
})();
