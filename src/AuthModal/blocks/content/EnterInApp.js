import React, {useState} from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox } from 'antd';
import '../../../App.css';
import { NavLink} from "react-router-dom";




const onFinish = values => {
  console.log('Данные для входа:', values);
};

const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};
const EnterInApp= ()=> {
  const [form] = Form.useForm();
  const formLayout="vertical";
  const formItemLayout =
 
       {
          labelCol: { span: 8 },
          wrapperCol: { span: 20 },
        }
  return (
    <Form
      layout={formLayout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Имя"
        name="username"
        rules={[
          {
            required: true,
            message: 'Введите пожалуйста ваше Имя!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Пароль"
        name="password"
        rules={[
          {
            required: true,
            message: 'Введите пожалуйста ваш пароль!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
     <div className="remember"> 
          <Form.Item name="remember" valuePropName="checked" >
            <Checkbox>Запомнить меня</Checkbox>
          </Form.Item>
          <Form.Item >       
            <li><NavLink to="/recover">Забыли пароль?</NavLink></li>
          </Form.Item>
       </div>

      <div style={document}>
          <p>Нажимая кнопку "Зарегистрироваться", я соглашаюсь с <a> политикой конфиденциальности</a> и <a>обработкой персональных данных</a>
          </p><br/>
        </div>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Войти
        </Button>
      </Form.Item>
    </Form>
  );
};



export default EnterInApp;
