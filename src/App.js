import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Head from './components/Head';
import Landing from './pages/Landing';
import FindPw from './pages/FindPw';
import RegisterCommon from './pages/RegisterCommon';
import RegisterInstitution from './pages/RegisterInstitution';
import RegisterIndividual from './pages/RegisterIndividual';

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
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
