import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';

const FilterController = ({ filterHandler }) => (
  <ButtonGroup >
    <Button className='btn btn-info' onClick={() => filterHandler('all')}>All</Button>
    <Button className='btn btn-info' onClick={() => filterHandler('running')}>Runnig</Button>
    <Button className='btn btn-info' onClick={() => filterHandler('completed')}>Completed</Button>
  </ButtonGroup>
);
export default FilterController;
