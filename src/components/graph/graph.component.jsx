import React from 'react'
import './graph.styles.scss'
import Column from '../column/column.component'
import { connect } from 'react-redux'

const Graph = ({list}) => {

    return (
        <div className="graph">  
            {
                list.map((item, index) => (
                    <Column
                        key={index}
                        currentIndex={index}
                        number={item}
                    />
                ))
            }
        </div>
    )
}

const mapStateToProps = state => ({
    list: state.sort.list
})

export default connect(mapStateToProps)(Graph);