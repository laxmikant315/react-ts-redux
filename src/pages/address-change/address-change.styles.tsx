import styled from 'styled-components';
import { makeStyles } from '@material-ui/core';

export const AddressChangeStyle = styled.div`
  width: 100%;

  button{
    color:yellow;
  }
  .grid{
    background-color:yellow;
    padding:100px;
  }
`;


const useStyles = makeStyles({
  app1: {
    backgroundColor: 'red'
  }
})