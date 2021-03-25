import React, { Component } from 'react';
import PaginationV2 from "components/Pagination/PaginationV2";
import ArrowDownIcon from "components/Icons/ArrowDownIcon";
import ArrowLeftIcon from "components/Icons/ArrowLeftIcon";
import ArrowRightIcon from "components/Icons/ArrowRightIcon";
import ArrowUpIcon from "components/Icons/ArrowUpIcon";

export default class GenPaginationV1 extends Component {

	// total, page, size

	render() {
		return (
			<>
				<PaginationV2
					pages={[
						{ text: <ArrowDownIcon/>, arrow : true,disabled : true },
						{ text: <ArrowLeftIcon/>, arrow : true,disabled : true },
						{ active: true, text: 1 },
						{ text: 2 },
						{ text: 3 },
						{ text: 4 },
						{ text: 5 },
						{ text: <ArrowRightIcon/>, arrow : true },
						{ text: <ArrowUpIcon/>, arrow : true },
					]}
				/>
			</>
		);
	}
	
}
