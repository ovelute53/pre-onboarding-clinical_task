import { SearchBox } from './pages/SearchBox';
import { SearchProvider } from '@/contexts/SearchProviders';

function App() {
  return (
    <SearchProvider>
      <SearchBox />
    </SearchProvider>
  );
}

export default App;
