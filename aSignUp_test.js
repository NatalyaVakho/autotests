Feature('sign up');

Scenario('sign up test', ({ I }) => {
    I.amOnPage('https://taganrog.cloudpano.com/signup');
    I.fillField('name', 'Joan');
    I.fillField('email', 'oan@gmail.com');
    I.fillField('phone', '4134567541');
    I.fillField('password', '12345678');
    I.click('Sign Up!');
    I.wait(2);
    I.amOnPage('https://taganrog.cloudpano.com/tours');
});

Feature('sign up');

Scenario('sign up via google', ({ I }) => {
    I.amOnPage('https://taganrog.cloudpano.com/signup');
    I.click('//button[contains(@class,"dYDBmR")]');
    I.switchToNextTab();
    I.wait(2);
    I.fillField('//input[contains(@type,"email")]', 'testosyijohn@gmail.com');
    I.click('//span[text()="Далее"]');
    I.wait(2);
    I.fillField('//input[contains(@type,"password")]', '1test2john?');
    I.click('//span[text()="Далее"]');
    I.wait(2);
    // I.switchToPreviousTab();
});
