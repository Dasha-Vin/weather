import React from 'react'

const form = (props) => {
    return (
      <form onSubmit={props.weatherMethod}>
        <input type='text' name='city' placeholder='Город' />
        <button>Получить погоду</button>
      </form>
    );
}

export default form