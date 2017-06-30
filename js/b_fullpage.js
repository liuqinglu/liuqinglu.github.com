/**
 * Created by lql on 2016/12/30 0030.
 */
"use strict";
$(function () {
    "use strict";
    $('#fullpage').fullpage({
        //Navigation
        menu: '#menu',
        lockAnchors: false,
        anchors:['Page1', 'Page2', 'Page3','Page4'],
        navigation: true,//是否显示项目导航
        navigationPosition: 'right',//项目导航的位置
        navigationTooltips: ['首页', '博客', '关于我', '联系我'],//项目导航的 tip
        showActiveTooltip: false,//
        slidesNavigation: true,//是否显示左右滑块的项目导航
        slidesNavPosition: 'bottom',//左右滑块的项目导航的位置

        //Scrolling

        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: false,

        //Design

        controlArrows: true,
        verticalCentered: true,
        //为每一个section设置background-color属性
        sectionsColor: ['#14191e', '#08162A', '#464C5C', '#1F1710'],
        
        // paddingTop: '3em',
        // paddingBottom: '10px',
        fixedElements: '#header, .footer',
        responsiveWidth: 0,
        responsiveHeight: 0,
        responsiveSlides: false,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        lazyLoading: true
    })
});