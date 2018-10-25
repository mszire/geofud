import React, { Component } from 'react';
import './App.css';
import './materialize.min.js';


import Row from './Row';



class Table extends Component {
  

    render() {
        return (
            
                    <div className="row">
                        <h4 className="col s12 light">{this.props.name}</h4>
                        <p className="col s12">Size :(0.0g)
                            <br /> Serving per container :1
                            <br />
                        </p> 
                        
                        {/* <table className="col s12">
                            <tr>
                                <td><b>Amount per Serving</b></td>
                            </tr>
                            <tr>
                                <td><b>Calories </b> 300</td>
                            </tr>
                            <tr>
                                <td>    Calories From Fat 35</td>
                            </tr>
                            <tr>
                                <td>     Calories From Saturated Fat 10</td>
                            </tr>
                            <hr />
                            <tr>
                                <td>                                 
                                                                     
                                      <b>%Daily Value*</b> </td>
                            </tr>
                            <tr>
                                <td><b>Total Fat</b></td>
                            </tr>
                            <tr>
                                <td>    Saturated Fat 1g</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>   Trans</i> Fat 0g
                                </td>
                            </tr>
                            <tr>
                                <td>
                                       Polyunsaturated Fat 0g
                                </td>
                            </tr>
                            <tr>
                                <td>
                                       Monounsaturated Fat 1.5g
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <b>Cholestrol</b> 120mg
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <b> Sodium </b>130mg
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <b>Potassium</b> 1210mg
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <b>Total Carbhohydrates</b> 29g
                                </td>
                            </tr>
                            <tr>
                                <td>
                                       Dietary Fiber 6g
                                </td>
                            </tr>
                            <tr>
                                <td>
                                       Sugers 8g
                                </td>
                            </tr>
                            <tr>
                                <td>
                                       OTher Carbohydrates 14g
                                </td>
                            </tr>
                            <tr>
                                <td>
                                       Suger Alcohol 0g
                                </td>
                            </tr>
                            <tr>
                                <td>
                                       Sugers 8g
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <b>Protein</b> 29g                       
                                                              
                                                    <b>78</b>%
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    ls-l
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Vitamin A 460%                 .           
                                        Vitamine C20%
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Calcium 8%                        .     
                                              iron 8%
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    Vitamin D 0%                     .        
                                          Vitamin E 15%
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    Vitamin K 140%                 .            
                                      Thiamin 20%
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    Vitamin B6 90%                 .            
                                      Floate 15%
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    Vitamin B12 4%                 .            
                                      Pantothanic Acid 35%
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Phosphorus 40%                 .            
                                      Magnesium 20%
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Zinc 10%                            .  
                                                Selenium 50%
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Copper 15%                        .      
                                            Manganese 35%
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    *Present Daily Values are based on 2000Calories Diet <br />   Your Daily Values may be Higher or
                                    lower <br />   Depending on your Daily need
                                </td>
                            </tr>

                            <tr>
                                <td>
                                                                     
                                            Calories       2000               2,500
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Total Fat                          Less Than  
                                      2000               2,500
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Sat Fat                             Less Than
                                        2000               20g
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Cholestrol                        Less Than    
                                    2000               20g
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Sodium                            Less Than
                                        2000               20g
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    Total Carbohydrates                            
                                    2000               20g
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    Diatery Fiber                              
                                             2000               20g
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    Protein                                
                                                     2000               20g
                                </td>
                            </tr>
                        </table> */}

                        <table className="col s12">
                           
                           <Row name="Energy" value={this.props.values.calories} />
                           <Row name="Fat" value={this.props.values.fat} />
                           <Row name="Saturated Fat" value={this.props.values.saturatedFat} />
                           <Row name="Trans Fat" value={this.props.values.transFat} />  
                           <Row name="UnsaturatedFat" value={this.props.values.unsaturatedFat} />
                           <Row name="Cholesterol" value={this.props.values.cholesterol} />
                           <Row name="Sodium" value={this.props.values.sodium} />
                           <Row name="Fiber" value={this.props.values.fiber} />
                           <Row name="Protein" value={this.props.values.protein} />
                           <Row name="Carbohydrate" value={this.props.values.carbohydrate} />
                           <Row name="Calcium" value={this.props.values.calcium} />
                           <Row name="ServingSize" value={this.props.values.servingSize} />
                           <Row name="Suger" value={this.props.values.suger} />                     
                           

                           
                           
                            {/* <tr>
                                <td><b>Calcium</b></td>
                                <td>{this.props.calcium}</td>
                            </tr>
                            <tr>
                                <td><b>Protein</b></td>
                                <td>{this.props.protein}</td>
                            </tr>
                            <tr>
                                <td><b>Fat</b></td>
                                <td>{this.props.fat}</td>
                            </tr>
                            <tr>
                                <td><b>Carbohydrates</b></td>
                                <td>{this.props.carbohydrate}</td>
                            </tr>
                            <tr>
                                <td><b>Iron</b></td>
                                <td>{this.props.iron}</td>
                            </tr> */}
                        </table>
                    



                    </div>
        );
       
    }
        
    
}

export default Table;
