import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: "",
            errorInfo: ""
        };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo,
        });
    }

    render() {
        if (this.state.errorInfo) {
            let errorMessage = "";

            let errorComponent = this.state.errorInfo.componentStack.split(/(\r\n|\n)/g)[2];
            if (errorComponent.includes("Card")) {
                errorMessage = "Не удалось получить информацию о книге.";
            } else {
                errorMessage = "Не удалось отобразить страницу.Пожалуйста, зайдите к нему еще раз из дома.";
            }
            return (
                <h2>{ errorMessage }</h2>
            );
        }

        return this.props.children;
    }  
}

export default ErrorBoundary;