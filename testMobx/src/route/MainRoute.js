import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import {Button} from 'antd';

class MainRoute extends Component {
    go=()=>{
        this.props.history.push('/test')
    };

    render() {
        return (
            <div>
                <Button onClick={this.go}>go test</Button>
            </div>
        );
    }
}
export default MainRoute