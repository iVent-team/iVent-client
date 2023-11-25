import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Head } from '@components';
import Landing from '@pages/Landing';
import FindPw from '@pages/FindPW';
import RegisterCommon from '@pages/Register/RegisterCommon';
import RegisterInstitution from '@pages/Register/RegisterInstitution';
import RegisterIndividual from '@pages/Register/RegisterIndividual';
import { MyPage } from '@pages/MyPage';
import Review from './pages/Review';

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

                    <Route path='mypage' element={<MyPage />} />
                    <Route path='review' element={<Review />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
