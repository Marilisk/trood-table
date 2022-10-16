import React from 'react';
import c from './Rows.module.css';

export const Rows = ({ filteredItems, redirect, buy }) => {
  
  const rows = filteredItems.map(elem => {
    const volume = elem.volume;
    const formattedVolume = new Intl.NumberFormat("ru").format(volume);
    return <tr key={elem.id} className={c[elem.status]} onClick={(event) => redirect(elem.id, event.target.id)}  >
      <td>
        <div className={c[`${elem.status}Indicator`]}></div>
        {elem.name}</td>
      <td>{elem.type}</td>
      <td>{elem.conditions}</td>
      <td> $ {formattedVolume}</td>
      <td>{elem.roi}%</td>
      <td>{elem.free}</td>
      <td>{elem.hedge}%</td>
      <td>
        <button id='buy' className={c.buyBtn} type='button' onClick={() => buy(elem.id)}>Buy</button>
      </td>
    </tr>
  });

  return <>{rows}</>
}
