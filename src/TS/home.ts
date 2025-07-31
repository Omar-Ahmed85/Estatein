import '@splidejs/splide/css';
import Splide from '@splidejs/splide';
import { injectSpeedInsights } from '@vercel/speed-insights';

import properties from './modules/properties.ts';
import testimonials from './modules/testimonials.ts';
import star from '/src/Images/star.svg';

injectSpeedInsights();

// #region - Notification

const closeButton = document.getElementById('close-notification');
const notification = document.getElementById('notification');

closeButton?.addEventListener('click', () => {
    notification?.remove();
}, { once: true });

// #endregion

/* ================================================ */

// #region - Carousels

function addPropertiesToPage() {

    const splideList = document.querySelector('.splide__list');

    const bedIcon = `
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
            <g clip-path="url(#clip0_139_8315)">
                <path d="M10.0119 15.9597C7.01369 15.9597 4.01627 15.9597 1.01806 15.9597C0.714934 15.9597 0.574786 16.0984 0.574786 16.3977C0.574786 16.4752 0.578723 16.5527 0.573999 16.6295C0.5677 16.7225 0.558252 16.8155 0.54093 16.9062C0.476368 17.2372 0.159068 17.5023 -0.220432 17.4984C-0.601507 17.4946 -0.917233 17.2116 -0.974709 16.8481C-0.988094 16.7628 -0.99518 16.6752 -0.99518 16.5891C-0.995967 14.8279 -1.00778 13.0659 -0.991243 11.3046C-0.981795 10.2783 -0.602295 9.38527 0.125212 8.64186C0.566913 8.19069 1.09207 7.86976 1.69282 7.66511C2.16522 7.50465 2.65338 7.45581 3.15098 7.45581C7.76246 7.45736 12.3739 7.45348 16.9854 7.45891C18.3365 7.46046 19.4309 7.9969 20.2419 9.06356C20.6403 9.58837 20.8781 10.1845 20.9592 10.8357C20.9867 11.055 20.9985 11.2783 20.9993 11.5C21.0025 13.2101 21.0017 14.9202 21.0009 16.6302C21.0009 16.8977 20.934 17.1411 20.7104 17.3178C20.4741 17.5046 20.2104 17.5535 19.9293 17.4395C19.66 17.3295 19.49 17.1271 19.4514 16.838C19.4317 16.6922 19.4341 16.5426 19.4301 16.3953C19.4238 16.1574 19.3238 16.0139 19.1239 15.9698C19.0798 15.9597 19.0333 15.9605 18.9876 15.9605C15.9965 15.9605 13.0054 15.9605 10.0135 15.9605L10.0119 15.9597Z" fill="white"/>
                <path d="M9.90197 0.5C11.8467 0.5 13.7907 0.5 15.7346 0.5C16.3858 0.5 16.9944 0.643411 17.5195 1.03953C18.1951 1.54884 18.5895 2.21938 18.6226 3.06124C18.651 3.77519 18.6384 4.4907 18.6415 5.20543C18.6439 5.66589 18.6415 6.12636 18.6415 6.58682C18.6415 6.62791 18.6391 6.67132 18.6281 6.71085C18.5943 6.83566 18.5258 6.88527 18.3966 6.86124C18.2557 6.83488 18.1195 6.77829 17.9786 6.76279C17.6471 6.72713 17.3148 6.70233 16.9818 6.68527C16.7597 6.67364 16.6913 6.63411 16.6598 6.41938C16.559 5.73876 15.9189 5.12636 15.1 5.13566C14.1867 5.14574 13.2734 5.13798 12.3609 5.13798C11.6814 5.13798 11.1011 5.53643 10.8704 6.16434C10.8373 6.25426 10.8247 6.35194 10.8074 6.44651C10.7751 6.61628 10.7114 6.67984 10.5397 6.68217C10.1799 6.68605 9.8193 6.68605 9.45949 6.68217C9.29414 6.68062 9.22879 6.61628 9.19887 6.42791C9.15715 6.16357 9.05322 5.92791 8.88315 5.72093C8.5753 5.34574 8.1769 5.14186 7.6856 5.13953C6.74315 5.13488 5.80069 5.13721 4.85745 5.13876C4.06538 5.13953 3.44574 5.74884 3.34496 6.41783C3.31268 6.63411 3.24733 6.67209 3.0253 6.68605C2.65761 6.71008 2.28992 6.74419 1.92302 6.78295C1.81043 6.79457 1.70256 6.84264 1.59076 6.86124C1.4703 6.88062 1.41439 6.84031 1.38054 6.72403C1.36715 6.67829 1.36085 6.62946 1.36085 6.5814C1.36007 5.47674 1.34511 4.37209 1.364 3.26744C1.38369 2.11163 1.92617 1.26202 2.98751 0.748062C3.40795 0.545736 3.86382 0.5 4.32521 0.5C6.18413 0.5 8.04305 0.5 9.90197 0.5Z" fill="white"/>
            </g>
            <defs>
                <clipPath id="clip0_139_8315">
                    <rect width="22" height="17" fill="white" transform="translate(-1 0.5)"/>
                </clipPath>
            </defs>
        </svg>
    `;
    const bathIcon = `
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
            <g clip-path="url(#clip0_139_8321)">
                <path d="M0.269455 14.2616H10.11V16.0697H16.2615V14.2655H18.7054C18.8637 16.4158 18.8761 18.3304 16.6707 19.7897C16.6437 19.8075 16.6221 19.8318 16.5623 19.885C16.8335 20.1103 17.1009 20.3329 17.3655 20.5529C17.0082 20.8945 16.7212 21.169 16.3922 21.4842C16.1019 21.1848 15.7879 20.8373 15.4458 20.5207C15.3453 20.4275 15.1673 20.3894 15.0215 20.3802C14.7831 20.3657 14.5414 20.4045 14.301 20.4052C11.1057 20.4071 7.91048 20.4065 4.71457 20.4065C4.56154 20.4065 4.398 20.436 4.25679 20.3933C3.83054 20.2653 3.55994 20.4629 3.30642 20.7684C3.09034 21.0284 2.84405 21.2629 2.61877 21.5007C2.31468 21.1808 2.03949 20.8918 1.73474 20.5707C1.939 20.39 2.19843 20.1602 2.49004 19.9014C2.28906 19.7576 2.13866 19.6577 1.99614 19.5474C0.928209 18.7244 0.350896 17.6329 0.275366 16.2924C0.23793 15.6284 0.268798 14.9604 0.268798 14.2616H0.269455Z" fill="white"/>
                <path d="M0.275543 9.28709C0.270288 9.16821 0.261093 9.06116 0.261093 8.9541C0.260437 7.21363 0.258466 5.47381 0.261093 3.73333C0.26372 1.82078 1.59108 0.486191 3.50101 0.499984C4.14203 0.504581 4.80275 0.491446 5.41882 0.636595C6.5117 0.894711 7.20001 1.65264 7.53235 2.72057C7.59671 2.92811 7.68012 3.0286 7.90803 3.09034C9.19401 3.43909 10.0964 4.641 10.1128 5.98216C10.1155 6.19824 10.1128 6.41432 10.1128 6.64879H4.02578C3.73548 5.11389 4.56959 3.52973 6.31335 3.03517C6.15573 2.35014 5.48121 1.77217 4.7732 1.74722C4.23792 1.72817 3.70067 1.7262 3.16539 1.74722C2.24261 1.78334 1.50044 2.63059 1.4965 3.64663C1.48994 5.39762 1.49453 7.14926 1.49453 8.90025C1.49453 9.01978 1.49453 9.13932 1.49453 9.28644H0.274229L0.275543 9.28709Z" fill="white"/>
                <path d="M10.0926 13.0327C9.96387 13.0327 9.86732 13.0327 9.77077 13.0327C6.64317 13.0327 3.51491 13.0334 0.387306 13.0321C-0.285898 13.0321 -0.769947 12.7135 -0.940054 12.1697C-1.1962 11.3514 -0.61626 10.5632 0.267771 10.5514C1.20829 10.5389 2.1488 10.5481 3.08931 10.5481C5.29873 10.5481 7.5075 10.5481 9.71692 10.5481C9.83514 10.5481 9.95336 10.5481 10.0926 10.5481V13.0321V13.0327Z" fill="white"/>
                <path d="M15.0237 14.8711H11.3634C11.3575 14.7555 11.3477 14.6504 11.3477 14.5453C11.3464 13.2771 11.3464 12.0082 11.3477 10.7399C11.3483 9.82242 11.8494 9.31801 12.763 9.31407C13.1019 9.31275 13.4408 9.30553 13.7797 9.31604C14.5409 9.34034 15.0381 9.85197 15.0401 10.6152C15.044 11.9386 15.0414 13.2613 15.0401 14.5848C15.0401 14.6708 15.0309 14.7562 15.0237 14.8711Z" fill="white"/>
                <path d="M16.2832 13.0209V10.5482C16.8782 10.5482 17.4648 10.5462 18.0506 10.5488C18.356 10.5501 18.668 10.5252 18.9668 10.5744C19.619 10.6821 20.0433 11.2161 20.0164 11.8394C19.9901 12.4509 19.5389 12.9756 18.8985 13.0091C18.0394 13.0544 17.1764 13.0203 16.2839 13.0203L16.2832 13.0209Z" fill="white"/>
            </g>
            <defs>
                <clipPath id="clip0_139_8321">
                <rect width="21.0171" height="21" fill="white" transform="translate(-1 0.5)"/>
                </clipPath>
            </defs>
        </svg>
    `;
    const tagIcon = `
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4 17V4H3.75C3.33579 4 3 3.66421 3 3.25C3 2.83579 3.33579 2.5 3.75 2.5H16.25C16.6642 2.5 17 2.83579 17 3.25C17 3.66421 16.6642 4 16.25 4H16V17H16.25C16.6642 17 17 17.3358 17 17.75C17 18.1642 16.6642 18.5 16.25 18.5H12.75C12.3358 18.5 12 18.1642 12 17.75V15.25C12 14.8358 11.6642 14.5 11.25 14.5H8.75C8.33579 14.5 8 14.8358 8 15.25V17.75C8 18.1642 7.66421 18.5 7.25 18.5H3.75C3.33579 18.5 3 18.1642 3 17.75C3 17.3358 3.33579 17 3.75 17H4ZM7 6C7 5.72386 7.22386 5.5 7.5 5.5H8.5C8.77614 5.5 9 5.72386 9 6V7C9 7.27614 8.77614 7.5 8.5 7.5H7.5C7.22386 7.5 7 7.27614 7 7V6ZM7.5 9.5C7.22386 9.5 7 9.72386 7 10V11C7 11.2761 7.22386 11.5 7.5 11.5H8.5C8.77614 11.5 9 11.2761 9 11V10C9 9.72386 8.77614 9.5 8.5 9.5H7.5ZM11 6C11 5.72386 11.2239 5.5 11.5 5.5H12.5C12.7761 5.5 13 5.72386 13 6V7C13 7.27614 12.7761 7.5 12.5 7.5H11.5C11.2239 7.5 11 7.27614 11 7V6ZM11.5 9.5C11.2239 9.5 11 9.72386 11 10V11C11 11.2761 11.2239 11.5 11.5 11.5H12.5C12.7761 11.5 13 11.2761 13 11V10C13 9.72386 12.7761 9.5 12.5 9.5H11.5Z" fill="white"/>
        </svg>
    `;

    for (let i = 0; i < properties.length; i++) {

        const slide = document.createElement('div');
        const img = document.createElement('img');
        const title = document.createElement('h3');
        const description = document.createElement('p');
        const features = document.createElement('div');
        const info = document.createElement('div');

        slide.classList.add('splide__slide', 'splide-slide');

        img.src = properties[i].imageUrl;
        img.alt = `${properties[i].title} Image`;
        img.classList.add('h-[255px]', 'mb-4', 'w-full', 'rounded-xl', 'object-cover');

        title.textContent = `${properties[i].title}`;
        title.classList.add('text-lg', 'mb-2');

        description.textContent = `${properties[i].desc}`;
        description.classList.add('text-grey-60', 'text-sm', 'font-medium', 'mb-8', 'text-pretty');

        features.innerHTML = `
            <div class="slide-feature">
                ${bedIcon}
                <span class="text-sm">${properties[i].bedroomsCount} Bedrooms</span>
            </div>
            <div class="slide-feature">
                ${bathIcon}
                <span class="text-sm">${properties[i].bathroomsCount} Bathrooms</span>
            </div>
            <div class="slide-feature">
                ${tagIcon}
                <span class="text-sm">${properties[i].tag}</span>
            </div>
        `;
        features.classList.add('flex', 'w-full', 'justify-between', 'items-center', 'flex-wrap', 'mb-8', 'gap-x-4', 'gap-y-3', 'px-4');

        info.innerHTML = `
            <div class="flex flex-col items-start w-fit">
                <span class="text-sm text-grey-60">Price</span>
                <span class="text-lg font-semibold">$${Intl.NumberFormat().format(properties[i].price)}</span>
            </div>
            <button class="primary-btn">View Property Details</button>
        `;
        info.classList.add('flex', 'w-full', 'justify-between', 'items-end');

        slide.append(img, title, description, features, info);
        splideList?.appendChild(slide);
    }
};

addPropertiesToPage();

function addTestimonialsToPage() {
    const splideList = document.querySelectorAll('.splide__list')[1];

    for (let i = 0; i < testimonials.length; i++) {
        const slide = document.createElement('div');
        const stars = document.createElement('div');
        const heading = document.createElement('h3');
        const description = document.createElement('p');
        const customer = document.createElement('div');

        slide.classList.add('splide__slide', 'testimonial');

        stars.classList.add('flex', 'gap-x-4', 'mb-5');
        stars.innerHTML = `
            ${`<img src="${star}" alt="Star Icon">`.repeat(5)}
        `;

        heading.classList.add('text-lg', 'mb-2');
        heading.textContent = `${testimonials[i].heading}`;

        description.classList.add('text-grey-60', 'text-sm', 'font-medium', 'mb-8', 'text-pretty', 'w-full');
        description.textContent = `${testimonials[i].desc}`;

        customer.classList.add('customer-info');
        customer.innerHTML = `
            <img class="size-12 object-cover rounded-full" src="${testimonials[i].imageUrl}" alt="Customer profile photo">
            <div class="flex flex-col justify-start items-baseline">
                <span>${testimonials[i].name}</span>
                <span class="text-sm text-grey-60">${testimonials[i].region}</span>
            </div>
        `;

        slide.append(stars, heading, description, customer);
        splideList.appendChild(slide);
    }
};

addTestimonialsToPage();

const propertiesSection = document.querySelector('section[aria-label="Featured Properties"]') as HTMLElement;
const propertiesCarousel = new Splide(propertiesSection, {
    arrows: false,
    pagination: false,
    mediaQuery: 'min',
    perPage: 1,
    breakpoints: {
        1100: {
            perPage: 3
        },
        700: {
            perPage: 2
        }
    },
    perMove: 1,
    lazyLoad: 'sequential'
});

const testimonialsSection = document.querySelector('section[aria-label="Testimonials"]') as HTMLElement;
const testimonialsCarousel = new Splide(testimonialsSection, {
    arrows: false,
    pagination: false,
    mediaQuery: 'min',
    perPage: 1,
    breakpoints: {
        1100: {
            perPage: 3
        },
        700: {
            perPage: 2
        }
    },
    perMove: 1,
});

propertiesCarousel.mount();
testimonialsCarousel.mount();

window.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;

    if (target.classList.contains('prev')) {
        if (target.dataset.id === 'property') {
            propertiesCarousel.go('<');
        } else {
            testimonialsCarousel.go('<');
        }
    }

    if (target.classList.contains('next')) {
        if (target.dataset.id === 'property') {
            propertiesCarousel.go('>');
        } else {
            testimonialsCarousel.go('>');
        }
    }
});

propertiesCarousel.on('moved', () => {
    updateCounter(propertiesCarousel, propertiesSection);
});

testimonialsCarousel.on('moved', () => {
    updateCounter(testimonialsCarousel, testimonialsSection);
});

function updateCounter(splide: Splide, targetElement: HTMLElement) {
    const formatter = new Intl.NumberFormat('en-US', { minimumIntegerDigits: 2 });

    const counter = document.querySelector(`span[data-id="${targetElement.getAttribute('data-id')}"]`) as HTMLElement;
    counter.textContent = formatter.format(splide.index + 1);
}

// #endregion

/* ================================================ */

// #region - Year

const currentYear = document.querySelectorAll('.year');
currentYear.forEach((year) => {
    year.textContent = String(new Date().getFullYear());
});

// #endregion

/* ================================================ */

// #region - Aside Navbar

const backdrop = document.getElementById('backdrop') as HTMLElement;
const navbar = document.querySelector('aside') as HTMLElement;
const menuButton = document.getElementById('menu-button') as HTMLElement;

menuButton?.addEventListener('click', handleNavBar);
backdrop?.addEventListener('click', handleNavBar);

function handleNavBar() {
    backdrop.classList.toggle('hidden');
    navbar.classList.toggle('translate-x-full');
    document.body.classList.toggle('overflow-hidden');
}

// #endregion

/* ================================================ */