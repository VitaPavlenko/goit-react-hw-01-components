import styled from 'styled-components';

export const FriendsIsOnline = styled.span`
  background-color: ${props => (props.isOnline ? 'red' : 'green')};
  border-radius: 50%;
  width: 20px;
  height: 20px;
`;
