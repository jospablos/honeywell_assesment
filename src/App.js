import './App.css';
import EmojiIndicator from './modules/EmojiIndicator/EmojiIndicator';
import ProgressIndicator from './modules/ProgressIndicator/ProgressIndicator';

function App() {
  return (
    <div className="App">
      <ProgressIndicator
        steps={[
          { id: 'email', label: 'Email', complete: true },
          { id: 'username', label: 'Username', complete: false },
          { id: 'password', label: 'Password', complete: false },
        ]}
        stepRenderer={EmojiIndicator}
      />
    </div>
  );
}

export default App;
