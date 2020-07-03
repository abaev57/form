import React, {useState} from 'react';
import 'antd/dist/antd.css';
import '../../../App.css';
import { Modal, Button } from 'antd';
import EnterInApp from '../content/EnterInApp';
import { Form,} from 'antd';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Recover from '../content/RecoverPassword';


const tailLayout = {
  wrapperCol: {
    offset:8,
    span: 16,
  },
  
};

const layout = {
  labelCol: {
    span: 8,
    
  },
  wrapperCol: {
    span: 16,
  },
  
};

const EnterModalHooks =(props)=> {

  let [visible, stateVisibleModal]= useState(false);


const showModal = () => {
  stateVisibleModal(true)
  };

const handleCancel = () => {
  stateVisibleModal(false)
  };


    
    return (
      <div>
        <Button type="primary" onClick={showModal}>
          Войти в личный кабинет
        </Button>
        <Modal
          visible={visible}
          title="ВХОД В ЛИЧНЫЙ КАБИНЕТ"
          onCancel={handleCancel}
          footer={[
            <Button className="button" key="back" 
            onClick={handleCancel}
             >
              Return
            </Button>,
            <Button className="button" key="submit" type="primary" >
              Submit
            </Button>,
            
          ]}
        >
            <Form {...layout}>
              <HashRouter>
                <Form.Item {...tailLayout}>
                  <div >
                    <li><NavLink to="/">Вход в личный кабинет</NavLink></li>
                  </div>
                </Form.Item>
              <div>
                <Route exact path="/" component={EnterInApp}/>
                <Route path="/recover" component={Recover}/>
              </div>


          
            </HashRouter>
            </Form>
        </Modal>

      </div>
    );
  
}


export default EnterModalHooks;


