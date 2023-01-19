import styled from "styled-components";
import { Search } from "./Search";

const NavHeader = styled.header`
  width: 100%;
  height: 70px;


.Navbar {
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #ffd700;
  justify-content: space-around;
}

 .NavList {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 2;
}

 .NavLink {
  font-weight: bold;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  list-style-type: none;
}
`;

export default function Header(props) {
  return (
    <NavHeader>
      <nav className="Navbar">
        <ul className="NavList">
          <li className="NavLink">Populares</li>
          <li className="NavLink">Top 10 Herois</li>
          <li className="NavLink">Series</li>
          <li className="NavLink">Ranking</li>
        </ul>
        <Search />
      </nav>
    </NavHeader>
  );
}
