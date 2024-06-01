import CommentForm from "./CommentForm";
import { http, HttpResponse } from "msw";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default {
  component: CommentForm,
  title: "Comment Form",
};

const queryClient = new QueryClient();
export const Default = {
  component: CommentForm,
  decorators: [
    (story) => (
      <QueryClientProvider client={queryClient}>{story()}</QueryClientProvider>
    ),
  ],
  parameters: {
    msw: {
      handlers: [
        http.post("/comment", async ({ request }) => {
          const info = await request.formData();
          return HttpResponse.json({
            userName: info.name,
            publishTime: "1 second ago",
            comment: info.comment,
            likes: 0,
            unlinkes: 0,
          });
        }),
      ],
    },
  },
};
// const commentsData = [
//   {
//     userName: "P",
//     publishTime: "1 hour ago",
//     comment: "Hello world",
//     likes: 0,
//     unlikes: 0,
//     replies: [],
//   },
//   {
//     userName: "M",
//     publishTime: "1 day ago",
//     comment: "Hello world",
//     likes: 10,
//     unlikes: 0,
//     replies: [],
//   },
// ];
