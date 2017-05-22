/**
*
* GetCategories
*
*/

import React from 'react';
import { Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow,TableRowColumn } from 'material-ui/Table';

class GetCategories extends React.PureComponent {
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
          <TableHeader>
            <TableRow>
              <TableRowColumn> ID </TableRowColumn>
              <TableRowColumn> Category Name </TableRowColumn>
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

export default GetCategories;
