import { DeleteFilled, CheckCircleFilled } from "@ant-design/icons";
import clsx from "clsx";
import { Tooltip } from "antd";

export type CardProps = {
  title: string;
  color: string;
};

export default function Card({ title, color }: CardProps) {
  return (
    <>
      <Tooltip
        color={color}
        placement="right"
        title={
          color === "yellow" ? "Resume" : color === "green" ? "Done" : "Urgent"
        }>
        <div
          className={clsx(
            "p-2 flex items-center justify-between w-[500px] min-h-[64px] px-4 py-5 mx-auto my-4 transition-all rounded-xl",
            color === "yellow"
              ? "bg-yellow-300 hover:bg-yellow-400 hover:shadow-2xl"
              : color === "green"
              ? "bg-green-300 hover:bg-green-400 hover:shadow-2xl"
              : "bg-red-500 hover:bg-red-600 hover:shadow-2xl"
          )}>
          <div className="text-lg font-mono">{title}</div>
          <div className="flex items-center justify-between w-12 text-lg">
            <Tooltip color={"gray"} title="Delete" placement="top">
              <DeleteFilled style={{ cursor: "pointer" }} />
            </Tooltip>
            {color !== "green" && (
              <Tooltip color={"green"} title={"Resolved"} placement="top">
                <CheckCircleFilled style={{ cursor: "pointer" }} />
              </Tooltip>
            )}
          </div>
        </div>
      </Tooltip>
    </>
  );
}
