import styled from 'styled-components';

const BackButton = styled.div`
  margin: 1rem 0;

  i {
    font-size: 1.4rem;
  }

  a {
    color: white;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    transition: all .4s ease;

    &:hover {
      color: #1e90ff;
    }
  }
`;

export default BackButton;
