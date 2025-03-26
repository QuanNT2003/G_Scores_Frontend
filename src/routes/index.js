import Dashboard from '~/pages/Dashboard';
import SearchScore from '~/pages/SearchScores';
import { DefaultLayout } from '~/components/layouts';
import Report from '~/pages/Report';
import Setting from '~/pages/Setting';

const publicRoutes = [
    {
        path: '/search',
        component: SearchScore,
        layout: DefaultLayout,
    },
    {
        path: '/report',
        component: Report,
        layout: DefaultLayout,
    },
    {
        path: '/setting',
        component: Setting,
        layout: DefaultLayout,
    },
];

const privateRoutes = [
    {
        path: '/',
        component: Dashboard,
        layout: DefaultLayout,
    },
];

export { publicRoutes, privateRoutes };
