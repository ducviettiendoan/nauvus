import { combineReducers } from 'redux';
import { loadingBarReducer as loadingBar } from 'react-redux-loading-bar';

import authentication, { AuthenticationState } from './authentication';
import account, { AccountState } from './account';
import vehicle, { VehicleState } from './vehicle';

export interface IRootState {
  readonly authentication: AuthenticationState;
  readonly loadingBar: any;
  readonly account: AccountState;
  readonly vehicle: VehicleState;
}

const rootReducer = combineReducers<IRootState>({
  authentication,
  loadingBar,
  account,
  vehicle
});

export default rootReducer;
