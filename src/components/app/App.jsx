import { Suspense, useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import AppRoutes from "../Routes/Routes";
// import ApiContainer from "../helpers/ApiContainer";
import { useDispatch } from "react-redux";
import { clearCart } from "../../store/cart/cartSlice";
import { checkUser } from "../../store/user/userSlice";
import Cart from "../Cart/Cart";
import Spiner from "../Spiner/Spiner";
// import '../../style/style.scss';

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(checkUser());
        setIsLoading(false);
    }, [dispatch]);

    const checkCartExpiration = () => {
        const cartData = localStorage.getItem("cart");
        if (cartData) {
            const parsedCart = JSON.parse(cartData);
            const currentTime = new Date().getTime();
            if (currentTime > parsedCart.expiration) {
                dispatch(clearCart());
                localStorage.removeItem("cart"); // Очистить localStorage
            }
        }
    };

    useEffect(() => {
        checkCartExpiration();
        // Проверяем корзину каждые 30 секунд
        const interval = setInterval(() => {
            checkCartExpiration();
        }, 60000); // 60 секунд

        return () => clearInterval(interval); // Очищаем интервал при размонтировании
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch]);

    return (
        <div className="wrapper">
            <Header />
            <Cart style={{ justifyContent: "flex-end" }} />
            <main className="main">
                {isLoading ? (
                    <Spiner />
                ) : (
                    <Suspense fallback={<Spiner />}>
                        <AppRoutes />
                    </Suspense>
                )}
            </main>
            <Footer />
        </div>
    );
}

export default App;
