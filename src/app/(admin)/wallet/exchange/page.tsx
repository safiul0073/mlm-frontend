"use client";

import { Button, Form, Input, Select, Space } from "antd";

const { Option } = Select;

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const WalletExchange = () => {
  const [form] = Form.useForm();

  const onGenderChange = (value: string) => {
    switch (value) {
      case "male":
        form.setFieldsValue({ note: "Hi, man!" });
        break;
      case "female":
        form.setFieldsValue({ note: "Hi, lady!" });
        break;
      case "other":
        form.setFieldsValue({ note: "Hi there!" });
        break;
      default:
    }
  };

  const onFinish = (values: any) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  const onFill = () => {
    form.setFieldsValue({ note: "Hello world!", gender: "male" });
  };

  return (
    <>
      <div className="w-full flex flex-col grow shadow-lg rounded">
        <div className="px-6 h-14 rounded-t border-t border-x border-gray-200 dark:border-[#535a94]/80 text-lg text-medium bg-white dark:bg-transparent flex items-center gap-2">
          Referral URL
        </div>
        <div className="flex flex-col p-6 gap-2 rounded-b border border-gray-200 dark:border-[#535a94]/80 bg-white dark:bg-transparent">
          <Form
            form={form}
            layout="vertical"
            name="control-hooks"
            onFinish={onFinish}
          >
            <Form.Item name="note" label="Note" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item
              name="gender"
              label="Gender"
              rules={[{ required: true }]}
            >
              <Select
                placeholder="Select a option and change input text above"
                onChange={onGenderChange}
                allowClear
              >
                <Option value="male">male</Option>
                <Option value="female">female</Option>
                <Option value="other">other</Option>
              </Select>
            </Form.Item>
            <Form.Item
              noStyle
              shouldUpdate={(prevValues, currentValues) =>
                prevValues.gender !== currentValues.gender
              }
            >
              {({ getFieldValue }) =>
                getFieldValue("gender") === "other" ? (
                  <Form.Item
                    name="customizeGender"
                    label="Customize Gender"
                    rules={[{ required: true }]}
                  >
                    <Input />
                  </Form.Item>
                ) : null
              }
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Space>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
                <Button htmlType="button" onClick={onReset}>
                  Reset
                </Button>
                <Button type="link" htmlType="button" onClick={onFill}>
                  Fill form
                </Button>
              </Space>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default WalletExchange;
