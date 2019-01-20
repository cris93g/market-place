import React, { Component } from "react";
import styled from "styled-components";

const FooterWrapper = styled.section`
  width: 100%;
  height: 50vh;
  background-color: #8c1727;
  display: flex;
  justify-content: space-around;
  margin-top: 2%;
`;
const InnerDiv = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  margin-top: 5%;
  justify-content: space-around;
`;

export default class Footer extends Component {
  render() {
    return (
      <div>
        <FooterWrapper>
          <InnerDiv>
            <p>© 2018 WP Standard</p>
            <div>
              <h2>News and Updates</h2>
              <p>Sign up to get the latest on sales, new releases and more …</p>
              <input />
              <p>Email us: info@wpstandard.com, Call us: 888-983-9382</p>
            </div>{" "}
            <div>
              <div>ABOUT</div>
              <div>JOURNAL</div>
              <div>CONTACT</div>
              <div>FAQ</div>
              <div>PRIVACY</div>
            </div>
          </InnerDiv>
        </FooterWrapper>
      </div>
    );
  }
}
