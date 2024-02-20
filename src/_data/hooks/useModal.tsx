import { useState } from 'react';

export const useModal = (): [boolean, () => void] => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleModal = () => setIsOpen(!isOpen);

  return [isOpen, handleToggleModal];
};
