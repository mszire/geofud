import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
//import './jquery.min.js';
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

        var xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                console.log(this.responseText);
                var data = JSON.parse(this.responseText);
                ReactDOM.render(<Table name={data.name} calcium={data.calcium} carbohydrate={data.carbohydrate} fat={data.fat} iron={data.iron} protein={data.protein}/>, document.getElementById('result-view'));
            }
        };
        xhttp.open("GET", 'http://localhost:3450/item/'+event.target.value, true);
        xhttp.send();

        

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
