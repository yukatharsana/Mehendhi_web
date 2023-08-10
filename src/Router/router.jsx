import { createBrowserRouter, Outlet } from 'react-router-dom';
import Login from '../pages/Login'
import Cart from'../pages/Cart'
import Home from '../pages/Home'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Shophenna from '../pages/Shophenna';
import Forgotpassword from '../pages/Forgotpassword';
import Signup from '../pages/Signup';
import Contact from '../pages/Contact';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import RefoundPolicy from '../pages/RefoundPolicy';
import Shippingpolicy from '../pages/Shippingpolicy';
import TermandCondition from '../pages/TermandCondition';
import SingleProduct from '../pages/SingleProduct';
import Checkout  from '../pages/Checkout';
const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}
const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/home",
                element: <Home />
            },
            {
                path: "/Shophenna",
                element: <Shophenna />
            },
            {
                path: "/",
                element: <Login />
            },
            {
                path: "/Cart",
                element: <Cart />
            },
            {
                path: "/Checkout",
                element: <Checkout />
            },
            {
                path: "/forgot-password",
                element: <Forgotpassword />
            },
            {
                path: "/signup",
                element: <Signup />
            }

            ,
            {
                path: "/store",
                element: <Shophenna />
            }
            ,
            {
                path: "/Product/:id",
                element: <SingleProduct />
            }

            ,
            {
                path: "/Contact",
                element: <Contact />
            }
            ,
            {
                path: "/PrivacyPolicy",
                element: <PrivacyPolicy />
            }
            ,
            {
                path: "/RefoundPolicy",
                element: <RefoundPolicy />
            }
            ,
            {
                path: "/Shippingpolicy",
                element: <Shippingpolicy />
            }
            ,
            {
                path: "/TermandCondition",
                element: <TermandCondition />
            }


        ]
    }

]);
export default router;