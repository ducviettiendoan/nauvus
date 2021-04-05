import React from "react";
// @material-ui/core components
// import { makeStyles } from "@material-ui/core/styles";
import { Theme, makeStyles } from '@material-ui/core';
import { BaseCSSProperties } from '@material-ui/core/styles/withStyles';

// @material-ui/icons
// import Weekend from "@material-ui/icons/Weekend";
import FormatQuote from "@material-ui/icons/FormatQuote";
import Search from "@material-ui/icons/Search";
import InfoOutlined from "@material-ui/icons/InfoOutlined";
// core components
// import GridContainer from "components/Grid/GridContainer.js";
// import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CardHeader from "components/Card/CardHeader.js";
import Button from "components/CustomButtons/Button.js";
import List from "@material-ui/icons/List";
import { setOpenDrawer } from 'reducers/overview';

import styles from "assets/jss/material-dashboard-pro-react/views/overviewPageStyle.js";

import KeyboardArrowDown from "@material-ui/icons/KeyboardArrowDown";

import {
  cardTitle,
  roseColor
} from "assets/jss/material-dashboard-pro-react.js";

import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Loading from "components/Loading/Loading";
import { connect } from 'react-redux';
import { loadVehicles } from 'reducers/vehicle';
import { IRootState } from 'reducers';
import imageTabs from "assets/img/Tabs.png";

import VehicleAssets from "./components/VehicleAssets";

import { Col, Row } from 'reactstrap';
// const styles = {
//   cardTitle,
//   cardTitleWhite: {
//     ...cardTitle,
//     color: "#FFFFFF",
//     marginTop: "0"
//   },
//   cardCategoryWhite: {
//     margin: "0",
//     color: "rgba(255, 255, 255, 0.8)",
//     fontSize: ".875rem"
//   },
//   cardCategory: {
//     color: "#999999",
//     marginTop: "10px"
//   },
//   icon: {
//     color: "#333333",
//     margin: "10px auto 0",
//     width: "130px",
//     height: "130px",
//     border: "1px solid #E5E5E5",
//     borderRadius: "50%",
//     lineHeight: "174px",
//     "& svg": {
//       width: "55px",
//       height: "55px"
//     },
//     "& .fab,& .fas,& .far,& .fal,& .material-icons": {
//       width: "55px",
//       fontSize: "55px"
//     }
//   },
//   iconRose: {
//     color: roseColor
//   },
//   marginTop30: {
//     marginTop: "30px"
//   },
//   testimonialIcon: {
//     marginTop: "30px",
//     "& svg": {
//       width: "40px",
//       height: "40px"
//     }
//   },
//   cardTestimonialDescription: {
//     fontStyle: "italic",
//     color: "#999999"
//   },
//   txtInfoMain: {
//     fontWeight: "bold",
//     fontSize: "18px",
//     lineHeight: "27px",
//     color: "#25345C",
//   },
//   txtInfoSub: {
//     fontSize: "14px",
//     lineHeight: "21px",
//     color: "#25345C",
//   },
//   txtNumberVehicle: {
//     fontSize: "14px",
//     lineHeight: "21px",
//     color: "#25345C",
//   },
//   txtSearchLabel: {
//     fontSize: "12px",
//     lineHeight: "14px",
//     color: "#25345C",
//     textTransform: "uppercase",
//     fontWeight: "900"
//   }
// };

// interface StyleProps {
//   root: BaseCSSProperties,
// }

// const useStyles = makeStyles<Theme, StyleProps>(() => styles as any);
const useStyles = makeStyles(styles);

export function Proximity(props) {
  // const classes = useStyles({} as StyleProps);
  const classes = useStyles();
  // const theme = useTheme();

  React.useEffect(() => {
    async function fetchVehicles() {
      await props.loadVehicles();
    }
    fetchVehicles();
  }, [1]);
  
  return (
    <div>
      <Button
            aria-label="edit"
            justIcon
            round
            className={classes.toogleDrawer}
            onClick={ e => {props.setOpenDrawer(!props.openDrawer)} }
          >
            <List />
        </Button>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac porttitor augue, in dapibus quam. Curabitur facilisis leo libero, nec scelerisque urna venenatis at. Aenean maximus risus pharetra facilisis pulvinar. Mauris metus erat, vulputate sed ullamcorper in, porta quis nisi. Cras et nunc tortor. Curabitur nulla mauris, porta vitae commodo a, vestibulum eu urna. Suspendisse potenti. Pellentesque nec accumsan neque. Duis congue velit ut ultricies consequat. Maecenas scelerisque, velit sit amet rutrum rutrum, arcu nunc mollis dolor, id placerat lorem lectus quis lorem. Pellentesque interdum nisl suscipit turpis eleifend, vel laoreet risus tempor. Etiam nibh ex, varius vitae vulputate ut, interdum ultricies leo. Nunc molestie laoreet risus. Nullam auctor ultricies erat. Nunc a porta odio.

Ut placerat libero suscipit arcu hendrerit, ut luctus magna ornare. Phasellus fringilla ligula et risus posuere, at ullamcorper odio egestas. Aliquam tellus tortor, malesuada eget tincidunt et, volutpat in nibh. Fusce luctus posuere velit, id venenatis ex facilisis ac. Nullam fermentum vitae tellus ac hendrerit. Quisque id mauris a lacus gravida lobortis. Cras et lacus ut est accumsan facilisis eget tempus velit. Sed tincidunt, metus quis egestas tempus, enim arcu lacinia nibh, ut elementum tortor orci a urna. Nunc sapien nisl, hendrerit ac ullamcorper a, tempor sit amet est. Sed sed auctor dui. Vivamus dignissim et nulla vitae volutpat.

Suspendisse scelerisque lorem ac ultricies rutrum. Cras cursus dolor ac orci vehicula interdum. Aenean accumsan imperdiet lacus, eget venenatis orci porttitor non. Curabitur malesuada enim eu nunc varius rutrum. Sed sit amet velit ut ipsum sagittis fermentum eu a nisl. Nullam lacinia convallis velit, at commodo augue porta at. Nunc rhoncus rutrum felis, a tempor mauris. Morbi laoreet porta risus vel vestibulum. Fusce ut mi blandit, egestas eros eu, placerat libero. Phasellus blandit, est tristique volutpat iaculis, urna erat mollis magna, finibus pulvinar nisl lectus id enim. Ut lacinia mi eu sapien mattis, at commodo nisl dictum. Donec euismod maximus nisi, vestibulum euismod neque cursus et. Nulla facilisi. Cras sollicitudin neque egestas purus finibus mollis. Nullam pellentesque ullamcorper nisl at efficitur.

Suspendisse aliquet est lorem, ac egestas eros dignissim sed. Ut tempor blandit facilisis. Morbi justo lorem, ornare eu libero porttitor, volutpat mollis neque. Sed ornare fringilla erat, id imperdiet neque tristique quis. Vivamus sed eleifend nibh. Sed maximus justo eu purus dapibus posuere. Donec interdum eget nibh at auctor.

Cras magna lorem, maximus vitae fermentum vitae, volutpat euismod diam. Morbi at congue felis. Aenean vel odio dictum, mattis massa a, mollis massa. Curabitur fermentum sollicitudin nisl, nec vulputate risus venenatis eget. Donec quis tellus eget arcu lacinia mattis quis vitae ex. Cras vestibulum eleifend lectus ac rutrum. Morbi quis consectetur sapien. Suspendisse vel velit molestie, maximus nulla non, sagittis odio. Fusce vel quam magna. Donec euismod iaculis magna. Aenean dolor risus, convallis ullamcorper dapibus finibus, tincidunt sit amet neque. Ut pharetra lectus in purus elementum, ut molestie nisl imperdiet. Aenean pulvinar, enim eget semper consequat, nisl neque tempus massa, id interdum ipsum magna vitae lacus. Vestibulum purus enim, tincidunt eu felis eu, posuere fringilla turpis. Nunc congue, leo in varius auctor, augue purus accumsan libero, at hendrerit libero augue ac nisl. Quisque ipsum dui, feugiat sit amet porta et, accumsan sit amet mi.
    </div>
  );
}

export default connect(
  ({ authentication, vehicle, overview }: IRootState) => ({
    isAuthenticated: authentication.isAuthenticated,
    user: authentication.user,
    vehicles: vehicle.vehicles,
    openDrawer : overview.openDrawer
  }),
  {
    loadVehicles,
    setOpenDrawer
  }
)(Proximity);