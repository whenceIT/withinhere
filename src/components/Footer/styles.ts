import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(180deg, #eaeced 0%, #eaeced 100%);
  padding-bottom: 1rem;
  font-family: Lato, sans-serif;
  text-align: center;
  font-size: 13px;
  color: var(--gray-color);
  width: 100%;

  h4 {
    font-size: 15px;
    font-weight: bold;
    color: white;
  }

  a {
    color: var(--gray-color);

    &:hover {
      text-decoration: underline;
    }
  }
`;
export const BottomContainer = styled.div`
  background-color: teal;
  padding: 2rem;
  font-family: Lato, sans-serif;
  text-align: center;
  font-size: 13px;
  color: var(--gray-color);
  width: 100%;

  .copyright{
    color: white;
  }

  a {
    color: white;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
  width: 100%;

  label {
    font-size: 3em;
    color: var(--secondary-light-color);

    strong {
      font-weight: bold;
    }
  }
  h4 {
    font-size: 15px;
    font-weight: bold;
    color: var(--primary-color);
  }
  .group {
    display: flex;
    background: #fff;
    max-width: 790px;
    border-radius: 25px;
    padding: 0.7rem;
    width: 100%;
    margin: 0 auto;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    margin: 1.7rem auto 2.7rem;

    input {
      background: transparent;
      outline: none;
      width: 100%;
      padding: 0 1.7rem 0 1rem;
    }

    .btn {
      padding-right: 3.7rem;
      padding-left: 3.7rem;
    }
  }
`;

export const Menu2 = styled.nav`
  > ul {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;
    margin: 2rem;

    li {
      margin-right: 2rem;
      a {
        color: var(--secondary-color);;
        
      }

      .facebookIcon{
        font-size: 80px;
        color: 	dodgerblue;
        background: white;
        padding: 1.2rem;
        border-radius: 37px;
      }
      .facebookIcon: hover,
      .facebookIcon: focus {
        color: var(--primary-color);
        outline: none;
      }

      .youtubeIcon{
        font-size: 80px;
        color: 	red;
        background: white;
        padding: 1.2rem;
        border-radius: 37px;
      }
      .youtubeIcon:hover,
      .youtubeIcon:focus {
        color: var(--primary-color);
        outline: none;
      }

      .instagramIcon{
        font-size: 80px;
        color: 	deeppink;
        background: white;
        padding: 1.2rem;
        border-radius: 37px;
      }
      .instagramIcon:hover,
      .instagramIcon:focus {
        color: var(--primary-color);
        outline: none;
      }

      .tiktokIcon{
        font-size: 80px;
        color: 	black;
        background: white;
        padding: 1.2rem;
        border-radius: 37px;
      }
      .tiktokIcon:hover,
      .tiktokIcon:focus {
        color: var(--primary-color);
        outline: none;
      }

    }
  }

  @media screen and (max-width: 992px) {
    > ul {
      margin: 0.7rem 15px;
    }
  }
  @media screen and (max-width: 455px) {
    > ul {
      width: 100%;
      display: flex;
      flex-direction: column;
      margin: 2rem;
  
      li {
        margin-right: 2rem;
        a {
          color: var(--secondary-color);;
          
        }
  
        .facebookIcon{
          float: left;
          font-size: 80px;
          color: 	dodgerblue;
          background: white;
          padding: 1.2rem;
          border-radius: 37px;

        }
        .facebookIcon: hover,
        .facebookIcon: focus {
          color: var(--primary-color);
          outline: none;
        }
  
        .youtubeIcon{
          float: right;
          font-size: 80px;
          color: 	red;
          background: white;
          padding: 1.2rem;
          border-radius: 37px;
        }
        .youtubeIcon:hover,
        .youtubeIcon:focus {
          color: var(--primary-color);
          outline: none;
        }
  
        .instagramIcon{
          float: left;
          font-size: 80px;
          color: 	deeppink;
          background: white;
          padding: 1.2rem;
          border-radius: 37px;
        }
        .instagramIcon:hover,
        .instagramIcon:focus {
          color: var(--primary-color);
          outline: none;
        }
  
        .tiktokIcon{
          float: right;
          font-size: 80px;
          color: 	black;
          background: white;
          padding: 1.2rem;
          border-radius: 37px;
        }
        .tiktokIcon:hover,
        .tiktokIcon:focus {
          color: var(--primary-color);
          outline: none;
        }
  
      }
    }
  }
`;
