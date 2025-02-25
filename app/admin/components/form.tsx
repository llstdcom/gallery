'use client'

import React, { useState } from 'react';
import { Row, Col, Form, Alert } from 'react-bootstrap';



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { AdminSetData, AdminSetDataJson } from '../functions/set.data';
import { AdminIcon } from './components';
import { AdminFormControl } from './formcontrol';
import { AdminType } from '../types';



type Props = {
  admin: AdminType;
  type?: "JSON" | "FORMDATA";
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  endpoint: string;
  children: React.ReactNode;
  onSuccess?: () => void;
};

export const AdminForm: React.FC<Props> = ({ admin, type, method, endpoint, children, onSuccess }) => {

  const [validated, setValidated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setShowAlert(false);

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      const formData = new FormData(form);

      if (admin.modul == "designer" && admin.action == "edit") { type = "JSON"; }
      if (admin.modul == "designer" && admin.action == "list") { type = "JSON"; }

      let data;
      if (type == "JSON") {
        data = await AdminSetDataJson(admin, formData, method, endpoint);
      } else {
        data = await AdminSetData(admin, formData, method, endpoint);
      }

      if (data && data.error) {
        setAlertMessage(data.error);
        setShowAlert(true);
      } else {
        if (onSuccess) { onSuccess(); }
      }

    }
    setValidated(true);
  };

  return (
    <>
      <Form id="form" noValidate validated={validated} onSubmit={handleSubmit}>
        {children}
      </Form>
      {showAlert && (
        <div className='text-center'>
          <Alert variant="danger" className='mt-5 d-inline-block'>
            <FontAwesomeIcon icon={faExclamationTriangle} size="2x" className='me-2' />
            {alertMessage}
          </Alert>
        </div>
      )}
    </>
  );
};



type AdminFormInputProps = {
  type: string;
  icon: string;
  label: string;
  name: string;
  value: any;
  option?: { id: string; name: string }[];
  required?: boolean;
};

export const AdminFormInput: React.FC<AdminFormInputProps> = ({ type, icon, label, name, value, option, required }) => {
  return (
    <Form.Group as={Row} className="mb-3">
      <Form.Label column sm={4} >
        <AdminIcon name={icon} size={24} className='me-2' />
        {label}
      </Form.Label>
      <Col sm={8}>
        <AdminFormControl type={type} name={name} value={value} option={option || []} {...(required ? { required: true } : {})} />
      </Col>
    </Form.Group>
  );
};
