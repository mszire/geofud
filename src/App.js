import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import './materialize.min.js';


// class Item extends Component {
//     // constructor(props){
//     //     this.state = {value: ''};
//     //     this.handleChange = this.handleChange.bind(this);
//     // }


//     // handleChange(v){
//     //     this.setState({value: v});
//     // }

//     render() {
//         return (
//             <p>You searched for {this.props.name}.</p>
//         );
//     }
// }



class App extends Component {
  
    showResult(event) {
        const elem = (
            <p>You searched for {event.target.value}.</p>
        );

        ReactDOM.render(elem, document.getElementById('result-view'));
    }
  
    render() {
        return (
            <div className="App blue darken-2 screen-height">

                <div className="container">
                
                    <div className="row">
                        <h1 className="col s12 header white-text ">GeoFud</h1>

                    </div>

                    <div className="row">
                        <div className="col s10 push-s1 m8 push-m2 l6 push-l3">
                            <div className="card z-depth-4 padded-comfortable no-padded-bottom">

                                <div class="row">
                                    <div class="input-field col s12">
                                        <input id="search-term" type="text" class="validate" onChange={this.showResult}></input>
                                        <label for="search-term">What do you want to look for?</label>
                                    </div>
                                </div>


                                <div className="row">
                                    <div className="col s12" id="result-view">
                                        
                                    </div>
                                </div>




                            </div>
                        </div>
                    </div>


                </div>
                <script>
                    M.AutoInit();
                </script>
            </div>

            

        );
    }
}

export default App;
