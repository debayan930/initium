import React, { Component } from 'react';
import Aux from '../Auxiliary/Auxiliary';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component{
        state = {
            error: null
        }

        componentWillMount(){
            this.reqInterceptor = axios.interceptors.request.use(request => {
                this.setState({ error: null });
                return request;
            });

            this.resInterceptor = axios.interceptors.response.use(response => response, error => {
                this.setState({ error: error })
            });
        }

        componentWillUnmount(){
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }

        errorModalHandler = () => {
            this.setState({ error: null });
        }

        render(){
            return(
                <Aux>
                    <WrappedComponent {...this.props} />
                </Aux>
            );
        }
    }
}

export default withErrorHandler;