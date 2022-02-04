import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import styled from 'styled-components'
import { coins } from '../static/coins'
import Coin from './Coin'
import CoinPrice from './CoinPrice'
function Portfolio() {
  return (
    <Wrapper>
      <Content>
        <Chart>
          <CoinPrice />
        </Chart>
        <PortfolioTable>
          <TableItem>
            <Title>Your Assets</Title>
          </TableItem>
          <Divider />
          <Table>
            <TableItem>
              <TableRow>
                <div style={{ flex: 3 }}>Name</div>
                <div style={{ flex: 2 }}>Balance</div>
                <div style={{ flex: 1 }}>Price</div>
                <div style={{ flex: 1 }}>Allocaiton</div>
                <div style={{ flex: 0 }}>
                  <BsThreeDotsVertical />
                </div>
              </TableRow>
            </TableItem>
            <Divider />
            <div>
              {coins.map((coin, index) => {
                return (
                  <div>
                    <Coin coin={coin} key={index} />
                    <Divider />
                  </div>
                )
              })}
            </div>
          </Table>
        </PortfolioTable>
      </Content>
    </Wrapper>
  )
}

export default Portfolio

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`
const Content = styled.div`
  width: 100%;
  max-height: 1000px;
  padding: 2rem 1rem;
`
const Chart = styled.div`
  border: 1px solid #282b2f;
  padding: 1rem 2rem;
`

const PortfolioTable = styled.div`
  margin-top: 1rem;
  border: 1px solid #282b2f;
`
const Table = styled.table`
  width: 100%;
`
const TableRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  & > th {
    text-align: left;
  }
`
const TableItem = styled.div`
  padding: 1rem 2rem;
`
const Divider = styled.div`
  border-bottom: 1px solid #282b2f;
  &:last-child {
    display: none;
  }
`
const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
`
