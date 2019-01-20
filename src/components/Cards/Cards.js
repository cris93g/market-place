import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
	width: 100%;
	margin: auto;
	display: flex;
	height: 100%;
	align-items: center;
	padding: 10px;
`;
const CardContainer = styled.section`
	display: inline-block;
	margin: 0 auto;
	padding: 10px;

	text-align: center;
`;
const Card = styled.section`
	position: relative;
	width: 200px;
	height: 200px;
	background-color: black;
`;

export default class Cards extends Component {
	render() {
		return (
			<div>
				<Wrapper>
					<CardContainer>
						<Card />
						<Card />
					</CardContainer>
				</Wrapper>
			</div>
		);
	}
}
