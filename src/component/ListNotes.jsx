import React from "react";
import { List, Avatar, Button } from "antd";
import { connect } from "react-redux";
import { useGetNotes } from "../hooks/useGetNotes";
import { deleteNote } from "../store/notes/actions";
import { editNote } from "../store/general/actions";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { setModalState } from "../store/general/actions";

function ListNotes({
  allNotesState,
  handleClickDelete,
  handleClickShowModal,
  handleEditNote,
}) {
  useGetNotes();

  const deleteNote = (id) => {
    handleClickDelete(id);
    return fetch(`http://localhost:5000/api/notes/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const editNote = (id, note) => {
    handleClickShowModal();
    handleEditNote(id);
    // return fetch(`http://localhost:5000/api/notes/${id}`, {
    //    method: "PUT",
    //    headers: {
    //        "Content-Type": "application/json",
    //    },
    //    body: JSON.stringify(note),
    // });
  };

  const { allNotes } = allNotesState;

  return (
    <List itemLayout="horizontal">
      {allNotes.map((note, index) => {
        return (
          <List.Item key={index}>
            <List.Item.Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title={note.title}
              description={note.body}
            />
            <Button onClick={() => editNote(note.id)}>
              <EditOutlined />
            </Button>

            <Button danger onClick={() => deleteNote(note.id)}>
              <DeleteOutlined />
            </Button>
          </List.Item>
        );
      })}
    </List>
  );
}

const mapStateToProps = (state) => ({
  allNotesState: state.notes,
});

const mapDispatchToProps = {
  handleClickDelete: deleteNote,
  handleClickShowModal: setModalState,
  handleEditNote: editNote,
};

const enhance = connect(mapStateToProps, mapDispatchToProps);

export default enhance(ListNotes);
