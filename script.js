// script.js
// Configuration for AWS Amplify
const awsconfig = {
    Auth: {
        region: 'us-west-2',
        userPoolId: 'us-west-2_3s69wHlh6',
        userPoolWebClientId: 'YOUR_CLIENT_ID',
        oauth: {
            domain: 'your_cognito_domain',
            scope: ['email', 'openid', 'profile'],
            redirectSignIn: 'http://localhost:3000/',
            redirectSignOut: 'http://localhost:3000/',
            responseType: 'code'
        }
    }
};

Amplify.configure(awsconfig);

// Event listeners for login buttons
document.getElementById('googleSignIn').addEventListener('click', () => {
    Auth.federatedSignIn({ provider: 'Google' });
});

document.getElementById('facebookSignIn').addEventListener('click', () => {
    Auth.federatedSignIn({ provider: 'Facebook' });
});
