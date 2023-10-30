// lets create a app component which will be father/parent of all other components
import React,{Component} from "react";
// import {robots} from './robots.js'
import CardList from '../components/cardlist.js'
import SearchBox from '../components/SearchBox.js'
import './App.css'
import Scroll from '../components/Scroll.js'
import ErrorBoundry from '../components/ErrorBoundry.js'
// searchbox lai ni xuttai component banaam

class App extends Component {
    constructor(){
        super()  // calls the constructor of parent
        this.state = {
            robots: [],  // website load vaesi ball we grab users from a remote server, then display them here
            // mounting = process of creating a component and inserting into a dom
            // surumai aillai jo api bata user grab garna khojepar ta yehi jo ber lagxa, ani aru chij render hunani paunnan  coz 
            // while mounting => constructor -> render -> componentsdidmount, so mount vaisakesi balla users grab garni, ini laskarai afai call hunihun
            // when state changes, the component will rerender coz it is updating cycle, ani updating cycle ma ni render vanni method xa, so feri render() hunxa
            searchfield: ""
        }
        // attributes are like global variables, so i can use searchfield in every method of this class
    }   

    // normal class ma attributes lai update garna milthena but we can update states as they are changable, setState()

    // searchbox ko lagi auta function chaiyo vani, tyo yehi jo method ko roopma banauniiii , naki uta searchboxma
    // custom function banauda always use array function, natra this lai nachinna sakxa 
    onSearchChange = (event) => {
        // console.log(event.target.value)
        this.setState({searchfield: event.target.value})
    }

    componentDidMount(){  // i am using fetch() directly so it means it is method of window object
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response)=> response.json())          // => {} gareva return garnai parthyo
        .then((data)=>this.setState({robots: data}))  // then ko arg ko roopma a callback function, yo func ko arg ko roopma is the data received by the get request from api, i.e  response, so talako then ma ni response lekheni hunthyo datako sattaa
        // state update vaesi feri render coz updating cycle ma ni automatic render() func xa  jun call hunxa
    }

    render(){
        const {robots,searchfield} = this.state;   // yo nagardaa this.state.robots ra this.state.serachfield garethim
        const filtered_robots = robots.filter((item,index)=>{  // return condition
            return item.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        if (!robots.length){            // this.state.robots.length === 0
            return <h1 className="tc">Loading</h1>  // return html in jsx
        }
        else{
            return(
                <div className="tc">
                    <h1 className="pa3 f1">Robofriends</h1>  {/*f1 f2 f3 is the size of font , f1 is larger*/}
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filtered_robots}/>
                        </ErrorBoundry>
                    </Scroll>
                    {/* aba cardlist afai render hunna, render huni vaneko scroll matra ho, to access cardlist, do props.children  */}
                </div>  
            )
        }
    }
}

//  npm run build -> optimizes and manages our files and folders and creates a build folder which  contains our project in minified form
// and it is ready to be deployed, i can just take this build folder and deploy it anywhere in the world as it contains our whole project.

export default App

// cardlist is getting props from its parent component, props are passed down from parent as arguments to the children component
// props are immutable and they wont change, are used to pass data from one component to another

// state is a object which describes your app/component and helps to manage/control the data which can change
// state can change, every time stage is changed on a component, it rerenders the component and its children

// a parent feeds/passes state to child component, once child receives a state, its now a prop , states go hand in hand with classes

// Sometimes, you want the state of two components to always change together. To do it, remove state from both of them, move the state to their closest 
// common parent, and then pass it down to them via props. This is known as lifting state up, and it’s one of the most common things you will do 
// writing React code.

