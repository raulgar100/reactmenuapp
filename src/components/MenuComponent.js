import React, {Component} from 'react';
import {Media} from 'reactstrap';
import Dishdetail from './DishdetailComponent.js';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';


class Menu extends Component {
  constructor(props){
   super(props);
   this.renderComments = this.renderComments.bind(this);

   this.state = {
     selectedDish: null,
     userComments: null

   }
 }


onDishSelect(dish){
  this.setState({
    selectedDish: dish,
    userComments: this.renderComments(dish)

  });
  // maybe try putting "renderCommments" here

  if(dish != null){
  for(var i = 0; i < 5; i++){
    console.log("Selected Dish: " + dish.comments[i].comment);

   }
  }
}

renderDish(dish){
  if (dish != null){
    return(
    <Card>
      <CardImg width="100%" src={dish.image} alt={dish.name} />
      <CardBody>
       <CardTitle>{dish.name}</CardTitle>
       <CardText>{dish.description}</CardText>
       </CardBody>
    </Card>
    );
  }
  else{
    return(
      <div></div>
    )
  }
}

renderComments(dish){
  if (dish != null){
     return(

       <ul className="list-unstyled">

        <li>{dish.comments[0].comment}</li>
        <li> --{dish.comments[0].author}</li> <li>{dish.comments[0].date}</li>
        <li> {dish.comments[1].comment}</li>
        <li> --{dish.comments[1].author}</li> <li>{dish.comments[1].date}</li>
        <li>{dish.comments[2].comment}</li>
        <li> --{dish.comments[2].author}</li> <li>{dish.comments[2].date}</li>
        <li>{dish.comments[3].comment}</li>
        <li> --{dish.comments[3].author}</li> <li>{dish.comments[3].date}</li>
        <li>{dish.comments[4].comment}</li>
        <li> --{dish.comments[4].author}</li> <li>{dish.comments[4].date}</li>

       </ul>


     );

  }
  else {
    return(
      <div></div>

    )
   }
}




 render() {

   const menu = this.props.dishes.map((dish) => {
     return (
       <div key={dish.id} className="col-12 col-md-5 m-1">
       <Card onClick={() => this.onDishSelect(dish)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
        </Card>
       </div>
     );
   });




   return(
     <div className="container">
          <div className="row">
              {menu}

          </div>
           <div>
           {(this.state.selectedDish) == null ? ('') : ( <Dishdetail  dish={this.state.selectedDish} comments={this.state.userComments} />)}
          </div>
      </div>
   );
 }

}

export default Menu;
