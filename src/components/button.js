import React, {Component, useState} from "react";
import styled from "styled-components";

const Toggler = styled.div`
  width: 80px;
  height: 40px;
  box-sizing: border-box;
  padding-left: 5px;
  padding-right: 5px; 
  border: 1px solid #dcdcdc;
  border-radius: 20px;
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
  align-items: center;  
  justify-content: ${props => props.active ? 'flex-start' : 'flex-end'};
  &::before{
    width: 30px;
    height: 30px;
    content: "";
    border-radius: 50%;
    background-color:${props => props.active ? 'green' : 'gray'};
  }
`;

class ActivateButtonOld extends Component {
    state = {
        active: this.props.active
    }

    changeActive = (active) => {
        this.setState({
            active
        })
    }

    render() {
        const {active} = this.state;
        return (
            <>
                <Toggler active={active} onClick={() => {
                    this.changeActive(!active)
                }}/>
                <button onClick={() => {
                    this.changeActive(!active)
                }}>
                    {this.state.active ? 'Отключить' : 'Включить'}
                </button>
            </>
        )
    }
}

const ActivateButton = ({initialState = false, onEnable, onDisable}) => {
    const [active, changeActive] = useState(initialState);
    return (
        <>
           <Toggler active={active} onClick={() => {
               changeActive(!active);
           }}/>
            <button onClick={() => {
                changeActive(!active);
            }}>
                {active ? 'Отключить' : 'Включить'}
            </button>
        </>
    )
}

export default ActivateButton;