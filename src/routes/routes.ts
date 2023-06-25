import { lazy, LazyExoticComponent } from "react";

type JSXComponent = () => JSX.Element;
interface Routes {
    to: string,
    path: string,
    name: string,
    Component: LazyExoticComponent<() => JSX.Element> | JSXComponent;

}


const lazy1 = lazy(() => import(/*webpackChunkName: "LazyPage1"*/ '../01-lazyload/pages/LazyPage1'))
const lazy2 = lazy(() => import(/*webpackChunkName: "LazyPage2"*/ '../01-lazyload/pages/LazyPage2'))
const lazy3 = lazy(() => import(/*webpackChunkName: "LazyPage3"*/ '../01-lazyload/pages/LazyPage3'))

export const routes: Routes[] = [
    {
        to: '/lazy1',
        path: 'lazy1',
        Component: lazy1,
        name: 'lazy-1'
    },
    {
        to: '/2',
        path: '2',
        Component: lazy2,
        name: 'lazy-2'
    },
    {
        to: '/lazy3',
        path: 'lazy3',
        Component: lazy3,
        name: 'lazy-3'
    }
]