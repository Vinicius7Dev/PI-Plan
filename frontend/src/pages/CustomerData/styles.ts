import  styled  from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  #navigation-area{
    flex: 0.5;
  }

  main {
    flex: 2;
    padding: 20px 8% 50px;

    #form-area{

      h2 {
        margin-top: 35px;
        font-family: Arial, Helvetica, sans-serif;
        font-style: italic;
        color: #60626C;
      }

      form{
        width: 100%;

        .space-division{
          display: flex;
        }
      }
    }

    #table-area {
      margin-top: 40px;

      #table-title-area {
        display: flex;
        justify-content: space-evenly;

        h3 {
          margin: 8px 0;
          font-size: 35px;
          font-family: Arial, Helvetica, sans-serif;
          font-style: italic;
          text-align: center;
          color: #60626C;
        }

        div {
          width: 25%;
        }
      }

      #register-page-link {
        width: 100%;
        height: 45px;
        margin-bottom: 20px;

        a {
          display: block;
          height: 100%;
          width: 100%;

          border: none;
          border-radius: 30px;

          font-family: Arial, Helvetica, sans-serif;
          line-height: 43px;
          text-align: center;
          text-decoration: none;
          font-size: 28px;

          background-color: #91d2a1;
          color: #ffffff;
        }
      }

      #table-border {
        width: 100%;
        max-width: 1200px;
        border: 2px solid #CEAA7B;
        border-radius: 30px;
        padding: 20px;
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;

    #form-area{
      padding: 10px;
      flex: 2;

      form{
        width: 100%;

        .space-division{
          display: flex;
        }
      }
    }

    #table-area {
      padding: 10px !important;
      flex: 2;

      form {
        width: 100%;
        max-width: 720px;
      }

      #table-border {
        border: none !important;
        padding: 0;
      }
    }
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 10px;

  thead {
    tr {
      background-color: #CEAA7B;

      th {
        padding: 25px;
        color: #FFFFFF;
        font-size: 20px;
        font-family: Arial, Helvetica, sans-serif;
      }
    }
  }

  tbody tr {
    border-radius: 30px;
    height: 45px;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.15);

    td {
      position: relative;
      padding: 25px;
      color: #60626C;
      font-size: 16px;
      font-weight: bold;
      font-family: Arial, Helvetica, sans-serif;

      a {
        color: inherit;
        text-decoration: none;
      }
    }

    .ic-remove {
      position: absolute;
      top: 0;
      right: 0;

      display: flex;
      justify-content: center;
      align-items: center;

      padding: 3px;
      border-radius: 100%;
      border: 2px solid #CB4242;
      background-color: #FF5555;
      color: #FFFFFF;
      font-size: 18px;
    }

    td .ic {
      width: 10px;
      height: 10px;
      border-radius: 100%;
      margin: 0 5px;
    }

    td .ic-inprogress {
      border: 1px solid #C2C600;
      background-color: #E6EB0B;
      color: #E6EB0B;
    }

    td .ic-completed {
      border: 1px solid #00C65B;
      background-color: #0BEB14;
      color: #0BEB14;
    }

    td .ic-canceled {
      border: 1px solid #CB4242;
      background-color: #FF5555;
      color: #FF5555;
    }
  }

  .td-x1 {
    width: 5%;
  }

  .td-x2 {
    width: 15%;
  }

  .td-x3 {
    width: 80%;
  }

  .text-left {
    text-align: left;
  }

  .text-center {
    text-align: center;
  }

  .start-border-r {
      border-radius: 30px 0 0 30px;
    }

  .end-border-r {
    border-radius: 0 30px 30px 0;
  }

  #empty-orders-list {
    font-size: 25px;
    text-align: center;
  }
`;
