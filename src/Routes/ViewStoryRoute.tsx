import { Link, useParams } from "react-router-dom";
import { StoriesContext } from "../contexts/StoriesContext"
import { useState ,useContext, useEffect } from "react";
import { Story } from "../models/Story";

export function ViewStoryRoute() {
    const id = useParams().id;

    const [story, setStory] = useState<Story>();
    const [prevID, setPrevID] = useState<number>();
    const [nextID, setNextID] = useState<number>();

    const { stories } = useContext(StoriesContext);

    function prevStory(currStory: Story): number {
        const currIndex = stories.indexOf(currStory)
        if ( currIndex > 0 )
            return currIndex;
        else
            return stories.length;
    }

    function nextStory(currStory: Story): number {
        const currIndex = stories.indexOf(currStory)
        if ( currIndex < stories.length - 1 )
            return currIndex + 2;
        else
            return 1;
    }    

    useEffect(() => {
        const storyFound = stories.find((story) => { if (id ) return story.id === +id;})
        setStory(storyFound);
        if (storyFound) {
            setPrevID(prevStory(storyFound));
            setNextID(nextStory(storyFound));
        }
    },[id])

    return (
        <div>            
            <p>On my way to {story?.word1}, I met {story?.word2} the Grouch.</p>
            <p>They were in quite a hurry because they were meeting {story?.word3},
               the {story?.word4}, in {story?.word5} minutes!
            </p>
            <p>
                So we said, "{story?.word6}" and parted ways.
            </p>
            <Link to={`/stories/${prevID}`}>Previous Story</Link>
            <Link to={`/stories/${nextID}`}>Next Story</Link>
        </div>
    )
}

