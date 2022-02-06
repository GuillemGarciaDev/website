import  { motion } from 'framer-motion'
import { useBreakpointValue } from '@chakra-ui/react'

const TRadLine = () => {

    const width = useBreakpointValue({
        lg: '22rem',
        xl: '33rem'
    })

    const height = useBreakpointValue({
        lg: '22rem',
        xl: '33rem'
    })

    return (
        <motion.div
            animate={{
                scale: [1, 0.8, 0.9, 0.8, 1],
                rotate: [90, 90, 90, 90, 90],
            }}
            rotat
            transition={{
                repeat: Infinity,
                duration: 10,
            }}
        >
            <svg  width={width === undefined ? '33rem' : width} height={height === undefined ? '33rem' : height} viewBox="0 0 718 738" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M376.736 378.179C376.736 376.551 353.9 353.702 352.273 353.702C350.646 353.702 327.81 376.551 327.81 378.179C327.81 379.807 350.646 402.657 352.273 402.657C353.9 402.657 376.736 379.807 376.736 378.179Z" stroke="black" stroke-width="0.4"/>
            <path d="M386.399 375.315C386.216 373.039 351.686 343.837 349.411 344.033C347.136 344.217 317.951 378.767 318.146 381.043C318.33 383.32 352.86 412.521 355.135 412.325C357.41 412.142 386.595 377.592 386.399 375.315Z" stroke="black" stroke-width="0.4"/>
            <path d="M395.83 371.729C395.402 368.829 348.738 334.168 345.827 334.597C342.928 335.025 308.288 381.716 308.716 384.629C309.144 387.53 355.808 422.19 358.719 421.761C361.618 421.333 396.258 374.642 395.83 371.729Z" stroke="black" stroke-width="0.4"/>
            <path d="M405.273 368.853C404.661 365.316 346.487 324.524 342.952 325.148C339.417 325.76 298.649 383.968 299.273 387.505C299.884 391.042 358.058 431.834 361.593 431.21C365.128 430.598 405.896 372.39 405.273 368.853Z" stroke="black" stroke-width="0.4"/>
            <path d="M415.083 368.119C414.41 363.933 346.414 314.672 342.218 315.333C338.035 316.006 288.803 384.042 289.463 388.24C290.136 392.425 358.132 441.686 362.327 441.026C366.511 440.352 415.743 372.317 415.083 368.119Z" stroke="black" stroke-width="0.4"/>
            <path d="M425.259 370.518C424.758 365.659 349.484 304.636 344.616 305.15C339.76 305.652 278.773 380.97 279.286 385.841C279.788 390.699 355.062 451.722 359.93 451.208C364.786 450.706 425.773 375.389 425.259 370.518Z" stroke="black" stroke-width="0.4"/>
            <path d="M435.424 376.135C435.289 370.579 355.771 294.845 350.23 294.98C344.677 295.114 268.987 374.679 269.122 380.223C269.256 385.779 348.775 461.513 354.315 461.379C359.869 461.244 435.558 381.679 435.424 376.135Z" stroke="black" stroke-width="0.4"/>
            <path d="M445.062 383.87C445.442 377.677 364.15 285.715 357.961 285.336C351.771 284.956 259.862 366.295 259.483 372.488C259.104 378.681 340.396 470.643 346.585 471.023C352.774 471.402 444.683 390.063 445.062 383.87Z" stroke="black" stroke-width="0.4"/>
            <path d="M454.126 391.715C455.031 384.923 372.59 277.172 365.801 276.267C359.012 275.361 251.325 357.851 250.42 364.643C249.514 371.436 331.956 479.186 338.745 480.092C345.533 480.997 453.221 398.508 454.126 391.715Z" stroke="black" stroke-width="0.4"/>
            <path d="M463.165 397.296C464.449 389.904 378.766 268.495 371.378 267.222C363.99 265.937 242.652 351.67 241.38 359.062C240.096 366.454 325.779 487.863 333.167 489.136C340.555 490.421 461.893 404.688 463.165 397.296Z" stroke="black" stroke-width="0.4"/>
            <path d="M472.877 398.569C474.235 390.516 380.687 258.863 372.651 257.505C364.602 256.146 233.026 349.748 231.668 357.789C230.311 365.842 323.859 497.495 331.895 498.854C339.943 500.212 471.52 406.61 472.877 398.569Z" stroke="black" stroke-width="0.4"/>
            <path d="M483.372 394.42C484.46 385.669 377.237 248.081 368.504 247.004C359.758 245.914 222.25 353.2 221.173 361.938C220.085 370.689 327.308 508.278 336.041 509.355C344.787 510.444 482.295 403.158 483.372 394.42Z" stroke="black" stroke-width="0.4"/>
            <path d="M493.989 385.094C494.454 375.646 368.639 236.833 359.184 236.38C349.741 235.915 211.009 361.804 210.556 371.264C210.092 380.713 335.907 519.525 345.362 519.978C354.805 520.443 493.536 394.555 493.989 385.094Z" stroke="black" stroke-width="0.4"/>
            <path d="M503.835 372.488C503.456 362.367 356.688 226.149 346.585 226.528C336.469 226.908 200.331 373.761 200.71 383.87C201.089 393.992 347.857 530.21 357.96 529.83C368.076 529.451 504.215 382.597 503.835 372.488Z" stroke="black" stroke-width="0.4"/>
            <path d="M512.667 359.699C511.444 349.002 344.493 216.456 333.803 217.692C323.112 218.916 190.643 385.963 191.879 396.66C193.102 407.356 360.052 539.903 370.743 538.667C381.433 537.443 513.902 370.395 512.667 359.699Z" stroke="black" stroke-width="0.4"/>
            <path d="M521.229 350.25C519.37 338.978 335.625 207.264 324.36 209.124C313.095 210.985 181.457 394.836 183.316 406.108C185.176 417.38 368.92 549.094 380.185 547.234C391.451 545.373 523.088 361.522 521.229 350.25Z" stroke="black" stroke-width="0.4"/>
            <path d="M530.611 347.056C528.531 335.16 333.057 197.669 321.168 199.737C309.278 201.818 171.868 397.406 173.935 409.302C176.014 421.199 371.489 558.689 383.378 556.621C395.267 554.54 532.678 358.952 530.611 347.056Z" stroke="black" stroke-width="0.4"/>
            <path d="M541.24 351.658C539.466 339.052 338.365 187.34 325.767 189.102C313.168 190.877 161.544 392.095 163.305 404.701C165.079 417.307 366.18 569.019 378.779 567.256C391.377 565.482 543.001 364.264 541.24 351.658Z" stroke="black" stroke-width="0.4"/>
            <path d="M552.358 363.75C551.392 350.409 351.196 177.022 337.851 177.977C324.519 178.944 151.232 379.256 152.187 392.609C153.153 405.949 353.349 579.336 366.694 578.382C380.026 577.415 553.313 377.102 552.358 363.75Z" stroke="black" stroke-width="0.4"/>
            <path d="M562.646 380.945C562.829 366.907 369.055 167.88 355.037 167.684C341.007 167.5 142.096 361.388 141.9 375.413C141.717 389.451 335.491 588.479 349.508 588.674C363.538 588.858 562.45 394.971 562.646 380.945Z" stroke="black" stroke-width="0.4"/>
            <path d="M571.452 399.071C572.847 384.445 387.757 160.267 373.152 158.872C358.536 157.477 134.488 342.674 133.093 357.288C131.699 371.913 316.789 596.091 331.393 597.486C346.01 598.882 570.058 413.684 571.452 399.071Z" stroke="black" stroke-width="0.4"/>
            <path d="M579.525 413.366C581.874 398.214 402.594 153.144 387.439 150.794C372.296 148.445 127.369 327.829 125.02 342.993C122.672 358.144 301.952 603.214 317.107 605.564C332.25 607.914 577.177 428.53 579.525 413.366Z" stroke="black" stroke-width="0.4"/>
            <path d="M588.369 419.828C591.145 404.089 409.639 144.724 393.897 141.946C378.167 139.168 118.953 320.779 116.177 336.53C113.4 352.27 294.906 611.634 310.648 614.413C326.378 617.191 585.592 435.579 588.369 419.828Z" stroke="black" stroke-width="0.4"/>
            <path d="M598.888 416.181C601.42 399.732 406.691 133.954 390.252 131.42C373.813 128.887 108.189 323.729 105.657 340.178C103.125 356.627 297.854 622.405 314.293 624.938C330.733 627.471 596.356 432.63 598.888 416.181Z" stroke="black" stroke-width="0.4"/>
            <path d="M610.447 402.436C612.062 385.216 393.738 121.47 376.516 119.855C359.306 118.239 95.7133 336.69 94.0988 353.922C92.4842 371.142 310.808 634.888 328.03 636.504C345.24 638.119 608.833 419.669 610.447 402.436Z" stroke="black" stroke-width="0.4"/>
            <path d="M621.357 381.3C621.565 363.346 373.323 109.146 355.392 108.938C337.448 108.73 83.3956 357.116 83.1876 375.058C82.9797 393.013 331.222 647.212 349.153 647.421C367.097 647.629 621.15 399.242 621.357 381.3Z" stroke="black" stroke-width="0.4"/>
            <path d="M630.409 357.74C629.039 339.186 350.377 98.5225 331.846 99.881C313.303 101.252 72.7789 380.076 74.1366 398.618C75.5065 417.172 354.169 657.836 372.7 656.477C391.243 655.107 631.767 376.282 630.409 357.74Z" stroke="black" stroke-width="0.4"/>
            <path d="M638.103 337.791C635.412 318.723 330.965 89.4902 311.908 92.1827C292.851 94.8752 63.7515 399.499 66.4425 418.567C69.1334 437.635 373.58 666.868 392.637 664.175C411.694 661.483 640.794 356.859 638.103 337.791Z" stroke="black" stroke-width="0.4"/>
            <path d="M646.273 326.801C642.849 307.194 320.531 80.5804 300.924 84.0072C281.329 87.4341 54.847 409.939 58.2718 429.558C61.6967 449.164 384.014 675.778 403.621 672.351C423.216 668.924 649.698 346.419 646.273 326.801Z" stroke="black" stroke-width="0.4"/>
            <path d="M656.413 328.073C653.074 307.794 322.476 70.5201 302.196 73.8612C281.928 77.2024 44.7924 407.993 48.1316 428.285C51.4709 448.565 382.069 685.838 402.349 682.497C422.617 679.156 659.753 348.365 656.413 328.073Z" stroke="black" stroke-width="0.4"/>
            <path d="M668.254 342.136C665.845 321.061 337.326 59.6153 316.251 62.0141C295.188 64.4251 33.8944 393.135 36.2918 414.222C38.7014 435.298 367.22 696.743 388.295 694.344C409.358 691.933 670.652 363.223 668.254 342.136Z" stroke="black" stroke-width="0.4"/>
            <path d="M679.874 366.356C679.079 344.51 362.303 49.6039 340.457 50.3872C318.623 51.1827 23.8887 368.143 24.6715 390.002C25.4665 411.848 342.243 706.754 364.089 705.971C385.922 705.175 680.657 388.215 679.874 366.356Z" stroke="black" stroke-width="0.4"/>
            <path d="M689.439 395.142C690.577 372.659 391.708 41.9424 369.226 40.8165C346.756 39.6783 16.2316 338.721 15.1063 361.216C13.9687 383.699 312.838 714.416 335.32 715.542C357.789 716.68 688.314 417.637 689.439 395.142Z" stroke="black" stroke-width="0.4"/>
            </svg>
        </motion.div>
    )

}

export default TRadLine