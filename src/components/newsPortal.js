import React from "react"
import { useSelector } from "react-redux";
import {Card,Row,Col,Button} from "react-bootstrap";

const NewsPortal =()=>{
    const newsList = useSelector((state12)=> state12.getNewsReducer)
        console.log(newsList, 'newsportal')

     
    
        let newsCard = newsList.map((news, index)=>{

            return(
                <>

<Col>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={`${news.urlToImage}`} />
  <Card.Body>
    <Card.Title>{news.title}</Card.Title> 
    <Card.Text>
      {news.description}





    </Card.Text>
    <Button variant="primary"     
    
    onClick={(e) => {
      e.preventDefault();
      window.location.href=`${news.url}`;
      }}
    
    >Open Link</Button>
  
  
  
  </Card.Body>
</Card>
        </Col>

                </>
            )
        })
    return(
        <>
        <p>News portal</p>

       <Row> {newsCard} </Row> 
        </>
    )
}

export default NewsPortal;