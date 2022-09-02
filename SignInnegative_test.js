Feature('sign in negative test');

Scenario('invalid username', ({ I }) => {
    I.amOnPage('https://taganrog.cloudpano.com/login');
    I.fillField('username', 'john@gmail.co');
    I.fillField('password', '12345678');
    I.click('Sign In');
    I.wait(3);
    I.see('User not found');
});

// Feature('sign in negative test');

// Scenario('invalid password', ({ I }) => {
//     I.amOnPage('https://taganrog.cloudpano.com/login');
//     I.fillField('username', 'john@gmail.com');
//     I.fillField('password', '123456');
//     I.click('Sign In');
//     I.wait(2);
//     I.see('Invalid password');
// })
