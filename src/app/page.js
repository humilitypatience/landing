'use client'

import { useState, useEffect, createContext } from 'react'

import Navbar from '../components/layout/navbar/Navbar.js'
import HeroSection from "../components/landing/herosection/HeroSection.js";
import Services from "../components/landing/services/Services.js";
import Integrations from "../components/landing/integrations/Integrations.js";
import AboutUs from "../components/landing/aboutus/AboutUs.js";
import WhyUs from "../components/landing/whyus/WhyUs.js";
import Customization from '@/components/landing/customization/Customization.js';
import TheWayItWorks from "../components/landing/TheWayItWorks";
import Testamonials from "../components/landing/testamonials";
import Pricing from "../components/landing/pricing";
import ContactUs from "../components/landing/contactUs";
import Footer from "../components/landing/footer";

export const UserContext = createContext()


export default function Home() {
  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth)

  useEffect(() => {
    function handleResize() {
      setDeviceWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return (
    <UserContext.Provider value={deviceWidth}>
      <div className="relative w-[360px] h-[14606px] m-auto overflow-hidden min-[360px]:w-[1440px] min-[360px]:h-[8986px]">
        {deviceWidth < 360 ? (<>
          <div className='absolute top-[450px]'>
            <svg width="1440" height="1180" viewBox="0 0 1440 1180" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M-27 324.066C-27 296.904 -27 283.324 -18.6572 274.164C-10.3144 265.005 2.87462 263.772 29.2528 261.306C242.547 241.363 1007.23 185.156 1361.5 364C1714.19 542.05 1554.86 1008.95 1499.94 1143.33C1492.91 1160.53 1489.39 1169.13 1481.3 1174.57C1473.21 1180 1463.39 1180 1443.74 1180H37C6.83012 1180 -8.25483 1180 -17.6274 1170.63C-27 1161.26 -27 1146.17 -27 1116V324.066Z" fill="#EDF1FE" />
              <path d="M643 363C643 563.479 487.195 726 295 726C102.805 726 -53 563.479 -53 363C-53 162.521 102.805 0 295 0C487.195 0 643 162.521 643 363ZM-13.5418 363C-13.5418 540.748 124.597 684.841 295 684.841C465.403 684.841 603.542 540.748 603.542 363C603.542 185.252 465.403 41.159 295 41.159C124.597 41.159 -13.5418 185.252 -13.5418 363Z" fill="white" fill-opacity="0.5" />
              <path d="M1279 946.5C1279 1027.41 1213.41 1093 1132.5 1093C1051.59 1093 986 1027.41 986 946.5C986 865.59 1051.59 800 1132.5 800C1213.41 800 1279 865.59 1279 946.5ZM1011.78 946.5C1011.78 1013.17 1065.83 1067.22 1132.5 1067.22C1199.17 1067.22 1253.22 1013.17 1253.22 946.5C1253.22 879.826 1199.17 825.776 1132.5 825.776C1065.83 825.776 1011.78 879.826 1011.78 946.5Z" fill="white" fill-opacity="0.5" />
              <path d="M1157 811.5C1157 927.756 1062.76 1022 946.5 1022C830.244 1022 736 927.756 736 811.5C736 695.244 830.244 601 946.5 601C1062.76 601 1157 695.244 1157 811.5ZM759.868 811.5C759.868 914.574 843.426 998.132 946.5 998.132C1049.57 998.132 1133.13 914.574 1133.13 811.5C1133.13 708.426 1049.57 624.868 946.5 624.868C843.426 624.868 759.868 708.426 759.868 811.5Z" fill="white" fill-opacity="0.5" />
            </svg>

          </div>
          <div className='absolute w-[1683px] h-[898px] left-[-330px]'>
            <svg width="1440" height="839" viewBox="0 0 1440 839" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M-121 380.51C-23.0067 381.682 182.123 464.549 261.596 222.981C319.04 48.373 538.359 87.1108 661.774 57.3645C769.731 31.3441 779.226 -38.6298 661.774 -58.6726C550.85 -77.6016 511.268 111.867 779.226 130.855C1091.06 152.952 1097.47 372.423 1047.89 482.482C998.304 592.542 1166.39 707.524 1349.95 675.526C1496.8 649.927 1552.51 769.176 1562 832" stroke="url(#paint0_linear_587_5278)" stroke-opacity="0.25" stroke-width="5" />
              <path d="M-70 0H1370.47V0C1417.41 119.063 1374.52 254.725 1267.68 325.178L1019.36 488.925L852.854 602.685C686.641 716.246 490.025 777 288.723 777H-70V0Z" fill="#F7F9FB" />
              <path d="M-121 386.51C-23.0067 387.682 182.123 470.549 261.596 228.981C319.04 54.373 538.359 93.1108 661.774 63.3645C769.731 37.3441 779.226 -32.6298 661.774 -52.6726C550.85 -71.6016 511.268 117.867 779.226 136.855C1091.06 158.952 1097.47 378.423 1047.89 488.482C998.304 598.542 1165.94 705.498 1349.5 673.5C1496.35 647.902 1552.51 775.176 1562 838" stroke="url(#paint1_linear_587_5278)" stroke-opacity="0.25" stroke-width="5" />
              <g clip-path="url(#clip0_587_5278)">
                <path d="M1276.41 673.935C1271.84 673.855 1265.23 679.672 1265.23 679.672C1265.23 679.672 1272.58 684.521 1277.09 683.811C1279.63 683.42 1281.59 681.134 1281.39 678.551C1281.28 677.303 1280.7 676.141 1279.78 675.289C1278.86 674.437 1277.66 673.955 1276.41 673.935ZM1291.91 682.784L1291.22 672.908C1294.27 671.293 1297.48 669.99 1300.79 669.019C1305.7 667.525 1310.9 667.31 1315.91 668.395C1320.93 669.481 1325.58 671.83 1329.42 675.22C1325.26 680.007 1316.56 687.226 1302.01 685.39C1298.56 684.861 1295.18 683.988 1291.91 682.784Z" stroke="#6366F0" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M1291.22 672.908L1282.42 665.249C1282.42 665.249 1288.03 660.758 1292.07 661.272C1296.57 661.852 1300.87 668.931 1300.87 668.931M1291.91 682.784L1284.25 691.584C1284.25 691.584 1290.42 695.257 1294.35 694.191C1298.73 692.994 1302.01 685.39 1302.01 685.39" stroke="#6366F0" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
              </g>
              <defs>
                <linearGradient id="paint0_linear_587_5278" x1="166.299" y1="-36.5201" x2="1511.71" y2="-39.3335" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#6366F0" stop-opacity="0.85" />
                  <stop offset="0.25" stop-color="#6366F0" stop-opacity="0.2" />
                  <stop offset="0.5" stop-color="#6366F0" stop-opacity="0.1" />
                  <stop offset="0.645833" stop-color="#6062CF" />
                  <stop offset="0.645933" stop-color="#4B4EDE" />
                  <stop offset="0.885417" stop-color="#6366F0" stop-opacity="0" />
                </linearGradient>
                <linearGradient id="paint1_linear_587_5278" x1="166.299" y1="-30.5201" x2="1511.71" y2="-33.3335" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#6366F0" stop-opacity="0.85" />
                  <stop offset="0.25" stop-color="#6366F0" stop-opacity="0.2" />
                  <stop offset="0.5" stop-color="#6366F0" stop-opacity="0.1" />
                  <stop offset="0.645833" stop-color="#6062CF" />
                  <stop offset="0.645933" stop-color="#4B4EDE" />
                  <stop offset="0.885417" stop-color="#6366F0" stop-opacity="0" />
                </linearGradient>
                <clipPath id="clip0_587_5278">
                  <rect width="56" height="56" fill="white" transform="translate(1293.76 638) rotate(41.0323)" />
                </clipPath>
              </defs>
            </svg>

          </div>

          <div className='absolute top-[2920px]'>
            <svg width="206" height="422" viewBox="0 0 206 422" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M-913.479 405.639C-915.516 399.313 -142.163 330.844 162.739 42.2758" stroke="url(#paint0_linear_648_7855)" stroke-opacity="0.25" stroke-width="9" />
              <path d="M-909.058 418C-911.191 411.703 -136.657 333.676 163.848 40.7018" stroke="url(#paint1_linear_648_7855)" stroke-opacity="0.25" stroke-width="9" />
              <path d="M162.795 36.5129C159.949 38.9037 159 46 159 46C159 46 166.096 45.0513 168.487 42.2052C169.834 40.6114 169.815 38.1637 168.316 36.6837C167.579 35.9798 166.607 35.573 165.588 35.5415C164.569 35.51 163.574 35.8559 162.795 36.5129ZM177.026 33.6668L171.333 27.9746C172.343 25.3551 173.614 22.8441 175.128 20.4798C177.339 16.9449 180.418 14.0344 184.071 12.0251C187.724 10.0158 191.831 8.97461 196 9.00047C196 14.1614 194.52 23.2311 184.615 29.872C182.219 31.3875 179.676 32.6588 177.026 33.6668Z" stroke="#6366F0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M171.215 28.2564H162C162 28.2564 163.014 22.6723 165.686 20.8846C168.671 18.8942 174.901 20.8846 174.901 20.8846M176.744 33.7853V43C176.744 43 182.328 41.9864 184.115 39.3141C186.106 36.3285 184.115 30.0994 184.115 30.0994" stroke="#6366F0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <defs>
                <linearGradient id="paint0_linear_648_7855" x1="-669.769" y1="45.9381" x2="483.397" y2="35.351" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#6366F0" stop-opacity="0.85" />
                  <stop offset="0.25" stop-color="#6366F0" stop-opacity="0.2" />
                  <stop offset="0.5" stop-color="#6366F0" stop-opacity="0.1" />
                  <stop offset="0.645833" stop-color="#6062CF" />
                  <stop offset="0.645933" stop-color="#4B4EDE" />
                  <stop offset="0.885417" stop-color="#6366F0" stop-opacity="0" />
                </linearGradient>
                <linearGradient id="paint1_linear_648_7855" x1="-668.634" y1="56.4766" x2="484.392" y2="28.2719" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#6366F0" stop-opacity="0.85" />
                  <stop offset="0.25" stop-color="#6366F0" stop-opacity="0.2" />
                  <stop offset="0.5" stop-color="#6366F0" stop-opacity="0.1" />
                  <stop offset="0.645833" stop-color="#6062CF" />
                  <stop offset="0.645933" stop-color="#4B4EDE" />
                  <stop offset="0.885417" stop-color="#6366F0" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>

          </div>

          <div className='absolute top-[4590px]'>
            <svg width="360" height="2154" viewBox="0 0 360 2154" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M-232.761 450.752C-223.176 389.912 -218.383 359.493 -199.227 337.699C-180.07 315.905 -150.516 307.25 -91.4095 289.939L856.195 12.422C895.724 0.845465 915.488 -4.94281 928.466 5.34116C941.443 15.6251 940.325 36.1894 938.088 77.3179L845.131 1786.46C843.892 1809.26 843.272 1820.65 836.541 1828.78C829.81 1836.91 818.729 1839.65 796.568 1845.12L-409.44 2142.9C-451.735 2153.34 -472.882 2158.56 -485.527 2146.96C-498.172 2135.36 -494.782 2113.84 -488.002 2070.8L-232.761 450.752Z" fill="#EDF1FE" />
            </svg>

          </div>
          <div className='absolute top-[7250px] z-50'>
            <svg width="360" height="569" viewBox="0 0 360 569" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M118.147 27.0381C115.355 28.6775 113.789 34.4924 113.789 34.4924C113.789 34.4924 120.246 34.5968 122.676 32.5189C124.044 31.3563 124.274 29.3069 123.079 27.8795C122.489 27.1974 121.659 26.7343 120.749 26.5791C119.838 26.4238 118.912 26.5873 118.147 27.0381ZM131.19 26.4581L126.661 20.9773C127.83 18.9143 129.223 16.9751 130.818 15.1892C133.156 12.5126 136.209 10.4678 139.686 9.24956C143.163 8.0313 146.949 7.68 150.684 8.22908C150.164 12.5454 147.923 19.9435 138.376 24.2445C136.075 25.2088 133.667 25.9504 131.19 26.4581Z" stroke="#6366F0" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M126.728 21.1867L118.227 19.9364C118.227 19.9364 119.744 15.2961 122.395 14.1291C125.357 12.8312 130.896 15.3794 130.896 15.3794M131.253 26.6675L130.294 34.5518C130.294 34.5518 135.551 34.4422 137.479 32.3983C139.626 30.1139 138.438 24.514 138.438 24.514" stroke="#6366F0" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M100.81 565.934C-217.302 127.608 112.5 62.5021 117.5 29.5" stroke="url(#paint0_linear_648_7899)" stroke-opacity="0.25" stroke-width="9" />
              <path d="M102.311 565.935C-232.201 126.095 102.117 60.9987 118 29" stroke="url(#paint1_linear_648_7899)" stroke-opacity="0.25" stroke-width="9" />
              <defs>
                <linearGradient id="paint0_linear_648_7899" x1="-282.511" y1="133.159" x2="343.195" y2="-681.968" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#6366F0" stop-opacity="0.85" />
                  <stop offset="0.25" stop-color="#6366F0" stop-opacity="0.2" />
                  <stop offset="0.5" stop-color="#6366F0" stop-opacity="0.1" />
                  <stop offset="0.645833" stop-color="#6062CF" />
                  <stop offset="0.645933" stop-color="#4B4EDE" />
                  <stop offset="0.885417" stop-color="#6366F0" stop-opacity="0" />
                </linearGradient>
                <linearGradient id="paint1_linear_648_7899" x1="-282.511" y1="133.158" x2="343.195" y2="-681.968" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#6366F0" stop-opacity="0.85" />
                  <stop offset="0.25" stop-color="#6366F0" stop-opacity="0.2" />
                  <stop offset="0.5" stop-color="#6366F0" stop-opacity="0.1" />
                  <stop offset="0.645833" stop-color="#6062CF" />
                  <stop offset="0.645933" stop-color="#4B4EDE" />
                  <stop offset="0.885417" stop-color="#6366F0" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>

          </div>
          <div className='absolute top-[7750px] -z-10'>
            <svg width="360" height="1740" viewBox="0 0 360 1740" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M97.2479 73.2544C110.9 25.4639 157.578 -5.04729 206.83 1.62691L1183.43 133.967C1233.01 140.686 1270 183.022 1270 233.061V511.998C1270 542.46 1256.12 571.261 1232.28 590.233L-183.844 1717.63C-259.957 1778.22 -369.003 1705.47 -342.281 1611.92L97.2479 73.2544Z" fill="#F7F9FB" />
            </svg>
          </div>
          <div className='absolute top-[9950px]'>
            <svg width="360" height="1495" viewBox="0 0 360 1495" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M-527 370.891L459.233 49.3388C587.42 7.54471 722.735 -7.89566 857.042 3.94601L913.474 8.92152C964.513 256.574 903.24 514.114 746.141 712.246L562.358 944.031L440.91 1102.73C251.695 1349.98 -41.8869 1495 -353.233 1495H-527L-527 370.891Z" fill="#F7F9FB" />
            </svg>

          </div>
          <div className='absolute top-[12160px]'>
            <svg width="360" height="228" viewBox="0 0 360 228" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1443.64 106.501L1443.63 126.5L-963.057 102.563L-962.141 40.0003L1443.64 106.501Z" fill="#EDF1FE" />
              <path d="M1451.63 81.5L1451.63 97.7808L-955.057 62.5629L-954.142 -0.00012872L1451.63 81.5Z" fill="#DFE6FE" />
              <path d="M1443.63 121.503L1443.63 148L-963.057 143.57L-962.141 81.0065L1443.63 121.503Z" fill="#EDF1FE" fill-opacity="0.5" />
              <path d="M1442.68 148.004L1442.69 165.5L-964 192.567L-963.084 130.004L1442.68 148.004Z" fill="#EDF1FE" fill-opacity="0.3" />
            </svg>

          </div>
        </>) : (<>
          <div className='absolute top-[470px]'>
            <svg width="1440" height="1180" viewBox="0 0 1440 1180" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M-27 324.066C-27 296.904 -27 283.324 -18.6572 274.164C-10.3144 265.005 2.87462 263.772 29.2528 261.306C242.547 241.363 1007.23 185.156 1361.5 364C1714.19 542.05 1554.86 1008.95 1499.94 1143.33C1492.91 1160.53 1489.39 1169.13 1481.3 1174.57C1473.21 1180 1463.39 1180 1443.74 1180H37C6.83012 1180 -8.25483 1180 -17.6274 1170.63C-27 1161.26 -27 1146.17 -27 1116V324.066Z" fill="#EDF1FE" />
              <path d="M643 363C643 563.479 487.195 726 295 726C102.805 726 -53 563.479 -53 363C-53 162.521 102.805 0 295 0C487.195 0 643 162.521 643 363ZM-13.5418 363C-13.5418 540.748 124.597 684.841 295 684.841C465.403 684.841 603.542 540.748 603.542 363C603.542 185.252 465.403 41.159 295 41.159C124.597 41.159 -13.5418 185.252 -13.5418 363Z" fill="white" fill-opacity="0.5" />
              <path d="M1279 946.5C1279 1027.41 1213.41 1093 1132.5 1093C1051.59 1093 986 1027.41 986 946.5C986 865.59 1051.59 800 1132.5 800C1213.41 800 1279 865.59 1279 946.5ZM1011.78 946.5C1011.78 1013.17 1065.83 1067.22 1132.5 1067.22C1199.17 1067.22 1253.22 1013.17 1253.22 946.5C1253.22 879.826 1199.17 825.776 1132.5 825.776C1065.83 825.776 1011.78 879.826 1011.78 946.5Z" fill="white" fill-opacity="0.5" />
              <path d="M1157 811.5C1157 927.756 1062.76 1022 946.5 1022C830.244 1022 736 927.756 736 811.5C736 695.244 830.244 601 946.5 601C1062.76 601 1157 695.244 1157 811.5ZM759.868 811.5C759.868 914.574 843.426 998.132 946.5 998.132C1049.57 998.132 1133.13 914.574 1133.13 811.5C1133.13 708.426 1049.57 624.868 946.5 624.868C843.426 624.868 759.868 708.426 759.868 811.5Z" fill="white" fill-opacity="0.5" />
            </svg>

          </div>

          <div className='absolute'>
            <svg width="1440" height="839" viewBox="0 0 1440 839" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M-121 380.51C-23.0067 381.682 182.123 464.549 261.596 222.981C319.04 48.373 538.359 87.1108 661.774 57.3645C769.731 31.3441 779.226 -38.6298 661.774 -58.6726C550.85 -77.6016 511.268 111.867 779.226 130.855C1091.06 152.952 1097.47 372.423 1047.89 482.482C998.304 592.542 1166.39 707.524 1349.95 675.526C1496.8 649.927 1552.51 769.176 1562 832" stroke="url(#paint0_linear_587_5278)" stroke-opacity="0.25" stroke-width="5" />
              <path d="M-70 0H1370.47V0C1417.41 119.063 1374.52 254.725 1267.68 325.178L1019.36 488.925L852.854 602.685C686.641 716.246 490.025 777 288.723 777H-70V0Z" fill="#F7F9FB" />
              <path d="M-121 386.51C-23.0067 387.682 182.123 470.549 261.596 228.981C319.04 54.373 538.359 93.1108 661.774 63.3645C769.731 37.3441 779.226 -32.6298 661.774 -52.6726C550.85 -71.6016 511.268 117.867 779.226 136.855C1091.06 158.952 1097.47 378.423 1047.89 488.482C998.304 598.542 1165.94 705.498 1349.5 673.5C1496.35 647.902 1552.51 775.176 1562 838" stroke="url(#paint1_linear_587_5278)" stroke-opacity="0.25" stroke-width="5" />
              <g clip-path="url(#clip0_587_5278)">
                <path d="M1276.41 673.935C1271.84 673.855 1265.23 679.672 1265.23 679.672C1265.23 679.672 1272.58 684.521 1277.09 683.811C1279.63 683.42 1281.59 681.134 1281.39 678.551C1281.28 677.303 1280.7 676.141 1279.78 675.289C1278.86 674.437 1277.66 673.955 1276.41 673.935ZM1291.91 682.784L1291.22 672.908C1294.27 671.293 1297.48 669.99 1300.79 669.019C1305.7 667.525 1310.9 667.31 1315.91 668.395C1320.93 669.481 1325.58 671.83 1329.42 675.22C1325.26 680.007 1316.56 687.226 1302.01 685.39C1298.56 684.861 1295.18 683.988 1291.91 682.784Z" stroke="#6366F0" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M1291.22 672.908L1282.42 665.249C1282.42 665.249 1288.03 660.758 1292.07 661.272C1296.57 661.852 1300.87 668.931 1300.87 668.931M1291.91 682.784L1284.25 691.584C1284.25 691.584 1290.42 695.257 1294.35 694.191C1298.73 692.994 1302.01 685.39 1302.01 685.39" stroke="#6366F0" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
              </g>
              <defs>
                <linearGradient id="paint0_linear_587_5278" x1="166.299" y1="-36.5201" x2="1511.71" y2="-39.3335" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#6366F0" stop-opacity="0.85" />
                  <stop offset="0.25" stop-color="#6366F0" stop-opacity="0.2" />
                  <stop offset="0.5" stop-color="#6366F0" stop-opacity="0.1" />
                  <stop offset="0.645833" stop-color="#6062CF" />
                  <stop offset="0.645933" stop-color="#4B4EDE" />
                  <stop offset="0.885417" stop-color="#6366F0" stop-opacity="0" />
                </linearGradient>
                <linearGradient id="paint1_linear_587_5278" x1="166.299" y1="-30.5201" x2="1511.71" y2="-33.3335" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#6366F0" stop-opacity="0.85" />
                  <stop offset="0.25" stop-color="#6366F0" stop-opacity="0.2" />
                  <stop offset="0.5" stop-color="#6366F0" stop-opacity="0.1" />
                  <stop offset="0.645833" stop-color="#6062CF" />
                  <stop offset="0.645933" stop-color="#4B4EDE" />
                  <stop offset="0.885417" stop-color="#6366F0" stop-opacity="0" />
                </linearGradient>
                <clipPath id="clip0_587_5278">
                  <rect width="56" height="56" fill="white" transform="translate(1293.76 638) rotate(41.0323)" />
                </clipPath>
              </defs>
            </svg>

          </div>
          <div className='absolute top-[3040px]'>
            <svg width="1425" height="1013" viewBox="0 0 1425 1013" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M234.578 271.121C253.737 213.862 263.316 185.232 285.259 167.031C307.201 148.83 337.108 144.706 396.921 136.458L1348.21 5.27915C1385.83 0.0911326 1404.64 -2.50287 1415.85 8.46426C1427.06 19.4314 1424.88 38.2952 1420.53 76.0228L1335.38 813.192C1332.59 837.361 1331.19 849.445 1323.32 857.326C1315.44 865.206 1303.36 866.611 1279.19 869.421L84.0416 1008.37C39.053 1013.6 16.5587 1016.21 5.47976 1002.57C-5.59916 988.916 1.58663 967.44 15.9582 924.489L234.578 271.121Z" fill="#EDF1FE" />
            </svg>

          </div>
          <div className='absolute top-[6380px]'>
            <svg width="1440" height="787" viewBox="0 0 1440 787" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 198.5L1074.03 15.1735C1144.8 3.09295 1216.67 -1.33027 1288.4 1.98031L1440.47 9C1487.42 128.245 1444.49 264.073 1337.55 334.684L1089.36 498.554L923.02 612.347C756.707 726.123 559.901 787 358.394 787H4.76837e-07L0 198.5Z" fill="#F7F9FB" />
            </svg>

          </div>
          <div className='absolute left-[-50px] top-[4420px]'>
            <svg width="1440" height="1525" viewBox="0 0 1440 1525" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M325.615 69.9991C340.391 24.6528 385.133 -3.94854 432.492 1.67787L1411.8 118.021C1462.11 123.998 1500 166.657 1500 217.323V439.742C1500 472.422 1484.03 503.04 1457.23 521.744L46.7963 1506.15C-31.8859 1561.06 -135.242 1484.39 -105.517 1393.16L325.615 69.9991Z" fill="#F7F9FB" />
            </svg>

          </div>
          <div className='absolute top-[7000px]'>
            <svg width="1351" height="554" viewBox="0 0 1351 554" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M-18.7088 533.966C-21.191 525.759 921.205 436.944 1292.75 62.622" stroke="url(#paint0_linear_640_4582)" stroke-opacity="0.25" stroke-width="9" />
              <path d="M-13.4271 550.002C-16.0253 541.835 927.823 440.389 1294.1 60.2586" stroke="url(#paint1_linear_640_4582)" stroke-opacity="0.25" stroke-width="9" />
              <path d="M1296.16 50.1874C1291.95 54.0199 1290.54 65.3958 1290.54 65.3958C1290.54 65.3958 1301.06 63.8749 1304.6 59.3124C1306.6 56.7574 1306.57 52.8337 1304.35 50.4612C1303.25 49.3328 1301.81 48.6807 1300.3 48.6302C1298.79 48.5797 1297.32 49.1342 1296.16 50.1874ZM1317.25 45.6249L1308.82 36.4999C1310.31 32.3007 1312.2 28.2755 1314.44 24.4854C1317.72 18.8187 1322.28 14.153 1327.7 10.932C1333.11 7.71097 1339.2 6.04182 1345.38 6.08327C1345.38 14.3566 1343.18 28.8958 1328.5 39.5416C1324.95 41.9711 1321.18 44.009 1317.25 45.6249Z" stroke="#6366F0" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M1308.82 36.4997H1294.76C1294.76 36.4997 1296.3 27.2835 1300.38 24.333C1304.94 21.048 1314.44 24.333 1314.44 24.333M1317.25 45.6247V60.833C1317.25 60.833 1325.78 59.1601 1328.5 54.7497C1331.54 49.8222 1328.5 39.5414 1328.5 39.5414" stroke="#6366F0" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
              <defs>
                <linearGradient id="paint0_linear_640_4582" x1="278.273" y1="67.3727" x2="1683.52" y2="55.2528" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#6366F0" stop-opacity="0.85" />
                  <stop offset="0.25" stop-color="#6366F0" stop-opacity="0.2" />
                  <stop offset="0.5" stop-color="#6366F0" stop-opacity="0.1" />
                  <stop offset="0.645833" stop-color="#6062CF" />
                  <stop offset="0.645933" stop-color="#4B4EDE" />
                  <stop offset="0.885417" stop-color="#6366F0" stop-opacity="0" />
                </linearGradient>
                <linearGradient id="paint1_linear_640_4582" x1="279.654" y1="80.9688" x2="1684.82" y2="49.0012" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#6366F0" stop-opacity="0.85" />
                  <stop offset="0.25" stop-color="#6366F0" stop-opacity="0.2" />
                  <stop offset="0.5" stop-color="#6366F0" stop-opacity="0.1" />
                  <stop offset="0.645833" stop-color="#6062CF" />
                  <stop offset="0.645933" stop-color="#4B4EDE" />
                  <stop offset="0.885417" stop-color="#6366F0" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>

          </div>
          <div className='absolute top-[7750px]'>
            <svg width="1440" height="228" viewBox="0 0 1440 228" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2201.63 106.501L2201.63 126.5L-205.058 102.563L-204.142 40.0003L2201.63 106.501Z" fill="#EDF1FE" />
              <path d="M2209.63 81.5L2209.63 97.7808L-197.058 62.5629L-196.142 -0.00012872L2209.63 81.5Z" fill="#DFE6FE" />
              <path d="M2201.63 121.503L2201.63 148L-205.058 143.57L-204.142 81.0065L2201.63 121.503Z" fill="#EDF1FE" fill-opacity="0.5" />
              <path d="M2200.68 148.004L2200.69 165.5L-206.001 192.567L-205.085 130.004L2200.68 148.004Z" fill="#EDF1FE" fill-opacity="0.3" />
            </svg>

          </div>
        </>)}


        <Navbar />
        <HeroSection />
        <Services />
        <Integrations />
        <AboutUs />
        <WhyUs />
        <Customization />
        <TheWayItWorks />
        <Testamonials />
        <Pricing />
        <ContactUs />
        <Footer />
      </div>
    </UserContext.Provider>
  )
}
