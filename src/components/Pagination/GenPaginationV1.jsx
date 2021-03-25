import React, { Component } from 'react';
import { Row, Input, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import GridItem from "../Grid/GridItem";
import GridContainer from "../Grid/GridContainer";
import cx from "classnames";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import {makeStyles} from "@material-ui/core/styles";
import styles from "../../assets/jss/material-dashboard-pro-react/components/paginationStyleV2";
const DEFAULT_LIMIT = 50;

const useStyles = makeStyles(styles);

export default function GenPaginationV1(props) {
	const classes = useStyles();
	const { pages, size,total } = props;
	// total, page, size
		return (
			<>
				<GridContainer>
					<GridItem xs={12}>
						<GridContainer>
							<GridItem xs={6}>
								<ul className={classes.pagination}>
									{pages.map((prop, key) => {
										const paginationLink = cx({
											[classes.paginationLink]: !prop.active,
											[classes.paginationLinkActive]: prop.active,
											[classes.paginationDisabled]: prop.disabled,
											[classes.paginationArrow]: prop.arrow,
											[classes.paginationNumber]: !prop.arrow
										});
										return (
											<li className={prop.arrow ? classes.paginationArrowLi : classes.paginationLi} key={key}>
												{prop.onClick !== undefined ? (
													<Button onClick={prop.onClick} className={paginationLink}>
														{prop.text}
													</Button>
												) : (
													<Button
														onClick={() => alert("you've clicked " + prop.text)}
														className={paginationLink}
													>
														{prop.text}
													</Button>
												)}
											</li>
										);
									})}
								</ul>
							</GridItem>
							<GridItem xs={6} className={classes.paginationPage}>
								<ul className={classes.paginationRow}>
									<li className={classes.paginationShowing}>
										Showing 1-10 of {total}
									</li>
									<li className={classes.paginationItemsPerPage}>
                <span>
                  Items per page:
                </span>
										<Select
											native
											value={size}
											className={classes.paginationSelectPage}
										>
											<option value={5}>5</option>
											<option value={10}>10</option>
											<option value={15}>15</option>
										</Select>
									</li>
								</ul>
							</GridItem>
						</GridContainer>
					</GridItem>
				</GridContainer>
			</>
		);
}
