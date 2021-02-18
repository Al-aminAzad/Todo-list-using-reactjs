import React from 'react';
import { Input, Button } from 'reactstrap';

const SearchPanel = ({term, searchHandler,toggleForm}) => (
  <div className="d-flex">
    <Input className="mr-3" value={term} onChange={(e) => searchHandler(e.target.value)} placeholder='&#xF002;'/>
    <Button color="success" onClick={toggleForm}>New</Button>
  </div>
);

export default SearchPanel;
