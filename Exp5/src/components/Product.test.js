import { render, screen } from "@testing-library/react";
import Product from "./Product";
import * as api from "../api/productApi";

jest.mock("../api/productApi");

test("renders Product", async () => {

  api.fetchProduct.mockResolvedValue({
    id: 1,
    name: "Mouse",
    price: 800
  });

  render(<Product />);

  const productName = await screen.findByText("Mouse");

  expect(productName).toBeInTheDocument();
});
