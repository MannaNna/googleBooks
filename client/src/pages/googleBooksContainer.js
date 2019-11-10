import React, { Component } from "react";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import {BookDetail, BookList} from "../components/BookDetail";
import API from "../utils/API";
import {Alert} from 'reactstrap';

class GoogleContainer extends Component {
  

  state = {
    result: [],
    search: "",
    title:"",
    authors:"",
    description:"",
    src:"",
    link:"",
    id:"",
    isLoggedIn: false,
    userID: "",
    name: "",
    email: "",
    picture: ""
  };

  componentDidMount() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const userID =  localStorage.getItem('userID');
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');
    const picture = localStorage.getItem('picture');
    this.setState({ userID, email, name, picture, isLoggedIn });
  }



  searchBooks = query => {
   
    API.search(query)
      .then(res => this.setState({ result: res.data.items }))
      .catch(() =>
        this.setState({
          result: [],
          message: "No New Books Found, Try a Different Query"
        })
      );
  };

  

  handleInputChange = event => {

    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };



handleFormSubmit = event => {
    event.preventDefault();
    this.searchBooks(this.state.search);
  };


handleBookSave = id => {
    let indexOfSaved;
      const book = this.state.result.find((book, index) => {
        console.log(book, index);
        indexOfSaved = index;
        return book.id === id;
      });
      const userIDC = this.props.userID
      console.log(userIDC)
      API.saveBook({
        id: book.id,
        title: book.volumeInfo.title,
        link: book.volumeInfo.infoLink,
        authors: book.volumeInfo.authors,
        description: book.volumeInfo.description,
        image: book.volumeInfo.imageLinks.thumbnail,
        userID: userIDC
      }).then(() => {

        // logic to remove saved book from state
        const booksArray = this.state.result;
        booksArray.splice(indexOfSaved, 1);
        this.setState({result: booksArray});
      });

      return console.log(book.id)
    };

   

  render() {

   
    return (
      
      <Container>

            <div heading="Search">
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </div>

            <div
              heading={this.state.result.totalItems || "Search for a Book to Begin"}
            >
              {this.state.result.length === 0 ? (
                <h3>No Results to Display</h3>
              ) : (
              <BookList>
                {this.state.result.map((element, index) => {
                  
                  return (
                  
                    <BookDetail
                    key={element.id}
                    id={element.id}
                    title={element.volumeInfo.title}
                    src={element.volumeInfo.imageLinks.thumbnail}
                    authors={element.volumeInfo.authors}
                    description={element.volumeInfo.description}
                    link={element.volumeInfo.previewLink} 
                    btnvalue="Save"
                    onClick={(e) => this.handleBookSave(element.id)}
                    /> 
                  )
                })} 
              </BookList>   
              )}
          </div>
      </Container>
    );
  }
}

export default GoogleContainer;