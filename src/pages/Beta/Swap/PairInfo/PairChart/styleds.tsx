import styled from 'styled-components'

export const ChartWrapper = styled.div`
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color2};
  position: relative;
`

export const OptionsWrapper = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 10;
`

export const ChartContainer = styled.div`
  width: 100%;
  height: 100%;
  bottom: 0px;
  left: 0px;
  position: absolute;
`
