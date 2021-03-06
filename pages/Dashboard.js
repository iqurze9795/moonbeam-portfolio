import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import Main from '../components/Main'
import Sidebar from '../components/Sidebar'
const Dashboard = ({ address }) => {
  return (
    <Wrapper className="bg-main-gradient">
      <Sidebar />
      <MainContainer>
        <Header walletAddress={address} />
        <MainWrapper>
          <Main />
        </MainWrapper>
      </MainContainer>
    </Wrapper>
  )
}

export default Dashboard
const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100vw;
  color: white;
  overflow: hidden;
`
const MainContainer = styled.div`
  flex: 1;
`
const MainWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`
