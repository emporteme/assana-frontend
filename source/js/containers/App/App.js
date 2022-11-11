import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { AuthProvider } from '../../context/AuthContext';

import GlobalStyles from '../../styles';

import AppWrapper from './App.styled';
import BodyWrapper from '../../routes/Routes.styled';

import About from '../../routes/About';
import Cart from '../../routes/Cart';
import ConfirmOrder from '../../routes/ConfirmOrder';
import ForgetPassword from '../../routes/ForgetPassword';
import Login from '../../routes/Login';
import Main from '../../routes/Main';
import Profile from '../../routes/Profile';
import Key from '../../routes/Key';
import Store from '../../routes/Store';
import LimitedStore from '../../routes/LimitedStore';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import PrivateRoute from '../../utils/PrivateRoute';

export default function App() {
    return (
        <>
            <GlobalStyles />
            <Router>
                <AuthProvider>
                    <AppWrapper>
                        {/*<div className='beta-test-warning'>
                            Ведутся технические работы! Возможны сбои в системе!
                        </div>*/}
                        <Header />
                        <BodyWrapper>
                            <Routes>
                                <Route path='/' element={<Main />} />
                                <Route path='/about' element={<About />} />
                                <Route
                                    path='/cart'
                                    element={
                                        <PrivateRoute>
                                            <Cart />
                                        </PrivateRoute>
                                    }
                                />
                                <Route
                                    path='/confirm-order'
                                    element={
                                        <PrivateRoute>
                                            <ConfirmOrder />
                                        </PrivateRoute>
                                    }
                                />
                                <Route
                                    path='/forget-password'
                                    element={<ForgetPassword />}
                                />
                                <Route path='/login' element={<Login />} />
                                <Route
                                    path='/profile'
                                    element={
                                        <PrivateRoute>
                                            <Profile />
                                        </PrivateRoute>
                                    }
                                />
                                <Route path='/store' element={<Store />} />
                                <Route path='/limitedStore' element={<LimitedStore />} />
                                <Route path='/plan' element={
                                    <PrivateRoute>
                                        <Key />
                                    </PrivateRoute>} />
                            </Routes>
                        </BodyWrapper>
                        <Footer />
                    </AppWrapper>
                </AuthProvider>
            </Router>
        </>
    );
}
