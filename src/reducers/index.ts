import { combineReducers } from 'redux';
import { loadingBarReducer as loadingBar } from 'react-redux-loading-bar';

import authentication, { AuthenticationState } from './authentication';
import account, { AccountState } from './account';
import vehicle, { VehicleState } from './vehicle';
import overview, { OverviewState } from './overview';
import settingOrg, { SettingOrgState } from './setting-org';
import settingDevice, { SettingDeviceState } from './setting-device';

export interface IRootState {
  readonly authentication: AuthenticationState;
  readonly loadingBar: any;
  readonly account: AccountState;
  readonly vehicle: VehicleState;
  readonly overview: OverviewState;
  readonly settingOrg: SettingOrgState;
  readonly settingDevice: SettingDeviceState;
}

const rootReducer = combineReducers<IRootState>({
  authentication,
  loadingBar,
  account,
  vehicle,
  overview,
  settingOrg,
  settingDevice
});

export default rootReducer;
