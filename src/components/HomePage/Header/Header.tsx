import styled from "styled-components";
import theme from "../../../utils/theme";

export default function Header() {
  return (
    <HeaderStyle>
      <h1><span>K</span>ongossa <span>Docs</span></h1>
      <nav>
        <ul>
          <li>Home</li>
          <li>Projects</li>
          <li>Contact Us</li>
        </ul>
      </nav>
    </HeaderStyle>
  );
}

const HeaderStyle = styled.header`
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  h1 {
    color:${theme.colors.secondary};
    font-size: 1.5rem;

    span {
      color:${theme.colors.white};
      font-size:3rem;
    }
  }

  nav {
    ul {
      display: flex;
      gap: 1.5rem;
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        color:${theme.colors.secondary};
        cursor: pointer;
        font-size: 1rem;
        transition: transform 0.2s ease, color 0.2s ease;


        &:hover {
          transform: scale(1.1); /* Effet de zoom */
        }
      }
    }
  }

  /* Responsive styles */
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    h1 {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }

    nav ul {
      gap: 1rem;
      flex-direction: column;
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    h1 {
      font-size: 1.4rem;
    }

    nav ul li {
      font-size: 0.9rem;
    }
  }
`;
