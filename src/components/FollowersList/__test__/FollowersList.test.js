import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FollowersList from '../FollowersList';

const MockFollowersList = () => {
    return (
        <BrowserRouter>
          <FollowersList />
        </BrowserRouter>
    )
}

describe("FollowersList", () => {

  beforeEach(() => {
    console.log("Running before each test")
  })

  beforeAll(() => {
    console.log("Running once before all tests")
  })

  afterEach(() => {
    console.log("Running after each test")
  })

  afterAll(() => {
    console.log("Runs after all tests")
  })

  it('Should render a follower item 0', async () => {
    render(<MockFollowersList />);
    const followerDivElement = await screen.findByTestId("follower-item-0")
    //screen.debug()
    expect(followerDivElement).toBeInTheDocument();
  });

  it('Should render 5 follower items', async () => {
    render(<MockFollowersList />);
    const followerDivElement = await screen.findAllByTestId(/follower-item-/i)
    expect(followerDivElement.length).toBe(1);
  });

})
// Making REAL requests not ideal, as requests can cost money, they are slow and depends on an external factor which could have their own issues
// Simply create a /src/__mocks__ folder then a js file with the exact name of what you want to mock, in this case, axios.js - the testing suite picks this up by name and mocks the req.
