import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetails from './CommentDetails';
import ApprovalCard from './ApprovalCard';
const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetails 
                    author = "Alex" 
                    timePosted = "Today at 4:45PM" 
                    textByA ="Great content" 
                    avatar = {faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetails 
                    author = "Tom" 
                    timePosted = "Today at 10:45AM" 
                    textByA ="Nice work!" 
                    avatar = {faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetails 
                    author = "Brad" 
                    timePosted = "Yesterday at 1:45PM" 
                    textByA ="Awesome tips for coding" 
                    avatar = {faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
};



ReactDOM.render(<App />, document.querySelector('#root'));