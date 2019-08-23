import React from 'react';
import Animal from '../Components/Animal';
import Form from '../Components/Form';
import {connect} from 'react-redux';

class SquirrelsContainer extends React.Component {
 render() {
  console.log('squirrel props', this.props);
  let squirrelsArray = this.props.squirrels.map(squirrel => (
   <Animal
    key={squirrel.id}
    animal={squirrel}
    route={`/squirrels/${squirrel.id}`}
    likeClickHandler={this.props.addSquirrelLike}
   />
  ));

  return (
   <div className="container">
    <h1>Squirrels Container</h1>
    <h3>Squirrels Score: {this.props.squirrelLikes}</h3>
    <Form />
    {squirrelsArray}
   </div>
  );
 }
}

function mapStateToProps(state) {
    return {
     squirrelLikes: state.squirrelLikes
    };
   }
   
   function mapDispatchToProps(dispatch) {
    return {
     addSquirrelLike: () => dispatch({type: 'LIKE_SQUIRREL'})
    };
   }
   

export default connect(mapStateToProps, mapDispatchToProps)(SquirrelsContainer);
