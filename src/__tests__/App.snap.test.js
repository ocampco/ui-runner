import { create } from 'react-test-renderer';
import App from '../App';

describe('App', () => {
  it('should render correctly', () => {
    const time = '24/09/2023, 11:08:43';
    const tree = create(<App time={time} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
