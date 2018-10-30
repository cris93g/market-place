import React, { Component } from "react";
import { getLeather } from "../../redux/ducks/itemReducer";
import { connect } from "react-redux";

class Leather extends Component {
  componentDidMount() {
    this.props.getLeather();
  }

  render() {
    const { isLoading, items } = this.props;
    console.log(this.props);
    const itemsDisplay = isLoading ? (
      <p>Loading...</p>
    ) : (
      items.map(item => {
        return (
          <div>
            <img src={item.img_url} />
            <h3>{item.name}</h3>
          </div>
        );
      })
    );
    return <div>{itemsDisplay}</div>;
    console.log(itemsDisplay);
  }
}
const mapStateToProps = state => {
  return {
    items: state.items
  };
};

export default connect(
  mapStateToProps,
  { getLeather }
)(Leather);
