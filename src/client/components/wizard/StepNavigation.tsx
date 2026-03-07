import { Button } from '../shared/Button';

interface StepNavigationProps {
  currentStep: number;
  totalSteps: number;
  onBack: () => void;
  onNext: () => void;
  canGoNext?: boolean;
  isLastStep?: boolean;
}

export const StepNavigation = ({
  currentStep,
  totalSteps: _totalSteps,
  onBack,
  onNext,
  canGoNext = true,
  isLastStep = false,
}: StepNavigationProps) => {
  return (
    <div className="sticky bottom-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 p-4 mt-6">
      <div className="flex justify-between items-center max-w-4xl mx-auto">
        <Button
          variant="outline"
          onClick={onBack}
          disabled={currentStep === 1}
        >
          ← Zurück
        </Button>

        <Button
          variant="primary"
          onClick={onNext}
          disabled={!canGoNext}
        >
          {isLastStep ? 'Abschließen' : 'Weiter'} →
        </Button>
      </div>
    </div>
  );
};
