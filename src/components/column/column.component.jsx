import React from 'react'
import './column.styles.scss'
import Block from '../block/block.component'

const Column = ({number, ...otherProps}) => {
    let count = new Array(number).fill(0)

    return (
        <ul className="column" >
            {
                count.map((item, index) => (
                    <Block
                        key={index}
                        {...otherProps}
                    />
                ))
            }
        </ul>
    )
}

export default Column;