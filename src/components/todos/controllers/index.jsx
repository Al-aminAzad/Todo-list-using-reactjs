import React from 'react';
import { Col, Row } from 'reactstrap';
import BulkController from './bulk-controller';
import FilterController from './filter-controller';
import SearchPanel from './search-panel';
import ViewController from './view-controller';
const Controller = ({
  term,
  searchHandler,
  toggleForm,
  filterHandler,
  view,
  changeView,
  clearSlected,
  clearCompleted,
  reset,
}) => (
  <div>
    <SearchPanel term={term} searchHandler={searchHandler} toggleForm={toggleForm} />
    <Row className='mt-2 mb-3'>
      <Col md={{ size: 4 }}>
        <FilterController filterHandler={filterHandler} />
      </Col>
      <Col md={{ size: 4 }}>
        <ViewController view={view} changeView={changeView} />
      </Col>
      <Col md={{ size: 4 }} className="d-flex">
        <div className="ml-auto">
          <BulkController clearSlected={clearSlected} clearCompleted={clearCompleted} reset={reset} />
        </div>
      </Col>
    </Row>
  </div>
);

export default Controller;
