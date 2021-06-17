import React from 'react';
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import PropTypes from 'prop-types'

/**
 * Component FilterSelector
 */
export default function FilterSelector(props) {
    return (
        <DropdownButton
            key={props.selectedFilter}
            title={props.selectedFilter}
        >
            {props.filters.map((filter) => {
                return <Dropdown.Item eventKey={filter}
                                      onClick={() => props.handleClick(filter)}
                                      selected={props.selectedFilter === filter}>{filter}
                </Dropdown.Item>
            })
            }
        </DropdownButton>
    );
}

FilterSelector.propTypes = {
    filters: PropTypes.arrayOf(PropTypes.string).isRequired,
    handleClick: PropTypes.func.isRequired,
    selectedFilter: PropTypes.string
}

FilterSelector.defaultProps = {
    filters: ["All"]
}