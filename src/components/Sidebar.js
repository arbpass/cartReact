import React from 'react'
import './Cart.css'
import { SidebarData } from './SidebarData.js'

function Sidebar() {

    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 0 && document.body.scrollTop < 360 || document.documentElement.scrollTop > 0 && document.documentElement.scrollTop < 360) {
            document.getElementById("/produce").style.backgroundColor = "rgb(111, 111, 224)";
            document.getElementById("/produce").style.color = "white";
        } else {
            document.getElementById("/produce").style.backgroundColor = "white";
            document.getElementById("/produce").style.color = "#474747";
        }

        if (document.body.scrollTop > 360 && document.body.scrollTop < 660 || document.documentElement.scrollTop > 360 && document.documentElement.scrollTop < 660) {
            document.getElementById("/prepared_foods").style.backgroundColor = "rgb(111, 111, 224)";
            document.getElementById("/prepared_foods").style.color = "white";
        } else {
            document.getElementById("/prepared_foods").style.backgroundColor = "white";
            document.getElementById("/prepared_foods").style.color = "#474747";
        }

        if (document.body.scrollTop > 660 && document.body.scrollTop < 960 || document.documentElement.scrollTop > 660 && document.documentElement.scrollTop < 960) {
            document.getElementById("/bakery").style.backgroundColor = "rgb(111, 111, 224)";
            document.getElementById("/bakery").style.color = "white";
        } else {
            document.getElementById("/bakery").style.backgroundColor = "white";
            document.getElementById("/bakery").style.color = "#474747";
        }

        if (document.body.scrollTop > 960 && document.body.scrollTop < 1260 || document.documentElement.scrollTop > 960 && document.documentElement.scrollTop < 1260) {
            document.getElementById("/frozen").style.backgroundColor = "rgb(111, 111, 224)";
            document.getElementById("/frozen").style.color = "white";
        } else {
            document.getElementById("/frozen").style.backgroundColor = "white";
            document.getElementById("/frozen").style.color = "#474747";
        }

        if (document.body.scrollTop > 1260 && document.body.scrollTop < 1560 || document.documentElement.scrollTop > 1260 && document.documentElement.scrollTop < 1560) {
            document.getElementById("/dairy_eggs").style.backgroundColor = "rgb(111, 111, 224)";
            document.getElementById("/dairy_eggs").style.color = "white";
        } else {
            document.getElementById("/dairy_eggs").style.backgroundColor = "white";
            document.getElementById("/dairy_eggs").style.color = "#474747";
        }

        // -----------

        if (document.body.scrollTop > 1560 && document.body.scrollTop < 1860 || document.documentElement.scrollTop > 1560 && document.documentElement.scrollTop < 1860) {
            document.getElementById("/produce2").style.backgroundColor = "rgb(111, 111, 224)";
            document.getElementById("/produce2").style.color = "white";
        } else {
            document.getElementById("/produce2").style.backgroundColor = "white";
            document.getElementById("/produce2").style.color = "#474747";
        }

        if (document.body.scrollTop > 1860 && document.body.scrollTop < 2160 || document.documentElement.scrollTop > 1860 && document.documentElement.scrollTop < 2160) {
            document.getElementById("/prepared_foods2").style.backgroundColor = "rgb(111, 111, 224)";
            document.getElementById("/prepared_foods2").style.color = "white";
        } else {
            document.getElementById("/prepared_foods2").style.backgroundColor = "white";
            document.getElementById("/prepared_foods2").style.color = "#474747";
        }

        if (document.body.scrollTop > 2160 && document.body.scrollTop < 2460 || document.documentElement.scrollTop > 2160 && document.documentElement.scrollTop < 2460) {
            document.getElementById("/bakery2").style.backgroundColor = "rgb(111, 111, 224)";
            document.getElementById("/bakery2").style.color = "white";
        } else {
            document.getElementById("/bakery2").style.backgroundColor = "white";
            document.getElementById("/bakery2").style.color = "#474747";
        }

        if (document.body.scrollTop > 2460 && document.body.scrollTop < 2760 || document.documentElement.scrollTop > 2460 && document.documentElement.scrollTop < 2760) {
            document.getElementById("/frozen2").style.backgroundColor = "rgb(111, 111, 224)";
            document.getElementById("/frozen2").style.color = "white";
        } else {
            document.getElementById("/frozen2").style.backgroundColor = "white";
            document.getElementById("/frozen2").style.color = "#474747";
        }

        if (document.body.scrollTop > 2760 && document.body.scrollTop < 3060 || document.documentElement.scrollTop > 2760 && document.documentElement.scrollTop < 3060) {
            document.getElementById("/dairy_eggs2").style.backgroundColor = "rgb(111, 111, 224)";
            document.getElementById("/dairy_eggs2").style.color = "white";
        } else {
            document.getElementById("/dairy_eggs2").style.backgroundColor = "white";
            document.getElementById("/dairy_eggs2").style.color = "#474747";
        }
        // 3rd wave-----------

        if (document.body.scrollTop > 3060 && document.body.scrollTop < 3360 || document.documentElement.scrollTop > 3060 && document.documentElement.scrollTop < 3360) {
            document.getElementById("/produce3").style.backgroundColor = "rgb(111, 111, 224)";
            document.getElementById("/produce3").style.color = "white";
        } else {
            document.getElementById("/produce3").style.backgroundColor = "white";
            document.getElementById("/produce3").style.color = "#474747";
        }

        if (document.body.scrollTop > 3360 && document.body.scrollTop < 3660 || document.documentElement.scrollTop > 3360 && document.documentElement.scrollTop < 3660) {
            document.getElementById("/prepared_foods3").style.backgroundColor = "rgb(111, 111, 224)";
            document.getElementById("/prepared_foods3").style.color = "white";
        } else {
            document.getElementById("/prepared_foods3").style.backgroundColor = "white";
            document.getElementById("/prepared_foods3").style.color = "#474747";
        }

        if (document.body.scrollTop > 3660 && document.body.scrollTop < 3960 || document.documentElement.scrollTop > 3660 && document.documentElement.scrollTop < 3960) {
            document.getElementById("/bakery3").style.backgroundColor = "rgb(111, 111, 224)";
            document.getElementById("/bakery3").style.color = "white";
        } else {
            document.getElementById("/bakery3").style.backgroundColor = "white";
            document.getElementById("/bakery3").style.color = "#474747";
        }

        if (document.body.scrollTop > 3960 && document.body.scrollTop < 4260 || document.documentElement.scrollTop > 3960 && document.documentElement.scrollTop < 4260) {
            document.getElementById("/frozen3").style.backgroundColor = "rgb(111, 111, 224)";
            document.getElementById("/frozen3").style.color = "white";
        } else {
            document.getElementById("/frozen3").style.backgroundColor = "white";
            document.getElementById("/frozen3").style.color = "#474747";
        }

        if (document.body.scrollTop > 4260 && document.body.scrollTop < 4560 || document.documentElement.scrollTop > 4260 && document.documentElement.scrollTop < 4560) {
            document.getElementById("/dairy_eggs3").style.backgroundColor = "rgb(111, 111, 224)";
            document.getElementById("/dairy_eggs3").style.color = "white";
        } else {
            document.getElementById("/dairy_eggs3").style.backgroundColor = "white";
            document.getElementById("/dairy_eggs3").style.color = "#474747";
        }
    }

    const scrollToTop = (position) => {
        window.scrollTo({
            top: position,
            behavior: 'smooth'
        });
    };

    function holdId(item) {
        let sidebarId = document.getElementById(item);
        let sidebars = document.getElementsByClassName('sidebarRow');

        Array.from(sidebars).forEach(element => {
            element.style.backgroundColor = 'white';
            element.style.color = '#474747';
        });
        sidebarId.style.backgroundColor = 'rgb(111, 111, 224)';
        sidebarId.style.color = 'white';
    }

    return (
        <div className='sidebar'>
            <ul className='sidebarList'>
                {SidebarData.map((item, key) => {
                    return (
                        <>
                            <div className='sidebarRow' id={item.link} onClick={() => { holdId(item.link); scrollToTop(item.position) }}>
                                {item.title}
                            </div>
                        </>
                    )
                })}
            </ul>
        </div>
    )
}

export default Sidebar