import Accordion from 'react-bootstrap/Accordion';

function HomeStoryList({storyList}) {
    function displayStory(storyList){
        let count=-1
        const storyCards = storyList.map(story=>
            <Accordion.Item eventKey={count++}>
                <Accordion.Header>{story.storyTitle}</Accordion.Header>
                <Accordion.Body>
                    {story.description ? story.description : 'no description'}
                </Accordion.Body>
                <Accordion.Body>
                    {story.status}{count}
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