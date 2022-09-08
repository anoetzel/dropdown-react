import React, { useState } from 'react';
import { Select } from './Select';

export const Page = () => {
  const [selected, setSelected] = useState<string>('Value 1');

  return (
    <Select selected={selected} setSelected={setSelected}  />
  )
}
