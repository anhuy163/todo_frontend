import { Spin } from "antd";

export default function LoadingScreen() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Spin tip="Loading" size="large" />
    </div>
  );
}
