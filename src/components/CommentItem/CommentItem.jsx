import React from "react";
import PropTypes from "prop-types";
import { Flex, Avatar, Space, Button } from "antd";
import {
  LikeOutlined,
  DislikeOutlined,
  DownOutlined,
  UpOutlined,
} from "@ant-design/icons";
import { useMutation } from "@tanstack/react-query";
function CommentItem({
  avatar,
  userName,
  homeUrl,
  publishTime,
  comment,
  likes,
  dislikes,
  replies,
}) {
  const [show, setShow] = React.useState(false);
  const addLikeMutation = useMutation({mutationFn: addLikes, }) 
  return (
    <Flex align="start" gap="middle">
      <Avatar>{avatar}</Avatar>
      <Flex vertical className="grow" gap="small">
        <Space align="center">
          <a href={homeUrl}>@{userName}</a>
          <span>{publishTime}</span>
        </Space>
        <p>{comment}</p>
        <Flex align="center" gap="small">
          <Space align="center" gap="small">
            <Button icon={<LikeOutlined />} />
            {likes > 0 ? likes : null}
          </Space>
          <Space align="center" gap="small">
            <Button icon={<DislikeOutlined />} />
            {dislikes > 0 ? dislikes : null}
          </Space>
          <span className="font-bold">Reply</span>
        </Flex>
        {replies.length > 0 ? (
          <Space align="center" gap="sm" className="text-blue-400">
            <Button
              icon={show ? <UpOutlined /> : <DownOutlined />}
              onClick={() => setShow(!show)}
            />
            {replies.length === 1 ? "1 reply" : `${replies.length} replies`}
          </Space>
        ) : null}
      </Flex>
    </Flex>
  );
}

export default CommentItem;

CommentItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  homeUrl: PropTypes.string.isRequired,
  publishTime: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  dislikes: PropTypes.number.isRequired,
  replies: PropTypes.array.isRequired,
};
