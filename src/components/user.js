import React, {useState, useEffect} from "react";
import styled from "styled-components";

const AVATAR = 'https://monovisionsawards.com/upload/images/1496999290k-5xzds8_9478_20170408_b.jpg';

const UserWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const Avatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-top: 10px;
    margin-bottom: 10px;
`;
const Points = styled.span`
  font-size: 12px;
  font-weight: 300;
  margin-bottom: 10px;
`;
const Name = styled.span`
  font-weight: 500; 
  font-size: 14px;
`;

// Websocket
let i = 0;
setInterval(() => {
    console.log(i);
    window.dispatchEvent(new CustomEvent("points-change", {
        detail: ++i
    }));
}, 1000);

export default function User() {
    const [actived, changeActived] = useState(false);
    const [points, changePoints] = useState(0);
    const pointsHandler = ({detail}) => {
        changePoints(detail);
    };
    useEffect(() => {
        // componentDidMount, componentDidUpdate
        window.addEventListener("points-change", pointsHandler);
        // componentWillUnmount
        return () => {
            window.removeEventListener("points-change", pointsHandler)
        }
    })
    return (
        <UserWrapper>
            <Avatar src={AVATAR}/>
            <Name>Lana</Name>
            <Points>Очки: {points}</Points>
            <button disabled={actived} onClick={() => {
                if(!actived){
                    changePoints(++i);
                    changeActived(true);
                }
            }}>
                {actived ? 'Уже поставил' : 'Повысить рейтинг'}
            </button>
        </UserWrapper>
    );
};

