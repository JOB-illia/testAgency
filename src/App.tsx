import type { FC } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainPage from "./components/Pages/MainPage";

const App: FC = () => {
  return (
    <Router>
      <Route path='/' exact component={MainPage} />
    </Router>
  );
}

export default App;
