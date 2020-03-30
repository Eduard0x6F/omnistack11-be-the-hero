import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

import { FiArrowLeft } from 'react-icons/fi'
import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function NewIncident() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const history = useHistory();

  const ongId = localStorage.getItem('ongId');

  async function handleNewIncident(e) {
    e.preventDefault();

    const data = {
      title,
      description,
      value
    }

    try {
      await api.post('incidents', data, {
        headers: {
          Authorization: ongId,
        }
      });
      history.push('/profile');

    } catch(err) {
      alert('Erro ao cadastrar caso. Tente novamente');
    }
  }


  return (
    <div className="new-incident-container">
    <div className="content">
      <section>
        <img src={ logoImg } alt="Be The Hero Logo" />

        <h1>Cadastrar novo caso</h1>
        <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

        <Link className="link" to="/profile">
          <FiArrowLeft size={16} color="#e02041" />
          Voltar para home
        </Link>
      </section>

      <form onSubmit={ handleNewIncident }> 
        <input
          value={title}
          onChange={ e=> setTitle(e.target.value) } 
          placeholder="Título do caso"
        />
        <textarea
          value={description}
          onChange={ e=> setDescription(e.target.value) } 
          placeholder="Descrição"
        />

        <input
          value={value}
          onChange={ e=> setValue(e.target.value) } 
          placeholder="Valor em Reais"
        />


        <button className="button" type="submit">Cadastrar</button>          
      </form>
    </div>
  </div>
  )
}
