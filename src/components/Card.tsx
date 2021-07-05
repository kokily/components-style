import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { ImYoutube2 } from 'react-icons/im';
import { BsBoxArrowInRight } from 'react-icons/bs';

// Styles
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 56px);
  background: radial-gradient(${oc.gray[2]}, ${oc.gray[9]});
`;

const CardBox = styled.div`
  position: relative;
  width: 340px;
  height: 450px;
  background: white;
  border-radius: 10px;
  overflow: hidden;

  .circle {
    position: absolute;
    top: -190px;
    left: 50%;
    transform: translateX(-50%);
    width: 500px;
    height: 500px;
    background: ${oc.gray[8]};
    clip-path: circle();

    &:before {
      content: '';
      position: absolute;
      top: -8px;
      left: -16px;
      width: 100%;
      height: 100%;
      background: transparent;
      box-shadow: 0 0 0 20px rgba(255, 0, 0, 0.5);
      border-radius: 50%;
      z-index: 1000;
      pointer-events: none;
    }

    .imgBox {
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
      width: 340px;
      height: 310px;
      background: ${oc.red[4]};

      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: 0.15s;
        cursor: pointer;

        &:hover {
          transform: scale(1.5);
        }
      }
    }
  }
`;

const Content = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 140px;
  padding: 20px 30px;

  h3 {
    margin-top: -3px;
    margin-bottom: -5px;
    transition: 0.15s;
    cursor: pointer;

    &:hover {
      color: ${oc.indigo[7]};
    }
  }

  .text {
    display: flex;
    justify-content: space-between;
    align-items: center;

    svg {
      cursor: pointer;
      transition: 0.15s;

      &:hover {
        color: ${oc.indigo[7]};
      }
    }
  }
`;

interface Props {}

const Card: React.FC<Props> = () => {
  return (
    <Container>
      <CardBox>
        <div className="circle">
          <div className="imgBox">
            <img src="/assets/images/jinro.jpg" alt="" />
          </div>
        </div>

        <Content>
          <a href="/">
            <ImYoutube2 size="34" />
          </a>
          <h3>타이틀 부분</h3>

          <div className="text">
            <h4>컨텐츠 부분</h4>
            <BsBoxArrowInRight size="20" />
          </div>
        </Content>
      </CardBox>
    </Container>
  );
};

export default Card;