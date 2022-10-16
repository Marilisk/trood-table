import React from 'react';
import c from './HeadCells.module.css';

/* const StatusHeadCell = ({makeSort, sort, reverseSort, filters, makeFilter}) => {

  return <th onClick={() => makeSort('status')} className={c.statusCol}>
  
  </th>
} */

const options = ['All', 'green', 'yellow', 'red']
    .map((elem) => <option value={elem} label={elem} key={elem} />);

const NameHeadCell = ({makeSort, sort, reverseSort, filters, makeFilter}) => {

  return <th name='name' className={c.nameCol}>
    <select className={c.statusSelect}
      value={filters.status}
      selected={filters.status}
      onChange={e => makeFilter('status', e.currentTarget.value)}>
      {options}
    </select>
  <div className={c.selStatusFilter}>{filters.status}</div>
  <span className={sort === 'name' ? c.activeColHead : c.colHead}
    onClick={() => makeSort('name')}>
    {(sort === 'name' && reverseSort) && '-'}Project
  </span>
</th>
}

const TypeHeadCell = ({makeSort, sort, reverseSort, filters, makeFilter}) => {

  const options = ['All', 'TRST', 'THT', 'THC']
    .map((elem) => <option value={elem} label={elem} key={elem} />);

  return <th className={c.typeCol}>
    <select value={filters.type} selected={filters.type} onChange={e => makeFilter('type', e.currentTarget.value)}>
      {options}
    </select>
    <div className={c.selTypeFilter}>{filters.type}</div>
    <span className={sort === 'type' ? c.activeColHead : c.colHead}
      onClick={() => makeSort('type')}>
      {(sort === 'type' && reverseSort) && '-'}Token type
    </span>
  </th>
}

export const HeadCells = ({ makeSort, sort, reverseSort, filters, makeFilter }) => {
  const cells = [
    { label: 'Conditions', name: 'conditions' },
    { label: 'Volume', name: 'volume' },
    { label: 'ROI', name: 'roi' },
    { label: 'Free float', name: 'free' },
    { label: 'Insurance hedge', name: 'hedge' },]
    .map(elem => {
      return <th className={sort === elem.name ? c.activeColHead : c.colHead}
        key={elem.name}
        name={elem.name}
        onClick={(e) => makeSort(e.currentTarget.getAttribute('name'))}>
        {(sort === elem.name && reverseSort) && '-'} {elem.label}
      </th>
    });

  return <>
    <NameHeadCell makeSort={makeSort} sort={sort} reverseSort={reverseSort} filters={filters} makeFilter={makeFilter} />
    <TypeHeadCell makeSort={makeSort} sort={sort} reverseSort={reverseSort} filters={filters} makeFilter={makeFilter} />
    {cells}
  </>;
}











