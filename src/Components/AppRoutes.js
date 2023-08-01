import { Redirect, Route } from "react-router-dom";
import { useAuthState } from "../Context/context";

const AppRoutes = ({ element: Element, path, isPrivate, ...rest}) => {
    
    const userDetails = useAuthState()
    return (
        <Route
            path={path}
            render={props =>
            isPrivate && !Boolean(userDetails.token) ? (
                <Redirect
                to={{ pathname: "/login" }} />
            ) : (
                <Element {...props} />
            )
        }
        {...rest}
        />
    )
}

export default AppRoutes;