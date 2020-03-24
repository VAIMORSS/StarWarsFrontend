import React from 'react';
import store from './../../store/store';
import { Provider } from 'react-redux';


 const TestStoreWrapper=(WrappedComponent)=> {
    return class extends React.Component {
        render() {
            return (
                <Provider store={store}>
                    <WrappedComponent {...this.props} />;
                </Provider>)
        }
    };
}

export default TestStoreWrapper;