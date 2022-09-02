Feature('sign in');

Scenario('sign in test', ({ I }) => {
    I.amOnPage('https://taganrog.cloudpano.com/login');
    I.fillField('//input[contains(@name,"username")]', 'john@gmail.com');
    I.fillField('password', '12345678');
    I.click('Sign In');
    I.wait(2);
    I.amOnPage('https://taganrog.cloudpano.com/tours');
});

Feature('sign in phone');

Scenario('sign in phone', ({ I }) => {
    I.amOnPage('https://taganrog.cloudpano.com/login');
    I.fillField('//input[contains(@name,"username")]', '13333333333');
    I.fillField('password', '12345678');
    I.click('//button[text()="Sign In"]');
    I.wait(2);
    I.amOnPage('https://taganrog.cloudpano.com/tours');
});

Feature('sign in');

Scenario('sign in via google', ({ I }) => {
    I.amOnPage('https://taganrog.cloudpano.com/login');
    I.click('//button[contains(@class,"dYDBmR")]');
    I.switchToNextTab();
    I.fillField('//input[contains(@type,"email")]', 'testosyijohn@gmail.com');
    I.click('//span[text()="Далее"]');
    I.wait(3);
    I.fillField('//input[contains(@type,"password")]', '1test2john?');
    I.click('//span[text()="Далее"]');
    I.switchToPreviousTab();
    I.wait(5);
});
