const { Builder, By } = require('selenium-webdriver')

const url =
  'file:///media/vasani/Sunbeam/1Sunbeam-modules/sdm/Selenium-demo/index.html'

;(async function example() {
  // create a driver instance to load a required browser
  // open the browser
  const driver = await new Builder().forBrowser('chrome').build()
  try {
    await driver.sleep(2000)

    // go to a url
    await driver.get(url)
    await driver.sleep(2000)

    // find an element for entering name
    const inputName = await driver.findElement(By.id('name'))
    await inputName.sendKeys('Meet Vasani Tests')
    await driver.sleep(2000)

    // find an element for entering age
    const inputAge = await driver.findElement(By.id('age'))
    await inputAge.sendKeys('26')
    await driver.sleep(2000)

    // find an element for entering phone number
    const inputPhone = await driver.findElement(By.id('pno'))
    await inputPhone.sendKeys('9638998774')
    await driver.sleep(2000)

    // find an element for entering email
    const inputEmail = await driver.findElement(By.id('email'))
    await inputEmail.sendKeys('meet@test.com')
    await driver.sleep(2000)

    // find the button reference
    const buttonRegister = await driver.findElement(By.id('register'))
    buttonRegister.click()
    await driver.sleep(2000)

    // get the reference of result element
    const resultElement = await driver.findElement(By.id('alert'))
    const result = await resultElement.getText()
    console.log(`result = ${result}`)

  } finally {
    // close the browser
    await driver.quit()
  }
})()
