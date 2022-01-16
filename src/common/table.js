/* Required columns , data , ref*/

import React from 'react'
import { ReactTabulator } from 'react-tabulator'

export default function Table(props) {
	return (
		<ReactTabulator
			columns={props.columns}
			data={props.tabledata}
			ref={props.innerRef}
			options={props.options}
			rowClick={props.rowClick ? props.rowClick : () => { }}
			cellClick={props.cellClick ? props.cellClick : () => { }}
		/>
	)
}
