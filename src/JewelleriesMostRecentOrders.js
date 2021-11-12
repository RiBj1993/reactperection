import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Avatar from '@material-ui/core/Avatar';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Link } from "react-router-dom";
 

 const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  container: {
    marginTop: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));

export default function JewelleriesMostRecentOrders() {
  const classes = useStyles();

  const [users, setUsers] = useState([]);
  const [userss, setUserss] = useState([]);

  useEffect(() => {
    UsersGet(); UsersGets()

  }, [])

  const UsersGet = () => {
    fetch("HTTP://localhost:8085/JewelleriesMostRecentOrders/")
      .then(res => res.json())
      .then(
        (result) => {
          setUsers(result)
        }
      )
      .catch(rejected => {
        console.log(rejected);
      });
  }

  const UsersGets = () => {
    fetch("http://localhost:8085/JewelleriesRevenue")
      .then(res => res.json())
      .then(
        (result) => {
          setUserss(result)
        }
      )
      .catch(rejected => {
        console.log(rejected);
      });
  }

  const UpdateUser = id => {
    window.location = '/update/' + id
  }

  const UserDelete = id => {
    var data = {
      'id': id
    }
    fetch('https://www.mecallapi.com/api/users/delete', {
      method: 'DELETE',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(
        (result) => {
          alert(result['message'])
          if (result['status'] === 'ok') {
            UsersGet();
          }
        }
      )
  }

  return (
    /*  | "primary"
  | "secondary"
  | "error"
  | "success"
  | "warning"
  | "default"
  | "inherit"
  | "info";*/
    <div className={classes.root}>
      <Container className={classes.container} maxWidth="lg">
        <Paper className={classes.paper}>
          <Box display="flex">
            <Box flexGrow={1}>
              <Typography component="h2" variant="contained">

                <Table className={classes.table} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="right">
                        <Button variant="contained" color="primary" class="btn-grad1">
                          <br /> <br /> Revenue :<br /><br />  {userss}  <br /> <br />
                        </Button>
                      </TableCell>

                      <TableCell align="right">
                        <Link to="/JewelleriesOrdersInProgress">
                          <Button variant="contained" color="primary" class="btn-grad">
                            <br /> <br />   Jewelleries <br /> <br />Orders <br /> <br />
                            In  Progress  </Button>  </Link>

                      </TableCell>
                      <TableCell align="right">
                        <Link to="/JewelleriesMostRecentOrders">
                          <Button variant="contained" color="primary" class="btn-grad">
                            Jewelleries<br /> <br /> With Most <br /><br /> Recen
                    t <br /><br />Orders</Button>  </Link>

                      </TableCell>
                      <TableCell align="right">
                        <Link to="/">            <Button variant="contained" color="primary" class="btn-grad">
                          <br /> <br />  all <br /> <br /> Jewelleries <br /><br /> </Button>
                        </Link>

                      </TableCell>
                    </TableRow>
                  </TableHead>
                </Table>
              </Typography>
            </Box>

          </Box>

          <br /> <br /> <br />
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="right"> <Box>

                    <Button variant="contained" color="primary">
                      order <br />Id                </Button>

                  </Box></TableCell>
                  <TableCell align="center">
                    <Button variant="contained" color="primary">
                      order  <br />   Placed</Button></TableCell>
                  <TableCell align="center">
                    <Button variant="contained" color="primary">
                      price £</Button></TableCell>
                  <TableCell align="center">
                    <Button variant="contained" color="primary">
                      first Name</Button></TableCell>
                  <TableCell align="center">
                    <Button variant="contained" color="primary">
                      last Name</Button></TableCell>
                  <TableCell align="center">
                    <Button variant="contained" color="primary">
                      Home <br />address<br /> </Button></TableCell>
                  <TableCell align="center">
                    <Button variant="contained" color="primary">
                      order Status</Button></TableCell>
                  <TableCell align="left">
                    <Button variant="contained" color="primary">
                      address<br /> email</Button></TableCell>



                </TableRow>
              </TableHead>
              <TableBody>

                {users.map((user) => (
                  <TableRow key={user.orderId}>
                    <TableCell align="center">{user.orderId}</TableCell>
                    <TableCell align="center">{user.orderPlaced}</TableCell>
                    <TableCell align="center">{user.price}</TableCell>
                    <TableCell align="center">{user.firstName}</TableCell>
                    <TableCell align="center">{user.lastName}</TableCell>
                    <TableCell align="center">{user.address}</TableCell>
                    <TableCell align="center">{user.orderStatus}</TableCell>
                    <TableCell align="left">{user.email}</TableCell>
                    {/* <TableCell align="center">
                    <ButtonGroup color="primary" aria-label="outlined primary button group">
                      <Button onClick={() => UpdateUser(user.orderId)}>Edit</Button>
                    </ButtonGroup>
                  </TableCell> */}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Container>
    </div>

  );
}