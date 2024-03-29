import Header from "./MyPage/MyHeader";
import Footer from "./MyPage/MyFooter";
import Profilemy from "./MyPage/MyProfilemy";
import Sidebar from "./MyPage/MySidebar";
import "../styles/MyPage.scss";
import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import JobIcon from "../Icons/JobProfile";
import SaveNone from "../Icons/SaveNone";
import SnsProfile from "../Icons/SnsProfile";
import TagIcon from "../Icons/TagIcon";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
  },
];
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
function MyPage() {
  const [value, setValue] = React.useState(0);
  return (
    <main>
      <div className="blank"></div>
      <div className="My_container">
        <Header />
        <React.Fragment>
          <Container>
            <Box className="Pro_box">
              <br></br>
              <Box className="pro_text">
                <Profilemy></Profilemy>
              </Box>
              <hr></hr>
              <Box className="Pro_icon">
                <BottomNavigation
                  showLabels
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                >
                  <BottomNavigationAction
                    label="Daily"
                    icon={<SnsProfile />}
                    className="icon_button"
                  />
                  <BottomNavigationAction
                    label="Job"
                    icon={<JobIcon />}
                    className="icon_button"
                  />
                  <BottomNavigationAction
                    label="Save"
                    icon={<SaveNone />}
                    className="icon_button"
                  />
                  <BottomNavigationAction
                    label="Tag"
                    icon={<TagIcon />}
                    className="icon_button"
                  />
                </BottomNavigation>
              </Box>
              <br></br>
              <Grid
                container
                spacing={{ xs: 1, md: 1 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
                className="Pro_gird"
              >
                {Array.from(Array(20)).map((_, index) => (
                  <Grid item xs={2} sm={4} md={4} key={index}>
                    <item>
                      <img src={itemData[1].img} className="Pro_imgs"></img>
                    </item>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Container>
        </React.Fragment>
        <Footer />
      </div>
      <div className="box">
        <Sidebar />
      </div>
    </main>
  );
}
export default MyPage;
