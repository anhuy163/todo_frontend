import { Modal } from "antd";
import { Pie } from "@ant-design/plots";

type ModalProps = {
  open: boolean;
  onCancel: () => void;
};

export default function PopupPiechart(props: ModalProps) {
  const data = [
    {
      type: "Urgent",
      value: 3,
    },
    {
      type: "Resume",
      value: 3,
    },
    {
      type: "done",
      value: 18,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "type",
    color: ({ type }: any) => {
      return type === "Urgent"
        ? "red"
        : type === "done"
        ? "lightgreen"
        : "yellow";
    },
    radius: 0.9,
    label: {
      type: "inner",
      offset: "-30%",
      content: ({ percent }: any) => `${(percent * 100).toFixed(0)}%`,
      style: {
        fontSize: 14,
        textAlign: "center",
      },
    },
    interactions: [
      {
        type: "element-active",
      },
    ],
  };
  return (
    <Modal
      destroyOnClose
      {...props}
      footer={null}
      closeIcon={null}
      closable={false}>
      <Pie {...config} />
    </Modal>
  );
}
