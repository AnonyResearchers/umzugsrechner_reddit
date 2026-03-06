import { FiTrash2, FiChevronUp, FiChevronDown } from 'react-icons/fi';
import type { Location } from '../../types/calculator';
import { PropertyType, Etage, LKWDistance } from '../../types/calculator';
import { Card } from '../shared/Card';
import { Input } from '../shared/Input';
import { Select } from '../shared/Select';
import { Button } from '../shared/Button';

interface LocationCardProps {
  location: Location;
  index: number;
  totalLocations: number;
  onUpdate: (updates: Partial<Location>) => void;
  onRemove: () => void;
  onReorder: (direction: 'up' | 'down') => void;
  canRemove: boolean;
}

const propertyTypeOptions = [
  { value: PropertyType.WOHNUNG, label: 'Wohnung' },
  { value: PropertyType.HAUS, label: 'Haus' },
  { value: PropertyType.LAGER, label: 'Lager' },
  { value: PropertyType.BUERO, label: 'Büro' },
];

const etageOptions = [
  { value: Etage.KELLER, label: 'Keller' },
  { value: Etage.EG, label: 'EG' },
  { value: Etage.OG_1, label: '1. OG' },
  { value: Etage.OG_2, label: '2. OG' },
  { value: Etage.OG_3, label: '3. OG' },
  { value: Etage.OG_4, label: '4. OG' },
  { value: Etage.OG_4_PLUS, label: '> 4. OG' },
];

const lkwDistanceOptions = [
  { value: LKWDistance.ZERO_TO_20, label: '0-20m' },
  { value: LKWDistance.TWENTY_ONE_TO_50, label: '21-50m' },
  { value: LKWDistance.OVER_50, label: '> 50m' },
];

export const LocationCard = ({
  location,
  index,
  totalLocations,
  onUpdate,
  onRemove,
  onReorder,
  canRemove,
}: LocationCardProps) => {
  const showEtageFields = location.propertyType === PropertyType.WOHNUNG;

  return (
    <Card className="mb-4">
      <div className="flex justify-between items-start mb-4">
        <h4 className="text-md font-semibold text-gray-800 dark:text-gray-200">
          Standort {index + 1}
        </h4>
        <div className="flex gap-2">
          {/* Reorder buttons */}
          <button
            onClick={() => onReorder('up')}
            disabled={index === 0}
            className="p-1 text-gray-500 hover:text-gray-700 disabled:opacity-30 disabled:cursor-not-allowed"
            title="Nach oben"
          >
            <FiChevronUp size={20} />
          </button>
          <button
            onClick={() => onReorder('down')}
            disabled={index === totalLocations - 1}
            className="p-1 text-gray-500 hover:text-gray-700 disabled:opacity-30 disabled:cursor-not-allowed"
            title="Nach unten"
          >
            <FiChevronDown size={20} />
          </button>
          {/* Remove button */}
          {canRemove && (
            <button
              onClick={onRemove}
              className="p-1 text-red-500 hover:text-red-700"
              title="Entfernen"
            >
              <FiTrash2 size={20} />
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* PLZ */}
        <Input
          label="Postleitzahl"
          type="text"
          value={location.plz}
          onChange={(e) => onUpdate({ plz: e.target.value })}
          placeholder="12345"
          maxLength={5}
          required
          helpText="5-stellige PLZ"
        />

        {/* Property Type */}
        <Select
          label="Objekttyp"
          value={location.propertyType}
          onChange={(e) => onUpdate({ propertyType: e.target.value as PropertyType })}
          options={propertyTypeOptions}
          required
        />

        {/* Conditional: Etage (only for Wohnung) */}
        {showEtageFields && (
          <>
            <Select
              label="Etage"
              value={location.etage || Etage.EG}
              onChange={(e) => onUpdate({ etage: e.target.value as Etage })}
              options={etageOptions}
              required
            />

            <div className="flex flex-col">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Aufzug vorhanden?
              </label>
              <div className="flex gap-4 mt-2">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name={`aufzug-${location.id}`}
                    checked={location.aufzugAvailable === true}
                    onChange={() => onUpdate({ aufzugAvailable: true })}
                    className="mr-2"
                  />
                  <span className="text-gray-700 dark:text-gray-300">Ja</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name={`aufzug-${location.id}`}
                    checked={location.aufzugAvailable === false}
                    onChange={() => onUpdate({ aufzugAvailable: false })}
                    className="mr-2"
                  />
                  <span className="text-gray-700 dark:text-gray-300">Nein</span>
                </label>
              </div>
            </div>
          </>
        )}

        {/* LKW Distance */}
        <Select
          label="Entfernung LKW ↔ Eingang"
          value={location.lkwDistance}
          onChange={(e) => onUpdate({ lkwDistance: e.target.value as LKWDistance })}
          options={lkwDistanceOptions}
          required
          helpText="Tragstrecke"
        />

        {/* Halteverbotszone */}
        <div className="flex flex-col">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Halteverbotszone benötigt?
          </label>
          <div className="flex gap-4 mt-2">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={location.halteverbotszone}
                onChange={(e) => onUpdate({ halteverbotszone: e.target.checked })}
                className="mr-2"
              />
              <span className="text-gray-700 dark:text-gray-300">Ja, erforderlich</span>
            </label>
          </div>
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
            Wir kümmern uns um die Beantragung
          </p>
        </div>
      </div>
    </Card>
  );
};
