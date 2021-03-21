import Overview from "views/pages/user/overview/Overview";
import Alerts from "views/pages/user/alerts/Alerts";
import Compliance from "views/pages/user/compliance/Compliance";
import Dispatch from "views/pages/user/dispatch/Dispatch";
import Documents from "views/pages/user/documents/Documents";
import FuelEnergy from "views/pages/user/fuel-energy/FuelEnergy";
import InternalTools from "views/pages/user/internal-tools/InternalTools";
import Maintenance from "views/pages/user/maintenance/Maintenance";
import Messages from "views/pages/user/messages/Messages";
import Reports from "views/pages/user/reports/Reports";
import Safety from "views/pages/user/safety/Safety";
import Settings from "views/pages/user/settings/Settings";
import General from "views/pages/user/settings/General";
import UserRoles from "views/pages/user/settings/UserRoles";
import Drivers from "views/pages/user/settings/Drivers";

import Assets from "views/pages/user/overview/Assets";

// @material-ui/icons
import OverviewIcon from "components/Icons/OverviewIcon";
import ComplianceIcon from "components/Icons/ComplianceIcon";
import SafetyIcon from "components/Icons/SafetyIcon";
import MaintenanceIcon from "components/Icons/MaintenanceIcon";
import DispatchIcon from "components/Icons/DispatchIcon";
import FuelEnergyIcon from "components/Icons/FuelEnergyIcon";
import DocumentsIcon from "components/Icons/DocumentsIcon";
import ReportsIcon from "components/Icons/ReportsIcon";
import InternalToolsIcon from "components/Icons/InternalToolsIcon";
import MessagesIcon from "components/Icons/MessagesIcon";
import AlertsIcon from "components/Icons/AlertsIcon";
import SettingsIcon from "components/Icons/SettingsIcon";

import VehicleRegisterPage from "views/pages/auth/VehicleRegisterPage";

const dashRoutes = [
  {
    path: "/general",
    name: "General",
    icon: AlertsIcon,
    component: General,
    layout: "/setting"
  },
  {
    path: "/drivers",
    name: "Drivers",
    icon: AlertsIcon,
    component: Drivers,
    layout: "/setting"
  },
  {
    path: "/user-roles",
    name: "User & Roles",
    icon: AlertsIcon,
    component: UserRoles,
    layout: "/setting"
  },
];
export default dashRoutes;
