import React from 'react'
class ErrorBoundry extends React.Component{
    // class component huda get hold of props this way , yeha hunata use vaxaina props ko teini
    constructor(props){
        super(props)
        this.state = {hasError: false}
    }

    componentDidCatch(error,info){
        this.setState({hasError: true})
    }
    // it is also a lifecycle method and always gets called when an error is occured
    // so error is handled , instead of showing crashed app , we are showing oops sth is wrong.

    render(){
        if(this.state.hasError){
            return(<h1>Oops! That is not good</h1>)
        }
        else{
            return(this.props.children)
        }
    }
}

export default ErrorBoundry

// i can use this error boundry in every component i want, so it is very reusable