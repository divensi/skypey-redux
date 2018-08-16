import React from 'react';

import './Empty.css';

const Empty = ({ user }) => {
  const { name, profile_pic, status } = user;
  const first_name = name.split(" ")[0];

  return (
    <div className="Empty">
      <h1 className="Empty__name">Bem Vindo, {first_name}</h1>
      <img src={profile_pic} alt={name} className="Empty__img" />
      <p className="">
        <b>Status:</b> {status}
      </p>
      <button className="Empty__btn">Iniciar uma conversa</button>
      <p className="Empty__info">
        Clique em uma pessoa para iniciar o chat com ela
      </p>
    </div>
  )
}

export default Empty;