import React, { useState } from 'react';
import 'antd/dist/antd.css';
import '../../../index.css';
import {
  Form,
  Input,
  Select,
  Button,
} from 'antd';

const document = {

}

const onFinish = values => {
  console.log('Данные для регистрации: ', values);
};


const Registration = () => {
  const [form] = Form.useForm();


 
 const formLayout="vertical";
  const formItemLayout =
 
       {
          labelCol: { span: 8 },
          wrapperCol: { span: 20 },
        }





  return (
    <Form
      {...formItemLayout}
      layout={formLayout}
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
      </Form.Item >
      <Form.Item 
      name="character"
      label="Роль">
          <Select>
            <Select.Option value="Пользователь">Пользователь</Select.Option>
            <Select.Option value="Игрок">Игрок</Select.Option>
          </Select>
      </Form.Item>
      <Form.Item 
      name="project"
       label="Проект">
          <Select>
            <Select.Option value="ООО Ромашка">ООО Ромашка</Select.Option>
            <Select.Option value="Игрок">Игрок</Select.Option>
          </Select>
      </Form.Item>
        <div {...document}>
          <p>Нажимая кнопку "Зарегистрироваться", я соглашаюсь с <a> политикой конфиденциальности</a> и <a>обработкой персональных данных</a>
          </p>
          <br/>
        </div>
      <Form.Item >
        <Button type="primary" htmlType="submit">
          Зарегистрироваться
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Registration;