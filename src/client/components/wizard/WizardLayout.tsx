import type { ReactNode } from 'react';
import { ProgressBar } from './ProgressBar';
import { StepNavigation } from './StepNavigation';
import { useCalculatorStore } from '../../store/calculatorStore';

interface WizardLayoutProps {
  children: ReactNode;
}

export const WizardLayout = ({ children }: WizardLayoutProps) => {
  const { currentStep, totalSteps, nextStep, prevStep, validateStep } = useCalculatorStore();

  const handleNext = () => {
    const isValid = validateStep(currentStep);
    if (isValid) {
      nextStep();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-6 relative">
          <div className="absolute top-0 right-0 text-xs text-gray-400 dark:text-gray-500 font-mono">
            v0.0.8
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Umzugsrechner
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Berechnen Sie die Kosten für Ihren Umzug
          </p>
        </div>

        {/* Progress Bar */}
        <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />

        {/* Content */}
        <div className="mb-24">
          {children}
        </div>

        {/* Navigation */}
        <StepNavigation
          currentStep={currentStep}
          totalSteps={totalSteps}
          onBack={prevStep}
          onNext={handleNext}
          canGoNext={validateStep(currentStep)}
          isLastStep={currentStep === totalSteps}
        />
      </div>
    </div>
  );
};
