import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container, Button, Row, Col, Card } from "react-bootstrap";
import axios from "axios";
import "./frontPage.css";

const FrontPage = () => {
  const [currentWeather, setCurrentWeather] = useState(null);


  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          "https://api.openweathermap.org/data/2.5/weather",
          {
            params: {
              q: "Bangalore",
              units: "metric", 
              appid: "1aa5a76bc1eb2bf2a6807d271ed12ec2",
            },
          }
        );
        setCurrentWeather(response.data);
      } catch (error) {
        console.error("Error fetching the weather data:", error);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <>
      <Navbar className="nav" expand="lg">
        <Container className="nav-ctn">
          <Navbar.Brand
            href="#home"
            className="nav-bnd"
            style={{
              fontSize: "25px",
              fontFamily: "'Proxima Nova', Helvetica, Arial, sans-serif",
            }}
          >
            BRANDMARK<span className="nav-bnd1">CLONE</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav-lnk ms-auto" style={{ fontSize: "18px" }}>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
            </Nav>
            <div className="weather-widget ms-auto">
              {currentWeather && (
                <p className="weather-text">
                  {currentWeather.name}: {currentWeather.main.temp}°C,{" "}
                  {currentWeather.weather[0].description}
                </p>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <section className="sec-main">
        <Container className="sec-ctn text-center">
          <h2 className="sec-title">Design Your Brand</h2>
          <p className="sec-note">
            A tool for creating brand assets in seconds.
          </p>
          <Button
            variant="dark"
            size="lg"
            className="sec-btn"
            style={{ borderRadius: "25px" }}
          >
            Get Started
          </Button>
        </Container>
      </section>

      <section id="features">
        <Container>
          <h3 className="feat-title text-center" style={{fontFamily:"-moz-initial"}}>Features</h3>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="feat-card1">
                <Card.Body>
                  <Card.Title className="card-title" style={{color: "white"}}>Presentation</Card.Title>
                  <Card.Text className="card-text" style={{color: "white"}}>
                    Branded Presentation Templates for your brand.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} className="mb-4">
              <Card className="feat-card2">
                <Card.Body>
                  <Card.Title className="card-title">Profile Logo</Card.Title>
                  <Card.Text className="card-text">
                    Profile Icons for your brand.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} className="mb-4">
              <Card className="feat-card3">
                <Card.Body>
                  <Card.Title className="card-title" style={{color: "lightgreen"}}>Social Media</Card.Title>
                  <Card.Text className="card-text" style={{color: "lightgreen"}}>
                    Social Media Icons and Covers for your brand.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <footer className="ft">
        <Container className="ctn">
          <p>&copy; 2024 BrandMark Clone. All Rights Reserved.</p>
        </Container>
      </footer>
    </>
  );
};

export default FrontPage;
