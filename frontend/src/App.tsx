import CaseForm from './CaseForm';
import LanguageSwitcher from './LanguageSwitcher';

function App() {
  return (
    <div style={{ padding: 20 }}>
      <LanguageSwitcher />
      <h1>Create Case</h1>
      <CaseForm />
    </div>
  );
}

export default App;
