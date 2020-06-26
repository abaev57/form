import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './App.css';
import { Modal, Button } from 'antd';
import EnterInApp from './EnterInApp';

class Mapp extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div className='modal'>
        <Button type="primary" onClick={this.showModal}>
          Войти в личный кабинет
        </Button>
        <Modal
          title="ВХОД В ЛИЧНЫЙ КАБИНЕТ"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          
        >            
        <EnterInApp />
        </Modal>
      </div>
    );
  }
}


export default Mapp;