import { create } from 'react-test-renderer';
import App from '../App';

describe('App', () => {
  it('should render correctly', () => {
    const tree = create(<App />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
