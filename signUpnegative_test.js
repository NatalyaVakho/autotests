Feature('sign up negative test');

Scenario('sign up with invalid email', ({ I }) => {
    I.amOnPage('https://taganrog.cloudpano.com/signup');
    I.fillField('name', 'Lucy');
    I.fillField('email', 'lucy@gmail');
    I.fillField('phone', '1111111111');
    I.fillField('password', '12345678');
    I.click('Sign Up!');
    I.see('Email is not valid');
    I.wait(3);
});

Feature('sign up negative test');

Scenario('sign up with invalid phone number', ({ I }) => {
    I.amOnPage('https://taganrog.cloudpano.com/signup');
    I.fillField('name', 'Lucy');
    I.fillField('email', 'lucy@gmail.com');
    I.fillField('phone', '111111111');
    I.fillField('password', '12345678');
    I.click('Sign Up!');
    I.see('Minimum 11 symbols');
    I.wait(3);
});

Feature('sign up negative test');

Scenario('sign up with invalid password', ({ I }) => {
    I.amOnPage('https://taganrog.cloudpano.com/signup');
    I.fillField('name', 'Lucy');
    I.fillField('email', 'lucy@gmail.com');
    I.fillField('phone', '1111111111');
    I.fillField('password', '12');
    I.click('Sign Up!');
    I.see('Minimum 8 symbols');
    I.wait(3);
});
