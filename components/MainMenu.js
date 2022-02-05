import styled from "styled-components";

function MainMenu() {
  return (
    <div>
      <NavMenu>
        <span>
          <a href="#">Navigation</a>
        </span>
        <span>
          <a href="#">Menu</a>
        </span>
        <span>
          <a href="#">Links</a>
        </span>
      </NavMenu>
    </div>
  );
}

const NavMenu = styled.nav`
  display: flex;
  gap: 1rem;
`;

export default MainMenu;
