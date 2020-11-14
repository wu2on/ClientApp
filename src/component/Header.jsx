import React from "react";
import { PageHeader, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { setModalState } from "../store/general/actions";
import { editNote } from "../store/general/actions";
import CustomModel from "./CustomModal";

function Header({ editNote, ModalState, showModel }) {
  const { IsVisibleModel } = ModalState;
  const handleClick = (bool) => {
    showModel(bool);
    editNote(0);
  };
  return (
    <div className="site-page-header-ghost-wrapper">
      <PageHeader
        avatar={{
          src:
            "https://media-exp1.licdn.com/dms/image/C4D0BAQGO89M6KZUneQ/company-logo_200_200/0?e=2159024400&v=beta&t=gHYAwv4G95HwfQOFD81E82Ol0kzjzJ1GPbz-lTv5DV8",
        }}
        className="site-page-header"
        title="AIONYS"
        subTitle="This is a test task"
        extra={[
          <Button
            type="dashed"
            size="large"
            onClick={() => handleClick(IsVisibleModel)}
          >
            <PlusOutlined />
          </Button>,
          <CustomModel></CustomModel>,
        ]}
      />
    </div>
  );
}
const mapDispatchToProps = {
  showModel: setModalState,
  editNote: editNote,
};

const mapStateToProps = (state) => ({
  ModalState: state.general,
});

const enhance = connect(mapStateToProps, mapDispatchToProps);

export default enhance(Header);
