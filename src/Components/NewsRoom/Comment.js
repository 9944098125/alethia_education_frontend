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
            style={{ cursor: viewFullInput ? "text" : "pointer" }}
            placeholder="Write a comment..."
            className="ps-3"
          />
          {viewFullInput && (
            <>
              <ThinLine />
              <IconsAndButtonsContainer>
                <IconsContainer className="mb-2">
                  <BsEmojiSmile className="me-2" />
                  <BsCameraFill className="me-2" />
                  <AiOutlineGif className="me-2" />
                  <BsFillCameraVideoFill className="me-2" />
                </IconsContainer>
                <IconsContainer>
                  <CommentButton color="lightblue" bg="transparent">
                    cancel
                  </CommentButton>
                  <CommentButton
                    border
                    color="#ffffff"
                    bg={comment.length > 0 ? "lightblue" : "lightgrey"}
                  >
                    Publish
                  </CommentButton>
                </IconsContainer>
              </IconsAndButtonsContainer>
            </>
          )}
        </BorderedInput>
      </InputContainer>
    </Fragment>
  );
}

export default Comment;
