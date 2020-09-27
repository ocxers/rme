import React, {Component} from 'react'

interface IErrorBoundaryProps {
}

class ErrorBoundary extends Component<IErrorBoundaryProps> {
    state = {
        hasError: false
    }

    static getDerivedStateFromError(error: any) {
        return {
            hasError: true
        }
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        // logErrorToMyService(error, errorInfo)
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong.</h1>
        }

        return this.props.children
    }
}

export default ErrorBoundary