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
import { Bookhenna } from '../pages/Bookhenna';
import Booking from '../pages/Booking';
import Time from '../pages/Time';
import Times from '../pages/Times';
import Learnhenna from '../pages/Learnhenna';
import Reviewlearn from '../components/Reviewlearn';
import Hennamix from '../pages/Hennamix';
import Hennaart from '../pages/Hennaart';
import Hennanail from '../pages/Hennanail';



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
                path: "/",
                element: <Home />
            },
            {
                path: "/Shophenna",
                element: <Shophenna />
            },
            {
                path: "/login",
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
            },
            {
                path: "/Bookhenna",
                element: <Bookhenna />
            },
            {
                path: "/Booking",
                element: <Booking />
            },
            {
                path: "/Time",
                element: <Time />
            },
            {
                path: "/Times",
                element: <Times />
            },
            {
                path: "/Learnhenna",
                element: <Learnhenna />
            },
            {
                path: "/Reviewlearn",
                element: <Reviewlearn />
            },
            {
                path: "/Hennamix", 
                element: <Hennamix />
            },
            {
                path: "/Hennaart", 
                element: <Hennaart />
            },
            {
                path: "/Hennanail", 
                element: <Hennanail />
            }


        ]
    }

]);
export default router;