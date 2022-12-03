import styled from "styled-components";

export const Container = styled.body`
  .bkg {
    height: 100%;
    width: 100%;
    position: absolute;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .glass {
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    max-width: 90%;
    max-height: 90%;
    width: 1640px;
    height: 900px;
    border-radius: 0.417vmax;
    z-index: 1;
    background: radial-gradient(rgba(0, 0, 0, 0.09), rgba(0, 0, 0, 0.36));
    box-shadow: 0 0.417vmax 1.667vmax 0 rgba(0, 0, 0, 0.98);
    backdrop-filter: blur(5px);
    display: flex;
    align-items: flex-start;
  }

  .img-principal {
    width: 340px;
    height: 510px;
    border-radius: 0.417vmax;
    margin-left: 150px;
    margin-top: 100px;
    box-shadow: 0 0.417vmax 1.667vmax 0 rgba(0, 0, 0, 0.98);
  }
  .alinhamento {
    margin: 100px 0px 0px 145px;
    display: flex;
    flex-flow: row wrap;
  }
  h1 {
    width: 900px;
    height: 50px;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 50px;
    color: #ffffff;
  }
  .info {
    margin-top: 25px;
    height: 10px;
    display: inline-flex;
    flex-flow: row wrap;

    h5 {
      font-family: Roboto;
      font-style: normal;
      font-weight: 500;
      color: #ddd;
      margin-right: 0px;
      margin-right: 15px;
    }
  }
  .actors {
    margin-top: 25px;
    margin-top: 35px;

    h3 {
      width: 900px;
      height: 41px;
      font-family: Roboto;
      font-style: normal;
      font-weight: 500;
      font-size: 35px;
      color: #ffffff;
    }
    h5 {
      margin-top: 25px;
      font-family: Roboto;
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 21px;
      display: flex;
      align-items: center;
      letter-spacing: 0.01em;
      color: #ddd;
    }
  }
  .historia {
    margin-top: 40px;
    width: 690px;
    h2 {
      width: 300px;
      height: 41px;
      font-family: Roboto;
      font-style: normal;
      font-weight: 500;
      font-size: 35px;
      line-height: 41px;
      display: flex;
      align-items: center;
      letter-spacing: 0.01em;
      color: #ffffff;
    }
    p {
      margin-top: 25px;
      font-family: Roboto;
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 21px;
      display: flex;
      align-items: center;
      letter-spacing: 0.01em;
      color: #ddd;
    }
  }

  .cu {
    position: absolute;
    margin: auto;
    bottom: 70px;
    right: 70px;
    width: 300px;
    height: 70px;
    display: flex;
    background: linear-gradient(
      225deg,
      rgba(90, 90, 90, 0.13),
      rgba(0, 0, 0, 0.16)
    );
    box-shadow: 0 0.417vmax 1.667vmax 0 rgba(10, 10, 10, 0.4);
    backdrop-filter: blur(1.5px);
    align-items: center;
    border-radius: 8px;
    cursor: pointer;
    .play {
      margin-left: 41px;
      width: 40px;
      height: 40px;
      background-repeat: no-repeat;
    }
    .cu2 {
      margin-left: 14px;
      text-align: center;
      width: 118px;
      height: 40px;
      font-family: Roboto;
      font-style: normal;
      font-weight: 500;
      font-size: 30px;
      letter-spacing: 0.01em;

      color: #ffffff;
    }
  }

  @media (max-width: 900px) {
    .glass{
      width: 450px

    }
  }
`;
