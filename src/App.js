import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import './materialize.min.js';
import Table from './Table';
import Form from './Form';


class App extends Component {
  
    // showResult(event) {
    //     const elem = (
    //         <p>You searched for {event.target.value}.</p>
    //     );

    //     ReactDOM.render(elem, document.getElementById('result-view'));
    // }
  


    showResult(event) {
        ReactDOM.render(<Table name={event.target.value}/>, document.getElementById('result-view'));
    }
  
    showNewItem(event) {
        ReactDOM.render(<Form />, document.getElementById('root'));
    }
  
    
    render() {
        return (
            <div className="App blue darken-2 screen-height">

                <div className="container">
                    
                    <div className="row">
                        <h1 className="col s12 header white-text ">GeoFud</h1>

                    </div>

                    <div className="row">
                        <div className="btn" onClick={this.showNewItem}>NewItem</div>
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
