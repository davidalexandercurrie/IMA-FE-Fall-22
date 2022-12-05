import React from 'react';

export default function card({ title, description, url }) {
  return (
    <>
      <div className="card">
        <h1>{title}</h1>
        <p>{description}</p>
        <img src={url} alt="" />
      </div>
    </>
  );
}
