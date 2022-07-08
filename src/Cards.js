import React from "react"; 
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import './App.css';

const Cards = ()  =>  {
    return (
        <div className="ui container comments">
          <ApprovalCard>
            <div>
              <h4>Warning!</h4>
              Are you sure you want to do this?
            </div>
          </ApprovalCard>
    
          <ApprovalCard>
            <CommentDetail
              author="Sam"
              timeAgo="Today at 4:45PM"
              content="Nice blog post"
              avatar={faker.image.image()}
            />
          </ApprovalCard>
    
          <ApprovalCard>
            <CommentDetail
              author="Alex"
              timeAgo="Today at 2:00AM"
              content="I like the subject"
              avatar={faker.image.image()}
            />
          </ApprovalCard>
    
          <ApprovalCard>
            <CommentDetail
              author="Jane"
              timeAgo="Yesterday at 5:00PM"
              content="I like the writing"
              avatar={faker.image.image()}
            />
          </ApprovalCard>
        </div>
    );
};