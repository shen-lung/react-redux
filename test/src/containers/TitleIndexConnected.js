import {connect} from 'react-redux';

import IndexScreen from '../components/IndexScreen';
import {changeTitle} from '../actions/indexTitle';

const _mapStateToProps = (state) => ({
    titleName: state.titleName,
});

const _mapDispatchProps = {
    changeTitle,
};

export default connect(
    _mapStateToProps,
    _mapDispatchProps,
)(IndexScreen);
