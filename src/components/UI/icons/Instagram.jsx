import React from 'react';

function Instagram({fill='white'}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="black">
            <path
                d="M15.976 29.0049C12.4298 29.0049 12.0117 28.9861 10.6278 28.9256C9.54862 28.8901 8.48339 28.6707 7.478 28.2769C6.61765 27.9421 5.83632 27.432 5.18364 26.7791C4.53096 26.1261 4.02119 25.3446 3.68669 24.4841C3.30801 23.4751 3.10375 22.409 3.08268 21.3315C3.00195 19.9504 3.00195 19.4978 3.00195 15.9789C3.00195 12.4226 3.02069 12.0074 3.08268 10.6307C3.10421 9.55465 3.30846 8.49004 3.68669 7.48237C4.0208 6.6208 4.53092 5.83838 5.18447 5.18508C5.83802 4.53178 6.62063 4.02196 7.48233 3.68818C8.48946 3.3079 9.55435 3.10312 10.6307 3.08273C12.0074 3.00488 12.46 3.00488 15.976 3.00488C19.5511 3.00488 19.9619 3.02362 21.3242 3.08273C22.4025 3.10291 23.4721 3.30761 24.4812 3.68818C25.3427 4.02235 26.1251 4.53231 26.7786 5.18556C27.4321 5.83881 27.9424 6.62103 28.2768 7.48237C28.6617 8.50588 28.8679 9.58705 28.8837 10.6783C28.9645 12.0593 28.9645 12.5105 28.9645 16.0279C28.9645 19.5454 28.9443 20.0067 28.8837 21.3718C28.8622 22.4504 28.6575 23.5174 28.2783 24.5274C27.9429 25.3885 27.4322 26.1704 26.7786 26.8236C26.1249 27.4768 25.3426 27.9869 24.4812 28.3216C23.4721 28.6993 22.4068 28.904 21.33 28.9256C19.9533 29.0049 19.5021 29.0049 15.976 29.0049ZM15.927 5.28687C12.4009 5.28687 12.0348 5.30417 10.6581 5.36616C9.83589 5.37691 9.02163 5.52855 8.25068 5.81449C7.68837 6.03002 7.17747 6.361 6.7509 6.78607C6.32434 7.21115 5.99158 7.72089 5.77408 8.28244C5.48576 9.06088 5.3344 9.88401 5.32575 10.7144C5.24935 12.1112 5.24935 12.4774 5.24935 15.9789C5.24935 19.4387 5.26232 19.8582 5.32575 21.2464C5.33872 22.0681 5.49009 22.8826 5.77408 23.6538C6.21519 24.7883 7.11473 25.685 8.25212 26.1203C9.02207 26.408 9.83618 26.5597 10.6581 26.5686C12.0535 26.6494 12.4211 26.6494 15.927 26.6494C19.4631 26.6494 19.8293 26.6321 21.1945 26.5686C22.0167 26.5587 22.8311 26.407 23.6019 26.1203C24.1612 25.9031 24.6692 25.5719 25.0936 25.1478C25.5179 24.7237 25.8494 24.2159 26.0669 23.6567C26.3552 22.8782 26.5066 22.0537 26.5153 21.2233H26.5311C26.5931 19.8452 26.5931 19.4776 26.5931 15.9559C26.5931 12.4341 26.5772 12.0637 26.5153 10.687C26.5022 9.86593 26.3507 9.053 26.0669 8.28244C25.8499 7.72246 25.5187 7.21382 25.0943 6.78891C24.6698 6.364 24.1616 6.03215 23.6019 5.81449C22.8306 5.52617 22.0161 5.37625 21.1945 5.36616C19.8005 5.28687 19.4358 5.28687 15.927 5.28687ZM15.976 22.6375C14.6578 22.6384 13.369 22.2483 12.2725 21.5166C11.176 20.7849 10.3211 19.7444 9.81602 18.5268C9.3109 17.3092 9.17822 15.9692 9.43476 14.6762C9.6913 13.3832 10.3255 12.1953 11.2572 11.2628C12.189 10.3303 13.3763 9.69504 14.6691 9.43738C15.9618 9.17972 17.302 9.31124 18.52 9.8153C19.738 10.3194 20.7792 11.1733 21.5119 12.2692C22.2445 13.365 22.6357 14.6535 22.636 15.9717C22.6337 17.7379 21.9315 19.4312 20.6832 20.6806C19.4348 21.93 17.7422 22.6337 15.976 22.6375ZM15.976 11.6442C15.1207 11.6442 14.2845 11.8978 13.5733 12.373C12.8621 12.8482 12.3078 13.5236 11.9805 14.3139C11.6532 15.1041 11.5676 15.9736 11.7344 16.8125C11.9013 17.6515 12.3132 18.422 12.918 19.0269C13.5228 19.6317 14.2934 20.0436 15.1323 20.2104C15.9712 20.3773 16.8408 20.2917 17.631 19.9643C18.4212 19.637 19.0966 19.0827 19.5718 18.3715C20.0471 17.6603 20.3007 16.8242 20.3007 15.9688C20.298 14.8227 19.8415 13.7242 19.0311 12.9138C18.2206 12.1033 17.1222 11.6468 15.976 11.6442ZM22.8955 10.6163C22.6914 10.6156 22.4895 10.5746 22.3013 10.4958C22.113 10.417 21.9421 10.3019 21.7983 10.1571C21.508 9.86458 21.3457 9.4687 21.3473 9.05656C21.3488 8.64441 21.514 8.24975 21.8065 7.9594C22.099 7.66905 22.4949 7.50679 22.907 7.50832C23.3192 7.50985 23.7138 7.67504 24.0042 7.96756C24.2945 8.26007 24.4568 8.65594 24.4553 9.06809C24.4537 9.48024 24.2886 9.8749 23.996 10.1652C23.7035 10.4556 23.3076 10.6179 22.8955 10.6163Z"
                fill={fill}/>
        </svg>
    );
}

export default Instagram;