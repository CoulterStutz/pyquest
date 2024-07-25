// script.js
// Configuration for AWS Amplify
const awsconfig = {
    Auth: {
        region: 'us-west-2',
        userPoolId: 'us-west-2_3s69wHlh6',
        userPoolWebClientId: 'YOUR_CLIENT_ID',
    }
};

Amplify.configure(awsconfig);

// Login form handling
document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const user = await Auth.signIn(username, password);
        console.log('User signed in:', user);
        alert('Login successful!');
        // Redirect to another page or show logged-in content
    } catch (error) {
        console.error('Error signing in', error);
        alert('Error signing in: ' + error.message);
    }
});
