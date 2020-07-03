import React, {useState} from 'react';
import 'antd/dist/antd.css';
import '../../../App.css';
import { Modal, Button } from 'antd';
import Registration from '../content/RegistrationInApp';



const RegistrationAppHooks=(props)=> {

let [visible, stateVisibleModal]= useState(false);


const showModal = () => {
  stateVisibleModal(true)
  };

const handleCancel = () => {
  stateVisibleModal(false)
  };

    return (
      <div className="modal">
        <Button type="primary" onClick={showModal}>
          Регистрация
        </Button>
        <Modal
          visible={visible}
          title="РЕГИСТРАЦИЯ НОВОГО ПОЛЬЗОВАТЕЛЯ"
          onCancel={handleCancel}
          footer={[
            <Button className="button" key="back" onClick={handleCancel} >
              Return
            </Button>,
            <Button className="button" key="submit" type="primary">
              Submit
            </Button>,
          ]}
        >       
        <Registration />
        </Modal>
      </div>
    );
  
}


export default RegistrationAppHooks;