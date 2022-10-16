import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onSort, onFilter, onBuy } from './redux/tableSlice.js';
import { Table } from './Table/Table.jsx';

function App() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.table.items);
  const sort = useSelector(state => state.table.sort);
  const filters = useSelector(state => state.table.filters);

  const filteredItems = items.filter(elem => {
    return filters.status === 'All' ? true : elem.status === filters.status;
  }).filter(elem => {
    return filters.type === 'All' ? true : elem.type === filters.type;
  });
  const makeSort = (value) => {
    dispatch(onSort(value));
  }
  const makeFilter = (prop, value) => {
    dispatch(onFilter({ property: prop, value: value }));
  }
  const buy = (id) => {
    dispatch(onBuy(id));
  }
  const redirect = (id, eventId) => {
    if (eventId !== 'buy') {
      window.location.href=`/project/${id}`; 
    }
  }

  return (
    <div>
      <Table sort={sort}
        filters={filters}
        filteredItems={filteredItems}
        makeSort={makeSort}
        makeFilter={makeFilter}
        buy={buy}
        redirect={redirect}
      />
    </div>
  );
}

export default App;
