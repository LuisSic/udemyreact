import React from 'react';
import ReactDom from 'react-dom';
import CommentDetail from './CommentDetail';
import AprovalCard from './AprovalCard';
import faker from 'faker';

const App = () => {
  return (
    <div className="ui container comments">
      <AprovalCard>
        <CommentDetail
          author="Geo"
          timeAgo="Todat at 4:45pm"
          text="Hello there"
          avatar={faker.image.avatar()}
        />
      </AprovalCard>
      <AprovalCard>
        <CommentDetail
          author="Carpio"
          timeAgo="Todat at 3:45pm"
          text="it's a great day"
          avatar={faker.image.avatar()}
        />
      </AprovalCard>
      <AprovalCard>
        <CommentDetail
          author="Ricardo"
          timeAgo="Yesterday at 4:45pm"
          text="it's a nice post"
          avatar={faker.image.avatar()}
        />
      </AprovalCard>
    </div>
  );
};

ReactDom.render(<App />, document.querySelector('#root'));
