import React, { Component } from "react";
import "../style/style.css";
import Block from "../../Block/script/index.js";

class Queue extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allElements: [
                {
                    fontSize: 8,
                    boxCount: 1
                }
            ]
        };
    }
    handleAddBox = () => {
        const allElements = this.state.allElements;
        if (allElements.length > 0) {
            const lastElementAdded = this.state.allElements[allElements.length - 1];
            const previousBoxes = parseInt(lastElementAdded.boxCount);
            const newFontSize = parseInt(lastElementAdded.fontSize);
            allElements.push({
                fontSize: newFontSize + 1,
                boxCount: previousBoxes + 1
            });
            this.setState({
                allElements: allElements
            });

        } else {
            const defaultBlock = {
                fontSize: 8,
                boxCount: 1
            };
            allElements.push(defaultBlock);
            this.setState({
                allElements: allElements
            });
        }
    };

    handleRemoveBox = () => {
        const allElements = this.state.allElements;
        if (allElements.length > 0) {
            allElements.pop();
            this.setState({
                allElements: allElements
            });
        } else {
            var errorMessageContainer = document.getElementById("error-message");
            errorMessageContainer.innerText = "Total boxes is zero!";
            setTimeout(function () {
                errorMessageContainer.innerText = null;
            }, 2000);
        }
    };

    render() {
        var allElements = this.state.allElements;
        return (
            <div>
                <div id="cta">
                    <div id="add-btn" onClick={this.handleAddBox}>
                        Add Box
          </div>
                    <div id="remove-btn" onClick={this.handleRemoveBox}>
                        Remove Box
          </div>
                    <div id="error-message"></div>
                </div>
                <div>
                    {allElements.map((item, index) => {
                        return (
                            <Block
                                fontSize={item.fontSize}
                                boxCount={item.boxCount}
                                key={index}
                            />
                        );
                    })}
                </div>
                <div id="elements-count">{allElements.length}</div>
            </div>
        );
    }
}

export default Queue;
