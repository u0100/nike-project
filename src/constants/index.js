import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Главная" },
    { href: "#about-us", label: "О Нас" },
    { href: "#products", label: "Обувь" },
    { href: "#contact-us", label: "Контакты" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '1т+', label: 'Брендов' },
    { value: '500+', label: 'Магазинов' },
    { value: '250т+', label: 'Клиентов' },
];

export const products = [
    {
        imgURL: shoe4,
        name: "Nike Air Jordan-01",
        price: "19,990 Р",
    },
    {
        imgURL: shoe5,
        name: "Nike Air Jordan-10",
        price: "20,990 Р",
    },
    {
        imgURL: shoe6,
        name: "Nike Air Jordan-100",
        price: "21,990 Р",
    },
    {
        imgURL: shoe7,
        name: "Nike Air Jordan-001",
        price: "22,990 Р",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Бесплатная Доставка",
        subtext: "Наслаждайтесь удобными покупками с нашей бесплатной службой доставки."
    },
    {
        imgURL: shieldTick,
        label: "Безопасные Платежи",
        subtext: "Легкие транзакции с нашими безопасными способами оплаты."
    },
    {
        imgURL: support,
        label: "С радостью поможем Вам",
        subtext: "Наша преданная команда готова помочь вам на каждом этапе покупки."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Морич Браун',
        rating: 4.5,
        feedback: "Внимание к деталям и качество продукта превзошли все мои ожидания. Настоятельно рекомендую!"
    },
    {
        imgURL: customer2,
        customerName: 'Лота Монгескар',
        rating: 4.5,
        feedback: "Товар не только оправдал, но и превзошел мои ожидания. Я определенно буду постоянным клиентом!"
    }
];


export const footerLinks = [
    {
        title: "Обувь",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Nike Waffle Racer", link: "/" },
            { name: "Nike Cortez", link: "/" },
        ],
    },
    {
        title: "Помощь",
        links: [
            { name: "О Нас", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "Как это работает", link: "/" },
            { name: "Политика конфиденциальности", link: "/" },
            { name: "Политика платежей", link: "/" },
        ],
    },
    {
        title: "Связаться с нами",
        links: [
            { name: "customer@nike.com", link: "mailto:customer@nike.com" },
            { name: "+792554862354", link: "tel:+792554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];
