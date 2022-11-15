import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useTheme } from 'styled-components';

export function AddTodoModal(props) {
  const [title, setTitle] = useState('');
  const [validated, setValidated] = useState(false);

  const { onAddTodo, ...passThroughtProps } = props;

  const theme = useTheme();

  const submitForm = (event) => {
    setValidated(true);

    if (!event.currentTarget.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      onAddTodo(title);
    }
  };

  return (
    <Modal {...passThroughtProps}>
      <Modal.Header closeButton>
        <Modal.Title>Add new todo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate validated={validated} onSubmit={submitForm}>
          <Form.Group className="mb-4" controlId="label">
            <Form.Label>Title</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Do something good"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="d-flex justify-content-end">
            <Button variant="secondary" onClick={props.onHide}>
              Close
            </Button>
            <Button
              style={theme.buttonStyle}
              variant="primary"
              type="submit"
              className="ms-3"
            >
              Save
            </Button>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

AddTodoModal.propTypes = {
  onHide: PropTypes.func,
  show: PropTypes.bool.isRequired,
  onAddTodo: PropTypes.func,
  theme: PropTypes.object
};
