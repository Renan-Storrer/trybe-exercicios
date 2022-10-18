import React, { useContext } from 'react';
import FormContext from '../context/FormContext';

function StudentsInfo() {
  const { data } = useContext(FormContext);
  return (
    <ul>
      { data.map((student, index) => (
        <li key={ index }>
          <p>
            { `Nome: ${student.name}` }
          </p>
          <p>
            { `Idade: ${student.age}` }
          </p>
          <p>
            { `Cidade/UF: ${student.location}` }
          </p>
          <p>
            { `Módulo: ${student.module}` }
          </p>
        </li>
      ))}
    </ul>
  );
}

export default StudentsInfo;
