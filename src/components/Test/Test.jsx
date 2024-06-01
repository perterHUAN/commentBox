import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Space, Button } from "antd";
import Icon from "@ant-design/icons";
import Sort from "../../assets/sort.svg?react";
const items = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item (disabled)
      </a>
    ),
    icon: <SmileOutlined />,
    disabled: true,
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
  {
    key: "4",
    danger: true,
    label: "a danger item",
  },
];
const Test = () => (
  <Dropdown
    menu={{
      items: [
        { key: "top", label: "最热优先" },
        { key: "new", label: "最新优先" },
      ],
    }}
    trigger={["click"]}
  >
    <Button
      icon={<Icon component={Sort} />}
      rootClassName="border-none outline-none peer"
      data-testid="trigger"
    />
  </Dropdown>
);

export default Test;
