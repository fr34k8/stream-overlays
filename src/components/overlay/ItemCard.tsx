import styled from '@emotion/styled'
import { rgba } from 'polished'
import { colors } from '@resir014/chungking-react'

export const ItemCard = styled('section')`
  display: flex;
  flex-direction: row;
  border-left: 4px solid ${colors.blue[500]};
  background-color: ${rgba(colors.black, 0.7)};
  color: ${colors.white};
  font-size: 16px;
  line-height: 1;
  font-feature-settings: 'kern' 1, 'ss01' 1, 'ss02' 1;
`

export const ItemTitle = styled('span')`
  display: inline-flex;
  align-items: center;
  padding: 0 8px;
  height: 30px;
  font-weight: 700;
`

export const ItemContent = styled('span')`
  display: inline-flex;
  align-items: center;
  padding: 0 8px;
  height: 30px;
  font-weight: 500;
  font-variant-numeric: tabular-nums;
`
