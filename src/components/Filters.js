import React from 'react';

const Filters = (props) => {
    return (
        <div className="levels">
            <button className="button is-link margin--right margin--bottom" onClick={props.starredfirst}>Starred First</button>

            <button className="button is-link margin--right margin--bottom" onClick={() => props.ordenar('asc')}>Order Asc</button>

            <button className="button is-link margin--right margin--bottom" onClick={() => props.ordenar('desc')}>Order Desc</button>

            <button className="button is-link margin--right margin--bottom" onClick={props.clearfilters}>Clear Filter</button>
        </div>
    )
}

export default Filters;