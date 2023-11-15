import { Suspense, useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import AppRoutes from "../Routes/Routes";
// import ApiContainer from "../helpers/ApiContainer";
import { checkUser } from "../../store/user/userSlice";
import { useDispatch } from "react-redux";
import Spiner from "../Spiner/Spiner";
import Cart from "../Cart/Cart";
// import '../../style/style.scss';

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(checkUser());
    setIsLoading(false)
    
  },[dispatch])

  return (
    <div className="wrapper">
      <Header/>
      <Cart style={{ justifyContent: "flex-end"}}/>
      <main className="main">
        {isLoading ? (
            <Spiner/>
          ) : (
            <Suspense fallback={<Spiner/>}>
              <AppRoutes/>
            </Suspense>     
          )
          }
      </main>
      <Footer/>
    </div>
  );
}

export default App;