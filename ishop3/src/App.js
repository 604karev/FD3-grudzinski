import React, {Component} from 'react';
import ProductsGrid from './components/ProductsGrid';
import {connect} from 'react-redux'
import './App.css';


class App extends Component {


    render() {
        console.log(this.props.initialState);

        return (
            <div className="App">
                <ProductsGrid items={this.props.initialState.shopData} workMode={this.props.initialState.workMode} state={this.props.initialState}
                />
            </div>
        );
    }
}

export default connect(
    (state) => ({
        initialState: state,

    }),
    (dispatch) => ({
        changeWorkMode:(id, e)=>{
            dispatch({type:'CHANGE_WORK_MODE', id: id, e:e })
        }

    }),
)(App);
