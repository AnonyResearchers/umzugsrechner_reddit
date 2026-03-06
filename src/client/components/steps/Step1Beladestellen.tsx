import { FiPlus } from 'react-icons/fi';
import { useCalculatorStore } from '../../store/calculatorStore';
import { LocationCard } from '../location/LocationCard';
import { Button } from '../shared/Button';

export const Step1Beladestellen = () => {
  const {
    data,
    addBeladestelle,
    removeBeladestelle,
    updateBeladestelle,
    reorderBeladestelle,
  } = useCalculatorStore();

  const { beladestellen } = data;

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Beladestellen
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Wo soll das Umzugsgut abgeholt werden?
        </p>
      </div>

      {/* Location Cards */}
      <div className="space-y-4 mb-6">
        {beladestellen.map((location, index) => (
          <LocationCard
            key={location.id}
            location={location}
            index={index}
            totalLocations={beladestellen.length}
            onUpdate={(updates) => updateBeladestelle(location.id, updates)}
            onRemove={() => removeBeladestelle(location.id)}
            onReorder={(direction) => reorderBeladestelle(location.id, direction)}
            canRemove={beladestellen.length > 1}
          />
        ))}
      </div>

      {/* Add Location Button */}
      <Button
        variant="outline"
        onClick={addBeladestelle}
        className="flex items-center gap-2"
      >
        <FiPlus size={20} />
        Weitere Beladestelle hinzufügen
      </Button>

      {/* Info Box */}
      <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
        <p className="text-sm text-blue-800 dark:text-blue-200">
          <strong>Tipp:</strong> Fügen Sie alle Orte hinzu, an denen Umzugsgut abgeholt werden soll.
          Die Reihenfolge können Sie mit den Pfeiltasten anpassen.
        </p>
      </div>
    </div>
  );
};
