import { Form, Avatar, Flex, Input, Button, Space } from "antd";
import { useMutation } from "@tanstack/react-query";
import React from "react";
import { createComment } from "../../server";

function CommentForm() {
  const [show, setShow] = React.useState(false);
  const [form] = Form.useForm();
  const comment = Form.useWatch("comment", form);
  const mutation = useMutation({
    mutationFn: createComment,
    onSuccess: (data) => {
      console.log("Successful!", data);
    },
    onError: (error) => {
      console.log("Error!", error);
    },
  });

  function handleReset() {
    console.log("handle reset");
    form.resetFields();
    setShow(false);
  }
  function handleSubmit(info) {
    console.log("value:", info);
    const formData = new FormData();
    for (const [key, value] of Object.entries(info)) {
      formData.append(key, value);
    }
    formData.append("userName", "P");
    mutation.mutate(formData);
  }
  console.log("comment ", comment);
  return (
    <Flex gap="small" align="start">
      <Avatar>P</Avatar>
      <Form onFinish={handleSubmit} className="grow" form={form}>
        <Form.Item name="comment">
          <Input
            placeholder="添加一条评论"
            onFocus={() => !show && setShow(true)}
          />
        </Form.Item>
        {show && (
          <Flex justify="end">
            <Form.Item wrapperCol={{ span: 4, offset: 0 }}>
              <Space>
                <Button htmlType="reset" onClick={handleReset}>
                  取消
                </Button>
                <Button htmlType="submit" disabled={!comment}>
                  评论
                </Button>
              </Space>
            </Form.Item>
          </Flex>
        )}
      </Form>
    </Flex>
  );
}

export default CommentForm;
