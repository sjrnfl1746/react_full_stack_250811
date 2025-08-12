import {createBrowserRouter} from "react-router-dom";
import {lazy, Suspense} from "react";
import todoRouter from "./todoRouter.jsx";

// eslint-disable-next-line react-refresh/only-export-components
const Loading = () => <div>Loading...</div>;
const Main = lazy(() => import('../pages/MainPage.jsx'));
const About = lazy(() => import('../pages/AboutPage.jsx'));
const TodoIndex = lazy(() => import('../pages/todo/IndexPage.jsx'));

const root = createBrowserRouter([
    {
        path: "",
        element: (
            <Suspense fallback={<Loading/>}>
                <Main/>
            </Suspense>
        ),
    },

    {
        path: "about",
        element: (<Suspense fallback={<Loading/>}>
            <About/>
        </Suspense>)
    },

    {
        path: "todo",
        element: (<Suspense fallback={<Loading/>}>
            <TodoIndex/>
        </Suspense>),
        children: todoRouter()
    }
])

export default root;