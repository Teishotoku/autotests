const { By, Builder, Browser } = require("selenium-webdriver");
const assert = require("assert");
(async function firstTest() {
  let driver;
  try {
    driver = await new Builder().forBrowser(Browser.FIREFOX).build();
    await driver.get("https://metanit.com");
    let langMenu = await driver.findElement(
      By.xpath("/html/body/div[1]/header/div[3]/ul/li[20]/a"),
    );
    await langMenu.click();
    console.log("((((((((((( lisp:) ))))))))))");
  } catch (e) {
    console.log(e);
  } finally {
    await driver.quit();
  }
})();
