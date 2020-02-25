import React from "react";
import {
    Route
} from "react-router-dom";

function RouteWithSubRoutes(route: any) {
    const { path, routes, component, ...otherProps } = route;
    return (
        <Route
            path={path}
            {...otherProps}
            render={props => (
                <route.component {...props} routes={routes} />
            )}
        />
    );
}

export { RouteWithSubRoutes }