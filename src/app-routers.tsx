import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';

// import Login from "./views/pages/common/Login";
// import AuthRouter from './shared/layouts/router/NoAuthRouter';

import RtlLayout from 'layouts/RTL.js';
import AuthLayout from 'layouts/Auth.js';
import AdminLayout from 'layouts/Admin.js';
import UserLayout from 'layouts/User';
import SettingLayout from 'layouts/Setting';
import OverviewLayout from 'layouts/Overview';

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
      <Route path="/rtl" component={RtlLayout} />
      <Route path="/auth" component={AuthLayout} />
      <Route path="/admin" component={AdminLayout} />
      <Route path="/user" component={UserLayout} />
      <Route path="/setting" component={SettingLayout} />
      <Route path="/o" component={OverviewLayout} />
      <Redirect from="/" to="/o/overview" />
    </Switch>
  </div>
);

export default Routes;
