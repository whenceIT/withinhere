import styled from "styled-components";

export const Container = styled.header`
  background-color: teal;
  width: 100%;
  min-height: 100px;

  div {
    display: flex;
    font-weight: bold;
    max-width: 1297px;
    height: 100%;
    width: 100%;
    margin: 0 auto;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
  }

  .active {
    color: var(--primary-color);
  }

  nav > ul {
    display: flex;

    li {
      margin-right: 2rem;

      a {
        color: var(--menu-color);
      }

      a:hover,
      a:focus,
      a.btn {
        color: var(--primary-color);
        outline: none;
      }
    }
  }


  @media screen and (max-width: 992px) {
    div {
      flex-direction: row;
      margin-top: 0.0rem;
    }
  }

  @media screen and (max-width: 390px) {
    nav > ul {
      li:last-child {
        display: none;
      }
    }
  }
  @media screen and (max-width: 360px) {
    nav > ul {
      display: grid;
      grid-template-columns: auto auto;
      grid-template-areas:
        "menu menu"
        "menu menu"
        "contact contact";
      grid-template-rows: auto;

      li:last-child {
        margin-top: 0.0rem;
        margin-right: 0.0rem;
        grid-area: contact;
        text-align: center;
      }
    }
  }
`;
