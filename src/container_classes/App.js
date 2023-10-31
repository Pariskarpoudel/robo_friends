import React,{Component} from "react";
import CardList from '../components/cardlist.js'
import SearchBox from '../components/SearchBox.js'
import './App.css'
import Scroll from '../components/Scroll.js'
import ErrorBoundry from '../components/ErrorBoundry.js'


class App extends Component {
    constructor(){
        super()  
        this.state = {
            robots: [],  
            searchfield: ""
        }
       
    }   

    
    onSearchChange = (event) => {
      
        this.setState({searchfield: event.target.value})
    }

    componentDidMount(){  
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response)=> response.json())          
        .then((data)=>this.setState({robots: data}))  

    }

    render(){
        const {robots,searchfield} = this.state;   
        const filtered_robots = robots.filter((item,index)=>{ 
            return item.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        if (!robots.length){          
            return <h1 className="tc">Loading</h1> 
        }
        else{
            return(
                <div className="tc">
                    <h1 className="pa3 f1">Robofriends</h1>  
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filtered_robots}/>
                        </ErrorBoundry>
                    </Scroll>
                   
                </div>  
            )
        }
    }
}



export default App

