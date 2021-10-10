import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import { wineDetails } from '../../Data'
import GridRow from './GridRow';
import ExpandedGridRow from './ExpandedGridRow';
import GridHeaders from './GridHeaders';

export default function InventoryDataGrid() {
    const [expandedRows, setExpandedRows] = useState([]);
    const [expandState, setExpandState] = useState({});

    const handleExpandRow = (event, vineId) => {
        const currentExpandedRows = expandedRows;
        const isRowExpanded = currentExpandedRows.includes(vineId);

        let obj = {};
        isRowExpanded ? (obj[vineId] = false) : (obj[vineId] = true);
        setExpandState(obj);

        const newExpandedRows = isRowExpanded ? currentExpandedRows.filter(id => id !== vineId) : currentExpandedRows.concat(vineId);

        setExpandedRows(newExpandedRows);
    }


    return (
        <Container fluid className="inventory">
            <Row sm="12">
                <Col>
                    <Table responsive>
                        <GridHeaders />
                        <tbody>
                            {wineDetails.map((wine) =>
                                <>
                                    <GridRow key={wine.id} expandState={expandState} handleExpandRow={handleExpandRow} {...wine}></GridRow>
                                    {expandedRows.includes(wine.id) && <ExpandedGridRow key={`Expanded-${wine.id}`} {...wine} />}
                                </>
                            )}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>

    )
}
