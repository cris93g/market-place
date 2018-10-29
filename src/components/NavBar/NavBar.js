import React, { Component } from "react";
import styled from "styled-components";

const Nav = styled.section``;

export default class NavBar extends Component {
	render() {
		return (
			<div>
				<img class="images" src={require("../../Pictures/logo_home.png")} />
			</div>
		);
	}
}
