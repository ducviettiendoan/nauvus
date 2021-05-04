import {ROUTE_PATH} from "config/constants";

import Overview from "views/pages/user/overview/Overview";
import VehicleDetails from "views/pages/user/overview/vehicle/VehicleDetails"
import TripTimeline from "views/pages/user/overview/vehicle/vehicle-sidebar-content/trip-history/TripTimeline"
import Alerts from "views/pages/user/alerts/Alerts";
import ComplianceDashboard from "views/pages/user/compliance/ComplianceDashboard";
import DriverHOS from "views/pages/user/compliance/DriverHOS";
import DriverHOSReport from "views/pages/user/compliance/driver-hos/DriverHOSReport";
import HOSVialations from "views/pages/user/compliance/HOSViolations";
import UnassignedHOS from "views/pages/user/compliance/UnassignedHOS";
import DriverHOSAudit from "views/pages/user/compliance/DriverHOSAudit";
import DriverHOSAuditDetails from "views/pages/user/compliance/driver-hos-audit/DriverHOSAuditDetails";
import DutyStatusSummary from "views/pages/user/compliance/DutyStatusSummary";
import HOSAuditTransfer from "views/pages/user/compliance/HOSAuditTransfer";
import FuelPurchase from "views/pages/user/fuel-energy/FuelPurchase";
import UnassignedHOSReport from "views/pages/user/compliance/unassigned-hos/UnassignedHOSReport"

import Dispatch from "views/pages/user/dispatch/Dispatch";
import Documents from "views/pages/user/documents/Documents";
import SubmittedDetail from "./views/pages/user/documents/components/submitted/SubmittedDetail";
import FuelEnergy from "views/pages/user/fuel-energy/FuelEnergy";
import IFTA from "views/pages/user/fuel-energy/IFTA";
import DriverEfficiency from "views/pages/user/fuel-energy/DriverEfficiency"
import DriverEfficiencyReport from "views/pages/user/fuel-energy/driver-efficiency-parts/DriverEfficiencyReport"
import InternalTools from "views/pages/user/internal-tools/InternalTools";
import Maintenance from "views/pages/user/maintenance/Maintenance";
import DriverVehicleReport from "views/pages/user/maintenance/components/DriverVehicleReport";
import Messages from "views/pages/user/messages/Messages";
import Reports from "views/pages/user/reports/Reports";
import SafetyInbox from "views/pages/user/safety/SafetyInbox";
import Settings from "views/pages/user/settings/Settings";
import Assets from "views/pages/user/overview/Assets";
import SafetyInboxCrash from "views/pages/user/safety/crash/Crash";
import Proximity from "views/pages/user/overview/Proximity";
import Drivers from "views/pages/user/overview/Drivers";
import DriverDetail from "views/pages/user/overview/drivers/DriverDetail";
import DriverRecord from "views/pages/user/overview/drivers/DriverRecord";
import Logs from "views/pages/user/overview/Logs";
import Coaching from "views/pages/user/safety/Coaching";
import DashCam from "views/pages/user/safety/DashCam";
import DriverAssignment from "views/pages/user/safety/DriverAssignment";
import UnassignedDetail from "views/pages/user/safety/driver-assignment/unassigned/UnassignedDetail"
import Cameras from "views/pages/user/safety/Cameras";
import SafetyReport from "views/pages/user/safety/Report";
import SafetyReportDetails from "views/pages/user/safety/report/SafetyReportDetails";
import SafetyReportTable from "views/pages/user/safety/report/SafetyReportTable"
import VideoRetrieval from "views/pages/user/safety/VideoRetrieval";
import Retrieval from "views/pages/user/safety/video-retrieval/Retrieval";
import DashboardReport from "views/pages/user/reports/DashboardReport";


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

import StatusGreenIcon from "components/Icons/StatusGreenIcon";
import StatusRedIcon from "components/Icons/StatusRedIcon";

const dashRoutes = [
    {
        collapse: true,
        name: "Overview",
        icon: OverviewIcon,
        state: "overviewCollapse",
        layout: ROUTE_PATH.OVERVIEW,
        views: [
            {
                path: "/overview",
                name: "Vehicle",
                component: Overview,
                layout: ROUTE_PATH.OVERVIEW
            },
            {
                path: "/vehicle/:id",
                name: "Vehicle Details",
                component: VehicleDetails,
                layout: ROUTE_PATH.OVERVIEW,
                isFixed: true,
            },
            {
                path: "/trip-timeline/on-going",
                name: "Trip Timeline",
                component: TripTimeline,
                layout: ROUTE_PATH.OVERVIEW,
                isFixed: true,
            },
            {
                path: "/assets",
                name: "Assets",
                component: Assets,
                layout: ROUTE_PATH.OVERVIEW
            },
            {
                path: "/drivers/:id",
                name: "Drivers Detail",
                component: DriverDetail,
                layout: ROUTE_PATH.OVERVIEW,
                isFixed: true,
            },
            {
                path: "/driver-record/:id",
                name: "Drivers Record",
                component: DriverRecord,
                layout: ROUTE_PATH.OVERVIEW,
                isFixed: true,
            },
            {
                path: "/drivers",
                name: "Drivers",
                component: Drivers,
                layout: ROUTE_PATH.OVERVIEW
            },
            {
                path: "/proximity",
                name: "Proximity",
                component: Proximity,
                layout: ROUTE_PATH.OVERVIEW
            },
            {
                path: "/logs",
                name: "Logs",
                component: Logs,
                layout: ROUTE_PATH.OVERVIEW
            },
        ]
    },

    {
        collapse: true,
        name: "Safety",
        icon: SafetyIcon,
        state: "safetyCollapse",
        layout: ROUTE_PATH.SAFETY,
        views: [
            {
                path: "/crash",
                name: "Crash",
                component: SafetyInboxCrash,
                layout: ROUTE_PATH.SAFETY,
                isFixed: true,
            },
            {
                path: "/inbox",
                name: "Safety Inbox",
                component: SafetyInbox,
                layout: ROUTE_PATH.SAFETY
            },
            {
                path: "/driver-assignment/:id",
                name: "Driver Assignment Details",
                component: UnassignedDetail,
                layout: ROUTE_PATH.SAFETY,
                isFixed: true
            },
            {
                path: "/driver-assignment",
                name: "Driver Assignment",
                component: DriverAssignment,
                layout: ROUTE_PATH.SAFETY
            },
            {
                path: "/coaching",
                name: "Coaching",
                component: Coaching,
                layout: ROUTE_PATH.SAFETY
            },

            {
                path: "/dash-cam",
                name: "Dash Cam",
                component: DashCam,
                layout: ROUTE_PATH.SAFETY
            },
            {
                path: "/cameras",
                name: "Cameras",
                component: Cameras,
                layout: ROUTE_PATH.SAFETY
            },
            {
                path: "/video-library",
                name: "Video Library",
                component: VideoRetrieval,
                layout: ROUTE_PATH.SAFETY,
            },
            {
                path: "/video-retrieval",
                name: "Video Retrieval",
                component: Retrieval,
                layout: ROUTE_PATH.SAFETY,
                isFixed: true
            },
            {
                path: "/safety-report",
                name: "Safety Report",
                component: SafetyReport,
                layout: ROUTE_PATH.SAFETY
            },
            {
                path: "/safety-report-details",
                name: "Safety Report Details",
                component: SafetyReportDetails,
                layout: ROUTE_PATH.SAFETY
            },
            {
                path: "/safety-report-table",
                name: "Safety Report Table",
                component: SafetyReportTable,
                layout: ROUTE_PATH.SAFETY
            },
        ]
    },

    {
        collapse: true,
        name: "Compliance",
        icon: ComplianceIcon,
        state: "complianceCollapse",
        layout: ROUTE_PATH.USER,
        views: [
            {
                path: "/compliance/dashboard",
                name: "Compliance",
                component: ComplianceDashboard,
                layout: ROUTE_PATH.USER
            },
            {
                path: "/compliance/driver-hos",
                name: "Driver HOS",
                component: DriverHOS,
                layout: ROUTE_PATH.USER
            },
            {
                path: "/compliance/driver-hos-report",
                name: "Driver HOS Report - Ali Singh",
                component: DriverHOSReport,
                layout: ROUTE_PATH.USER,
                isFixed: true
            },
            {
                path: "/compliance/hos-vialations",
                name: "HOS Violations",
                component: HOSVialations,
                layout: ROUTE_PATH.USER
            },
            {
                path: "/compliance/unassigned-hos",
                name: "Unassigned HOS",
                component: UnassignedHOS,
                layout: ROUTE_PATH.USER
            },
            {
                path: "/compliance/unassigned-hos-report/:id",
                name: "Unassigned HOS Report",
                component: UnassignedHOSReport,
                layout: ROUTE_PATH.USER,
                isFixed: true,
            },
            {
                path: "/compliance/driver-hos-audit",
                name: "Driver HOS audit",
                component: DriverHOSAudit,
                layout: ROUTE_PATH.USER
            },
            {
                path: "/compliance/driver-hos-audit-report/:id",
                name: "Driver HOS audit/ Ali Singh",
                component: DriverHOSAuditDetails,
                layout: ROUTE_PATH.USER,
                isFixed: true,
            },
            {
                path: "/compliance/duty-status-summary",
                name: "Duty status Summary",
                component: DutyStatusSummary,
                layout: ROUTE_PATH.USER
            },
            {
                path: "/compliance/hos-audit-transfer",
                name: "HOS Audit transfer",
                component: HOSAuditTransfer,
                layout: ROUTE_PATH.USER
            },
        ]
    },
    {
        collapse: true,
        name: "Maintenance",
        icon: MaintenanceIcon,
        state: "maintenaceCollapse",
        layout: ROUTE_PATH.USER,
        views: [
            {
                path: "/maintenance/dashboard",
                name: "Maintenance",
                component: Maintenance,
                layout: ROUTE_PATH.USER,

            },
            {
                path: "/maintenance/driver-vehicle-inspection-report/vehicle101",
                name: "Driver Vehicle Inspection Reports",
                component: DriverVehicleReport,
                layout: ROUTE_PATH.USER
            }
        ]
    },
    {
        path: "/dispatch",
        name: "Dispatch",
        icon: DispatchIcon,
        component: Dispatch,
        layout: ROUTE_PATH.DISPATCH
    },
    {
        collapse: true,
        name: "Fuel & Energy",
        icon: FuelEnergyIcon,
        state: "fuelEnergyCollapse",
        layout: ROUTE_PATH.USER,
        views: [
            {
                path: "/fuel-energy/dashboard",
                name: "Fuel & Energy",
                component: FuelEnergy,
                layout: ROUTE_PATH.USER
            },
            {
                path: "/fuel-energy/fuel-purchase",
                name: "Fuel Purchase",
                component: FuelPurchase,
                layout: ROUTE_PATH.USER
            },
            {
                path: "/fuel-energy/driver-efficiency",
                name: "Driver Efficiency Report",
                component: DriverEfficiency,
                layout: ROUTE_PATH.USER
            },
            {
                path: "/fuel-energy/driver-efficiencies-report",
                name: "Driver Efficiency",
                component: DriverEfficiencyReport,
                layout: ROUTE_PATH.USER,
            },

            {
                path: "/fuel-energy/IFTA",
                name: "IFTA",
                component: IFTA,
                layout: ROUTE_PATH.USER,
            },

        ]
    },

    {
        collapse: true,
        path: "/documents",
        name: "Documents",
        state: "documentsCollapse",
        icon: DocumentsIcon,
        layout: ROUTE_PATH.USER,
        views: [
            {
                path: "/documents/submitted/:id",
                name: "Documents Submitted Detail",
                component: SubmittedDetail,
                layout: ROUTE_PATH.USER,
                isFixed: true
            },
            {
                path: "/documents",
                name: "Documents",
                component: Documents,
                layout: ROUTE_PATH.USER,
            }
        ]
    },

    {
        collapse: true,
        path: "/reports",
        name: "Reports",
        state: "reportsCollapse",
        icon: ReportsIcon,
        layout: ROUTE_PATH.USER,
        views: [
            {
                path: "/report/dashboard",
                name: "Dashboard",
                component: DashboardReport,
                layout: ROUTE_PATH.USER,
                // isFixed: true
            },
            {
                path: "/report/",
                name: "Reports",
                component: Reports,
                layout: ROUTE_PATH.USER,
                // isFixed: true
            }
        ]
    },

    {
        path: "/documents",
        name: "Documents",
        icon: DocumentsIcon,
        component: Documents,
        layout: ROUTE_PATH.USER
      },
      {
        path: "/reports",
        name: "Reports",
        icon: ReportsIcon,
        component: Reports,
        layout: ROUTE_PATH.USER
      },
      {
        path: "/internal-tools",
        name: "Internal Tools",
        icon: InternalToolsIcon,
        component: InternalTools,
        layout: ROUTE_PATH.USER
      },
      {
        path: "/messages",
        name: "Messages",
        icon: MessagesIcon,
        extraIcon: StatusGreenIcon,
        component: Messages,
        isFixed: true,
        layout: ROUTE_PATH.MESSAGES,
      },
      {
        path: "/alerts",
        name: "Alerts",
        icon: AlertsIcon,
        extraIcon: StatusRedIcon,
        component: Alerts,
        isFixed: true,
        layout: ROUTE_PATH.ALERT
      },
      {
        path: "/org/general",
        name: "Settings",
        icon: SettingsIcon,
        component: Settings,
        isFixed: true,
        layout: ROUTE_PATH.SETTING
      },
    
];
export default dashRoutes;
