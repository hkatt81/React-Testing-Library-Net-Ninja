import { render, screen, fireEvent } from '@testing-library/react';
<<<<<<< HEAD
import { BrowserRouter } from 'react-router-dom';
import Todo from '../Todo';
=======
import Todo from "../Todo"
import { BrowserRouter } from "react-router-dom"
>>>>>>> 1f98e72e4b1745863ef9ca9435ec4ad860beec39

const MockTodo = () => {
    return (
        <BrowserRouter>
<<<<<<< HEAD
            <Todo />
=======
          <Todo/>
>>>>>>> 1f98e72e4b1745863ef9ca9435ec4ad860beec39
        </BrowserRouter>
    )
}

const addTask = (tasks) => {
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
<<<<<<< HEAD
    const buttonElement = screen.getByRole("button")
    tasks.forEach(task => {
        fireEvent.change(inputElement, { target: { value: task } })
        fireEvent.click(buttonElement)
    })
}

describe("Todo integration test", () => {

    it('Integration test on the Todo component which contains a couple of interacting components', () => {
        render(<MockTodo />);
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        const buttonElement = screen.getByRole("button")
        fireEvent.change(inputElement, { target: { value: "Go grocery shopping" } })
        fireEvent.click(buttonElement)
        const divElement = screen.getByText(/Go grocery shopping/i)
        expect(divElement).toBeInTheDocument()  
    });

    it('Integration test on the Todo component to see if the element receives 3 items', () => {
        render(<MockTodo />);
        addTask(["Go grocery shopping","Mow the lawn","Clean the bathroom"])
        const divElements = screen.getAllByTestId("task-div")
        expect(divElements.length).toBe(3)  
    });

    it('Tasks should not have active class when they are initially rendered', () => {
        render(<MockTodo />);
        addTask(["Go grocery shopping"])
        const divElement = screen.getByText(/Go grocery shopping/i)
        expect(divElement).not.toHaveClass("todo-item-active")
    });

    it('Tasks should have active class when they are clicked', () => {
        render(<MockTodo />);
        addTask(["Go grocery shopping"])
        const divElement = screen.getByText(/Go grocery shopping/i)
        fireEvent.click(divElement)
        expect(divElement).toHaveClass("todo-item-active")
    });

})
=======
    const buttonElement = screen.getByRole("button", { name: /Add/i} );
    tasks.forEach((task) => {
        fireEvent.change(inputElement, { target: { value: task } });
        fireEvent.click(buttonElement);
    })
}

it('should be able to type into input', () => {
    render(
        <MockTodo />
    );
    addTask(["Go Grocery Shopping"])
    const divElement = screen.getByText(/Go Grocery Shopping/i);
    expect(divElement).toBeInTheDocument()
});

it('should render multiple items', () => {
    render(
        <MockTodo />
    );
    addTask(["Go Grocery Shopping", "Go Grocery Shopping", "Go Grocery Shopping"])
    const divElements = screen.queryAllByText(/Go Grocery Shopping/i);
    expect(divElements.length).toBe(3)
});

it('task should not have complete class when initally rendered', () => {
    render(
        <MockTodo />
    );
    addTask(["Go Grocery Shopping"])
    const divElement = screen.getByText(/Go Grocery Shopping/i);
    expect(divElement).not.toHaveClass("todo-item-active")
});

it('task should have complete class when clicked', () => {
    render(
        <MockTodo />
    );
    addTask(["Go Grocery Shopping"])
    const divElement = screen.getByText(/Go Grocery Shopping/i);
    fireEvent.click(divElement)
    expect(divElement).toHaveClass("todo-item-active")
});
>>>>>>> 1f98e72e4b1745863ef9ca9435ec4ad860beec39
