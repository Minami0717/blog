import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function MainContent(proops) {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div style={{
            width: '100vw',
            height: '100vw',
            padding: '1.5rem',
            backgroundColor: theme == 'light' ? 'white' : 'black',
            color: theme == 'light' ? 'black' : 'white'
        }}>
            <p>こんにちは。テーマ変更ができるサイトです。</p>
            <button onClick={toggleTheme}>テーマ変更</button>
        </div>
    )
}

export default MainContent;