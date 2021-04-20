import React from "react";
import Card from "components/Card/Card";
import GridContainer from "components/Grid/GridContainer";
import {makeStyles} from "@material-ui/core/styles";
import GridItem from "components/Grid/GridItem";
import Chip from "@material-ui/core/Chip";
import CloseIcon from "components/Icons/CloseIcon";
import Button from "@material-ui/core/Button";
import ToolboxButton from "components/CustomButtons/ToolboxButton";
import CardBody from "components/Card/CardBody";
import VideoCard from "./VideoCard";
import GenPaginationV1 from "components/Pagination/GenPaginationV1";

const styles = {
  cardMargin: {
    margin: "16px !important",
  },
  chipSelected: {
    display: "flex",
    alignItems: "center",
    paddingLeft: "0px !important"
  },
  chips: {
    background: "#ECEEF0",
    color: "#25345C",
    fontSize: "12px",
    marginRight: 8
  },
  clearAll: {
    textTransform: "none",
    color: "#8097D8",
    background: "unset !important",
    boxShadow: "unset !important",
    fontSize: 14,
    fontWeight: 700,
    padding: 0,
    "&:hover": {
      color: "#25345C"
    }
  },
  headContainer: {
    alignItems: "center",
    textAlign: "left",
    marginTop: "8px"
  },
  title: {
    fontSize: 16,
    color: "#25345C",
    fontWeight: 700,
    paddingRight: "8px !important"
  },
}

const useStyles = makeStyles(styles);

export default function Saved() {
  const classes = useStyles();

  const [chipData, setChipData] = React.useState([
    {key: 0, label: 'Standard Admin'},
    {key: 1, label: 'Full admin'},
  ]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  const handleClearAll = () => {
    setChipData([])
  }

  const mockData = {dateTime: "Feb 3, 2021, 4:24 PM", id: "709", driver: "Haydee Watson Peigan", route: "Trail SE, 8 km NNW", location: "Shepard, AB", length: 1, favorite: false}

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <GridContainer>
            <Card testimonial className={classes.cardMargin}>
              <CardBody>
                <GridContainer justify="space-between" className={classes.gridTitle}>
                  <GridItem>
                    <GridContainer className={classes.headContainer}>
                      <GridItem xl={4} className={classes.title}> {chipData.length} selected for </GridItem>
                      <GridItem xl={8} className={classes.chipSelected}>
                        {chipData.map(data => (
                          <Chip
                            deleteIcon={<CloseIcon/>}
                            label={data.label}
                            onDelete={handleDelete(data)}
                            className={classes.chips}
                          />
                        ))}
                        {chipData.length > 0 &&
                        (
                          <Button onClick={handleClearAll} className={classes.clearAll}>
                            Clear All
                          </Button>
                        )}
                      </GridItem>
                    </GridContainer>
                  </GridItem>
                  <GridItem>
                    <ToolboxButton placeholder="Search videos" showFilter/>
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <VideoCard data={mockData}/>
                  <VideoCard data={mockData}/>
                  <VideoCard data={mockData}/>
                  <VideoCard data={mockData}/>
                  <VideoCard data={mockData}/>
                  <VideoCard data={mockData}/>
                  <VideoCard data={mockData}/>
                  <VideoCard data={mockData}/>
                </GridContainer>
              </CardBody>
            </Card>
          </GridContainer>
        </GridItem>
      </GridContainer>
      <GenPaginationV1
        total={50}
        current={1}
        pageSize={6}
        showSizeChanger
        onChange={null}
        onShowSizeChange={null}
        pageSizeOptions={[6, 12, 18, 24]}
      />
    </div>
  )
}