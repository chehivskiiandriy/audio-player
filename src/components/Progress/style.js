import styled from 'styled-components'

export const ProgressContainer = styled.div`
  position: relative;
  width: ${props => props.width || '100%'};
  border: 1px solid ${props => props.theme.borderColor};
  border-radius: 5px;
  height: 1.2rem;
  overflow: hidden;
  cursor: pointer;
`

export const ProgressBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  background: ${props => props.theme.bg};
  width: ${props => props.width || '100%'};
  z-index: -1;
  transition: 0.1s;
`
