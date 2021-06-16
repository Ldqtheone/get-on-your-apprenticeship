import DropdownButton from "react-bootstrap/DropdownButton";
import * as PropTypes from "prop-types";
import React from "react";

export default function ListHouses(props) {
    return <DropdownButton

        title={props.title}
    >
        {props.strings.map(props.callbackfn
        )}
    </DropdownButton>;
}

ListHouses.propTypes = {
    title: PropTypes.string,
    strings: PropTypes.any,
    callbackfn: PropTypes.func
};