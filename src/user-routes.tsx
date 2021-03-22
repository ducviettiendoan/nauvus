import Overview from "views/pages/user/overview/Overview";
import Alerts from "views/pages/user/alerts/Alerts";
import ComplianceDashboard from "views/pages/user/compliance/ComplianceDashboard";
import DriverHOS from "views/pages/user/compliance/DriverHOS";
import HOSVialations from "views/pages/user/compliance/HOSVialations";
import UnassignedHOS from "views/pages/user/compliance/UnassignedHOS";
import DriverHOSAudit from "views/pages/user/compliance/DriverHOSAudit";
import DutyStatusSummary from "views/pages/user/compliance/DutyStatusSummary";
import HOSAuditTransfer from "views/pages/user/compliance/HOSAuditTransfer";

import Dispatch from "views/pages/user/dispatch/Dispatch";
import Documents from "views/pages/user/documents/Documents";
import FuelEnergy from "views/pages/user/fuel-energy/FuelEnergy";
import InternalTools from "views/pages/user/internal-tools/InternalTools";
import Maintenance from "views/pages/user/maintenance/Maintenance";
import Messages from "views/pages/user/messages/Messages";
import Reports from "views/pages/user/reports/Reports";
import Safety from "views/pages/user/safety/Safety";
import Settings from "views/pages/user/settings/Settings";

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
    collapse: true,
    name: "Overview",
    icon: OverviewIcon,
    state: "overviewCollapse",
    layout: "/user",
    views: [
      {
        path: "/overview",
        name: "Overview",
        component: Overview,
        layout: "/user"
      },
      {
        path: "/assets",
        name: "Assets",
        component: Assets,
        layout: "/user"
      },
    ]
  },
  {
    path: "/safety",
    name: "Safety",
    icon: SafetyIcon,
    component: Safety,
    layout: "/user"
  },
  {
    collapse: true,
    name: "Compliance",
    icon: ComplianceIcon,
    state: "complianceCollapse",
    layout: "/user",
    views: [
      {
        path: "/compliance/dashboard",
        name: "Compliance",
        component: ComplianceDashboard,
        layout: "/user"
      },
      {
        path: "/compliance/driver-hos",
        name: "Driver HOS",
        component: DriverHOS,
        layout: "/user"
      },
      {
        path: "/compliance/hos-vialations",
        name: "HOS Vialations",
        component: HOSVialations,
        layout: "/user"
      },
      {
        path: "/compliance/unassigned-hos",
        name: "Unassigned HOS",
        component: UnassignedHOS,
        layout: "/user"
      },
      {
        path: "/compliance/driver-hos-audit",
        name: "Driver HOS audit",
        component: DriverHOSAudit,
        layout: "/user"
      },
      {
        path: "/compliance/duty-status-summary",
        name: "Duty status Summary",
        component: DutyStatusSummary,
        layout: "/user"
      },
      {
        path: "/compliance/hos-audit-transfer",
        name: "HOS Audit transfer",
        component: HOSAuditTransfer,
        layout: "/user"
      },
    ]
  },
  {
    path: "/maintenance",
    name: "Maintenance",
    icon: MaintenanceIcon,
    component: Maintenance,
    layout: "/user"
  },
  {
    path: "/dispatch",
    name: "Dispatch",
    icon: DispatchIcon,
    component: Dispatch,
    layout: "/user"
  },
  {
    path: "/fuel-energy",
    name: "Fuel & Energy",
    icon: FuelEnergyIcon,
    component: FuelEnergy,
    layout: "/user"
  },
  {
    path: "/documents",
    name: "Documents",
    icon: DocumentsIcon,
    component: Documents,
    layout: "/user"
  },
  {
    path: "/reports",
    name: "Reports",
    icon: ReportsIcon,
    component: Reports,
    layout: "/user"
  },
  {
    path: "/internal-tools",
    name: "Internal Tools",
    icon: InternalToolsIcon,
    component: InternalTools,
    layout: "/user"
  },
  {
    path: "/messages",
    name: "Messages",
    icon: MessagesIcon,
    component: Messages,
    layout: "/user"
  },
  {
    path: "/alerts",
    name: "Alerts",
    icon: AlertsIcon,
    component: Alerts,
    layout: "/user"
  },
  {
    path: "/org/general",
    name: "Settings",
    icon: SettingsIcon,
    component: Settings,
    layout: "/setting"
  },
];
export default dashRoutes;
