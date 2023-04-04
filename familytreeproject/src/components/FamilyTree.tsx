import React, { useState } from 'react';
import { Person as PersonType } from '../types';
import Person from './Person';

const FamilyTree: React.FC = () => {
  const [family, setFamily] = useState<PersonType[]>([
    {
      name: 'Adam',
      children: [
        {
          name: 'Bob',
          children: [
            { name: 'Charlie' },
            { name: 'David' }
          ]
        },
        {
          name: 'Eve',
          children: [
            { name: 'Frank' },
            { name: 'Grace' }
          ]
        }
      ]
    }
  ]);

  const [newName, setNewName] = useState('');

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(event.target.value);
  };

  const handleButtonClick = () => {
    const newPerson: PersonType = {
      name: newName,
      mother: null, // set to null by default
      father: null, // set to null by default
    };
  
    // find the parents of the new person
    const parent1 = family[0];
    const parent2 = family[0].children && family[0].children[0];
  
    // set the mother and father properties of the new person
    if (parent1 && parent2) {
      newPerson.mother = parent1;
      newPerson.father = parent2;
    }
  
    // add the new person to the family
    setFamily([...family, newPerson]);
    setNewName('');
  };
  

  const renderPerson = (person: PersonType): JSX.Element => {
    return (
      <div key={person.name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Person person={person} />
        {person.children && person.children.map(child => renderPerson(child))}
      </div>
    );
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ marginBottom: '20px' }}>
        <input type="text" value={newName} onChange={handleNameChange} />
        <button onClick={handleButtonClick}>Add Person</button>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {family.map(person => renderPerson(person))}
      </div>
    </div>
  );
};

export default FamilyTree;
