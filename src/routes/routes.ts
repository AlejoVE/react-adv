import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from '../01-lazyload/pages/NoLazy';

type JSXComponent = () => JSX.Element;
interface Routes {
    to: string,
    path: string,
    name: string,
    Component: LazyExoticComponent<() => JSX.Element> | JSXComponent;

}

const LazyLayout = lazy(() => import(/*webpackChunkName: "LazyLayout"*/ '../01-lazyload/layout/LazyLayout'));



export const routes: Routes[] = [
    {
        to: '/lazyload/',
        path: '/lazyload/*',
        Component: LazyLayout,
        name: 'LazyLayout'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No Lazy'
    },

]