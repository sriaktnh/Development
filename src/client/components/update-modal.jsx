import React from 'react';
import styles from './update-modal.css'

export default class UpdateModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalState: {}
    }
  }

  render() {
    return (
      <div styleName='styles.modalcontainer'>
        <div styleName='styles.modalcontent'>
          updating students
                </div>

      </div>
    )
  }
}