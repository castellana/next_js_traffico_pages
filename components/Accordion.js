import React, { Component } from 'react'

class  Accordion extends Component {
    state = { 
        isVisible: false,
        isVisible2: false
    }
    handleIsVisible = () => {
        this.setState({ isVisible: !this.state.isVisible });
    }
    handleIsVisible2 = () => {
       this.setState({ isVisible2: !this.state.isVisible2 });
    }
    render() { 
        return ( 
            <article>
                <div className="question-group">
                    <h3>{this.props.question}</h3>
                    <button className="accord-button" onClick={this.handleIsVisible}>+</button>
                </div>

                <hr style={{display: this.state.isVisible ? "block" : "none"}}/>
                
                <div style={{display: this.state.isVisible ? "block" : "none"}}>
                    <div className="answer">
                        <h4>{this.props.answer}</h4>
                    </div>
                </div>
            
                <style jsx>{`
                .question-group {
                    display: flex;
                    justify-content: space-between;
                    border-radius: 10px;
                    background-color: #fff;
                    padding: 7px 15px;
                    height: 10vh;
                    align-items: center;
                }
                h3 {
                    width: 90%;
                }
                h4 {
                    font-weight: normal;
                }
                .accord-button {
                    color: red;
                    border: none;
                    background-color: transparent;
                    font-size: 2rem;
                }
                .answer {
                    padding: 20px 10px;
                    background-color: #FFF7F5;
                    border-radius: 10px;
                }
                `}</style>
            </article>
         );
    }
}
 
export default Accordion;