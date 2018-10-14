import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import './materialize.min.js';






class Form extends Component {
  
    // showResult(event) {
    //     const elem = (
    //         <p>You searched for {event.target.value}.</p>
    //     );

    //     ReactDOM.render(elem, document.getElementById('result-view'));
    // }
  
    render() {
        return (
            <div className="App blue darken-2 screen-height">

                <div className="container">
                
                    <div className="row">
                        <h1 className="col s12 header white-text ">GeoFud</h1>

                    </div>

                    <div className="row">
                        <div className="col s10 push-s1 ">
                            <div className="card z-depth-4 padded-comfortable no-padded-bottom">
                                <div className="row">
                                    <h4 className="input-field col s12 light">Enter data for new label</h4>
                                </div>

                                <div className="row">
                                    <div className="input-field col s12">
                                        <input id="search-term" type="text" className="validate" ></input>
                                        <label for="search-term">What do you want to look for?</label>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="input-field col s12">
                                        <input id="search-term" type="text" className="validate" ></input>
                                        <label for="search-term">What do you want to look for?</label>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="input-field col s12">
                                        <input id="search-term" type="text" className="validate" ></input>
                                        <label for="search-term">What do you want to look for?</label>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="input-field col s12">
                                        <input id="search-term" type="text" className="validate" ></input>
                                        <label for="search-term">What do you want to look for?</label>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="input-field col s12">
                                        <input id="search-term" type="text" className="validate" ></input>
                                        <label for="search-term">What do you want to look for?</label>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="input-field col s12">
                                        <input id="search-term" type="text" className="validate" ></input>
                                        <label for="search-term">What do you want to look for?</label>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="input-field col s12">
                                        <input id="search-term" type="text" className="validate" ></input>
                                        <label for="search-term">What do you want to look for?</label>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="input-field col s12">
                                        <input id="search-term" type="text" className="validate" ></input>
                                        <label for="search-term">What do you want to look for?</label>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="input-field col s12">
                                        <input id="search-term" type="text" className="validate" ></input>
                                        <label for="search-term">What do you want to look for?</label>
                                    </div>
                                </div>

                                
                                <div className="row">
                                    <div className="input-field col s12">
                                        <div className="btn blue white-text waves-effect hover waves-light">Submit</div>
                                       
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

export default Form;
