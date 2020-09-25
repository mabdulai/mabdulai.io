import React, { Component } from "react";
import Layout from "../components/common/Layout";
import styled from "styled-components";

class Home extends Component {
  render() {
    return (
      <Layout>
        <MainText>
          <strong>
            My name is Michael Abdulai, and I create software using Javascript.
          </strong>{" "}
          Currently helping artists being in control of their data at ABOSS. In
          the last 30 days, I’ve pushed 2 commits to GitHub and sent 16 tweets.
          I am reading 2 books at the moment: “The Phoenix Project” by Gene Kim
          and “Dottir” by Katrin Davidsdottir and my most played genre at the
          moment is “HipHop”.
        </MainText>
      </Layout>
    );
  }
}

export default Home;

const MainText = styled.div`
  font-size: 24px;
  font-family: ${({ theme }) => theme.fontMain};
  font-weight: light;
  letter-spacing: 0.22px;
  line-height: 1.8;
  color: ${({ theme }) => theme.offWhite};
  margin: 60px 0;
  max-width: 100%;
  padding: 0 0 200px;
`;
