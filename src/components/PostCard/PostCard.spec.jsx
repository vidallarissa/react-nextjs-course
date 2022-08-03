import { render, screen } from "@testing-library/react";
import { PostCard } from ".";
import { postCardMockProps } from "./mock";

describe("<PostCard />", () => {
  it("Should render PostCard correctly", () => {
    render(<PostCard {...postCardMockProps} />);

    expect(screen.getByAltText(/Title 1/i)).toHaveAttribute(
      "src",
      "img/img.png"
    );
    expect(
      screen.getByRole("heading", { name: "Title 1 1" })
    ).toBeInTheDocument();
    expect(screen.getByText("Body 1")).toBeInTheDocument();
  });

  it("Should match snapshot", () => {
    const { container } = render(<PostCard {...postCardMockProps} />);
    // eslint-disable-next-line testing-library/no-node-access
    expect(container.firstChild).toMatchSnapshot();
  });
});
