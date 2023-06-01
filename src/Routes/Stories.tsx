import { storiesList } from "../models/Story";
import { ListStoriesRoute } from "./ListStoriesRoute";
import { StoriesContext } from "../contexts/StoriesContext"
import { useContext } from "react";

export function Stories () {

    const { stories } = useContext(StoriesContext);

    return (
        <div>
            <h2>Pick a story</h2>
            {
                stories.map(story => <ListStoriesRoute key={story.id} story={story} ></ListStoriesRoute>)
            }
        </div>
    )
}