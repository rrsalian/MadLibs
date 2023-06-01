
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { HomeRoute } from '../Routes/HomeRoute';
import { CreateStoryRoute } from '../Routes/CreateStoryRoute';
import { ViewStoryRoute } from '../Routes/ViewStoryRoute';
import { Stories } from '../Routes/Stories';

export function Header () {

    return (
        <div>
            <Link to="/"><h1>GC Mad Libs</h1></Link>            
            <nav>
                <ul>
                    <li>
                        <Link to="/Stories"> See Saved Stories</Link>                        
                    </li>
                    <li>
                        <Link to="/Create-Story"> Create a New Story</Link>
                    </li>
                </ul>
            </nav>            
            
            <Routes>
                <Route path="/" element={<HomeRoute />} />
                <Route path="/Stories" element={<Stories />} />
                <Route path="/Create-Story" element={<CreateStoryRoute />} />
                <Route path="/Stories/:id" element={<ViewStoryRoute />} />
            </Routes>                                    
        </div>
    )
}