import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox } from 'antd';
import './App.css';
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
const EnterInApp= ()=> {
  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      {...layout}
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
      

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Запомнить меня</Checkbox>
        <a href='#'>Забыли пароль?</a>
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Отправить
        </Button>
      </Form.Item>
    </Form>
  );
};



export default EnterInApp;
