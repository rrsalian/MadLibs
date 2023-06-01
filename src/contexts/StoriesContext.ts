
import { createContext } from "react";
import { Story, storiesList } from "../models/Story";

interface StoriesContextModel {
    stories: Story[];
    addStory: (story: Story) => void;
    removeStory: (id: number)  => void;
}

const defaultValue: StoriesContextModel = {
    stories: storiesList,
    addStory: () => {},
    removeStory: () => {}
};

export const StoriesContext = createContext(defaultValue);