import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PaginationV2 from "components/Pagination/PaginationV2";
import ArrowDownIcon from "components/Icons/ArrowDownIcon";
import ArrowLeftIcon from "components/Icons/ArrowLeftIcon";
import ArrowRightIcon from "components/Icons/ArrowRightIcon";
import ArrowUpIcon from "components/Icons/ArrowUpIcon";
import Select from "@material-ui/core/Select";

import Pagination from '@material-ui/lab/Pagination';

import { Row, Col } from "reactstrap";

const useStyles = makeStyles((theme) => ({
	root: {
	  '& > *': {
		marginTop: theme.spacing(2),
	  },
	},
  }));

export default function GenPaginationV1(props) {
	const classes = useStyles();
	// total, page, size

	return (
		<>
			<Row>
				<Col>
					<Pagination count={11} defaultPage={6} siblingCount={0} boundaryCount={2} showFirstButton showLastButton />
				</Col>
				<Col>
					<ul className={classes.paginationRow}>
						<li className={classes.paginationShowing}>
							Showing 1-6 of 50
						</li>
						<li className={classes.paginationItemsPerPage}>
							<span>
							Items per page:
							</span>
							<Select
							native
							value={"1"}
							className={classes.paginationSelectPage}
							>
							<option value={1}>5</option>
							<option value={2}>10</option>
							<option value={3}>15</option>
							</Select>
						</li>
					</ul>
				</Col>
			</Row>
		</>
	);
	
}
