export const getCoords = (elem) => { // crossbrowser version
    const box = elem.getBoundingClientRect();

    const body = document.body;
    const docEl = document.documentElement;

    const scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
    const scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

    const clientTop = docEl.clientTop || body.clientTop || 0;
    const clientLeft = docEl.clientLeft || body.clientLeft || 0;

    const top = box.top + scrollTop - clientTop;
    const left = box.left + scrollLeft - clientLeft;

    return {top: Math.round(top), left: Math.round(left)};
}

export const smoothScrollTo = (element, target, duration) => {
    target = Math.round(target);
    duration = Math.round(duration);
    if (duration < 0) {
        return Promise.reject("bad duration");
    }
    if (duration === 0) {
        element.scrollTop = target;
        return Promise.resolve();
    }

    const start_time = Date.now();
    const end_time = start_time + duration;

    const start_top = element.scrollTop;
    const distance = target - start_top;

    const smooth_step = (start, end, point) => {
        if (point <= start) {
            return 0;
        }
        if (point >= end) {
            return 1;
        }
        const x = (point - start) / (end - start);
        return x * x * (3 - 2 * x);
    }

    return new Promise((resolve, reject) => {
        let previous_top = element.scrollTop;
        const scroll_frame = () => {
            if (element.scrollTop !== previous_top) {
                // reject("interrupted");
                return;
            }

            const now = Date.now();
            const point = smooth_step(start_time, end_time, now);
            const frameTop = Math.round(start_top + (distance * point));
            element.scrollTop = frameTop;

            if (now >= end_time) {
                resolve();
                return;
            }

            if (element.scrollTop === previous_top
                && element.scrollTop !== frameTop) {
                resolve();
                return;
            }
            previous_top = element.scrollTop;

            // schedule next frame for execution
            setTimeout(scroll_frame, 0);
        }

        // boostrap the animation process
        setTimeout(scroll_frame, 0);
    });
}

export function scrollToSmoothly(pоsition, duration) {
    const currentPos = window.pageYOffset;
    let start = null;
    let pos = +pоsition
    let time = +duration

    const step = (currentTime) => {
        start = !start ? currentTime : start;
        const progress = currentTime - start;
        if (currentPos < pos) {
            window.scrollTo({
                top: ((pos - currentPos) * progress / time) + currentPos,
            });

        } else {
            window.scrollTo(0, currentPos - ((currentPos - pos) * progress / time));
        }
        if (progress < time) {
            window.requestAnimationFrame(step);
        } else {
            window.scrollTo(0, pos);
        }
    }

    window.requestAnimationFrame(step);
}