import { useState } from "react";
import { ReactNode } from "react";
import { Story, storiesList} from "../models/Story";
import { StoriesContext } from "./StoriesContext";

interface Props { 
    children: ReactNode 
}

export default function StoriesContextProvider({children}: Props) {
    const [stories, setStories] = useState<Story[]>(storiesList);

    return (
        <StoriesContext.Provider value={{
            stories : stories,
            addStory: (story: Story) => {
                const i = stories.length;
                const lastId = stories[i - 1].id;                                
                if (lastId !== undefined) {
                    const newStory = { ...story, id: lastId + 1 };
                    setStories([...stories, newStory]);                    
                }                
            }, 
            removeStory: (id: number) => {
                const index = stories.findIndex(story => story.id === id);
                if(index !== -1) {
                    stories.splice(index,1);
                    setStories([...stories]);
                }
            }
        }}>
            {children}
        </StoriesContext.Provider>
    )
}