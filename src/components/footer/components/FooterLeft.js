import React from 'react';
import FOOTER_DATA from './FooterData';
import styled from 'styled-components';

const FooterLeft = ({ easterEgg }) => {
  return (
    <FooterContainer>
      <div className="footer-left">
        <div className="footer-input">
          <input type="text" placeholder="이메일주소를 입력해주세요" />
          <button onClick={easterEgg}>구독</button>
        </div>
        {FOOTER_DATA.map(data => (
          <p key={data.id}>{data.top}</p>
        ))}
        {FOOTER_DATA.map(item => (
          <div className="cs-center" key={item.id}>
            <strong>{item.footerCenter?.center[0].title}</strong>
            <strong>{item.footerCenter?.center[1].title}</strong>
            <strong>{item.footerCenter?.center[0].number}</strong>
            <strong>{item.footerCenter?.center[1].number}</strong>
            <p>{item.footerCenter?.center[0].email}</p>
            <p>{item.footerCenter?.center[1].email}</p>
            <div className="footer-phone">
              <span>{item.footerCenter?.contact[0].title}</span>
              <span>{item.footerCenter?.contact[0].time}</span>
            </div>
            <div className="footer-phone">
              <span>{item.footerCenter?.contact[1].title}</span>
              <span>{item.footerCenter?.contact[1].time}</span>
            </div>
          </div>
        ))}

        <div className="sns-box">
          <img src="/images/Footer/IconInstar.png" alt="인스타그램" />
          <img src="/images/Footer/IconFace.png" alt="페이스북" />
          <img src="/images/Footer/IconMini.png" alt="네이트온" />
          <img src="/images/Footer/IconTalk.png" alt="카카오톡" />
        </div>
      </div>
    </FooterContainer>
  );
};

export default FooterLeft;

const FooterContainer = styled.div`
  .footer-wrap {
    margin-top: 150px;
    background: rgb(255, 255, 255);
    width: 100%;
    height: 645px;
    bottom: -10px;

    .footer-aside {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 100%;
      height: 160px;

      img {
        width: 150px;
        height: 150px;
      }
    }

    .footer-main {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 100%;
      height: 480px;
      background: rgb(0, 0, 0);

      .footer-left {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background: #000;
        width: 450px;
        height: 352px;
        margin-left: 100px;

        .footer-input {
          display: flex;
          align-items: center;
          input {
            color: white;
            width: 300px;
            height: 30px;
            background: #222222;
            border: 1px solid rgba(0, 0, 0, 0);
            outline: 0px solid black;
            padding-left: 10px;
          }

          button {
            height: 30px;
            color: white;
            background: #222222;
            border: 1px solid rgba(0, 0, 0, 0);
          }
        }
        p,
        strong,
        span,
        a {
          color: white;
        }

        p {
          font-size: 15px;

          span {
            margin-left: 5px;
          }
        }

        .cs-center {
          width: 450px;
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          flex-wrap: wrap;

          strong {
            width: 180px;
            font-size: 18px;
            // margin-bottom: 5px;
            padding: 5px 5px;
          }

          p {
            margin-bottom: 15px;
            padding: 5px 5px;
            width: 180px;
            font-size: 18px;
          }

          .footer-phone {
            display: flex;
            justify-content: center;
            width: 300px;

            span {
              margin-bottom: 3px;
              width: 300px;
            }
          }
        }

        .sns-box {
          display: flex;

          img {
            position: relative;
            left: -10px;
            background: #b8b7b7;
            border-radius: 50%;
            border: solid 2px #22222200;
            width: 35px;
            height: 35px;
            margin-left: 10px;
          }
        }
      }
      .footer-right {
        width: 500px;
        height: 345px;

        .nav-notice {
          a {
            text-decoration: none;
            font-size: 18px;
            font-weight: 700;
            color: white;
          }

          p {
            font-size: 15px;
            margin-top: 5px;
            color: white;
          }

          span {
            color: aquamarine;
          }
        }

        .nav-footer-menu {
          width: 450px;
          margin-top: 10px;
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          flex-wrap: wrap;

          p {
            width: 180px;
            font-size: 20px;
            color: white;
          }
        }

        p {
          margin-top: 8px;
          color: white;
        }
        section {
          margin-top: 20px;
          color: white;
        }
      }
    }
  }
`;