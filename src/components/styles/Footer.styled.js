import styled from "styled-components";

export const StyledFooter = styled.footer`
	background-color: ${({ theme }) => theme.colors.footer};
	color: ${({ theme }) => theme.colors.body};
	padding: 70px 0 40px;

	img {
		margin: 0 0 30px;
	}

	ul {
		list-style-type: none;
		padding-left: 20px;
		margin: 16px 20px;
	}

	ul li {
		margin: 0 15px 20px;
	}

	p {
		text-align: right;
	}

	@media (max-width: ${({ theme }) => theme.mobile}) {
		text-align: center;

		p {
			text-align: center;
		}
	}
`;
