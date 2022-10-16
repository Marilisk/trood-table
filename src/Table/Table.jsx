import React from 'react';
import { HeadCells } from './HeadCells/HeadCells';
import { Rows } from './Rows/Rows';
import c from './Table.module.css';

export const Table = ({ sort, reverseSort, filters, filteredItems, makeSort, makeFilter, buy, redirect }) => {

  return <table>

      <colgroup>
        <col className={c.statusCol} />
        <col />
        <col />
        <col />
        <col />
        <col />
        <col />
        <col />
      </colgroup>

      <tbody>
        <tr>
          <HeadCells makeSort={makeSort} sort={sort} reverseSort={reverseSort} filters={filters} makeFilter={makeFilter} />
        </tr>
      </tbody>

      <tbody>
        <Rows filteredItems={filteredItems} buy={buy} redirect={redirect} />
      </tbody>

    </table>
}






