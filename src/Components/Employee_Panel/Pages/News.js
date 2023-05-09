//import React from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container,Row, Col, Card } from 'react-bootstrap';

const News = () => {
  
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get('https://localhost:7274/api/News')
      .then(response => {
        setNews(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);


  return (
    <>
    <Navbar />
    <Sidebar />
     
     {/* News Code  

     <Container>
      <h2 className="text-center mt-5">Company News</h2>
      <div className=" mt-4 "  >
        {news.map(item => (
          <Col md={4} >
            <Card key={item.newsId} className="mb-4" >
              <Card.Img variant="top"  height="200" width="50" src={item.imageUrl} alt={item.newsTitale} />
              <Card.Body>
                <Card.Title>{item.newsTitale}</Card.Title>
                <Card.Text>{item.content}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </div>
    </Container> */}

    <Container>
      <h2 className="text-center mt-5">Company News</h2>
     <div width='350px' height='150px'>
        {news.map(item => (
          <Col md={4} key={item.newsId} >
            <Card className="mb-4 border-top-0 shadow" style={{ width: '60rem' }} >
              <Row >
                <Col md={4}  >
                  <Card.Img style={{ width: '100%', height: '200px', objectFit: 'cover' }} src={item.imageUrl} alt={item.newsTitale} />
                </Col>
                <Col md={8} >
                  <Card.Body width='350px' height='150px'>
                    <Card.Title>{item.newsTitale}</Card.Title>
                    <Card.Text>{item.content}</Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
        </div>
    </Container>


    </>
  )
}

export default News