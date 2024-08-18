import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function PostStory() {
    function addChapterHandleSumbit(e){
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        addChapter(formJson.storyTitle,formJson.chapterTitle, formJson.chapterNumber, formJson.chapterContent)
    }
    function addChapter(storyTitle, chapterTitle, chapterNum, chapterContent){
        if(!storyTitle){
            alert('Missing Story Title')
            return
        }
        if(!chapterTitle){
            alert('Missing Chapter Title')
            return
        }
        if(!chapterNum || isNaN(chapterNum)){
            console.log(chapterNum)
            alert('Missing Chapter Number')
            return
        }
        if(!chapterContent){
            alert('Missing Chapter Content')
            return
        }
        axios.post('http://localhost:5000/story/tell/chapter/',{
            "storyTitle":storyTitle,
            "chapterNum":chapterNum,
            "chapterTitle":chapterTitle,
            "chapterContent":chapterContent
        }).then(function (response){
            console.log(response);
            alert(response.data.message)
        }).catch(function(err){
            console.log(err)
            //alert(err.response)
        })
    }
    
    function addChapterForm(){
        return (
        <>
        <Form onSubmit={addChapterHandleSumbit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Story Title</Form.Label>
                <Form.Control type="storyTitle" placeholder="Story Title" name='storyTitle' />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Chapter Title</Form.Label>
                <Form.Control type="chapterTitle" placeholder="Chapter Title" name='chapterTitle' />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Chapter Number</Form.Label>
                <Form.Control type="chapterNumber" placeholder="Chapter Number" name='chapterNumber' />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Chapter Content</Form.Label>
                <Form.Control as="textarea" rows={9} name='chapterContent'/>
            </Form.Group>
            <Button variant="primary" type="submit">Add Chapter</Button>
        </Form>
        
        </>
        )
    }
    function addStory(storyTitle,storyDescription){
        if(!storyTitle){
            alert('Missing Story Title')
            return
        }
        if(!storyDescription){
            alert('Missing Story Description')
            return
        }

        axios.post('http://localhost:5000/story/tell',{
            "storyTitle":storyTitle,
            "description":storyDescription
        }).then(function (response){
            alert(response.data.data)
        }).catch(function (err){
            console.log(err.response.data.message)
            alert(err.response.data.message)
        })
    }
    function addStoryHandleSumbit(e){
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson)
        addStory(formJson.storyTitle,formJson.storyDescription)
    }

    function addStoryForm(){
        return (
        <>
        <Form onSubmit={addStoryHandleSumbit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="storyTitle" placeholder="Story Title" name='storyTitle'/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} name='storyDescription'/>
            </Form.Group>
            <Button variant="primary" type="submit">Add Story</Button>
        </Form>
        
        </>
        )
    }

    const [isAddStory, setAddStory] = useState(true)
    return (
        <>
        <h2>{!isAddStory?'Add Chapter':`Add Story`}</h2>
        {isAddStory?addStoryForm():addChapterForm()}
        <div>
            <Button variant="primary" type="switch" onClick={()=>setAddStory(!isAddStory)}>
                {!isAddStory?'Change To Add Story':'Change To Add Chapter'}
            </Button>
        </div>
        </>
        
    );
}

export default PostStory;