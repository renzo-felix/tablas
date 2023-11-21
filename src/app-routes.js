import { HomePage, TasksPage, ProfilePage,ProductoPage, ReservarMesa } from './pages';
import { withNavigationWatcher } from './contexts/navigation';

const routes = [
    {
        path: '/Productos',
        element: ProductoPage
    },
    {
        path: '/tasks',
        element: TasksPage
    },
    {
        path: '/profile',
        element: ProfilePage
    },
    {
        path: '/home',
        element: HomePage
    },
    {
        path: '/Reserva',
        element: ReservarMesa
    }
];

export default routes.map(route => {
    return {
        ...route,
        element: withNavigationWatcher(route.element, route.path)
    };
});
