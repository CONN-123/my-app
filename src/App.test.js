import { render, screen } from '@testing-library/react';
import App from './App';



const [hamburgerOpen] = useState(false);

const toogleHamburger = () =>{
    setHumburgerOpen(!hamburgerOpen)
}
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
