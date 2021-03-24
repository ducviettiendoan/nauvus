import General from "views/pages/user/settings/org/General";
import UserRoles from "views/pages/user/settings/org/UserRoles";
import Drivers from "views/pages/user/settings/org/Drivers";
import Tags from "views/pages/user/settings/org/Tags";
import FeatureManagement from "views/pages/user/settings/org/FeatureManagement";
import ActivityLog from "views/pages/user/settings/org/ActivityLog";
import Apps from "views/pages/user/settings/org/Apps";
import Billing from "views/pages/user/settings/org/Billing";

import Devices from "views/pages/user/settings/devices/Devices";
import Configuration from "views/pages/user/settings/devices/Configuration";

import AddressesGeofences from "views/pages/user/settings/fleet/AddressesGeofences";
import Compliance from "views/pages/user/settings/fleet/Compliance";
import Dispatch from "views/pages/user/settings/fleet/Dispatch";
import DriverActivity from "views/pages/user/settings/fleet/DriverActivity";
import DriverApp from "views/pages/user/settings/fleet/DriverApp";
import FuelEnergy from "views/pages/user/settings/fleet/FuelEnergy";
import Maps from "views/pages/user/settings/fleet/Maps";
import Safety from "views/pages/user/settings/fleet/Safety";

import AlertContacts from "views/pages/user/settings/links-sharing/AlertContacts";
import LiveSharing from "views/pages/user/settings/links-sharing/LiveSharing";
import ScheduledReports from "views/pages/user/settings/links-sharing/ScheduledReports";

import APITokens from "views/pages/user/settings/developer/APITokens";
import DeveloperMetrics from "views/pages/user/settings/developer/DeveloperMetrics";
import Webhooks from "views/pages/user/settings/developer/Webhooks";

const dashRoutes = [
  {
    path: "/org/general",
    name: "General",
    component: General,
    layout: "/setting"
  },
  {
    path: "/org/user-roles",
    name: "User & Roles",
    component: UserRoles,
    layout: "/setting"
  },
  {
    path: "/org/drivers",
    name: "Drivers",
    component: Drivers,
    layout: "/setting"
  },
  {
    path: "/org/tags",
    name: "Tags",
    component: Tags,
    layout: "/setting"
  },
  {
    path: "/org/feature-management",
    name: "Feature Management",
    component: FeatureManagement,
    layout: "/setting"
  },
  {
    path: "/org/activity-log",
    name: "Activity Log",
    component: ActivityLog,
    layout: "/setting"
  },
  {
    path: "/org/apps",
    name: "Apps",
    component: Apps,
    layout: "/setting"
  },
  {
    path: "/org/billing",
    name: "Billing",
    component: Billing,
    layout: "/setting"
  },
  // Devices
  {
    path: "/device/devices",
    name: "Devices",
    component: Devices,
    layout: "/setting"
  },
  {
    path: "/device/configuration",
    name: "Configuration",
    component: Configuration,
    layout: "/setting"
  },
  // Flett
  {
    path: "/fleet/driver-app",
    name: "Driver App",
    component: DriverApp,
    layout: "/setting"
  },
  {
    path: "/fleet/safety",
    name: "Safety",
    component: Safety,
    layout: "/setting"
  },
  {
    path: "/fleet/compliance",
    name: "Compliance",
    component: Compliance,
    layout: "/setting"
  },
  {
    path: "/fleet/dispatch",
    name: "Dispatch",
    component: Dispatch,
    layout: "/setting"
  },
  {
    path: "/fleet/fuel-energy",
    name: "Fuel & Energy",
    component: FuelEnergy,
    layout: "/setting"
  },
  {
    path: "/fleet/driver-activity",
    name: "Driver Activity",
    component: DriverActivity,
    layout: "/setting"
  },
  {
    path: "/fleet/add-geo",
    name: "Addresses/Geofences",
    component: AddressesGeofences,
    layout: "/setting"
  },
  {
    path: "/fleet/maps",
    name: "Maps",
    component: Maps,
    layout: "/setting"
  },
  // Link -sharing
  {
    path: "/links-sharing/alert-contacts",
    name: "Alert Contacts",
    component: AlertContacts,
    layout: "/setting"
  },
  {
    path: "/links-sharing/scheduled-reports",
    name: "Scheduled Reports",
    component: ScheduledReports,
    layout: "/setting"
  },
  {
    path: "/links-sharing/live-sharing",
    name: "Live Sharing",
    component: LiveSharing,
    layout: "/setting"
  },
  // developer
  {
    path: "/developer/metrics",
    name: "Developer Metrics",
    component: DeveloperMetrics,
    layout: "/setting"
  },
  {
    path: "/developer/api-tokens",
    name: "API Tokens",
    component: APITokens,
    layout: "/setting"
  },
  {
    path: "/developer/webhooks",
    name: "Webhooks",
    component: Webhooks,
    layout: "/setting"
  },
];
export default dashRoutes;
