import styled from "styled-components";

export const Container = styled.section`
  font-family: "Red Hat Display", sans-serif !important;
  display: flex;
  max-width: 1297px;
  min-height: 550px;
  height: auto;
  width: 100%;
  margin: 0 auto;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  position: relative;
  
  img {
    position: absolute;
    right: -9.5rem;
    order: 1;
    max-width: 100%;
    height: auto;
    width: 70%;
    z-index: -1;
    border-radius:50%;
    padding: 5rem;
  }

  @media screen and (max-width: 1615px) {
    margin-bottom: 4em;
    margin-top: 4em;
    padding-right: 15px;
    width:100%;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    position: relative;

    img {
      position: relative;
      width: 60%;
      border-radius:50%;
      order: 1;
      right: 0;
    }
  }

  @media screen and (max-width: 1245px) {
    flex-direction: column;
    margin-bottom: 4em;
    margin-top: 4em;
    padding-right: 15px;
    padding-left: 15px;

    img {
      position: relative;
      width: 100%;
      border-radius: 50%;
      order: 0;
      right: 0;
    }
  }
`;

export const Details = styled.div`
  max-width: 650px;
  width: 100%;
  order: 0;

  h1 {
    font-size: 25px;
    font-weight: bold;
    color: var(--primary-color);
  }

  h2 {
    font-size: 50px;
    font-weight: bold;
    color: var(--primary-color);
  }

  h3 {
    font-size: 20px;
    font-weight: bold;
    color: var(--secondary-color);
  }

  p {
    max-width: 600px;
    font-family: Lato, sans-serif;
    font-size: 18px;
    padding: 1.2rem 0rem 1.2rem 0;
    margin-bottom: 1.7rem;
    flex-wrap: nowrap;
    color: var(--gray-color);
  }

  @media screen and (max-width: 1245px) {
    max-width: 1650px;
    width: 100%
    display: flex;

    h1 {
      font-size: 25px;
      font-weight: bold;
      color: var(--primary-color);
      align-items: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: relative;
    }
    h3 {
      font-size: 20px;
      font-weight: bold;
      color: var(--secondary-color);
      align-items: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: relative;
    }
    h2 {
      font-size: 50px;
      font-weight: bold;
      color: var(--primary-color);
      align-items: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: relative;
    }
    p {
      max-width: 1245px;
      font-family: Lato, sans-serif;
      font-size: 16px;
      padding: 1.2rem 0rem 1.2rem 0;
      margin-bottom: 1.7rem;
      flex-wrap: nowrap;
      color: var(--gray-color);
      align-items: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: relative;
    }
  }


  @media screen and (max-width: 930px) {
    max-width: 430px;
    width: 100%
    display: flex;

    h1 {
      font-size: 25px;
      font-weight: bold;
      color: var(--primary-color);
      align-items: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: relative;
    }
    h3 {
      font-size: 20px;
      font-weight: bold;
      color: var(--secondary-color);
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: relative;
    }
    h2 {
      font-size: 50px;
      font-weight: bold;
      color: var(--primary-color);
      align-items: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: relative;
    }
    p {
      max-width: 400px;
      font-family: Lato, sans-serif;
      font-size: 16px;
      padding: 1.2rem 0rem 1.2rem 0;
      margin-bottom: 1.7rem;
      flex-wrap: nowrap;
      color: var(--gray-color);
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: relative;
    }
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
  @media screen and (max-width: 1615px) {
    nav > ul {
      display: grid;
      grid-template-columns: auto auto;
      grid-template-areas:
        "menu menu"
        "menu menu"
        "contact contact";
      grid-template-rows: auto;

      li:last-child {
        margin-top: -1.0rem;
        margin-right: -25.9rem;
        grid-area: contact;
        text-align: center;
      }
    }
  }

  @media screen and (max-width: 1245px) {
    nav > ul {
      display: grid;
      grid-template-columns: auto auto;
      grid-template-areas:
        "menu menu"
        "menu menu"
        "contact contact";
      grid-template-rows: auto;
      align-items: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: relative;

      li:last-child {
        margin-top: -1.0rem;
        margin-right: -34.9rem;
        grid-area: contact;
        text-align: center;
      }
    }
  }
  @media screen and (max-width: 930px) {
    nav > ul {
      display: grid;
      grid-template-columns: auto auto;
      grid-template-areas:
        "menu menu"
        "menu menu"
        "contact contact";
      grid-template-rows: auto;
      align-items: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: relative;

      li:last-child {
        margin-top: 2.5rem;
        margin-right: 0.0rem;
        grid-area: contact;
        text-align: center;
      }
    }
  }
`;
