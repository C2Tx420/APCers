import { Form, Input, Radio } from "antd";
import React, { useState } from "react";
import Button from "../../../components/Button";
import { CustomService } from "../../../services/custom.service";
import "./Create.scss";

export default function Create() {
  const [type, setType] = useState("create");
  const createFormList = [
    {
      name: "name",
      label: "Name",
      rule: [
        {
          required: true,
          message: "Please input NFT name!",
        },
      ],
      children: <Input />,
    },
    {
      name: "symbol",
      label: "Symbol",
      rule: [
        {
          required: true,
          message: "Please input NFT symbol!",
        },
      ],
      children: <Input />,
    },
  ];
  const handleSubmit = (value) => {
    console.log("aaa");
  };
  const handleSubmitFail = (errorInfo) => {
    console.log(errorInfo);
  };
  return (
    <main className="create-nft container">
      <div className="create-nft__type">
        <h2 className="create-nft__type-title">
          {CustomService.capitalizeFirstLetter(type)} NFT
        </h2>
        <Radio.Group
          onChange={(e) => setType(e.target.value)}
          value={type}
          optionType="button"
        >
          <Radio value={"create"}>Create</Radio>
          <Radio value={"upload"}>Upload</Radio>
        </Radio.Group>
      </div>
      <div className="create-nft__content">
        {type === "create" ? (
          <Form
            name="create-nft"
            initialValues={{}}
            labelCol={{ span: 2 }}
            wrapperCol={{ span: 22 }}
            onFinish={handleSubmit}
            onFinishFailed={handleSubmitFail}
            autoComplete="off"
          >
            {createFormList.map((formItem, key) => (
              <Form.Item
                label={formItem.label}
                name={formItem.name}
                rules={formItem.rule}
              >
                {formItem.children}
              </Form.Item>
            ))}

            <Form.Item wrapperCol={{ offset: 12 }}>
              <Button
                onClick={() => {
                  return;
                }}
                disable={false}
                size="s"
              >
                Create
              </Button>
            </Form.Item>
          </Form>
        ) : (
          <h1>upload</h1>
        )}
      </div>
    </main>
  );
}
