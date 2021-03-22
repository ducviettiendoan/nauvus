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
		maxWidth: 431,
		fontFamily: 'Lato',
		fontSize: 14,
		margin: "auto!important"
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
	cardFooter: {
		display: "flex",
		alignItems: "center"
	},
	cardFooterData: {
		fontWeight: "bold",
	},
	cardFooterTitle: {
		fontWeight: 400
	}
}));

export default function ComplianceCard(props) {
	const { sampleData, sampleTitle } = props

	const classes = useStyles();
	const [expanded, setExpanded] = React.useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	return (
		<Card className={classes.root}>
			<CardHeader
				title={
					<Grid container>
						<Grid item xs={6} style={{ textAlign: "left", fontFamily: "Lato", fontSize: "15px" }}>
							{sampleTitle}
						</Grid>
						<Grid item xs={6} style={{ textAlign: "right", fontFamily: "Lato", fontSize: "11px" }}>
							<Link style={{cursor: "pointer"}}>View Details</Link>
						</Grid>
					</Grid>}
				style={{ backgroundColor: "#ECEEF0" }}
			/>
			<CardContent>
				<Grid container>
					<Grid item xs={6} style={{ textAlign: "left" }}>
						<RadioButton  checked={true} />
						Hour
          </Grid>
					<Grid item xs={6} style={{ textAlign: "right" }}>
						<RadioButton  radioColor="default"  disabled={true} />
						Logs
          </Grid>
				</Grid>

				<VictoryPie
					data={sampleData}
					width={250}
					height={250}
					colorScale={["#EB7580", "#44D485"]}
					labelRadius={({ innerRadius }) => innerRadius + 20}
					innerRadius={0}
					style={{ labels: { fill: "white", fontSize: 15, fontWeight: "bold" } }}
					standalone={true}
				/>

				<div>
					<Grid container className={classes.cardFooter}>
						<Grid item xs={6} style={{ textAlign: "left" }} className={classes.cardFooterTitle} >
							<RadioButton radioColor="red" checked={true}  />
							In Violation
						</Grid>
						<Grid item xs={3} className={classes.cardFooterData}  >
							1.8%
						</Grid>
						<Grid item xs={3} className={classes.cardFooterData} >
							3h 31min
						</Grid>
					</Grid>
					<Grid container className={classes.cardFooter}>
						<Grid item xs={6} style={{ textAlign: "left" }} className={classes.cardFooterTitle} >
							<RadioButton radioColor="green" checked={true} />
							Compliant
						</Grid>
						<Grid item xs={3} className={classes.cardFooterData} >
							40%
						</Grid>
						<Grid item xs={3} className={classes.cardFooterData} >
							188h 28min
						</Grid>
					</Grid>
				</div>
			</CardContent>
		</Card>
	);
}