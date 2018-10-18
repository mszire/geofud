import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import './materialize.min.js';
import App from './App';





class Form extends Component {
  

    showSearch(event) {
        ReactDOM.render(<App />, document.getElementById('root'));
    }
  

    render() {
        return (
            <div className="App blue darken-2 screen-height">

                <div className="container">
                
                    <div className="row">
                        <h1 className="col s12 header white-text ">GeoFud</h1>

                    </div>

                    <div className="row">
                        <div className="btn" onClick={this.showSearch}>Search</div>
                    </div>

                    <div className="row">
                        <div className="col s10 push-s1 ">
                            <div className="card z-depth-4 padded-comfortable no-padded-bottom">
                                <div className="row">
                                    <h4 className="input-field col s12 light">Enter data for new label</h4>
                                </div>

                                <div className="row">
                                    <div className="input-field col s12">
                                        <input id="Item-Name" type="text" className="validate" ></input>
                                        <label for="Item-Name">Item Name</label>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="input-field col s12">
                                        <input id="Item-Description" type="text" className="validate" ></input>
                                        <label for="Item-Description">Item Description</label>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="input-field col s12">
                                        <input id="Serving-Size" type="text" className="validate" ></input>
                                        <label for="Serving-Size">Serving Size</label>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="input-field col s12">
                                        <input id="Serving-Per-Container" type="text" className="validate" ></input>
                                        <label for="Serving-Per-Container">Serving Per Container</label>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="input-field col s12">
                                        <input id="Calories" type="text" className="validate" ></input>
                                        <label for="Calories">Calories</label>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="input-field col s12">
                                        <input id="Calories-From-Fat" type="text" className="validate" ></input>
                                        <label for="Calories-From-Fat">Calories From Fat</label>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="input-field col s12">
                                        <input id="Total-Fat" type="text" className="validate" ></input>
                                        <label for="Total-Fat">Total Fat</label>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="input-field col s12">
                                        <input id="Total-Fat-DV" type="text" className="validate" ></input>
                                        <label for="Total-Fat-DV">Total Fat DV</label>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="input-field col s12">
                                        <input id="Saturated-Fat" type="text" className="validate" ></input>
                                        <label for="Saturated-Fat">Saturated Fat</label>
                                    </div>
                                </div>
								
								<div className="row">
                                    <div className="input-field col s12">
                                        <input id="Polysaturated-Fat" type="text" className="validate" ></input>
                                        <label for="Polysaturated-Fat">Polysaturated Fat</label>
                                    </div>
                                </div>
								
								<div className="row">
                                    <div className="input-field col s12">
                                        <input id="Monosaturated-Fat" type="text" className="validate" ></input>
                                        <label for="Monosaturated-Fat">Monosaturated Fat</label>
                                    </div>
                                </div>
								
								<div className="row">
                                    <div className="input-field col s12">
                                        <input id="Trans-Fat" type="text" className="validate" ></input>
                                        <label for="Trans-Fat">Trans Fat</label>
                                    </div>
                                </div>
								
								<div className="row">
                                    <div className="input-field col s12">
                                        <input id="Cholesterol" type="text" className="validate" ></input>
                                        <label for="Cholesterol">Cholesterol</label>
                                    </div>
                                </div>
								
								<div className="row">
                                    <div className="input-field col s12">
                                        <input id="Cholesterol-DV" type="text" className="validate" ></input>
                                        <label for="Cholesterol-DV">Cholesterol DV</label>
                                    </div>
                                </div>
								
								<div className="row">
                                    <div className="input-field col s12">
                                        <input id="Sodium" type="text" className="validate" ></input>
                                        <label for="Sodium">Sodium</label>
                                    </div>
                                </div>
								
								<div className="row">
                                    <div className="input-field col s12">
                                        <input id="Sodium-DV" type="text" className="validate" ></input>
                                        <label for="Sodium-DV">Sodium DV</label>
                                    </div>
                                </div>
								
								<div className="row">
                                    <div className="input-field col s12">
                                        <input id="Total-Carbohydrates" type="text" className="validate" ></input>
                                        <label for="Total-Carbohydrates">Total Carbohydrates</label>
                                    </div>
                                </div>
								
								<div className="row">
                                    <div className="input-field col s12">
                                        <input id="Total-Carbohydrates-DV" type="text" className="validate" ></input>
                                        <label for="Total-Carbohydrates-DV">Total Carbohydrates DV</label>
                                    </div>
                                </div>
								
								<div className="row">
                                    <div className="input-field col s12">
                                        <input id="Dietary-Fiber" type="text" className="validate" ></input>
                                        <label for="Dietary-Fiber">Dietary Fiber</label>
                                    </div>
                                </div>
								
								<div className="row">
                                    <div className="input-field col s12">
                                        <input id="Dietary-Fiber-DV" type="text" className="validate" ></input>
                                        <label for="Dietary-Fiber-DV">Dietary Fiber DV</label>
                                    </div>
                                </div>
								
								<div className="row">
                                    <div className="input-field col s12">
                                        <input id="Sugars" type="text" className="validate" ></input>
                                        <label for="Sugars">Sugars</label>
                                    </div>
                                </div>
								
								<div className="row">
                                    <div className="input-field col s12">
                                        <input id="Added-Sugars" type="text" className="validate" ></input>
                                        <label for="Added-Sugars">Added Sugars</label>
                                    </div>
                                </div>
								
								<div className="row">
                                    <div className="input-field col s12">
                                        <input id="Protein" type="text" className="validate" ></input>
                                        <label for="Protein">Protein</label>
                                    </div>
                                </div>
								
								<div className="row">
                                    <div className="input-field col s12">
                                        <input id="Protein-DV" type="text" className="validate" ></input>
                                        <label for="Protein-DV">Protein DV</label>
                                    </div>
                                </div>
								
								<div className="row">
                                    <div className="input-field col s12">
                                        <input id="Vitamin-A" type="text" className="validate" ></input>
                                        <label for="Vitamin-A">Vitamin A</label>
                                    </div>
                                </div>
								
								<div className="row">
                                    <div className="input-field col s12">
                                        <input id="Vitamin-A-DV" type="text" className="validate" ></input>
                                        <label for="Vitamin-A-DV">Vitamin A DV</label>
                                    </div>
                                </div>
								
								<div className="row">
                                    <div className="input-field col s12">
                                        <input id="Vitamin-C" type="text" className="validate" ></input>
                                        <label for="Vitamin-C">Vitamin C</label>
                                    </div>
                                </div>
								
								<div className="row">
                                    <div className="input-field col s12">
                                        <input id="Vitamin-C-DV" type="text" className="validate" ></input>
                                        <label for="Vitamin-C-DV">Vitamin C DV</label>
                                    </div>
                                </div>
								
								<div className="row">
                                    <div className="input-field col s12">
                                        <input id="Vitamin D" type="text" className="validate" ></input>
                                        <label for="Vitamin D">Vitamin D</label>
                                    </div>
                                </div>
								
								<div className="row">
                                    <div className="input-field col s12">
                                        <input id="Vitamin-D-DV" type="text" className="validate" ></input>
                                        <label for="Vitamin-D-DV">Vitamin D DV</label>
                                    </div>
                                </div>
								
								<div className="row">
                                    <div className="input-field col s12">
                                        <input id="Calcium" type="text" className="validate" ></input>
                                        <label for="Calcium">Calcium</label>
                                    </div>
                                </div>
								
								<div className="row">
                                    <div className="input-field col s12">
                                        <input id="Calcium-DV" type="text" className="validate" ></input>
                                        <label for="Calcium-DV">Calcium DV</label>
                                    </div>
                                </div>
								
								<div className="row">
                                    <div className="input-field col s12">
                                        <input id="Iron" type="text" className="validate" ></input>
                                        <label for="Iron">Iron</label>
                                    </div>
                                </div>
								
								<div className="row">
                                    <div className="input-field col s12">
                                        <input id="Iron-DV" type="text" className="validate" ></input>
                                        <label for="Iron-DV">Iron DV</label>
                                    </div>
                                </div>
								
								<div className="row">
                                    <div className="input-field col s12">
                                        <input id="Potassium" type="text" className="validate" ></input>
                                        <label for="Potassium">Potassium</label>
                                    </div>
                                </div>
								
								<div className="row">
                                    <div className="input-field col s12">
                                        <input id="Potassium-DV" type="text" className="validate" ></input>
                                        <label for="Potassium-DV">Potassium DV</label>
                                    </div>
                                </div>
								
								<div className="row">
                                    <div className="input-field col s12">
                                        <input id="Thiamine" type="text" className="validate" ></input>
                                        <label for="Thiamine">Thiamine</label>
                                    </div>
                                </div>
								
								<div className="row">
                                    <div className="input-field col s12">
                                        <input id="Thiamine-DV" type="text" className="validate" ></input>
                                        <label for="Thiamine-DV">Thiamine DV</label>
                                    </div>
                                </div>
								
								<div className="row">
                                    <div className="input-field col s12">
                                        <input id="Riboflavin" type="text" className="validate" ></input>
                                        <label for="Riboflavin">Riboflavin</label>
                                    </div>
                                </div>
								
								<div className="row">
                                    <div className="input-field col s12">
                                        <input id="Riboflavin-DV" type="text" className="validate" ></input>
                                        <label for="Riboflavin-DV">Riboflavin DV</label>
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
