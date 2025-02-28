import React from "react"

class UserClass extends React.Component{
    constructor(props){
        super(props);
        // way to decalre state variable
        this.state = {
            count: 1,
            count2 : 2
        };
        console.log("child constructor");
    }

    componentDidMount(){
       console.log("child componentdimount");
       this.timer = setInterval(()=>{
        console.log("react OP")
    },1000)
    }
    componentDidUpdate(prevProps, prevState){
        if(
            this.state.count !== prevState.count 
        ){

        }
        if(this.state.count2 !== prevState.count2){
            //to check if count2 value changed

        }
        console.log("componentDid update")
    }
    componentWillUnmount(){
        // called when page changes(unmounting)
        clearInterval(this.timer);
        console.log("component unmount")
    }
    
    render(){
        console.log("child render");
        const {name} = this.props;
        return(
            <div className="user-card m-4 p-4 bg-gray-50 rounded-lg">
            <h2>Name: {name}</h2>
            <h3>Location: Delhi</h3>
            <h3>{this.state.count}</h3>
            <button onClick={()=>{
                //to update value of state variable
                this.setState({
                    count: this.state.count + 1,
                    count2: this.state.count2 +4
                })
            }}>Increase count</button>
        </div> 
        )
    };

};

export default UserClass;


/**----Mounting Lifecycle-----------------------
 * Constructor called -> Render called(dummy data)
 * HTML<dummy>
 * ComponentdidMount
 * <API Call>
 * <this.setState> called which trigger update cycle(reconcilation)
 * 
 * --------------Updating cycle---------------------
 *   render () called <API data>
 *   HTML< API Data> loaded
 *   componentdidupdate() is called
 * 
 * -------Unmounting Cycle------------------------------------
 *    componentWillunmount() -> as soon as component unmount
 * 
 */


/**
 * After every subsequent update componentupdatemount will be called
 * 
 */