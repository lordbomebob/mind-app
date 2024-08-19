import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';
import { useEffect, useState } from "react";
import './App.css';
import HomeStoryList from './Components/HomeStoryList.component';
import Login from './Components/Login.component';
import MyNavbar from './Components/MyNavbar.component';
import PostStory from './Components/PostStory.component';
import StoryChapter from './Components/StoryChapter.componet';


function App() {//homepage
  const [stories, setStories] = useState('')
  const [page, setPage]= useState('main')
  const [loginUser, setLoginUser]= useState(null)
  const [searchTarget, setSearchTarget]= useState(null)
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

  //login , register, and logout 
  

  
  //visual functions
  function currentDisplay(page){
    //console.log(stories.data)
    if(page==='login'){
      return <Login currentPage={page} buttonNameType={'Login'} pageChange={pageChange} setLoginUser={setLoginUser}></Login>
    }else if(page==='register'){
      return <Login currentPage={page} buttonNameType={'Register'} pageChange={pageChange}setLoginUser={setLoginUser}></Login>
    }else if(page==='MyStories'){
      return <PostStory></PostStory>
    }else if(page==='storyChapter'){
      return <StoryChapter storyTitle={searchTarget}></StoryChapter>
    }
    return <HomeStoryList storyList={stories.data} setSearchTarget={setSearchTarget} setPage={setPage}></HomeStoryList>
  }
  
  return (
    
    <div className="App">
      <MyNavbar pageChange={pageChange} setLoginUser={setLoginUser} loginUser={loginUser}></MyNavbar>
      {currentDisplay(page)}
      
      
    </div>
  );
  
}



export default App;
