import styled from 'styled-components'

export const TrackWrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 5px 8px;
  cursor: pointer;
  
  &:not(:last-child) {
    border-bottom: 1px solid ${props => props.borderColor};
  }
`

export const TrackName = styled.div`
  font-size: 0.9rem;
`

export const TrackTime = styled.div`
  padding: 0 10px;
  font-size: 0.9rem;
`

export const TrackContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 3px;
  border-radius: 5px;
  overflow: hidden;
`
