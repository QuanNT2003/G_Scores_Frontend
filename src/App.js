import { DefaultLayout } from './components/layouts';
import { Routes, Route } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '~/routes';
import { Fragment } from 'react';
import './index.css';

function App() {
    return (
        <Routes>
            {publicRoutes.map((route, index) => {
                const Page = route.component;

                let Layout = DefaultLayout;

                if (route.layout) {
                    Layout = route.layout;
                } else if (route.layout === null) {
                    Layout = Fragment;
                }
                return (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={
                            <Layout title={route.title} back={route.back}>
                                <Page />
                            </Layout>
                        }
                    />
                );
            })}
            {privateRoutes.map((route, index) => {
                const Page = route.component;

                let Layout = DefaultLayout;

                if (route.layout) {
                    Layout = route.layout;
                } else if (route.layout === null) {
                    Layout = Fragment;
                }
                return (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={
                            <Layout title={route.title} back={route.back}>
                                <Page />
                            </Layout>
                        }
                    />
                );
            })}
        </Routes>
    );
}

export default App;
