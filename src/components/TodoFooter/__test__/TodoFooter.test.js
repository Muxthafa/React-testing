import { render, screen } from "@testing-library/react";
import TodoFooter from "../TodoFooter";
import { BrowserRouter } from "react-router-dom";

const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  );
};

describe("TodoFooter", () => {
    it('renders "task" for one incomplete tasks', () => {
        render(<MockTodoFooter numberOfIncompleteTasks={1} />);
        const paragraphElement = screen.getByText(/1 task left/i);
        expect(paragraphElement).toBeInTheDocument();
      });
      
      it('renders "tasks" for more than one number of incomplete tasks', () => {
          render(<MockTodoFooter numberOfIncompleteTasks={5} />);
          const paragraphElement = screen.getByText(/5 tasks left/i);
          expect(paragraphElement).toBeInTheDocument();
        });
      
        it('renders "tasks" for more than one number of incomplete tasks', () => {
          render(<MockTodoFooter numberOfIncompleteTasks={5} />);
          const paragraphElement = screen.getByText(/5 tasks left/i);
          expect(paragraphElement).toBeTruthy();
        });
      
      
        it('not visible in the browser document if opacity is 0, it passes if it is visible', () => {
          render(<MockTodoFooter numberOfIncompleteTasks={5} />);
          const paragraphElement = screen.getByText(/5 tasks left/i);
          expect(paragraphElement).toBeVisible();
        });
      
        it('contain html tag', () => {
          render(<MockTodoFooter numberOfIncompleteTasks={5} />);
          const paragraphElement = screen.getByText(/5 tasks left/i);
          expect(paragraphElement).toContainHTML("p");
        });
      
        it('renders "tasks" for more than one number of incomplete tasks, using textContent', () => {
          render(<MockTodoFooter numberOfIncompleteTasks={5} />);
          const paragraphElement = screen.getByTestId("para")
          expect(paragraphElement).toHaveTextContent("5 tasks left");
        });
      
        it('renders "tasks" for more than one number of incomplete tasks, using textContent', () => {
          render(<MockTodoFooter numberOfIncompleteTasks={5} />);
          const paragraphElement = screen.getByTestId("para")
          expect(paragraphElement.textContent).toBe("5 tasks left");
        });
})



