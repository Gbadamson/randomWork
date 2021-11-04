import React, { useState } from "react";
import styled from "styled-components";
import NavComponent from "../Home/NavComponent";
import mage from "../Images/cwfil.gif";
import { Link, useHistory } from "react-router-dom";
import { Modal } from "antd";
import { themeColor, darkThemeColor } from "../utils/usable";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [passsword, setPassword] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const hist = useHistory();
  return (
    <div>
      <Modal
        title="Error Prompt"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        Incomplete User Details, Please go and fill the details
      </Modal>
      <NavComponent />
      <HeroSign>
        <SignAnim>
          <Signmage src={mage} />
        </SignAnim>
        <SignText>
          <MainTextHolder>
            <BigText>Sign In</BigText>
            <SubText>
              Welcome User, kindly fill in your details to go ahead
            </SubText>
            <InputField
              placeholder="Username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <InputField
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Taker
              onClick={() => {
                if (username === "" || passsword === "") {
                  showModal();
                } else {
                  hist.push("/dashboard");
                }
              }}
            >
              Submit
            </Taker>

            <AlterText>
              Don't have an account? <Link to="/getin">Sign Up</Link>
            </AlterText>
            <AlterText>
              <i>Forgot Password?</i> <Link to="/">click here</Link>
            </AlterText>
          </MainTextHolder>
        </SignText>
      </HeroSign>
    </div>
  );
};

export default SignIn;

const HeroSign = styled.div`
  width: 80%;
  height: auto;
  padding: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 50px auto;
  background: ${themeColor};
  border-radius: 20px;
  @media screen and (min-width: 320px) and (max-width: 1024px) {
    width: 80%;
    flex-direction: column-reverse;
  }
`;
const SignAnim = styled.div`
  width: 40%;
  height: 400px;
  background: ${darkThemeColor};
  display: flex;
  jusfiy-content: center;
  align-items: center;
  border-radius: 20px;
`;
const Signmage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
const SignText = styled.div`
  width: 40%;
  background: none;
  display: flex;
  jusfiy-content: center;
  align-items: center;
  border-radius: 20px;
`;
const MainTextHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`;
const BigText = styled.div`
  font-size: 30px;
  font-family: Poppins;
  font-weight: bold;
  color: white;
`;
const SubText = styled.div`
  font-size: 16px;
  color: white;
`;
const InputField = styled.input`
  height: 40px;
  width: 80%;
  border-radius: 5px;
  border: none;
  padding-left: 20px;
  margin-top: 10px;
  color: black;
  &:focus {
    border: none;
    outline: none;
  }
`;
const Taker = styled.button`
  width: 120px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 15px;
  background: white;
  color: black;
  font-family: Poppins;
  margin-top: 20px;
  box-shadow: 0 0 3px lightgrey;

  :hover {
    background: green;
    color: white;
    cursor: pointer;
    box-shadow: 0 0 2px lightgrey;
  }
`;
const AlterText = styled.div`
  font-size: 15px;
  color: white;
  margin-top: 10px;
`;
