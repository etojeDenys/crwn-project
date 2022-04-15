import styled from "styled-components";
import {CustomButton} from "../CustomButton/CustomButton";

export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
`

export const CollectionItemImageContainer = styled.div`
  width: 100%;
  height: 95%;
  margin-bottom: 5px;
  background-size: cover;
  background-position: center;
  background-image: url(${props=>props.imageUrl});

  ${CollectionItemContainer}:hover &{
    opacity: 0.8;
  }
`

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`

export const CollectionNameContainer = styled.span`
  width: 90%;
  margin-bottom: 15px;
`
export const CollectionPriceContainer = styled.span`
  width: 10%;
`

export const CollectionButtonContainer = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;

  ${CollectionItemContainer}:hover &{
    opacity: 0.85;
    display: flex;
  }
`