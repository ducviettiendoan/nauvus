import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SettingSearchBox from "components/SearchBox/SettingSearchBox";
import TrashButton from "components/CustomButtons/TrashButton";
import FilterButton from "components/CustomButtons/FilterButton";
import EditButton from "components/CustomButtons/EditButton";
import LinkButton from "components/CustomButtons/LinkButton";
import ColumnButton from "components/CustomButtons/ColumnButton";
import CheckedButton from "components/CustomButtons/CheckedButton";

const styles = {
    headLeft: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        "& > div": {
          marginBottom: "0 !important",
          marginRight: 8
        }
    }
};

const useStyles = makeStyles(styles);

export default function ToolboxButton(props) {
    const classes = useStyles();

    return (
        <div className={classes.headLeft}>
            <SettingSearchBox placeholder={ props.placeholder} />
            { props.showFilter && <FilterButton filterAction={props.filterAction} /> }
            { props.showEdit && <EditButton /> }
            { props.showLink && <LinkButton /> }
            { props.showTrash && <TrashButton /> }
            { props.showColumn && <ColumnButton /> }
            { props.showChecked && <CheckedButton /> }
        </div>
    );
};