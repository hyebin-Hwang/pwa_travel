import React from "react";
import styled from "styled-components";

export default function Login() {
  return (
    <StyledMainContainer>
      <StyledGreetingSection>
        <div className="loginLogoBox">
          <img
            src={process.env.PUBLIC_URL + "/img/login_logo.webp"}
            alt="login logo"
          />
        </div>
        <p>하루를 기록하고</p>
        <p>더 좋은 개발자가 되자!</p>
        <div className="loginMainImgBox">
          <img
            src={process.env.PUBLIC_URL + "/img/login_main.webp"}
            alt="login main"
          />
        </div>
      </StyledGreetingSection>
      <StyledLoginBtnSection>
        <div className="loginBtnBox">
          <button className="githubBtn">깃허브 로그인</button>
          <button className="guestBtn">게스트 로그인</button>
        </div>
      </StyledLoginBtnSection>
    </StyledMainContainer>
  );
}

const StyledMainContainer = styled.main`
  max-width: 1200px;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  overflow: hidden;
`;

const StyledGreetingSection = styled.section`
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #6e85b7;

  .loginMainImgBox {
    height: 60%;
    img {
      height: 100%;
    }
  }

  .loginLogoBox {
    width: 170px;
    padding-bottom: 20px;
    img {
      width: 100%;
    }
  }

  p {
    font-size: 17px;
    font-weight: 500;
    color: #f1f1f1;
  }
`;

const StyledLoginBtnSection = styled.section`
  height: 20vh;
  .loginBtnBox {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  button {
    width: 250px;
    height: 40px;
    font-weight: 600;
    color: #f1f1f1;
    font-size: 14px;
    letter-spacing: 2px;
    border-radius: 8px;
  }

  .guestBtn {
    background: #2f4858;
  }
  .githubBtn {
    background: #7be527;
    margin-bottom: 10px;
  }
`;
