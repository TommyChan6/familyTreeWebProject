import React, { useState } from 'react';

interface Person {
  name: string;
  children?: Person[];
}

const FamilyTree: React.FC = () => {
  const [family, setFamily] = useState<Person[]>([    { name: 'Adam', children: [      { name: 'Bob', children: [        { name: 'Charlie' },        { name: 'David' }      ]},
      { name: 'Eve', children: [
        { name: 'Frank' },
        { name: 'Grace' }
      ]}
    ]}
  ]);

  const [newName, setNewName] = useState('');

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(event.target.value);
  };

  const handleButtonClick = () => {
    const newPerson: Person = { name: newName };
    setFamily([...family, newPerson]);
    setNewName('');
  };

  const renderPerson = (person: Person): JSX.Element => {
    return (
      <div key={person.name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ width: '100%', textAlign: 'center', marginBottom: '10px' }}>{person.name}</div>
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