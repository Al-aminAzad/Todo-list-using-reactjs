import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';

const BulkController = ({ clearSlected, clearCompleted, reset }) => (
  <ButtonGroup>
    <Button color="danger" onClick={clearSlected}>
      Clear Selected
    </Button>
    <Button color="danger" onClick={clearCompleted}>
      Clear Completed
    </Button>
    <Button color="danger" onClick={reset}>
      Reset
    </Button>
  </ButtonGroup>
);
export default BulkController;
