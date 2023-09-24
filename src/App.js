const date = new Date();
const dateString = date.toLocaleString();
const App = ({ time = dateString }) => (
  <>
    <h1>Hello World</h1>
    <div data-testid='time'>{time}</div>
  </>
);

export default App;
