import React, {Component} from 'react';
import {connect} from 'react-redux';
import Modal from 'react-modal';

import Form from '../../components/Form/Form.component';
import BrowseList from '../../components/BrowseList/BrowseList.component';
import SearchList from '../../components/SearchList/SearchList.component';
import Loading from '../../components/Shared/Loading/Loading.component';
import Button from '../../components/Shared/Button/Button.component';
import './Home.styles.scss';

import {SET_SELECTED_CHARACTER} from '../../constants'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    minWidth: '250px',
    backgroundColor: '#000000'
  }
}
Modal.setAppElement(document.getElementById('root'));

class Home extends Component {
  
  state = {
    modalIsOpen: false
  };

  
  // openModal() {
  //   this.setState({modalIsOpen: true});
  // }
 
  // afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   this.subtitle.style.color = '#f00';
  // }
 
  closeModal() {
    //sets selectedCharacter to null
    this.props.setSelectedCharacter()
    this.setState({modalIsOpen: false});
  }

  determineTypeOfList = () => {
    const {fetchingData, browsing, searching} = this.props;
    if(fetchingData) {
      return (
        <div className="loading-container">
          <Loading />
        </div>
      )
    }
    if(browsing) {
      return <BrowseList />
    }
    if(searching) {
      return <SearchList />
    }
  }

  componentDidMount() {
    if(this.props.selectedCharacter !== null) {
      this.setState({modalIsOpen: true})
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevProps.selectedCharacter===null && this.props.selectedCharacter!==null) {
      if(this.props.selectedCharacter !== null) {
        this.setState({modalIsOpen: true})
      }
    }
  }

  render() {
    const {selectedCharacter} = this.props;
    return (
      <main className="home">
        <h1 className="page-title">Star Wars</h1>
        <Form />
        {this.determineTypeOfList()}

        {/* Modal */}
        <Modal
          isOpen={this.state.modalIsOpen}
          //onAfterOpen={this.afterOpenModal}
          onRequestClose={()=>this.closeModal()}
          style={customStyles}
          //contentLabel="Example Modal"
        >
          {selectedCharacter &&
            <section className="character-detail">
              {/* Name */}
              <article className="character-detail__info">
                <div className="character-detail__info--left">Name</div>
                <div className="character-detail__info--right">{selectedCharacter.name}</div>
              </article>
              {/* Gender */}
              <article className="character-detail__info">
                <div className="character-detail__info--left">Gender</div>
                <div className="character-detail__info--right">{selectedCharacter.gender}</div>
              </article>
              {/* Birth */}
              <article className="character-detail__info">
                <div className="character-detail__info--left">Birth year</div>
                <div className="character-detail__info--right">{selectedCharacter.birth_year}</div>
              </article>
              {/* Hair Color */}
              <article className="character-detail__info">
                <div className="character-detail__info--left">Hair color</div>
                <div className="character-detail__info--right">{selectedCharacter.hair_color}</div>
              </article>
              {/* Eye Color */}
              <article className="character-detail__info">
                <div className="character-detail__info--left">Eye color</div>
                <div className="character-detail__info--right">{selectedCharacter.eye_color}</div>
              </article>
              {/* Height */}
              <article className="character-detail__info">
                <div className="character-detail__info--left">Height</div>
                <div className="character-detail__info--right">{selectedCharacter.height}</div>
              </article>
              {/* Mass */}
              <article className="character-detail__info">
                <div className="character-detail__info--left">Mass</div>
                <div className="character-detail__info--right">{selectedCharacter.mass}</div>
              </article>
              <div className="character-detail__footer">
                <Button 
                  onClick={()=>this.closeModal()}
                  type="primary"
                  size="medium"
                >Close</Button>
              </div>
            </section>
          }

        </Modal>
      </main>
    )
  }
}

const mapStateToProps = state => ({
  fetchingData: state.starwars.fetchingData,
  browsing: state.starwars.browsing,
  searching: state.starwars.searching,
  selectedCharacter: state.starwars.selectedCharacter
})

const mapDispatchToProps = dispatch => ({
  setSelectedCharacter: () => {
    dispatch({type: SET_SELECTED_CHARACTER, payload:null})
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);