import React, { Fragment, useState } from "react";
import {
  Avatar,
  BorderedInput,
  CommentButton,
  IconsAndButtonsContainer,
  IconsContainer,
  InputContainer,
  InputField,
} from "./styledComponents";
import {
  BsEmojiSmile,
  BsCameraFill,
  BsFillCameraVideoFill,
} from "react-icons/bs";
import { AiOutlineGif } from "react-icons/ai";

function Comment() {
  const [comment, setComment] = useState("");
  const [viewFullInput, setViewFullInput] = useState(false);

  const onClickDiv = () => {
    setViewFullInput(true);
  };
  const onChangeComment = (e) => {
    setComment(e.target.value);
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
            placeholder="Write a comment"
          />
          {viewFullInput && (
            <IconsAndButtonsContainer>
              <IconsContainer className="mb-2">
                <BsEmojiSmile className="me-2" />
                <BsCameraFill className="me-2" />
                <AiOutlineGif className="me-2" />
                <BsFillCameraVideoFill className="me-2" />
              </IconsContainer>
              <IconsContainer>
                <CommentButton border="none" bg="none">
                  cancel
                </CommentButton>
                <CommentButton border="none" bg="lightblue">
                  Comment
                </CommentButton>
              </IconsContainer>
            </IconsAndButtonsContainer>
          )}
        </BorderedInput>
      </InputContainer>
    </Fragment>
  );
}

export default Comment;
