import Login from '../Pages/Login';
import Dashboard from '../Pages/Dashboard';
import NotFound from '../Pages/NotFound';

const routes = [
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/dashboard',
        element: <Dashboard />
    },
    {
        path: '/*',
        element: <NotFound />
    },
]

export default routes;