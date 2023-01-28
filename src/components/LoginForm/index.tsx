import { Form, Button, Input } from "antd";
import { useRouter } from "next/router";

type LoginFormValues = {
  username: string;
  password: string;
};

export default function LoginForm() {
  const router = useRouter();
  const handleOnFinish = (e: any) => {
    console.log(e);
    router.push("/");
  };
  return (
    <div className="p-8 rounded-lg border-slate-300 border-2">
      <div className="flex justify-center items-center mb-4 font-mono text-3xl font-extrabold text-cyan-900">
        TODO 2023
      </div>
      <Form onFinish={handleOnFinish}>
        <Form.Item
          label="Username"
          name={"username"}
          rules={[{ required: true, message: "Please input your username!" }]}>
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name={"pasword"}
          rules={[
            { required: true, message: "Please input your password!" },
            { min: 6, message: "Password has at least 6 characters" },
          ]}>
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <div className="flex items-center justify-between w-40 m-auto">
            <Button htmlType="submit">Login</Button>
            <Button onClick={() => router.push("/register")}>Register</Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
}
