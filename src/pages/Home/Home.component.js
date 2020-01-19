import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from "react-modal";

import Form from "../../components/Form/Form.component";
import BrowseList from "../../components/BrowseList/BrowseList.component";
import SearchList from "../../components/SearchList/SearchList.component";
import Loading from "../../components/Shared/Loading/Loading.component";
import CharacterDetail from "../../components/Shared/CharacterDetail/CharacterDetail.component";
import "./Home.styles.scss";

import { SET_SELECTED_CHARACTER } from "../../constants";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    minWidth: "250px",
    backgroundColor: "#000000"
  }
};
Modal.setAppElement(document.getElementById("root"));

class Home extends Component {
  state = {
    modalIsOpen: false
  };

  componentDidMount() {
    if (this.props.selectedCharacter !== null) {
      this.setState({ modalIsOpen: true });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.selectedCharacter === null &&
      this.props.selectedCharacter !== null
    ) {
      if (this.props.selectedCharacter !== null) {
        this.setState({ modalIsOpen: true });
      }
    }
  }

  closeModal() {
    //sets selectedCharacter to null
    this.props.setSelectedCharacter();
    this.setState({ modalIsOpen: false });
  }

  determineTypeOfList = () => {
    const { fetchingData, browsing, searching } = this.props;
    if (fetchingData) {
      return (
        <div className="loading-container">
          <Loading />
        </div>
      );
    }
    if (browsing) {
      return <BrowseList />;
    }
    if (searching) {
      return <SearchList />;
    }
  };

  //if Star Wars / Memorial Sloan Kettering Logo Image does not load
  //default to a text of "Star Wars"
  handleImageLoadError = () => {
    const $logoWrapper = document.getElementById("logo-wrapper");
    const $textTitle = document.createElement("h1");
    const $figure = document.getElementsByTagName("figure")[0];

    $textTitle.setAttribute("class", "page-title");
    $textTitle.textContent = "Star Wars";

    $logoWrapper.removeChild($figure);
    $logoWrapper.append($textTitle);
  };

  render() {
    const { selectedCharacter } = this.props;
    return (
      <main className="home">
        <section id="logo-wrapper">
          <figure>
            <img
              //customized logo provided by https://fontmeme.com/star-wars-font/
              src="https://fontmeme.com/permalink/200119/4753369442bd99cc418e17dbfcd297f8.png"
              alt="Star Wars"
              //in case logo image doesn't load
              onError={() => this.handleImageLoadError()}
            />
          </figure>
        </section>
        <Form />
        {this.determineTypeOfList()}

        {/* Modal */}
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={() => this.closeModal()}
          style={customStyles}
        >
          {selectedCharacter && (
            <CharacterDetail
              selectedCharacter={selectedCharacter}
              closeModal={() => this.closeModal()}
            />
          )}
        </Modal>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  fetchingData: state.starwars.fetchingData,
  browsing: state.starwars.browsing,
  searching: state.starwars.searching,
  selectedCharacter: state.starwars.selectedCharacter
});

const mapDispatchToProps = dispatch => ({
  setSelectedCharacter: () => {
    dispatch({ type: SET_SELECTED_CHARACTER, payload: null });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
