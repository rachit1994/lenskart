import { lazy, createElement, Suspense } from 'react';

const Components: Record<string, any> = {
    Banner: lazy(() => import('./Header/Header.component')),
    Products: lazy(() => import('./Products/Products.component')),
    Collections: lazy(() => import('./Products/Products.component'))
}

export default (data: any) => {
    console.log('coming in components', data)
    if (typeof Components[data.template] !== "undefined") {
        return (
            <Suspense fallback={<div>Loading...</div>} key={data._uid}>
                {createElement(Components[data.template], {
                    ...data
                })}
            </Suspense>
        );
    }
    return (
        <Suspense fallback={<div>Loading...</div>} key={data._uid}>
            { createElement(
                () => <div>The component {data.template} has not been created yet.</div>,
            )}
        </Suspense>
    )
};
