import React from "react";
import { Modal, Input, Form, Button } from "antd";
import { connect } from "react-redux";
import { setModalState } from "../store/general/actions";
import { setNote } from "../store/notes/actions";

function CustomModel({
  currentNote,
  ModalState,
  handleClick,
  setNoteAfterClose,
}) {
  const { IsVisibleModel } = ModalState;
  const { noteEditId } = currentNote;
  const callbackFunc = (id) => {
    if (id > 0) {
      return ({ note }) => {
        note.id = id;
        handleClick(IsVisibleModel);
        fetch(`http://localhost:5000/api/notes/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(note),
        });
      };
    }
    return ({ note }) => {
      handleClick(IsVisibleModel);
      fetch("http://localhost:5000/api/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(note),
      }).then((data) => data.json());
    };
  };
  //const sendNote = ({ note }) => {
  //   handleClick(IsVisibleModel);
  //
  //   if (noteId > 0) {
  //     return fetch(`http://localhost:5000/api/notes/${noteId}`, {
  //       method: "PUT",
  //       headers: {
  //         "Content-Type": "application/json",
  //      },
  //      body: JSON.stringify(note),
  //    });
  //  }

  //  return fetch("http://localhost:5000/api/notes", {
  //     method: "POST",
  //    headers: {
  //      "Content-Type": "application/json",
  //    },
  //    body: JSON.stringify(note),
  //  }).then((data) => data.json());
  // };

  const getNote = () => {
    return fetch("http://localhost:5000/api/notes")
      .then((data) => data.json())
      .then((dataToSave) => {
        setNoteAfterClose(dataToSave);
      });
  };
  return (
    <Modal
      title="Note editor"
      visible={IsVisibleModel}
      destroyOnClose={true}
      footer={null}
      onCancel={() => handleClick(IsVisibleModel)}
      afterClose={getNote}
    >
      <Form onFinish={callbackFunc(noteEditId)}>
        <Form.Item name={["note", "title"]}>
          <Input placeholder="Title" />
        </Form.Item>
        <Form.Item name={["note", "body"]}>
          <Input.TextArea placeholder="Notes..." />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}
const mapDispatchToProps = {
  handleClick: setModalState,
  setNoteAfterClose: setNote,
};

const mapStateToProps = (state) => ({
  ModalState: state.general,
  currentNote: state.general,
});

const enhance = connect(mapStateToProps, mapDispatchToProps);

export default enhance(CustomModel);
