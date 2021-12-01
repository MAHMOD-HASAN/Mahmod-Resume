import React from "react";
import project1 from "../../../images/project1.png";
import project2 from "../../../images/project2.png";
import project3 from "../../../images/project3.png";
import { Carousel } from "react-bootstrap";
import { Grid, Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
const MyProjects = () => {
  const useStyles = makeStyles({
    carouselItem: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    image: {
      display: "block",
      width: "70%",
      height: "700px",
      margin : 'auto'
    },
  });
  const { carouselItem, image } = useStyles();
  return (
    <Container sx={{marginTop : '100px'}}>
      <Typography variant="h3" color="green" align="center">
        MY PROJECTS
      </Typography>
      <Carousel
        style={{
          backgroundColor: "rgb(0, 0, 37)",
          color: "white",
          padding : '30px',
        }}
      >
        <Carousel.Item>
          <Grid container spacing={2} className={`caroucel ${carouselItem}`}>
            <Grid item xs={12} md={6}>
              <img className={image} src={project3} alt="" />
            </Grid>
            <Grid item xs={12} md={6}>
              <h1>Watch Shop Website</h1>
              <ul>
                <li>
                  This is niche (watch-shop) website. On this site a user can visit this site without login. But without loggedIn if he/she want to but
                  something user will be redirected to login page. Then user can login or registered with
                  email & password or google sign In mehtod. When user loggedIn he will be redicted to a page
                  where he wanted to go. Then user can order with necessary information.
                </li>

                <li>
                  After LoggedIn user will be able to show a dashboard page. A normal user can see his order
                  on dashboard page. where user can manage his order. Besides user can give feedback goes to
                  feedback route.
                </li>

                <li>
                  But an Admin can manage all users and users order also. And admin can make admin any user.
                  Admin can add new sevices also.
                </li>
              </ul>
            </Grid>
          </Grid>
        </Carousel.Item>

        <Carousel.Item>
          <Grid container spacing={2} className={`caroucel ${carouselItem}`}>
            <Grid item xs={12} md={6}>
              <img className={image} src={project2} alt="" />
            </Grid>
            <Grid item xs={12} md={6}>
              <h1>Tourism Website</h1>
              <ul>
                  <li>
                  This is Travel Agency Website. On this site i used three pages and into the home page has six section. Any user can see these section. But without login he can not Book any tourist spot. If user click BookNow button without loggedIn he will be redirect to login page and after loggedIn he will goes to BookNow page automatically.
                  </li>

                  <li>
                     Then user can fill-up form with neccesary information. And When he click on submit button a popup will be show on user device that is Are you sure? you want booking this service.
                  </li>

                  <li>
                      After successfully Booking user can show myBooking and allBooking page. Where user can delete his booking information.
                  </li>
              </ul>
            </Grid>
          </Grid>
        </Carousel.Item>

        <Carousel.Item>
          <Grid
            container
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
            className={`caroucel ${carouselItem}`}
          >
            <Grid item xs={12} md={6}>
              <img className={image} src={project1} alt="" />
            </Grid>
            <Grid item xs={12} md={6}>
              <h1>Gym Centre Website</h1>
              <ul>
                  <li>
                     This is health care related website. In the home page there has six section. Those are Navbar, Banner, Service, Trainer, About us, footer.If any user click SeeDetails button he will be redicted to home page.
                  </li>
                  <li>
                     A user can loggedIn with email, password or googleSignIn method. If new user he/she should register.
                  </li>
                  <li>
                    After logged in if he click any services or any Book Now button user wiil see this particular service in details.
                  </li>
              </ul>
            </Grid>
          </Grid>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default MyProjects;
