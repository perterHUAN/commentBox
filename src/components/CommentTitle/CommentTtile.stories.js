import CommentTitle from "./CommentTitle";
import { screen, userEvent, within, expect, fn } from "@storybook/test";

export default {
  component: CommentTitle,
  title: "comment title",
};

export const Default = {
  args: {
    commentsCount: 158,
    sortRules: ["最热优先", "最新优先"],
    currentSelectedSortRule: "最热优先",
    chooseSortRule: fn(),
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId("trigger"));
    await userEvent.click(screen.getByText("最新优先"));
    await expect(args.chooseSortRule).toHaveBeenCalled();
    await expect(args.chooseSortRule).toBeCalledWith("最新优先");
  },
};

export const ZeroComment = {
  args: {
    ...Default.args,
    commentsCount: 0,
  },
};
