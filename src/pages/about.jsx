import React from 'react'
import Navbar from '../components/Navbar'
import {Container, SimpleGrid, Box, Text, Flex, Image, Heading} from '@chakra-ui/react'
import CustomButton from '../components/CustomButton'
import Footer from '../components/Footer'
import {motion} from 'framer-motion'
import AnimatedPage from '../components/AnimatedPage'

const PhotoRadLine = () => {
    return (
        <motion.div
            animate={{
                scale: [1, 1.1, 0.8, 1.1, 1],
                rotate: [90, 90, 90, 90, 90],
            }}
            rotat
            transition={{
                repeat: Infinity,
                duration: 10,
            }}
            style={{
                display: 'block',
                position: 'absolute', 
            }}
        >
            <svg zIndex={0}  top='50%' right='50%' width="250" height="250" viewBox="0 0 676 676" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M362.736 338.179C362.736 336.551 339.9 313.701 338.273 313.701C336.646 313.701 313.809 336.551 313.809 338.179C313.809 339.807 336.646 362.657 338.273 362.657C339.9 362.657 362.736 339.807 362.736 338.179Z" stroke="black" stroke-width="0.4"/>
            <path d="M372.399 335.315C372.216 333.039 337.686 303.837 335.41 304.033C333.135 304.216 303.951 338.767 304.146 341.043C304.33 343.319 338.86 372.521 341.135 372.325C343.41 372.142 372.595 337.592 372.399 335.315Z" stroke="black" stroke-width="0.4"/>
            <path d="M381.83 331.729C381.402 328.829 334.738 294.168 331.827 294.597C328.928 295.025 294.287 341.716 294.716 344.629C295.144 347.53 341.808 382.19 344.719 381.761C347.618 381.333 382.258 334.642 381.83 331.729Z" stroke="black" stroke-width="0.4"/>
            <path d="M391.273 328.853C390.661 325.316 332.487 284.524 328.952 285.148C325.417 285.76 284.649 343.968 285.273 347.505C285.884 351.042 344.058 391.834 347.593 391.21C351.128 390.598 391.896 332.39 391.273 328.853Z" stroke="black" stroke-width="0.4"/>
            <path d="M401.083 328.119C400.41 323.933 332.414 274.672 328.218 275.333C324.035 276.006 274.803 344.042 275.463 348.239C276.136 352.425 344.132 401.686 348.327 401.025C352.511 400.352 401.743 332.317 401.083 328.119Z" stroke="black" stroke-width="0.4"/>
            <path d="M411.259 330.518C410.758 325.659 335.484 264.636 330.616 265.15C325.76 265.652 264.772 340.97 265.286 345.841C265.788 350.699 341.062 411.722 345.93 411.208C350.786 410.706 411.773 335.389 411.259 330.518Z" stroke="black" stroke-width="0.4"/>
            <path d="M421.424 336.135C421.289 330.579 341.771 254.845 336.23 254.98C330.677 255.114 254.987 334.679 255.122 340.223C255.256 345.779 334.775 421.513 340.315 421.379C345.869 421.244 421.558 341.679 421.424 336.135Z" stroke="black" stroke-width="0.4"/>
            <path d="M431.062 343.87C431.442 337.677 350.15 245.715 343.961 245.336C337.771 244.956 245.862 326.295 245.483 332.488C245.104 338.681 326.396 430.643 332.585 431.023C338.774 431.402 430.683 350.063 431.062 343.87Z" stroke="black" stroke-width="0.4"/>
            <path d="M440.126 351.715C441.031 344.923 358.59 237.172 351.801 236.267C345.012 235.361 237.325 317.85 236.42 324.643C235.514 331.435 317.956 439.186 324.745 440.092C331.533 440.997 439.221 358.508 440.126 351.715Z" stroke="black" stroke-width="0.4"/>
            <path d="M449.165 357.296C450.45 349.904 364.767 228.495 357.379 227.222C349.991 225.937 228.652 311.67 227.38 319.062C226.096 326.454 311.779 447.863 319.167 449.136C326.555 450.421 447.893 364.688 449.165 357.296Z" stroke="black" stroke-width="0.4"/>
            <path d="M458.877 358.569C460.235 350.516 366.687 218.863 358.651 217.504C350.602 216.146 219.026 309.748 217.668 317.789C216.31 325.842 309.858 457.495 317.895 458.854C325.943 460.212 457.519 366.61 458.877 358.569Z" stroke="black" stroke-width="0.4"/>
            <path d="M469.372 354.42C470.461 345.669 363.238 208.081 354.504 207.004C345.758 205.914 208.25 313.2 207.174 321.938C206.085 330.689 313.308 468.278 322.041 469.355C330.787 470.444 468.296 363.158 469.372 354.42Z" stroke="black" stroke-width="0.4"/>
            <path d="M479.989 345.094C480.454 335.646 354.639 196.833 345.184 196.38C335.741 195.915 197.009 321.804 196.556 331.264C196.092 340.713 321.907 479.525 331.362 479.978C340.805 480.443 479.536 354.555 479.989 345.094Z" stroke="black" stroke-width="0.4"/>
            <path d="M489.835 332.488C489.456 322.367 342.688 186.149 332.585 186.528C322.469 186.907 186.331 333.761 186.71 343.87C187.089 353.992 333.857 490.21 343.96 489.83C354.076 489.451 490.215 342.597 489.835 332.488Z" stroke="black" stroke-width="0.4"/>
            <path d="M498.667 319.699C497.444 309.002 330.493 176.456 319.803 177.692C309.112 178.916 176.643 345.963 177.879 356.66C179.102 367.356 346.052 499.903 356.743 498.667C367.433 497.443 499.902 330.395 498.667 319.699Z" stroke="black" stroke-width="0.4"/>
            <path d="M507.229 310.25C505.37 298.978 321.625 167.264 310.36 169.124C299.095 170.985 167.457 354.836 169.316 366.108C171.176 377.38 354.92 509.094 366.185 507.234C377.451 505.373 509.088 321.522 507.229 310.25Z" stroke="black" stroke-width="0.4"/>
            <path d="M516.611 307.056C514.531 295.16 319.057 157.669 307.168 159.737C295.278 161.818 157.868 357.406 159.935 369.302C162.014 381.199 357.489 518.689 369.378 516.621C381.267 514.54 518.678 318.952 516.611 307.056Z" stroke="black" stroke-width="0.4"/>
            <path d="M527.24 311.658C525.466 299.052 324.365 147.339 311.767 149.102C299.168 150.876 147.544 352.095 149.305 364.701C151.079 377.307 352.18 529.019 364.779 527.256C377.377 525.482 529.001 324.264 527.24 311.658Z" stroke="black" stroke-width="0.4"/>
            <path d="M538.359 323.75C537.392 310.409 337.196 137.022 323.852 137.977C310.519 138.944 137.233 339.256 138.187 352.609C139.153 365.949 339.349 539.336 352.694 538.382C366.026 537.415 539.313 337.102 538.359 323.75Z" stroke="black" stroke-width="0.4"/>
            <path d="M548.646 340.945C548.829 326.907 355.055 127.88 341.037 127.684C327.007 127.5 128.096 321.387 127.9 335.413C127.717 349.451 321.491 548.478 335.508 548.674C349.538 548.858 548.45 354.971 548.646 340.945Z" stroke="black" stroke-width="0.4"/>
            <path d="M557.452 359.071C558.847 344.445 373.757 120.267 359.152 118.872C344.535 117.477 120.487 302.674 119.093 317.287C117.699 331.913 302.789 556.091 317.393 557.486C332.01 558.882 556.058 373.684 557.452 359.071Z" stroke="black" stroke-width="0.4"/>
            <path d="M565.525 373.366C567.874 358.214 388.594 113.144 373.439 110.794C358.296 108.444 113.369 287.829 111.02 302.993C108.672 318.144 287.951 563.214 303.107 565.564C318.249 567.914 563.177 388.53 565.525 373.366Z" stroke="black" stroke-width="0.4"/>
            <path d="M574.369 379.828C577.145 364.089 395.639 104.724 379.897 101.946C364.167 99.1675 104.953 280.779 102.177 296.53C99.4002 312.27 280.906 571.634 296.648 574.413C312.378 577.191 571.592 395.579 574.369 379.828Z" stroke="black" stroke-width="0.4"/>
            <path d="M584.888 376.181C587.42 359.732 392.692 93.9537 376.252 91.4203C359.813 88.8869 94.1895 283.729 91.6575 300.178C89.1256 316.627 283.854 582.404 300.293 584.938C316.733 587.471 582.356 392.63 584.888 376.181Z" stroke="black" stroke-width="0.4"/>
            <path d="M596.447 362.436C598.061 345.216 379.738 81.4701 362.516 79.8546C345.306 78.2391 81.7131 296.69 80.0985 313.922C78.4839 331.142 296.807 594.888 314.029 596.504C331.239 598.119 594.832 379.669 596.447 362.436Z" stroke="black" stroke-width="0.4"/>
            <path d="M607.358 341.3C607.566 323.346 359.324 69.1457 341.392 68.9376C323.448 68.7295 69.3958 317.116 69.1879 335.058C68.9799 353.013 317.222 607.212 335.154 607.42C353.098 607.629 607.15 359.242 607.358 341.3Z" stroke="black" stroke-width="0.4"/>
            <path d="M616.409 317.74C615.039 299.186 336.377 58.5224 317.846 59.8809C299.302 61.2516 58.7786 340.076 60.1363 358.618C61.5063 377.172 340.169 617.836 358.7 616.477C377.243 615.107 617.767 336.282 616.409 317.74Z" stroke="black" stroke-width="0.4"/>
            <path d="M624.103 297.791C621.412 278.723 316.965 49.4902 297.908 52.1827C278.851 54.8752 49.7517 359.499 52.4427 378.567C55.1337 397.635 359.58 626.868 378.637 624.175C397.694 621.483 626.794 316.859 624.103 297.791Z" stroke="black" stroke-width="0.4"/>
            <path d="M632.273 286.801C628.849 267.194 306.531 40.5803 286.924 44.0072C267.329 47.434 40.847 369.939 44.2718 389.558C47.6967 409.164 370.014 635.778 389.621 632.351C409.216 628.924 635.698 306.419 632.273 286.801Z" stroke="black" stroke-width="0.4"/>
            <path d="M642.414 288.073C639.074 267.794 308.476 30.52 288.196 33.8612C267.928 37.2024 30.7926 367.993 34.1319 388.285C37.4711 408.564 368.069 645.838 388.349 642.497C408.617 639.156 645.753 308.365 642.414 288.073Z" stroke="black" stroke-width="0.4"/>
            <path d="M654.254 302.136C651.844 281.061 323.326 19.6152 302.25 22.014C281.187 24.4251 19.8941 353.135 22.2915 374.222C24.7012 395.298 353.22 656.743 374.295 654.344C395.358 651.933 656.651 323.223 654.254 302.136Z" stroke="black" stroke-width="0.4"/>
            <path d="M665.874 326.356C665.079 304.51 348.303 9.60388 326.457 10.3872C304.623 11.1827 9.88865 328.143 10.6715 350.002C11.4665 371.848 328.243 666.754 350.089 665.971C371.922 665.175 666.657 348.215 665.874 326.356Z" stroke="black" stroke-width="0.4"/>
            <path d="M675.439 355.142C676.577 332.659 377.708 1.94238 355.226 0.816412C332.756 -0.321797 2.23158 298.721 1.10627 321.216C-0.0312805 343.699 298.838 674.416 321.32 675.542C343.789 676.68 674.314 377.637 675.439 355.142Z" stroke="black" stroke-width="0.4"/>
            </svg>
        </motion.div>
        
    )
}


const About = () => {

    

    return (
        
        <Box backgroundColor='primaryVariant.100'>
            <Navbar/>
            <AnimatedPage>
            <Container maxW='container.lg'>
                <SimpleGrid 
                    columns={[1, 1, 2, 2]} 
                    padding={['3rem 1rem','3rem 1rem', '6rem 2rem','6rem 2rem']}
                    spacing={10}
                >
                    <Box>
                        <Box 
                            display='flex'
                            position='relative'
                            alignItems='center'
                            justifyContent='center'
                            zIndex={2}
                            backgroundColor='transparent'
                        >
                            <Image zIndex={2} w='60%' h='60%' borderRadius='5%' src='/profile.JPG' alt='My picture' />
                            <PhotoRadLine/>
                        </Box>
                    </Box>
                    <Flex flexDirection='column' justifyContent='center'>
                        <Heading
                            fontSize='3rem'
                            fontWeight='600'
                        >
                            About Guillem
                        </Heading>
                        <Text
                            fontSize='1rem'
                            fontWeight='500'
                            margin='1rem 0rem'
                            fontFamily='Montserrat'
                        >
                            That's me. A 21 year old Computer Science student at the Universitat Polit??cnica de Barcelona. Currently I am also in my 4th year of my degree and I work at InLab developing innovative software projects. <br></br> <br></br>I try to learn something new every day and, with this excuse, I have created this website to share everything I think, design, build and learn.
                        </Text>
                        <CustomButton
                            text='GO BACK'
                            size='md'
                            page='/'
                            width='6.25rem'
                        />
                    </Flex>
                    
                </SimpleGrid>
            </Container>
            </AnimatedPage>
            <Footer/>
        </Box>
    )
}

export default About