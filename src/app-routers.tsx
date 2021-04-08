import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ROUTE_PATH } from "config/constants";

import Loadable from 'react-loadable';

import AuthLayout from 'layouts/Auth.js';
import AdminLayout from 'layouts/Admin.js';
import UserLayout from 'layouts/User';
import SettingLayout from 'layouts/Setting';
import OverviewLayout from 'layouts/Overview';
import DispatchLayout from 'layouts/Dispatch';

// const ExamModule = Loadable({
//   loader: () => import(/* webpackChunkName: "exam" */ 'src/shared/modules/exam'),
//   loading: () => <div></div>
// });

// const AppModule = Loadable({
//   loader: () => import(/* webpackChunkName: "app" */ 'src/shared/modules/app'),
//   loading: () => <div></div>
// });

// const NoAuthModule = Loadable({
//   loader: () => import(/* webpackChunkName: "app" */ 'src/shared/modules/no-auth'),
//   loading: () => <div></div>
// });
// tslint:enable

const Routes = () => (
  <div className="view-routes">
    <Switch>
      <Route path={ ROUTE_PATH.ADMIN } component={AdminLayout} />
      <Route path={ ROUTE_PATH.AUTH } component={AuthLayout} />
      <Route path={ ROUTE_PATH.USER } component={UserLayout} />
      <Route path={ ROUTE_PATH.SETTING } component={SettingLayout} />
      <Route path={ ROUTE_PATH.OVERVIEW } component={OverviewLayout} />
      <Route path={ ROUTE_PATH.DISPATCH } component={DispatchLayout} />
      <Redirect from="/" to={ ROUTE_PATH.OVERVIEW + "/overview" } />
    </Switch>
  </div>
);

export default Routes;
