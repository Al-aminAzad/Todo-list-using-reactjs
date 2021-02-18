import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';

const FilterController = ({ filterHandler }) => (
  <ButtonGroup>
    <Button onClick={() => filterHandler('all')}>All</Button>
    <Button onClick={() => filterHandler('running')}>Runnig</Button>
    <Button onClick={() => filterHandler('Completed')}>Completed</Button>
  </ButtonGroup>
);
export default FilterController;
