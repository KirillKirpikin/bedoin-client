<<<<<<< HEAD
import React, { lazy } from 'react';
import {Routes ,Route} from 'react-router-dom'
import { ROUTES } from '../../utils/routes';
import AdminRoute from './AdminRoute';
import PublicOffer from '../pages/PublicOffer';
import ProductFeed from '../pages/ProductFeed';
const HomePage = lazy(()=> import('../pages/HomePage'));
const Admin = lazy(()=> import('../Admin/Admin'));
const Auth = lazy(()=> import('../Auth/Auth'));
const SingleCoffeePage = lazy(()=> import('../pages/SingleCoffeePage'));
const OrderPage = lazy(()=> import('../pages/OrderPage'));
const ResultPage = lazy(()=> import('../pages/ResultPage'));
const ContactsPage = lazy(()=> import('../pages/ContactsPage'));
const SingleDripPage = lazy(()=> import('../pages/SingleDripPage'));
const DripListPage = lazy(()=> import('../pages/DripListPage'));
const MerchListPage = lazy(()=> import('../pages/MerchListPage'));
const CoffeeListPage = lazy(()=> import('../pages/CoffeListPage'));
const SingleMerchPage = lazy(()=> import('../pages/SingleMerchPage'));
const LemonadeListPage = lazy(()=> import('../pages/LemonadeListPage'));
const SingleLemonadePage = lazy(()=> import('../pages/SingleLemonadePage'));
const Page404 = lazy(()=> import('../pages/Page404'));
const Redirect = lazy(()=> import('../pages/Redirect'));
const PrivacyPolicy = lazy(()=> import('../pages/PrivacyPolicyPage'));

const AppRoutes = () => {
    return (
        <Routes>
            <Route index element={<HomePage/>}/>
            <Route path={ROUTES.LOGIN} element={<Auth/>} />
            <Route path={ROUTES.COFFEE} element={<CoffeeListPage/>} />
            <Route path={ROUTES.SINGLE_COFFEE} element={<SingleCoffeePage/>} />
            <Route path={ROUTES.DRIP} element={<DripListPage/>}/>
            <Route path={ROUTES.SINGLE_DRIP} element ={<SingleDripPage/>}/>
            <Route path={ROUTES.MERCH} element={<MerchListPage/>}/>
            <Route path={ROUTES.SINGLE_MERCH} element={<SingleMerchPage/>}/>
            <Route path={ROUTES.LEMONADE} element={<LemonadeListPage/>}/>
            <Route path={ROUTES.SINGLE_LEMONADE} element={<SingleLemonadePage/>}/>
            <Route path={ROUTES.ORDER} element ={<OrderPage/>}/>
            <Route path={ROUTES.RESULT} element ={<ResultPage/>}/>
            <Route path='/redirect' element={<Redirect/>}/>
            <Route path={ROUTES.CONTACTS} element ={<ContactsPage/>}/>
            <Route path={ROUTES.POLICY} element ={<PrivacyPolicy/>}/>
            <Route path={ROUTES.OFFER} element ={<PublicOffer/>}/>
            <Route path='/product_feed.xml' element={<ProductFeed/>} />
            <Route path={ROUTES.ADMIN} element={
                <AdminRoute>
                    <Admin/>
                </AdminRoute>
            }/>
            <Route path='/*' element={<Page404/>} />
        </Routes>
    );
};

=======
import React, { lazy } from 'react';
import {Routes ,Route} from 'react-router-dom'
import { ROUTES } from '../../utils/routes';
import AdminRoute from './AdminRoute';
import PublicOffer from '../pages/PublicOffer';
import ProductFeed from '../pages/ProductFeed';
const HomePage = lazy(()=> import('../pages/HomePage'));
const Admin = lazy(()=> import('../Admin/Admin'));
const Auth = lazy(()=> import('../Auth/Auth'));
const SingleCoffeePage = lazy(()=> import('../pages/SingleCoffeePage'));
const OrderPage = lazy(()=> import('../pages/OrderPage'));
const ResultPage = lazy(()=> import('../pages/ResultPage'));
const ContactsPage = lazy(()=> import('../pages/ContactsPage'));
const SingleDripPage = lazy(()=> import('../pages/SingleDripPage'));
const DripListPage = lazy(()=> import('../pages/DripListPage'));
const MerchListPage = lazy(()=> import('../pages/MerchListPage'));
const CoffeeListPage = lazy(()=> import('../pages/CoffeListPage'));
const SingleMerchPage = lazy(()=> import('../pages/SingleMerchPage'));
const LemonadeListPage = lazy(()=> import('../pages/LemonadeListPage'));
const SingleLemonadePage = lazy(()=> import('../pages/SingleLemonadePage'));
const Page404 = lazy(()=> import('../pages/Page404'));
const Redirect = lazy(()=> import('../pages/Redirect'));
const PrivacyPolicy = lazy(()=> import('../pages/PrivacyPolicyPage'));

const AppRoutes = () => {
    return (
        <Routes>
            <Route index element={<HomePage/>}/>
            <Route path={ROUTES.LOGIN} element={<Auth/>} />
            <Route path={ROUTES.COFFEE} element={<CoffeeListPage/>} />
            <Route path={ROUTES.SINGLE_COFFEE} element={<SingleCoffeePage/>} />
            <Route path={ROUTES.DRIP} element={<DripListPage/>}/>
            <Route path={ROUTES.SINGLE_DRIP} element ={<SingleDripPage/>}/>
            <Route path={ROUTES.MERCH} element={<MerchListPage/>}/>
            <Route path={ROUTES.SINGLE_MERCH} element={<SingleMerchPage/>}/>
            <Route path={ROUTES.LEMONADE} element={<LemonadeListPage/>}/>
            <Route path={ROUTES.SINGLE_LEMONADE} element={<SingleLemonadePage/>}/>
            <Route path={ROUTES.ORDER} element ={<OrderPage/>}/>
            <Route path={ROUTES.RESULT} element ={<ResultPage/>}/>
            <Route path='/redirect' element={<Redirect/>}/>
            <Route path={ROUTES.CONTACTS} element ={<ContactsPage/>}/>
            <Route path={ROUTES.POLICY} element ={<PrivacyPolicy/>}/>
            <Route path={ROUTES.OFFER} element ={<PublicOffer/>}/>
            <Route path='/product_feed.xml' element={<ProductFeed/>} />
            <Route path={ROUTES.ADMIN} element={
                <AdminRoute>
                    <Admin/>
                </AdminRoute>
            }/>
            <Route path='/*' element={<Page404/>} />
        </Routes>
    );
};

>>>>>>> d548b37824d2e030f70692e7ccfb3169b09aa9c1
export default AppRoutes;