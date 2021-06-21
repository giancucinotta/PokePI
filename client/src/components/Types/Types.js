import { useEffect } from 'react';
import { getTypes } from '../../actions/types'
import { connect } from 'react-redux';

const GetTypes = ({ getTypes }) => {
    useEffect(() => {
        getTypes()
    }, [])

    return null
};

function mapStateToProps(state) {
    return {
        types: state.types,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getTypes: () => dispatch(getTypes()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GetTypes);