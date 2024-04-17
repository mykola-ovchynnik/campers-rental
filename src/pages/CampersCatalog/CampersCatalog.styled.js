import styled from 'styled-components';

export const CatalogTheme = styled.div`
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
`;

export const CatalogPage = styled.div`
  padding-top: 100px;
  padding-bottom: 100px;
  display: flex;
  gap: 64px;
`;
