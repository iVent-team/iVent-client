import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Head } from '@components';
import Landing from '@pages/Landing';
import FindPw from '@pages/FindPW';
import RegisterCommon from '@pages/Register/RegisterCommon';
import RegisterInstitution from '@pages/Register/RegisterInstitution';
import RegisterIndividual from '@pages/Register/RegisterIndividual';
import RegisterAccepted from '@pages/RegisterAccepted/Index';
import Post from '@pages/Post';
import Main from '@pages/Main';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Head />}>
                    <Route path='/' element={<Landing />} />
                    <Route path='findpw' element={<FindPw />} />
                    <Route path='registercommon' element={<RegisterCommon />} />
                    <Route
                        path='registerinstitution'
                        element={<RegisterInstitution />}
                    />
                    <Route
                        path='registerindividual'
                        element={<RegisterIndividual />}
                    />
                    <Route
                        path='registeraccepted'
                        element={<RegisterAccepted />}
                    />
                    <Route path='post' element={<Post />} />
                    <Route path='main' element={<Main />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
