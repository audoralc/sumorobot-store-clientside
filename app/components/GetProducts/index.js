/**
*
* GetProducts
*
*/

import React from 'react';
import { Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow,TableRowColumn } from 'material-ui/Table';

class GetProducts extends React.PureComponent {
  state = {
    fixedHeader: true,
    fixedFooter: false,
    stripedRows: true,
    showRowHover: true,
    selectable: true,
    multiSelectable: false,
    enableSelectAll: false,
    deselectOnClickaway: true,
    showCheckboxes: false,
    height: 'auto',
  };

  render() {
    return (
      <div>
      <Table>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow>
            <TableRowColumn> ID </TableRowColumn>
            <TableRowColumn> Name </TableRowColumn>
            <TableRowColumn> Category ID </TableRowColumn>
            <TableRowColumn> Availability </TableRowColumn>
            <TableRowColumn> Price </TableRowColumn>
            <TableRowColumn> Description </TableRowColumn>
            <TableRowColumn> Image </TableRowColumn>
            <TableRowColumn> Created </TableRowColumn>
            <TableRowColumn> Updated </TableRowColumn>
          </TableRow>
        </TableHeader>

        <TableBody> </TableBody>

      </Table>
      </div>
    );
  }
}

export default GetProducts;
