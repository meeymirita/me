export interface MenuItem {
    title: string
    href?: string
    to?: string
    /** открывается после входа по токену: пока он не введён, рядом замок */
    private?: boolean
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
            { title: "Корейский", href: "https://korean.meeymirita.ru/" },
        ],
    },
];
// ,"Эпизоды","Магия","Галерея","Музыка","Мир","Новости","Фан-арт","Контакты"
