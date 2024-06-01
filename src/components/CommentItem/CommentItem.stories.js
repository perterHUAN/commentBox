import CommentItem from "./CommentItem";
import { http, HttpResponse } from "msw";

export default {
  component: CommentItem,
  title: "Comment Item",
};
export const Default = {
  args: {
    avatar: "P",
    userName: "peterhuan",
    homeUrl: "http://example.com",
    publishTime: "1 hour ago",
    comment: "Hello world",
    likes: 100,
    unlikes: 0,
    replies: ["good", "yes", "no"],
  },
};

export const AddLikes = {
  args: Default.args,
  parameters: {
    msw: {
      handlers: [
        http.post("/likes", async ({ request }) => {
          const data = await request.json();
          return HttpResponse.json()
        }),
      ],
    },
  },
};
