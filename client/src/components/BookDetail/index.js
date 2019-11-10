import React from "react";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import "./style.css";

// RecipeList renders a bootstrap list item
export function BookList({ children }) {
  return <ul className="list-group">{children}</ul>;
}



export function BookDetail(props) {
  return (
    <div className="card my-2">
      <div className="card-header">
        <h4>{props.title}</h4>
      </div>
      <div className="card-body">
        {/* <h5 class="card-title"></h5> */}
        <Container >
     {/* <Row >
      <Col size="md-6">
      <h3>{props.title}</h3>
      </Col>
      <Col size="md-6">
      <h3>{props.title}</h3>
      </Col>
     </Row>  */}
     <Row >
       <Col size="md-2">
         <Row>
          <img alt={props.title} className="imageShadow" src={props.src} style={{ margin: "0 auto" }} />
          </Row>
          <Row>
            <div className="m-2 text-center">
          <a href={props.link} target="_blank" rel="noreferrer noopener">
            <button type="button" className="btn btn-primary">View</button></a>
            <button type="button" className="btn btn-primary" data-author={props.authors} id={props.id} onClick={props.onClick}>{props.btnvalue}</button>
            </div>
            </Row>
       </Col>
      <Col size="md-10">
          <h5>Authors:</h5> <small>{props.authors}</small>
          <h5>Description:</h5> <small>{props.description}</small>
      </Col>
      </Row>
      </Container>
      </div>
    </div>
  );
}