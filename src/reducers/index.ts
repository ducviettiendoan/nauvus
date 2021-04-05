import { combineReducers } from 'redux';
import { loadingBarReducer as loadingBar } from 'react-redux-loading-bar';

import authentication, { AuthenticationState } from './authentication';
import account, { AccountState } from './account';
import vehicle, { VehicleState } from './vehicle';
import overview, { OverviewState } from './overview';
import settingOrg, { SettingOrgState } from './setting-org';
import settingDevice, { SettingDeviceState } from './setting-device';
import settingFleet, { SettingFleetState } from './setting-fleet';
import settingLinkSharing, { SettingLinkSharingState } from "./setting-link-sharing";
import settingDeveloper, { SettingDeveloperState } from "./setting-developer";
import fuelEnergy, {FuelEnergyState} from './fuel-energy';
import compliance, {ComplianceState} from "./compliance";

export interface IRootState {
  readonly authentication: AuthenticationState;
  readonly loadingBar: any;
  readonly account: AccountState;
  readonly vehicle: VehicleState;
  readonly overview: OverviewState;
  readonly settingOrg: SettingOrgState;
  readonly settingDevice: SettingDeviceState;
  readonly settingFleet: SettingFleetState;
  readonly settingLinkSharing: SettingLinkSharingState;
  readonly settingDeveloper: SettingDeveloperState;
  readonly fuelEnergy: FuelEnergyState;
  readonly compliance: ComplianceState
}

const rootReducer = combineReducers<IRootState>({
  authentication,
  loadingBar,
  account,
  vehicle,
  overview,
  settingOrg,
  settingDevice,
  settingFleet,
  settingLinkSharing,
  settingDeveloper,
  fuelEnergy,
  compliance
});

export default rootReducer;
