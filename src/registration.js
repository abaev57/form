import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import {
  Form,
  Input,
  Select,
  Button,
} from 'antd';

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const Registration = () => {
  const [form] = Form.useForm();

  const onFinish = values => {
    console.log('Данные для регистрации: ', values);
  };

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      scrollToFirstError
    >
      
      <Form.Item
        name="name"
        label="Имя"
        rules={[

          {
            required: true,
            message: 'Пожалуйста введите Ваше Имя!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      

      <Form.Item
        name="password"
        label="Пароль"
        rules={[
          {
            required: true,
            message: 'Пожалуйста введите Ваш пароль!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Повторите пароль"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Пожалуйста повторите Ваш пароль!',
          },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject('Два введенных пароля не совпадают!');
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>



      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Зарегистрироваться
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Registration;