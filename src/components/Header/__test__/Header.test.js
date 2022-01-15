import { render, screen } from '@testing-library/react';
import Header from '../Header';

it('renders header title in header component', () => {
  render(<Header title="My header" />);
  const headingElement = screen.getByText(/my header/i);
  expect(headingElement).toBeInTheDocument();
});

it('renders header title in header component using role', () => {
    render(<Header title="My header" />);
    const headingElement = screen.getByRole("heading", {name: "My header"});
    expect(headingElement).toBeInTheDocument();
  });

  it('renders header title in header component using testid', () => {
    render(<Header title="My header" />);
    const headingElement = screen.getByTestId("header-1");
    expect(headingElement).toBeInTheDocument();
  });

  it('renders header title in header component using findby', async () => {
    render(<Header title="My header" />);
    const headingElement = await screen.findByText("My header");
    expect(headingElement).toBeInTheDocument();
  });

  it('renders header title in header component using queryBy', () => {
    render(<Header title="My header" />);
    const headingElement = screen.queryByText("not exist");
    expect(headingElement).not.toBeInTheDocument();
  });

  it('renders header title in header component using getAllby', () => {
    render(<Header title="My header" />);
    const headingElement = screen.getAllByRole("heading");
    expect(headingElement.length).toBe(1);
  });
