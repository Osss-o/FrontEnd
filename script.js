const signinform = document.getElementById('signinform');
const message=document.getElementById('message');

signinform.addEventListener('submit', async function(event) {
    event.preventDefault();

 const username = document.getElementById('email').value;
 const password = document.getElementById('password').value;
 
 let body = {
     email: username,
     password: password
 };
try {
const response = await fetch('https://localhost:7208/api/Auth/login', {

    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)  
});
if (response.ok) {
    const data = await response.json();
    if(data!=null){
   alert(data.message || 'Login successful!');
                message.textContent = '';
                message.className = 'form-message';

    }
  
} else {
    message.className='form-message error';
    message.textContent =  'Login failed. Please check your credentials.';
}
} catch (error) {
    message.className='form-message error';
    message.textContent = 'An error occurred. Please try again later.';
    console.error('Error:', error);
}
});
