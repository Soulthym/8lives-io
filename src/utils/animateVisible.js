const isVisible = (element, visiblePart) => {
    const rect = element?.getBoundingClientRect();

    if (rect) {
        return (
            rect.top + (element.clientHeight * visiblePart) <= (window.innerHeight || document.documentElement.clientHeight)
        );
    }

    return false
}

export const animateVisible = ({visibleEl, animateEl, duration, animationName, delay = 0, visiblePart = .2, presetClass = ''}) => {

    if (animateEl) {
        animateEl.classList.add('animation')
        if (presetClass) {
            animateEl.classList.add(presetClass)
        }
    }
    if (isVisible(visibleEl, visiblePart)) {
        animateEl.style.cssText = `
                visibility: visible;
                animation-duration: ${duration}s;
                animation-name: ${animationName};
                animation-delay: ${delay}s;
            `

        setTimeout(() => animateEl.classList.add('active'), (duration * 0.5 + delay) * 1000)
    }
}


export const onScrollVisible = (
    {
        event, $el,
        visiblePartOnDown = 0.3, visiblePartOnTop = visiblePartOnDown,
        onDown = () => {}, onTop = onDown
    }
) => {
    if ($el) {
        const rect = $el.getBoundingClientRect();
        const elHeight = $el.clientHeight;
        const windowHeight = (window.innerHeight || document.documentElement.clientHeight)

        const scrollTop = event.deltaY <= 0
        if (rect.top + (elHeight * visiblePartOnDown) <= windowHeight && rect.top >= 0 && !scrollTop) {
            onDown()
        } else if (rect.bottom >= (elHeight * visiblePartOnDown) && scrollTop) {
            onTop()
        }
    }
}

// let lastScrollTop = 0
//
// function isScrollTop() {
//     const st = window.pageYOffset || document.documentElement.scrollTop;
//     let scrollTop = true
//     if (st > lastScrollTop) {
//         scrollTop = false
//     }
//     lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
//     return scrollTop
// }