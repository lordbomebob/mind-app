import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';
import { useEffect, useState } from "react";
import './App.css';
import HomeStoryList from './Components/HomeStoryList.component';
import Login from './Components/Login.component';
import MyNavbar from './Components/MyNavbar.component';



function App() {//homepage
  const [stories, setStories] = useState('')
  const [page, setPage]= useState('main')
  const [loginUser, setLoginUser]= useState(null)
  useEffect(()=> {
    axios.get("http://localhost:5000/story/",{
      responseType: "json",
    })
    .then(function (response) {
      //console.log(response.data);
      setStories(response.data)
    });
  })
  function pageChange(page){
    setPage(page)
  }

  //login and logout will do later
  function logout(){
    setLoginUser(null)
  }
  function login(username,password){
    axios.get('')
  }
  //visual functions
  function currentDisplay(page){
    //console.log(stories.data)
    if(page==='login'){
      return <Login></Login>
    }
    return <HomeStoryList storyList={stories.data}></HomeStoryList>
  }
  
  return (
    
    <div className="App">
      <MyNavbar pageChange={pageChange}></MyNavbar>
      {currentDisplay(page)}
      
    </div>
  );
  
}



export default App;
