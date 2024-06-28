import React from 'react';
import {Button, Form} from 'react-bootstrap';


const FormContacto = () => {
    return (
        <Form className='border-white px-2 px-sm-5 pt-md-4 pb-3 formContact rounded-2'>
      <Form.Group className="mb-3">
        <Form.Label htmlFor='name'>Nombre y Apellido:</Form.Label>
        <Form.Control id='name' className='section input border-white ' type="text" placeholder="Ingresa tu nombre completo" required/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label htmlFor='email'>Email:</Form.Label>
        <Form.Control id='email' className='section input border-white ' type="email" placeholder="Ingresa tu correo" required/>
      </Form.Group>
      <Form.Group className="mb-3">
      <Form.Label htmlFor='message'>Mensaje:</Form.Label>
      <Form.Control as="textarea" className='section input border-white  textarea' id='message' type="text" placeholder="Ingresa tu mensaje" required/>
      </Form.Group>
      <div className="d-flex justify-content-sm-end">
      <button type="submit" className='btn btnSocial text-white border-white'>
        Enviar
      </button>
        </div>
   
    </Form>
    );
};

export default FormContacto;