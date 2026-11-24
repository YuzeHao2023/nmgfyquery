import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Banner } from './components/Banner';
import { ExpertSearchSection } from './components/ExpertSearchSection';
import { ExpertProfilePage } from './components/ExpertProfilePage';
import { Footer } from './components/Footer';
import {
  ExpertProfile,
  findExpertByCertificateOrId,
  searchExperts,
} from './data/experts';

function getInitialExpertFromUrl(): ExpertProfile | null {
  if (typeof window === 'undefined') return null;
  const params = new URLSearchParams(window.location.search);
  const expertParam = params.get('expert');
  if (!expertParam) return null;
  return findExpertByCertificateOrId(expertParam) ?? null;
}

export default function App() {
  const [nameInput, setNameInput] = useState('');
  const [certInput, setCertInput] = useState('');
  const [hasSearched, setHasSearched] = useState(false);
  const [validationMessage, setValidationMessage] = useState<string | null>(null);
  const [results, setResults] = useState<ExpertProfile[]>([]);
  const [selectedExpert, setSelectedExpert] = useState<ExpertProfile | null>(() =>
    getInitialExpertFromUrl()
  );

  useEffect(() => {
    if (selectedExpert) {
      document.title = `${selectedExpert.name} - 访问专家库 | 内蒙古医科大学附属医院 (nmgfy.com)`;
    } else {
      document.title = '内蒙古医科大学附属医院 | 访问专家库 - nmgfy.com';
    }
  }, [selectedExpert]);

  useEffect(() => {
    const handlePopState = () => {
      const expertFromUrl = getInitialExpertFromUrl();
      setSelectedExpert(expertFromUrl);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleSearch = () => {
    const trimmedName = nameInput.trim();
    const trimmedCert = certInput.trim();

    if (!trimmedName && !trimmedCert) {
      setValidationMessage('请至少输入“专家姓名”或“访问专家证书编号”后再进行检索。');
      setHasSearched(false);
      setResults([]);
      return;
    }

    setValidationMessage(null);
    const matched = searchExperts({
      name: trimmedName,
      certificateNo: trimmedCert,
    });
    setResults(matched);
    setHasSearched(true);
  };

  const handleReset = () => {
    setNameInput('');
    setCertInput('');
    setValidationMessage(null);
    setHasSearched(false);
    setResults([]);
  };

  const handleSelectExpert = (expert: ExpertProfile) => {
    setSelectedExpert(expert);
    const url = new URL(window.location.href);
    url.searchParams.set('expert', expert.certificateNo);
    window.history.pushState({ expertId: expert.id }, '', url.toString());
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToSearch = () => {
    setSelectedExpert(null);
    const url = new URL(window.location.href);
    url.searchParams.delete('expert');
    window.history.pushState({}, '', url.toString());
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoHome = () => {
    setSelectedExpert(null);
    handleReset();
    const url = new URL(window.location.href);
    url.searchParams.delete('expert');
    window.history.pushState({}, '', url.toString());
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="top" className="min-h-screen flex flex-col bg-white text-slate-800">
      <Header onGoHome={handleGoHome} />
      <Banner
        expertName={selectedExpert?.name}
        onGoToSearch={handleBackToSearch}
      />

      {selectedExpert ? (
        <ExpertProfilePage
          expert={selectedExpert}
          onBackToSearch={handleBackToSearch}
        />
      ) : (
        <ExpertSearchSection
          nameInput={nameInput}
          certInput={certInput}
          onNameChange={(val) => {
            setNameInput(val);
            if (validationMessage) setValidationMessage(null);
          }}
          onCertChange={(val) => {
            setCertInput(val);
            if (validationMessage) setValidationMessage(null);
          }}
          onSearch={handleSearch}
          onReset={handleReset}
          hasSearched={hasSearched}
          validationMessage={validationMessage}
          results={results}
          onSelectExpert={handleSelectExpert}
        />
      )}

      <Footer />
    </div>
  );
}
