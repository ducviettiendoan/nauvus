import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { VictoryPie } from 'victory-pie'

import { red } from '@material-ui/core/colors';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import { Grid } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import RadioButton from '../../../Components/RadioButton'

const useStyles = makeStyles((theme) => ({
	root: {
		fontFamily: 'Lato',
		fontSize: 14,
		margin: "auto!important",
	},
	media: {
		height: 0,
		paddingTop: '56.25%', // 16:9
	},
	expand: {
		transform: 'rotate(0deg)',
		marginLeft: 'auto',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: 'rotate(180deg)',
	},
	avatar: {
		backgroundColor: red[500],
	},
	cardHeader: {
		backgroundColor: "#ECEEF0",
		padding: "20px 35px 20px 35px",
	},
	cardFooter: {
		display: "flex",
		alignItems: "center"
	},
	cardFooterData: {
		fontWeight: "bold",
	},
	cardFooterTitle: {
		fontWeight: 400,
		textAlign: "left",
	},
	cardHeaderTitle: {
		textAlign: "left", 
		height: "45px",
		display: "flex",
		alignItems: "center",
		// fontFamily: "Lato", 
		fontSize: "17px",
	},
	cardHeaderSubTitle: {
		textAlign: "right", 
		// fontFamily: "Lato", 
		fontSize: "14px",
		cursor: "pointer",
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-end"
	},
	cardBodyTitle1: {
		textAlign: "left",
		paddingLeft: 9
	},
	cardBodyTitle2: {
		textAlign: "right",
		paddingRight: 22
	}
}));

export default function ComplianceCard(props) {
	const { sampleData, sampleTitle, sampleLabelRadius } = props

	const classes = useStyles();
	// const [expanded, setExpanded] = React.useState(false);

	// const handleExpandClick = () => {
	// 	setExpanded(!expanded);
	// };

	return (
		<Card className={classes.root}>
			<CardHeader
				title={
					<Grid container>
						<Grid item xs={8} sm={12} md={8} className={classes.cardHeaderTitle}>
							{sampleTitle}
						</Grid>
						<Grid item xs={4} sm={12} md={4} className={classes.cardHeaderSubTitle}>
							<Link>View Details</Link>
						</Grid>
					</Grid>}
				className={classes.cardHeader}
			/>
			<CardContent>
				<Grid container>
					<Grid item xs={6} className={classes.cardBodyTitle1}> 
						<RadioButton checked={true} />
						Hour
          </Grid>
					<Grid item xs={6} className={classes.cardBodyTitle2}> 
						<RadioButton radioColor="default" disabled={true} />
						Logs
          </Grid>
				</Grid>

				<VictoryPie
					data={sampleData}
					width={250}
					height={250}
					colorScale={["#EB7580", "#44D485"]}
					labelRadius={sampleLabelRadius}
					innerRadius={0}
					// radius={({ datum }) => 10 + datum.y * 0.3}
					style={{
						data: {
							fillOpacity: 0.9,
							stroke: "#ffffff",
							strokeWidth: 3,
						}, 
						labels: { 
							fill: "white", 
							fontSize: 13, 
							fontWeight: "bold" 
						} }}
					standalone={true}
				/>

				<div>
					<Grid container className={classes.cardFooter}>
						<Grid item xs={6} sm={12} md={12} lg={6} className={classes.cardFooterTitle} >
							<RadioButton radioColor="red" checked={true} />
							In Violation
						</Grid>
						<Grid item xs={3} sm={6} md={6} lg={3} className={classes.cardFooterData}  >
							1.8%
						</Grid>
						<Grid item xs={3} sm={6} md={6} lg={3} className={classes.cardFooterData} >
							3h 31min
						</Grid>
					</Grid>
					<Grid container className={classes.cardFooter}>
						<Grid item xs={6} sm={12} md={12} lg={6} style={{ textAlign: "left" }} className={classes.cardFooterTitle} >
							<RadioButton radioColor="green" checked={true} />
							Compliant
						</Grid>
						<Grid item xs={3} sm={6} md={6} lg={3} className={classes.cardFooterData} >
							40%
						</Grid>
						<Grid item xs={3} sm={6} md={6} lg={3} className={classes.cardFooterData} >
							188h 28min
						</Grid>
					</Grid>
				</div>
			</CardContent>
		</Card>
	);
}