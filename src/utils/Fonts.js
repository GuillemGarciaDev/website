import { Global } from '@emotion/react'
import React from 'react'

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
                src: url(/fonts/Bogart/Bogart-Thin-trial.ttf) format("truetype");
            }

            @font-face {
                font-family: 'Montserrat';
                font-weight: 100;
                src: url(/fonts/Montserrat/Montserrat-Thin.ttf) format("truetype");
            }

            @font-face {
                font-family: 'Montserrat';
                font-weight: 200;
                src: url(/fonts/Montserrat/ExtraLight.ttf) format("truetype");
            }

            @font-face {
                font-family: 'Montserrat';
                font-weight: 300;
                src: url(/fonts/Montserrat/Montserrat-Light.ttf) format("truetype");
            }

            @font-face {
                font-family: 'Montserrat';
                font-weight: 400;
                src: url(/fonts/Montserrat/Montserrat-Regular.ttf) format("truetype");
            }

            @font-face {
                font-family: 'Montserrat';
                font-weight: 500;
                src: url(/fonts/Montserrat/Montserrat-Medium.ttf) format("truetype");
            }

            @font-face {
                font-family: 'Montserrat';
                font-weight: 600;
                src: url(/fonts/Montserrat/Montserrat-SemiBold.ttf) format("truetype");
            }

            @font-face {
                font-family: 'Montserrat';
                font-weight: 700;
                src: url(/fonts/Montserrat/Montserrat-Bold.ttf) format("truetype");
            }

            @font-face {
                font-family: 'Montserrat';
                font-weight: 800;
                src: url(/fonts/Montserrat/Montserrat-ExtraBold.ttf) format("truetype");
            }

            @font-face {
                font-family: 'Montserrat';
                font-weight: 900;
                src: url(/fonts/Montserrat/Montserrat-Black.ttf) format("truetype");
            }

            `}
		/>
	)
}

export default Fonts