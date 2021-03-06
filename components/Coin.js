import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import Image from 'next/image'
import styled from 'styled-components'
import { coins } from '../static/coins'
import MoonbeamLogo from '../assets/coin-icon/moonbeam.png'
import MoonriverLogo from '../assets/coin-icon/moonriver.png'
const Coin = ({ coin }) => {
  return (
    <Wrapper>
      <div>
        <div style={{ flex: 2 }}>
          <NameCol>
            <CoinIcon>
              <Image src={coin.logo} alt={coin.name} />
            </CoinIcon>
            <div>
              <Primary>{coin.name}</Primary>
              <Secondary>{coin.sign}</Secondary>
            </div>
          </NameCol>
        </div>
        <div style={{ flex: 2 }}>
          <Primary>
            {'$'} {coin.balanceUsd}
            <ChainLogo>
              <Image
                src={coin.chain === 'moonbeam' ? MoonbeamLogo : MoonriverLogo}
                alt={coin.name}
                width={15}
                height={15}
              />
            </ChainLogo>
          </Primary>
          <Secondary>
            {coin.balanceCoin} {coin.sign}
          </Secondary>
        </div>
        <div style={{ flex: 2 }}>
          {'$'}
          {coin.priceUsd}
          <div style={{ color: coin.change < 0 ? 'red' : 'green' }}>
            {coin.change > 0 && '+'}
            {coin.change}%
          </div>
        </div>
        <div style={{ flex: 1 }}>{coin.allocation}%</div>
        <div style={{ flex: 0 }}>
          <BsThreeDotsVertical />
        </div>
      </div>
    </Wrapper>
  )
}

export default Coin

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  & > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
  }
`
const NameCol = styled.div`
  display: flex;
  align-items: center;
`
const CoinIcon = styled.div`
  width: 1.8rem;
  margin-right: 1rem;
`
const Primary = styled.div`
  margin-bottom: 0.1rem;
  display: flex;
`
const ChainLogo = styled.div`
  display: flex;
  align-items: center;
  margin-left: 2px;
`
const Secondary = styled.div`
  color: #8a919e;
  font-size: 0.8rem;
`
