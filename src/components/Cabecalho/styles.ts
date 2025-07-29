import styled from 'styled-components'

export const CabecalhoStyle = styled.header`
  background-color: ${({ theme }) => theme.corSecundaria};
  color: ${({ theme }) => theme.corPrincipal};
  text-align: center;
  padding: 24px 0;
`
