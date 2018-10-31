import React, { Component } from "react";
import { getAccerory } from "../../redux/ducks/itemReducer";
import { connect } from "react-redux";

class Accessories extends Component {
  //pulls data from redux
  componentDidMount() {
    this.props.getAccerory();
  }

  render() {
    //puts data we got from redux into this.props
    const { isLoading, items } = this.props;
    console.log(this.props);
    const itemsDisplay = isLoading ? (
      <p>Loading...</p>
    ) : (
      //goes through data one by one
      items.map(item => {
        return (
          <div>
            <img
              src={item.img_url}
              alt="images of different available acessories"
            />
            <h3>{item.name}</h3>
          </div>
        );
      })
    );
    return <div>{itemsDisplay}</div>;
  }
}
const mapStateToProps = state => {
  return {
    items: state.items
  };
};

export default connect(
  mapStateToProps,
  { getAccerory }
)(Accessories);
