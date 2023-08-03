import React from 'react';
import s from './modal.module.css'

function Modal(props) {
  return (

    <div className={s.overlay}>
      <div className={s.modal}>
        <svg height="200" viewBox="0 0 200 200" width="200"
          onClick={() => props.setShowModal(false)}
        >

          <title />
          <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
        </svg>

        <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3BkYTU2emw4NHQ1ZGpkYjc2aGlzcGlzc3NwYWg0aWlpYjI0OHViYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fxsqOYnIMEefC/giphy.gif" alt='gif' />
      </div>
    </div>

  );
}

export default Modal;