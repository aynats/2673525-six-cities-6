import React, { useCallback, useEffect, useRef, useState } from 'react';
import cn from 'classnames';

import { SortingOption } from '../../const';


type SortingSelectorProps = {
  currentSorting: SortingOption;
  onSortingChange: (option: SortingOption) => void;
};

function SortingSelector({ currentSorting, onSortingChange }: SortingSelectorProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef<HTMLFormElement | null>(null);

  const handleSelect = useCallback((key: SortingOption) => {
    onSortingChange(key);
    setIsOpen(false);
  }, [onSortingChange]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <form
      className="places__sorting"
      action="#"
      method="get"
      ref={menuRef}
    >
      <span className="places__sorting-caption">Sort by</span>
      {' '}
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {currentSorting}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>

      <ul className={cn(
        'places__options places__options--custom',
        { 'places__options--opened': isOpen }
      )}
      >
        {Object.values(SortingOption).map((option) => (
          <li
            key={option}
            className={cn(
              'places__option',
              { 'places__option--active': option === currentSorting }
            )}
            tabIndex={0}
            onClick={() => handleSelect(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    </form>
  );
}

const MemoizedSortingSelector = React.memo(SortingSelector);
MemoizedSortingSelector.displayName = 'SortingSelector';

export default MemoizedSortingSelector;
