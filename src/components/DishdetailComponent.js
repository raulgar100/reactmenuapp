import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';


class Dishdetail extends Component{
  constructor(props){
    super(props);
  }





  render() {
    return(
      <div className="row" >

       <div className="col-12 col-md-5 m-1">
         <Card key={this.props.dish.id}>
         <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
         <CardImgOverlay>
         </CardImgOverlay>
         <CardTitle>{this.props.dish.name}</CardTitle>
         <CardText>{this.props.dish.description}</CardText>

         </Card>
       </div>

        <div className="col-12 col-md-5 m-1">
          <h4> Comments </h4>
          {this.props.comments}


        </div>

      </div>
    );
  }

}
export default Dishdetail;
