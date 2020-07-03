import React, { useState } from 'react';
import 'antd/dist/antd.css';
import '../../../index.css';
import {
  Form,
  Input,
  Button,
} from 'antd';


const onFinish = values => {
  console.log('Данные для восстановления пароля: ', values);
};

const Recover = () => {
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
        name='email'
        label="Email"
        rules={[
          {
            type: 'email',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Восстановить
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Recover;