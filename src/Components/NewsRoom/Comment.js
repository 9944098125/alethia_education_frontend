import React, { Fragment, useState } from "react";
import {
  Avatar,
  BorderedInput,
  CommentButton,
  IconsAndButtonsContainer,
  IconsContainer,
  InputContainer,
  InputField,
  ThinLine,
} from "./styledComponents";
import {
  BsEmojiSmile,
  BsCameraFill,
  BsFillCameraVideoFill,
} from "react-icons/bs";
import { AiOutlineGif, AiOutlineDown } from "react-icons/ai";
import { MdOutlineGroup, MdOutlinePerson } from "react-icons/md";

function Comment() {
  const [comment, setComment] = useState("");
  const [viewFullInput, setViewFullInput] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const onClickDiv = () => {
    setViewFullInput(true);
  };
  const onChangeComment = (e) => {
    setComment(e.target.value);
  };

  const onClickPublishButton = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <Fragment>
      <InputContainer onClick={onClickDiv}>
        <Avatar></Avatar>
        <BorderedInput>
          <InputField
            id="comment"
            value={comment}
            onChange={onChangeComment}
            style={{ cursor: viewFullInput ? "text" : "pointer" }}
            placeholder="Write a comment..."
            className="ps-3"
          />
          {viewFullInput && (
            <>
              <IconsAndButtonsContainer>
                <IconsContainer className="mb-2">
                  <BsEmojiSmile className="me-4" />
                  <BsCameraFill className="me-4" />
                  <AiOutlineGif className="me-4" />
                  <BsFillCameraVideoFill className="me-4" />
                </IconsContainer>
                <IconsContainer>
                  <CommentButton color="lightblue" bg="transparent">
                    cancel
                  </CommentButton>
                  <CommentButton
                    onClick={onClickPublishButton}
                    color="#ffffff"
                    bg={comment.length > 0 ? "#9bddff" : "lightgrey"}
                  >
                    Publish <AiOutlineDown />
                  </CommentButton>
                </IconsContainer>
              </IconsAndButtonsContainer>
            </>
          )}
        </BorderedInput>
      </InputContainer>
      {comment.length > 0 && showDropdown && (
        <div style={{ marginLeft: "450px" }} className="showDropdown p-4">
          <div className="d-flex align-items-center mb-2">
            <MdOutlineGroup className="me-3" />
            Publish as a Member
          </div>
          <ThinLine />
          <div className="d-flex align-items-center mt-4">
            <MdOutlinePerson me-3 />
            Publish as a Guest
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default Comment;
