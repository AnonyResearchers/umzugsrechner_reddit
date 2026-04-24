import './index.css';

import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { WizardLayout } from './components/wizard/WizardLayout';
import { useCalculatorStore } from './store/calculatorStore';
import { Step1Beladestellen } from './components/steps/Step1Beladestellen';
import { Step2Entladestellen } from './components/steps/Step2Entladestellen';
import { Step3Rooms } from './components/steps/Step3Rooms';
import { Step4Furniture } from './components/steps/Step4Furniture';
import { Step5Verification } from './components/steps/Step5Verification';
import { Step6Services } from './components/steps/Step6Services';
import { Step7Entsorgung } from './components/steps/Step7Entsorgung';
import { Step8Results } from './components/steps/Step8Results';

const App = () => {
  const { currentStep } = useCalculatorStore();

  // Scroll to top when step changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentStep]);

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1Beladestellen />;
      case 2:
        return <Step2Entladestellen />;
      case 3:
        return <Step3Rooms />;
      case 4:
        return <Step4Furniture />;
      case 5:
        return <Step5Verification />;
      case 6:
        return <Step6Services />;
      case 7:
        return <Step7Entsorgung />;
      case 8:
        return <Step8Results />;
      default:
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Schritt {currentStep}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Dieser Schritt wird bald implementiert...
            </p>
          </div>
        );
    }
  };

  return (
    <WizardLayout>
      {renderStep()}
    </WizardLayout>
  );
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
