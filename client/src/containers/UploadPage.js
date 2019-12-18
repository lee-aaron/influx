import React, { Component } from 'react';
import Upload from '../components/Upload/Upload';
import { connect } from 'react-redux';

class UploadPage extends Component {

    render() {
        return (
            <Upload />
        )
    }

}

const mapStateToProps = state => ({
    
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(UploadPage);