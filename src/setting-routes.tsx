import { ROUTE_PATH } from "config/constants";

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
import Compliance from "views/pages/user/settings/fleet/compliance/Compliance";
import Dispatch from "views/pages/user/settings/fleet/Dispatch";
import DriverActivity from "views/pages/user/settings/fleet/DriverActivity";
import DriverApp from "views/pages/user/settings/fleet/DriverApp";
import CreateWorkflow from "views/pages/user/settings/fleet/driver-app/CreateWorkflow";
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
    layout: ROUTE_PATH.SETTING
  },
  {
    path: "/org/user-roles",
    name: "User & Roles",
    component: UserRoles,
    layout: ROUTE_PATH.SETTING
  },
  {
    path: "/org/drivers",
    name: "Drivers",
    component: Drivers,
    layout: ROUTE_PATH.SETTING
  },
  {
    path: "/org/tags",
    name: "Tags",
    component: Tags,
    layout: ROUTE_PATH.SETTING
  },
  {
    path: "/org/feature-management",
    name: "Feature Management",
    component: FeatureManagement,
    layout: ROUTE_PATH.SETTING
  },
  {
    path: "/org/activity-log",
    name: "Activity Log",
    component: ActivityLog,
    layout: ROUTE_PATH.SETTING
  },
  {
    path: "/org/apps",
    name: "Apps",
    component: Apps,
    layout: ROUTE_PATH.SETTING
  },
  {
    path: "/org/billing",
    name: "Billing",
    component: Billing,
    layout: ROUTE_PATH.SETTING
  },
  // Devices
  {
    path: "/device/devices",
    name: "Devices",
    component: Devices,
    layout: ROUTE_PATH.SETTING
  },
  {
    path: "/device/configuration",
    name: "Configuration",
    component: Configuration,
    layout: ROUTE_PATH.SETTING
  },
  // Fleet
  {
    path: "/fleet/workflow-create",
    name: "Driver App",
    component: CreateWorkflow,
    layout: ROUTE_PATH.SETTING,
    isFixed: true,
  },
  {
    path: "/fleet/driver-app",
    name: "Driver App",
    component: DriverApp,
    layout: ROUTE_PATH.SETTING
  },
  {
    path: "/fleet/safety",
    name: "Safety",
    component: Safety,
    layout: ROUTE_PATH.SETTING
  },
  {
    path: "/fleet/compliance",
    name: "Compliance",
    component: Compliance,
    layout: ROUTE_PATH.SETTING
  },
  {
    path: "/fleet/dispatch",
    name: "Dispatch",
    component: Dispatch,
    layout: ROUTE_PATH.SETTING
  },
  {
    path: "/fleet/fuel-energy",
    name: "Fuel & Energy",
    component: FuelEnergy,
    layout: ROUTE_PATH.SETTING
  },
  {
    path: "/fleet/driver-activity",
    name: "Driver Activity",
    component: DriverActivity,
    layout: ROUTE_PATH.SETTING
  },
  {
    path: "/fleet/add-geo",
    name: "Addresses/Geofences",
    component: AddressesGeofences,
    layout: ROUTE_PATH.SETTING
  },
  {
    path: "/fleet/maps",
    name: "Maps",
    component: Maps,
    layout: ROUTE_PATH.SETTING
  },
  // Link -sharing
  {
    path: "/link-sharing/alert-contacts",
    name: "Alert Contacts",
    component: AlertContacts,
    layout: ROUTE_PATH.SETTING
  },
  {
    path: "/link-sharing/scheduled-reports",
    name: "Scheduled Reports",
    component: ScheduledReports,
    layout: ROUTE_PATH.SETTING
  },
  {
    path: "/link-sharing/live-sharing",
    name: "Live Sharing",
    component: LiveSharing,
    layout: ROUTE_PATH.SETTING
  },
  // developer
  {
    path: "/developer/metrics",
    name: "Developer Metrics",
    component: DeveloperMetrics,
    layout: ROUTE_PATH.SETTING
  },
  {
    path: "/developer/api-tokens",
    name: "API Tokens",
    component: APITokens,
    layout: ROUTE_PATH.SETTING
  },
  {
    path: "/developer/webhooks",
    name: "Webhooks",
    component: Webhooks,
    layout: ROUTE_PATH.SETTING
  },
];
export default dashRoutes;
