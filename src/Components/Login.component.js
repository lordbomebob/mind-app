import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import axios from 'axios';



function Login({buttonNameType,pageChange, currentPage, setLoginUser}){
  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();
    // Read the form data
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
    
    if(currentPage==='register'){
      register(formJson.username, formJson.password)
      //console.log(currentPage+' register')
    }else if(currentPage==='login'){
      login(formJson.username, formJson.password)
      //console.log(currentPage+' login')
    }
    
  }
  function register(username, password){
    axios.post('http://localhost:5000/user/register',{
      'username':username,
      'password':password
    }).then(function (response){
      console.log(response.data)
      setLoginUser(username)
      alert('signed in as '+username)
      pageChange('home')
    }).catch(function (err){
      console.log(err)
      alert(err)
    })
  }
  function login(username,password){
    axios.post('http://localhost:5000/user/login',{
      'username':username,
      'password':password
    }).then(function (response){
      console.log(response.data.data)
      setLoginUser(username)
      alert('signed in as '+username)
      pageChange('home')
    }).catch(function (err){
      console.log(err)
      alert(err)
    })
  }
    return (
      <>
      <h1>{buttonNameType}</h1>
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="username" placeholder="Enter Username" name='username'/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='password'/>
      </Form.Group>

      <Button variant="primary" type="submit">
        {buttonNameType}
      </Button>
      
      </Form>
      
        <div>
        <Button variant="primary" type='pageChange' onClick={()=>{
            if(buttonNameType==='Register'){
              pageChange('login')
            }else if(buttonNameType==='Login'){
              pageChange('register')
            }
          }}>Switch to {buttonNameType==='Register'? 'login':'register'}</Button>
        </div>

        
      </>
      
    )
}

export default Login;