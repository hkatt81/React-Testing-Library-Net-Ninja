import { render, screen } from '@testing-library/react';
import Header from '../Header';

<<<<<<< HEAD

describe("Header", () => {
  it('Header component finds if the prop has been passed through and rendered properly', () => {
    render(<Header title="My Header" />);
    const headingElement = screen.getByText(/my header/i);
    expect(headingElement).toBeInTheDocument();
  }); // Passes a prop into the component and tests that it renders it
})


// // it('Header component should render a single heading and it doesnt matter what is in it', async () => {
// //     render(<Header title="My Header" />);
// //     const headingElement = screenw.getByRole("heading");
// //     expect(headingElement).toBeInTheDocument();
// // }); // Would expect 1 heading element. Would fail if more than 1. For more that 1 use getAllByRole

// it('Header component get all by role and ensures there are two headings', () => {
//     render(<Header title="My Header" />);
//     const headingElement = screen.getAllByRole("heading")
//     expect(headingElement.length).toBe(2);
// }); // Tests that there should be total of 2 headings in the array returned by the getAllByRole method

// // it('Header component should render a heading role which contains text from a prop', async () => {
// //     render(<Header title="My Header" />);
// //     const headingElement = screen.getByRole("heading", { name: "My Header"}); // not working as described by tutorial
// //     expect(headingElement).toBeInTheDocument();
// // }); // Finds 1 heading with the text "My Header" this is much better as simulates user intention better i.e. they come to the site, see a heading and read the word My Header

// it('Finds header component by title', () => {
//     render(<Header title="My Header" />);
//     const headingElement = screen.getByTitle("main heading");
//     expect(headingElement).toBeInTheDocument();
// }); // Finds header by title attribute string

// it('Header component find by string with async and await', async () => {
//     render(<Header title="My Header" />);
//     const headingElement = await screen.findByText(/my header/i);
//     expect(headingElement).toBeInTheDocument();
// }); // find by requires await before screen

// // Query by
// it('Header component query by string does not exist in rendered text', () => {
//     render(<Header title="My Header" />);
//     const headingElement = screen.queryByText(/dogs/i);
//     expect(headingElement).not.toBeInTheDocument();
// }); // Checks a string does not exist in heading

// it('Finds header component by data-testid', () => {
//     render(<Header title="My Header" />);
//     const headingElement = screen.getByTestId("testthis");
//     expect(headingElement).toBeInTheDocument();
// }); // Tests element by testid which is last resort if cannot emulate user interaction flow
=======
describe("Header", () => {
    it('should render same text passed into title prop', () => {
        render(
            <Header 
              title="todo"
            />
        );
        const h1Element = screen.getByText(/todo/i);
        expect(h1Element).toBeInTheDocument();
    });
})

// it('should render same text passed into title prop', () => {
//     render(
//         <Header 
//           title="todo"
//         />
//     );
//     const h1Element = screen.getByRole("heading");
//     expect(h1Element).toBeInTheDocument();
// });

// it('should render same text passed into title prop', () => {
//     render(
//         <Header 
//           title="todo"
//         />
//     );
//     const h1Element = screen.getByRole("heading", { name: /todo/i });
//     expect(h1Element).toBeInTheDocument();
// });

// it('should render same text passed into title prop', () => {
//     render(
//         <Header 
//           title="todo"
//         />
//     );
//     const h1Element = screen.getByTitle("Header");
//     expect(h1Element).toBeInTheDocument();
// });

// it('should render same text passed into title prop', () => {
//     render(
//         <Header 
//           title="todo"
//         />
//     );
//     const h2Element = screen.getByTestId("header-2");
//     expect(h2Element).toBeInTheDocument();
// });

// // WITH FINDBY

// it('should render same text passed into title prop', async () => {
//     render(
//         <Header 
//           title="todo"
//         />
//     );
//     const h1Element = await screen.findByText(/todo/i);
//     expect(h1Element).toBeInTheDocument();
// });

// // WITH QUERYBY

// it('should render same text passed into title prop', () => {
//     render(
//         <Header 
//           title="todo"
//         />
//     );
//     const h1Element = screen.queryByText(/dogs/i);
//     expect(h1Element).not.toBeInTheDocument
// });

// // WITH GETALLBY

// it('should render same text passed into title prop', () => {
//     render(
//         <Header 
//           title="todo"
//         />
//     );
//     const h1Elements = screen.getAllByText(/todo/i);
//     expect(h1Elements.length).toBe(1);
// });
>>>>>>> 1f98e72e4b1745863ef9ca9435ec4ad860beec39
