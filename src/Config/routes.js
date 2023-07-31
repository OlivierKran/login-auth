import Login from '../Pages/Login';
import Dashboard from '../Pages/Dashboard';
import NotFound from '../Pages/NotFound';

const routes = [
    {
        path: '/login',
        element: <Login />,
        isPrivate: false,
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
        isPrivate: true,
    },
    {
        path: '/*',
        element: <NotFound />,
        isPrivate: true,
    },
]

export default routes;