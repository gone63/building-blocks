import React, { Component } from "react";
import "../style/style.css";

class Block extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            boxCount: props.boxCount,
            fontSize: props.fontSize
        };
    }

    render() {
        if (this.props.boxCount > 0) {
            var myStyle = {
                fontSize: this.props.fontSize,
                padding: "5px",
                backgroundColor: this.props.boxCount % 2 == 0 ? "#000000" : "#0f48e8",
                color: "#ffffff",
                borderTop: this.props.boxCount % 5 === 0 ? "5px solid #ffa500" : "none"
            };
            return (
                <div className="box-container">
                    <div className="box" style={myStyle}>
                        {this.props.boxCount}
                    </div>
                </div>
            );
        } else {
            return <div></div>;
        }
    }
}

export default Block;
