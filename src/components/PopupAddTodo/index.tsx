import { Modal, Form, Button, Input, Select } from "antd";

type ModalProps = {
  open: boolean;
  onCancel: () => void;
};

const handleOnFinish = (e: any) => {
  console.log(e);
};

export default function PopupAddTodo(props: ModalProps) {
  return (
    <Modal {...props} footer={null} destroyOnClose closable={false}>
      <div className="pt-8 px-2">
        <Form initialValues={{ status: "resume" }} onFinish={handleOnFinish}>
          <Form.Item
            label="Title"
            name={"title"}
            rules={[
              { required: true, message: "Please input your stuff!" },
              { max: 50, message: "Please do not exceed 50 characters" },
            ]}>
            <Input />
          </Form.Item>
          <Form.Item
            label="Status"
            name={"status"}
            rules={[
              { required: true, message: "Please choose stuff's status!" },
            ]}>
            <Select
              style={{ width: 120 }}
              options={[
                { value: "urgent", label: "Urgent" },
                { value: "resume", label: "Resume" },
              ]}
            />
          </Form.Item>
          <Form.Item>
            <div className="flex items-center justify-between w-40 m-auto">
              <Button htmlType="submit">Submit</Button>
              <Button onClick={props.onCancel}>Cancel</Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
}
