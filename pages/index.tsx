import Card from "@/src/components/Card";
import LayoutContainer from "@/src/containers/Layout";
import {
  ScheduleOutlined,
  PlusCircleOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { Button, List } from "antd";
import PopupPiechart from "@/src/components/PopupPiechart";
import PopupAddTodo from "@/src/components/PopupAddTodo";
import { useState } from "react";

export default function Home() {
  const [toggleStats, setToggleStats] = useState(false);
  const handleOnToggleStats = () => {
    setToggleStats(true);
  };
  const handleOnCloseStats = () => {
    setToggleStats(false);
  };
  const [toggleAdd, setToggleAdd] = useState(false);
  const handleOnToggleAdd = () => {
    setToggleAdd(true);
  };
  const handleOnCloseAdd = () => {
    setToggleAdd(false);
  };
  const data = [
    {
      title: "Go shopping",
      id: "1",
      color: "yellow",
    },
    { title: "Play football", id: "2", color: "green" },
    { title: "Take dogs to the park", id: "3", color: "red" },
    { title: "Watch the last episode of TV series", id: "4", color: "yellow" },
    { title: "Go gymnastics", id: "5", color: "green" },
    { title: "Go gymnastics", id: "6", color: "green" },
  ];
  return (
    <>
      <LayoutContainer title="Home">
        <div className="w-full text-center ">
          <div className="mt-5 flex justify-center items-center text-5xl font-mono font-extrabold text-cyan-800">
            YOUR TODO LIST
          </div>
          <div className="mt-5 flex justify-center items-center">
            <Button
              onClick={handleOnToggleAdd}
              style={{
                marginRight: "15px",
                display: "flex",
                alignItems: "center",
              }}
              icon={<PlusCircleOutlined />}>
              Add
            </Button>
            <Button
              onClick={handleOnToggleStats}
              style={{
                // marginRight: "15px",
                display: "flex",
                alignItems: "center",
              }}
              icon={<PieChartOutlined />}>
              Statistics
            </Button>
          </div>
          <div className="p-auto">
            <List
              locale={{ emptyText: "Empty" }}
              split={false}
              // itemLayout='vertical'
              // size="large"
              pagination={{
                pageSize: 5,
              }}
              dataSource={data}
              renderItem={(item) => (
                <Card key={item?.id} title={item?.title} color={item?.color} />
              )}
            />
          </div>
        </div>
        <div>
          <PopupPiechart open={toggleStats} onCancel={handleOnCloseStats} />
          <PopupAddTodo open={toggleAdd} onCancel={handleOnCloseAdd} />
        </div>
      </LayoutContainer>
    </>
  );
}
