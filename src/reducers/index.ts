import { combineReducers } from 'redux';
import { loadingBarReducer as loadingBar } from 'react-redux-loading-bar';

import authentication, { AuthenticationState } from './authentication';
import account, { AccountState } from './account';
import vehicle, { VehicleState } from './vehicle';
import overview, { OverviewState } from './overview';
import settingOrg, { SettingOrgState } from './setting-org';

export interface IRootState {
  readonly authentication: AuthenticationState;
  readonly loadingBar: any;
  readonly account: AccountState;
  readonly vehicle: VehicleState;
  readonly overview: OverviewState;
  readonly settingOrg: SettingOrgState;
}

const rootReducer = combineReducers<IRootState>({
  authentication,
  loadingBar,
  account,
  vehicle,
  overview,
  settingOrg
});

export default rootReducer;
