import PropTypes from "prop-types";
import { Button, Flex, Popover, Dropdown } from "antd";
import Icon from "@ant-design/icons";
import Sort from "../../assets/sort.svg?react";
function CommentTitle({
  commentsCount,
  chooseSortRule,
  sortRules,
  currentSelectedSortRule,
}) {
  return (
    <Flex gap="middle" align="center">
      <div>{commentsCount > 0 ? commentsCount + " " : ""}留言</div>
      <Flex gap="small" align="center">
        <Dropdown
          menu={{
            items: sortRules.map((rule) => {
              return { key: rule, label: rule };
            }),
            selectable: true,
            defaultSelectedKeys: currentSelectedSortRule,
            onClick: (e) => chooseSortRule(e.key),
          }}
          trigger={["click"]}
        >
          <Popover content={"排序评论"} trigger={"hover"}>
            <Button icon={<Icon component={Sort} />} data-testid="trigger" />
          </Popover>
        </Dropdown>
        排序
      </Flex>
    </Flex>
  );
}

export default CommentTitle;

CommentTitle.propTypes = {
  commentsCount: PropTypes.number.isRequired,
  chooseSortRule: PropTypes.func,
  sortRules: PropTypes.array.isRequired,
  currentSelectedSortRule: PropTypes.string.isRequired,
};
