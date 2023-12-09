
const { Builder, By, until } = require('selenium-webdriver');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
const expect = chai.expect;

const url = 'file:///media/vasani/Sunbeam/1Sunbeam-modules/sdm/Selenium-demo/index.html';

describe('Registration Form Tests', function () {
  this.timeout(15000); // Adjust the timeout as needed

  let driver;

  before(async function () {
    driver = await new Builder().forBrowser('chrome').build();
  });

  after(async function () {
    await driver.quit();
  });

  it('Positive Test Case - Successful Registration', async function () {
    await driver.get(url);

    // Example:
    await driver.findElement(By.id('name')).sendKeys('Meet Vasani test');
    await driver.findElement(By.id('age')).sendKeys('26');
    await driver.findElement(By.id('pno')).sendKeys('1234567890');
    await driver.findElement(By.id('email')).sendKeys('meet@example.com');
    await driver.findElement(By.id('register')).click();

    // Wait for the alert message
    const alertElement = await driver.findElement(By.id('alert'));
    await driver.wait(until.elementTextContains(alertElement, 'Data added successfully!'), 5000);

    // Verify the registration success
    const resultElement = await driver.findElement(By.id('alert'));
    const result = await resultElement.getText();
    expect(result).to.equal('Data added successfully!');
  });


  // Example:
  it('Negative Test Case - Missing Information', async function () {
    await driver.get(url);

    // Your registration steps here...
    await driver.findElement(By.id('name')).sendKeys('Meet Vasani test');
    await driver.findElement(By.id('age')).sendKeys('26');
    await driver.findElement(By.id('pno')).sendKeys('');
    await driver.findElement(By.id('email')).sendKeys('meet@example.com');
    await driver.findElement(By.id('register')).click();

    // Example:
    await driver.findElement(By.id('register')).click();

    // Verify the appropriate alert message
    const resultElement = await driver.findElement(By.id('alert'));
    const result = await resultElement.getText();
    expect(result).to.equal('All the fields are required !');
  });

//   it('Negative Test Case - Invalid Email Format', async function () {
    
//     await driver.findElement(By.id('name')).sendKeys('Meet Vasani test');
//     await driver.findElement(By.id('age')).sendKeys('26');
//     await driver.findElement(By.id('pno')).sendKeys('1234567890');
//     await driver.findElement(By.id('email')).sendKeys('wrongEmailTestcom');
//     await driver.findElement(By.id('register')).click();
  
//     // Verify the appropriate alert message
//     const resultElement = await driver.findElement(By.id('alert'));
//     const result = await resultElement.getText();
//     expect(result).to.equal('Please enter a valid Email address !');
//   });


  it('Negative Test Case - Enters Negative age ', async function () {
    // ...

    await driver.findElement(By.id('name')).sendKeys('Meet Vasani test');
    await driver.findElement(By.id('age')).sendKeys('-26');
    await driver.findElement(By.id('pno')).sendKeys('1234567890');
    await driver.findElement(By.id('email')).sendKeys('meet@example.com');
    await driver.findElement(By.id('register')).click();
  
    // Verify the appropriate alert message
    const resultElement = await driver.findElement(By.id('alert'));
    const result = await resultElement.getText();
    expect(result).to.equal('Please enter a valid age !');
  });
  

// it('Negative Test Case - Phone Number with Alphabets', async function () {
//     // ...
//     await driver.findElement(By.id('name')).sendKeys('Meet Vasani test');
//     await driver.findElement(By.id('age')).sendKeys('26');
//     await driver.findElement(By.id('pno')).sendKeys('1234acd90');
//     await driver.findElement(By.id('email')).sendKeys('meet@example.com');
//     await driver.findElement(By.id('register')).click();

//     // Verify the appropriate alert message
//     const resultElement = await driver.findElement(By.id('alert'));
//     const result = await resultElement.getText();
//     expect(result).to.equal('Please enter a valid Phone Number !');
//   });
  

  it('Negative Test Case - Submit Blank Form', async function () {
    await driver.get(url);

    await driver.findElement(By.id('name')).sendKeys('');
    await driver.findElement(By.id('age')).sendKeys('26');
    await driver.findElement(By.id('pno')).sendKeys('1234567890');
    await driver.findElement(By.id('email')).sendKeys('meet@example.com');
    await driver.findElement(By.id('register')).click();
    // Example:
    await driver.findElement(By.id('register')).click();

    // Verify the appropriate alert message
    const resultElement = await driver.findElement(By.id('alert'));
    const result = await resultElement.getText();
    expect(result).to.equal('All the fields are required !');
  });

  it('Positive Test Case - Delete Multiple Rows', async function () {
    await driver.get(url);

    // Your delete multiple rows steps here...

    // Example:
    // Add users to the table (similar to the registration steps)
    await driver.findElement(By.id('name')).sendKeys('User1');
    await driver.findElement(By.id('age')).sendKeys('30');
    await driver.findElement(By.id('pno')).sendKeys('1234567890');
    await driver.findElement(By.id('email')).sendKeys('user1@example.com');
    await driver.findElement(By.id('register')).click();

    await driver.findElement(By.id('name')).sendKeys('User2');
    await driver.findElement(By.id('age')).sendKeys('25');
    await driver.findElement(By.id('pno')).sendKeys('9876543210');
    await driver.findElement(By.id('email')).sendKeys('user2@example.com');
    await driver.findElement(By.id('register')).click();

    // Delete multiple rows
    await driver.findElement(By.id('myBody')).findElement(By.xpath('.//tr[1]/td[1]/input')).click();
    await driver.findElement(By.id('myBody')).findElement(By.xpath('.//tr[2]/td[1]/input')).click();
    await driver.findElement(By.id('delete')).click();

    // Verify the appropriate alert message
    const resultElement = await driver.findElement(By.id('alert'));
    const result = await resultElement.getText();
    expect(result).to.equal('Data deleted successfully!');
  });

//   it('Positive Test Case - Edit and Update Row', async function () {
//     await driver.get(url);

//     // Your edit and update row steps here...

//     // Example:
//     // Add a user to the table
//     await driver.findElement(By.id('name')).sendKeys('User3');
//     await driver.findElement(By.id('age')).sendKeys('28');
//     await driver.findElement(By.id('pno')).sendKeys('5555555555');
//     await driver.findElement(By.id('email')).sendKeys('user3@example.com');
//     await driver.findElement(By.id('register')).click();

//     // Edit and update the row
//     await driver.findElement(By.id('myBody')).findElement(By.xpath('.//tr[1]/td[6]/button')).click();
//     await driver.findElement(By.id('name')).clear();
//     await driver.findElement(By.id('name')).sendKeys('UpdatedUser3');
//     await driver.findElement(By.id('update')).click();

//     // Verify the appropriate alert message
//     const resultElement = await driver.findElement(By.id('alert'));
//     const result = await resultElement.getText();
//     expect(result).to.equal('Data updated successfully!');
//   });

//   it('Positive Test Case - Special Characters in Name', async function () {
//     await driver.get(url);

//     await driver.findElement(By.id('name')).sendKeys('Meet Vasani test');
//     await driver.findElement(By.id('age')).sendKeys('26');
//     await driver.findElement(By.id('pno')).sendKeys('1234567890');
//     await driver.findElement(By.id('email')).sendKeys('meet@example.com');
//     await driver.findElement(By.id('register')).click();

//     // Example:
//     await driver.findElement(By.id('name')).sendKeys('User@Special');
//     await driver.findElement(By.id('age')).sendKeys('35');
//     await driver.findElement(By.id('pno')).sendKeys('9998887777');
//     await driver.findElement(By.id('email')).sendKeys('user_special@example.com');
//     await driver.findElement(By.id('register')).click();

//     // Verify the registration success
//     const resultElement = await driver.findElement(By.id('alert'));
//     const result = await resultElement.getText();
//     expect(result).to.equal('Data added successfully!');
//   });

//   it('Negative Test Case - Update with Invalid Email', async function () {
//     await driver.get(url);

//     // Your edit and update row steps here...

//     // Example:
//     // Add a user to the table
//     await driver.findElement(By.id('name')).sendKeys('User4');
//     await driver.findElement(By.id('age')).sendKeys('40');
//     await driver.findElement(By.id('pno')).sendKeys('7777777777');
//     await driver.findElement(By.id('email')).sendKeys('user4@example.com');
//     await driver.findElement(By.id('register')).click();

//     // Edit and update the row with an invalid email
//     await driver.findElement(By.id('myBody')).findElement(By.xpath('.//tr[1]/td[6]/button')).click();
//     await driver.findElement(By.id('email')).clear();
//     await driver.findElement(By.id('email')).sendKeys('invalidemail');
//     await driver.findElement(By.id('update')).click();

//     // Verify the appropriate alert message
//     const resultElement = await driver.findElement(By.id('alert'));
//     const result = await resultElement.getText();
//     expect(result).to.equal('Please enter a valid Email address!');
//   });

//   it('Positive Test Case - Mixed Case Email', async function () {
    // ...
  
//     // Verify the registration success
//     const resultElement = await driver.findElement(By.id('alert'));
//     const result = await resultElement.getText();
//     expect(result).to.equal('Data added successfully!');
//   });
  
});
