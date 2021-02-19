import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';

const BulkController = ({ clearSlected, clearCompleted, reset }) => (
  <ButtonGroup>
    <Button color="btn btn-outline-danger" onClick={clearSlected}>
      Clear Selected
    </Button>
    <Button color="btn btn-outline-danger" onClick={clearCompleted}>
      Clear Completed
    </Button>
    <Button color="btn btn-outline-success" onClick={reset}>
      Reset
    </Button>
  </ButtonGroup>
);
export default BulkController;
