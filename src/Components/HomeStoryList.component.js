import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';

function HomeStoryList({storyList, setSearchTarget, setPage}) {
    function displayStory(storyList){
        let count=-1
        const storyCards = storyList.map(story=>
            <Accordion.Item eventKey={count++}>
                <Accordion.Header>{story.storyTitle}</Accordion.Header>
                <Accordion.Body>
                    {story.description ? story.description : 'no description'}
                </Accordion.Body>
                <Accordion.Body>
                    {story.status}
                </Accordion.Body>
                <Accordion.Body>
                    <Button variant="primary" type='pageChange' onClick={()=>{setPage('storyChapter');setSearchTarget(story.storyTitle)}}>See Chapters</Button>
                </Accordion.Body>
                
            </Accordion.Item>
        )
        return storyCards
        
    }

    
  return (
    <><>
    <header>All Stories</header>
    </>
    <Accordion defaultActiveKey="0">
        {storyList ? displayStory(storyList) : "not yet loaded"}
    </Accordion>
    </>
  );
}

export default HomeStoryList;