// print current time
// https://mocki.io/v1/2c2705d8-6fe4-4877-83a0-e6bbc9a395d2

const date = new Date();
const dateString = date.toLocaleString();
const App = ({ time = dateString }) => (
  <>
    <h1>Hello World</h1>
    <div data-testid='time'>{time}</div>
  </>
);

export default App;
