import { Link } from "react-router-dom";
import { Story } from "../models/Story";


export function ListStoriesRoute(props : {story: Story}) {

    return (
        <div>            
            <ul>
                <Link to={`/stories/${props.story.id}`}><li key={props.story.id}>Mad Lib by: {props.story.author}</li> 
                </Link>
            </ul>           
        </div>
    )
}