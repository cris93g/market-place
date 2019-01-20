import React, { Component } from "react";
import styled from "styled-components";
import "./NavBar.css";
import { Link } from "react-router-dom";
const Nav = styled.section`
	width: 100%;
	height: 15vh;
	background-color: white;
	display: flex;
	justify-content: space-around;
	margin-top: 2%;
`;
const RightSide = styled.section`
	display: flex;
`;
export default class NavBar extends Component {
	render() {
		return (
			<div>
				<Nav>
					<img
						class="logo"
						src={require("../../Pictures/logo_home.png")}
						alt=" logo"
					/>
					<div>
						<RightSide>
							<Link to="Leather">
								<div class="navi">LEATHER</div>
							</Link>
							<Link to="Apparel">
								<div class="navi">APPAREL</div>
							</Link>
							<Link to="Accessories">
								<div class="navi">ACCESSORIES</div>
							</Link>
							<Link to="Cart">
								<div class="navi">CART</div>
							</Link>
							<Link to="Cards">
								<div class="cards">CARDS</div>
							</Link>
						</RightSide>
					</div>
				</Nav>
			</div>
		);
	}
}
