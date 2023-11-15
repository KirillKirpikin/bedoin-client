import { Navigate} from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import { useSelector } from "react-redux";


const  AdminRoute = ({children}) => {
    const {currentUser, status} = useSelector(({user})=>user);
    if(status === 'loading') {
        return <h2>Loading...</h2>
    }
    if (currentUser === null || !currentUser.role === 'ADMIN') {
        return <Navigate to={ROUTES.HOME} />;
    }
    return children;   
};

  
  export default AdminRoute;