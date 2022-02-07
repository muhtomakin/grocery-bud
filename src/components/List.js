import React from 'react';
import {ReactComponent as EditIcon} from '../svgs/edit.svg';
import {ReactComponent as DeleteIcon} from '../svgs/delete.svg';

const List = ({ items, removeItem, editItem }) => {
  return (
    <div className='groceryList'>
      {items.map((item) => {
        const { id, title } = item;
        return (
          <article className='groceryItem' key={id}>
            <p className='title'>{title}</p>
            <div className='btnContainer'>
              <button
                type='button'
                className='editBtn'
                onClick={() => editItem(id)}
              >
                <EditIcon />
              </button>
              <button
                type='button'
                className='deleteBtn'
                onClick={() => removeItem(id)}
              >
                <DeleteIcon />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;