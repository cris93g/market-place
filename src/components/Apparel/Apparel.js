import React, { Component } from "react";
import { getApparel } from "../../redux/ducks/itemReducer";
import { connect } from "react-redux";

class Apparel extends Component {
  //pulls data from redux
  componentDidMount() {
    this.props.getApparel();
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
            <img src={item.img_url} alt="images of different apparel clothes" />
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
  { getApparel }
)(Apparel);
