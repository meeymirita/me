export interface MenuItem {
    title: string
    href?: string
    to?: string
}

export interface MenuGroup {
    title: string
    items: MenuItem[]
}

export const menuGroups: MenuGroup[] = [
    {
        title: "IT",
        items: [
            { title: "Обучающая платформа", href: "https://anitech.meeymirita.ru/" },
        ],
    },
    {
        title: "Корейский",
        items: [
            { title: "Платформа по Корейскому языку", href: "https://korean.meeymirita.ru/" },
        ],
    },
];
// ,"Эпизоды","Магия","Галерея","Музыка","Мир","Новости","Фан-арт","Контакты"
