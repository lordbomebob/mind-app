import axios from 'axios';
import { useEffect, useState } from "react";
import Accordion from 'react-bootstrap/Accordion';
function StoryChapter({storyTitle}){
    const [chapters, setChapters]= useState()
    useEffect(()=>{
        console.log(storyTitle)
        axios.post("http://localhost:5000/story/listen",{
            storyTitle:storyTitle
        }).then(function (response){
            console.log(response.data)
            setChapters(response.data.data)
        })
    },[chapters,storyTitle])
    function displayChapter(chapters){
        let count=-1
        const chapterCards = chapters.map(chapter=>
            <Accordion.Item eventKey={count++}>
                <Accordion.Header>{chapter.storyTitle} Chapter:{chapter.chapterNum}</Accordion.Header>
                <Accordion.Body>
                    {chapter.chapterContent}
                </Accordion.Body>
                
            </Accordion.Item>
        )
        return chapterCards
    }
    return (
        <><>
        <header>{storyTitle}</header>
        </>
        <Accordion defaultActiveKey="0">
        {storyTitle && chapters ? displayChapter(chapters) : "not yet loaded"}
        </Accordion>
        </>
    )
}

export default StoryChapter