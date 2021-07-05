import React, { Component } from 'react';
import styles from './styles';
import TextField from '@material-ui/core/TextField';
class Search extends Component {
    
    render() {
        const {handleSearch} = this.props;
        return (
            <form>
                <TextField
                    style={{
                        margin: '20px'
                    }}
                    onChange = {handleSearch}
                    placeholder="Nhập từ khoá"
                />
            </form>
        );
    }
}

export default Search;
/*  */