import { useState } from "react";
import { useContext } from "react"
import { Story } from "../models/Story"
import { StoriesContext } from "../contexts/StoriesContext"

export function CreateStoryRoute() {

    const { addStory } = useContext(StoriesContext);

    const [ author, setAuthor] = useState("");
    const [ place, setPlace] = useState("");
    const [ person, setPerson] = useState("");
    const [ sillyWord, setSillyWord] = useState("");
    const [ occupation, setOccupation] = useState("");
    const [ number, setNumber] = useState("");
    const [ brandTagline, setBrandTagline] = useState("");


    function handleFormSubmit(e: any) {
        e.preventDefault();

        const newStory: Story = {
            id: 2,
            author: author,
            word1: place,
            word2: person,
            word3: sillyWord,
            word4: occupation,
            word5: number,
            word6: brandTagline
        }
        
        addStory(newStory);
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <div>
                <label >Author</label>
            </div>
            <input id="author" type="text" name="author" onChange={(e) => setAuthor(e.target.value)}/>
            <div>
                <label >Place</label>
            </div>
            <input id="place" type="text" name="place" onChange={(e) => setPlace(e.target.value)}/>
            <div>
                <label >Person</label> 
            </div>
            <input id="person" type="text" name="person" onChange={(e) => setPerson(e.target.value)}/>
            <div>
                <label>Silly Word</label>
            </div>
            <input id="sillyWord" type="text" name="sillyWord" onChange={(e) => setSillyWord(e.target.value)}/>
            <div>
                <label>Occupation</label>
            </div>
            <input id="occupation" type="text" name="occupation" onChange={(e) => setOccupation(e.target.value)}/>
            <div>
                <label>Number</label>
            </div>
            <input id="number" type="text" name="number" onChange={(e) => setNumber(e.target.value)}/>
            <div>
                <label>Brand TagLine</label>
            </div>
            <input id="brandTagline" type="text" name="brandTagline" onChange={(e) => setBrandTagline(e.target.value)}/>
            <div>
                <button>Save</button>
            </div>
        </form>
    )
}