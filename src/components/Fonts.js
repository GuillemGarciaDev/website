import { Global } from '@emotion/react'

const Fonts = () => {
    return (
        <Global
            styles={`
            
            @font-face {
                font-family: 'Bogart';
                font-weight: 900;
                src: url(/public/fonts/Bogart/Bogart-Black-trial.ttf) format("truetype");
            }
            
            @font-face {
                font-family: 'Bogart';
                font-weight: 800;
                src: url(/fonts/Bogart/Bogart-Extrabold-trial.ttf) format("truetype");
            }
            
            @font-face {
                font-family: 'Bogart';
                font-weight: 700;
                src: url(/fonts/Bogart/Bogart-Bold-trial.ttf) format("truetype");
            }
            
            @font-face {
                font-family: 'Bogart';
                font-weight: 600;
                src: url(/fonts/Bogart/Bogart-Semibold-trial.ttf) format("truetype");
            }
            
            @font-face {
                font-family: 'Bogart';
                font-weight: 500;
                src: url(/fonts/Bogart/Bogart-Medium-trial.ttf) format("truetype");
            }
            
            @font-face {
                font-family: 'Bogart';
                font-weight: 400;
                src: url(/fonts/Bogart/Bogart-Regular-trial.ttf) format("truetype");
            }
            
            @font-face {
                font-family: 'Bogart';
                font-weight: 300;
                src: url(/fonts/Bogart/Bogart-Light-trial.ttf) format("truetype");
            }
            
            @font-face {
                font-family: 'Bogart';
                font-weight: 200;
                src: url(/fonts/Bogart/Bogart-Extralight-trial.ttf) format("truetype");
            }
            
            @font-face {
                font-family: 'Bogart';
                font-weight: 100;
                src: url(/public/fonts/Bogart/Bogart-Thin-trial.ttf) format("truetype");
            }
            `}
        />
    )
}

export default Fonts