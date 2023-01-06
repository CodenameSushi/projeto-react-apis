import styled from "styled-components";
import Pokebola from "../../assets/pokebola.png"

export const CardContainer = styled.div`
width: 440px;
height: 210px;
border-radius: 12px;

font-family: 'Inter', sans-serif;
font-weight: 700;

background-color: #729F92;
background-repeat: no-repeat;

display: flex;

    .card-left {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        padding: 24px;

        #card-title {
            height: 100px;
        }


        h1{
            font-size: 32px;
            height: 2px;
        }
        
        h2{
            font-size: 16px;
        }

        .pokemon-type {
            
            display: flex;
            justify-content: flex-start;
            align-items: center;
            gap: 8px;

            img{
                width: 99px;
                height: 31px;
            }

        }
    }

    .card-right {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        width: 220px;

        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding: 12px;



        img {
            position: relative;
            top: -20px;
            width: 200px;
            height: 200px;
                
        }
    }



`