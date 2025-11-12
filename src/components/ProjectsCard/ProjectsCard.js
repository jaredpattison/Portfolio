import React from 'react';
import Modal from 'react-modal';
import github from '../../assets/github.svg';
import world from '../../assets/www.png';

// Import all project images
import packingPlanner from '../../assets/packing-planner.png';
import oneBar from '../../assets/one-bar.png';
import cfQuickStart from '../../assets/cf-quick-start.png';
import buzzcard from '../../assets/buzzcard.png';

// Image map for dynamic lookup
const imageMap = {
  'packing-planner.png': packingPlanner,
  'one-bar.png': oneBar,
  'cf-quick-start.png': cfQuickStart,
  'buzzcard.png': buzzcard,
};

class ProjectsCard extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      showModal: false,
    };
 
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }
    
  render() {
    
    const imgUrl = imageMap[this.props.projects.media.title];
    return (
      <>
        <div className="projects-card">

          <figure>
            <img
              onClick={this.handleOpenModal}
              src={imgUrl}
              alt={this.props.projects.media.alt}
              title={this.props.projects.media.title}
            />
          </figure>

        </div>

        <Modal 
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example"
          className="Modal"
          overlayClassName="Overlay"
          closeTimeoutMS={1000}
          onRequestClose={this.handleCloseModal}
          shouldCloseOnOverlayClick={true}
        >

          <div id="image-social">
            <div id="image-container">
              <img
                src={imgUrl}
                alt={this.props.projects.media.alt}
                title={this.props.projects.media.title}
              />
            </div>

            <div id="social-icons">
              <button className="social" onClick={this.handleCloseModal}>X</button>
              {this.props.projects.links[1].href && (
                <a  target="_blank" rel="noopener noreferrer" href={this.props.projects.links[1].href}><img alt="" className="social" src={github}/></a>
              )}
              {this.props.projects.links[0].href && (
                <a target="_blank" rel="noopener noreferrer" href={this.props.projects.links[0].href}><img alt=''  className="social" src={world} /></a>
              )}
            </div>
          </div>

          <div id="description">
            <p>
              {this.props.projects.copy}
            </p>
          </div>

        </Modal>
      </>
    );
  }
  
}

export default ProjectsCard;