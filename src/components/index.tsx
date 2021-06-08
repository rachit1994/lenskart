import { lazy, createElement, Suspense } from 'react';

const Components: Record<string, any> = {
    Banner: lazy(() => import('./Header/Header.component')),
    Products: lazy(() => import('./Products/Products.component')),
    Collections: lazy(() => import('./Collections/Collections.component')),
    Terms: lazy(() => import('./Terms/Terms.component')),
    Contact: lazy(() => import('./Contact/Contact.component')),
    Footer: lazy(() => import('./Footer/Footer.component'))
}

export default (data: any) => {
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
