import styled from "styled-components";
import { FaRegMoon as MoonIcon, FaSun as SunIcon } from "react-icons/fa";

export default function ThemeButton({ blueTheme, setBlueTheme }) {
	return (
		<ThemeButtonContainer>
			{blueTheme ? <SunIcon onClick={() => setBlueTheme(false)} /> : <MoonIcon onClick={() => setBlueTheme(true)} />}
		</ThemeButtonContainer>
	);
}

const ThemeButtonContainer = styled.div`
	position: fixed;
	bottom: 10px;
	right: 30px;
	background: transparent;
	font-size: 42px;
`;
