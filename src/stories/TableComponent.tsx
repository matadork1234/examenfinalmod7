import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { TableProps } from './intefaces/TableProps.interface'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './TableComponent.css'

export const TableComponent = ({ rows, columns, headers }: TableProps) => {

  useEffect(() => {
    rows;
    columns;
    headers;
  }, [])

  const rowData = [];

  for (let i = 0; i < rows; i++) {
    const colsData = [];
    for (let j = 0; j < columns; j++) {
      colsData.push(<TableCell key={`${i}-${j}`}>Column {i} {j}</TableCell>)
    }
    rowData.push(<TableRow hover={true} key={i}>{colsData}</TableRow>)
  }


  const headersData = headers.map((header, index) => {
    return (
      <TableCell className='headerTable' key={index}>{header}</TableCell>
    )
  })


  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {headersData}
          </TableRow>
        </TableHead>
        <TableBody>
          {rowData}
        </TableBody>
      </Table>
    </TableContainer>
  )
}