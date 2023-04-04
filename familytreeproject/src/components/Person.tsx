import React from 'react';
import { Person as PersonType } from '../types';

interface PersonProps {
  person: PersonType;
}

const Person: React.FC<PersonProps> = ({ person }) => {
  return (
    <div key={person.name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ width: '100%', textAlign: 'center', margin: '10px' }}>{person.name}</div>
    </div>
  );
};

export default Person;
