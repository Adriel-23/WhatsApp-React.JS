import { act } from "react";

const contacts_data = [
    {
        contact_id: 1,
        contact_name: 'Nami',
        contact_perfil_image: "https://i.pinimg.com/736x/8b/07/19/8b07190685bb7279193a04ed685ed7be.jpg",
        last_message_created_at: new Date(),
        is_online: true,
        last_seen: '',
        is_hidden: false,
        has_active_chat: true,
        last_message_status: 'NOT_RECEIVED', 
        messages: [
            {
                message_id: 1,
                message_content: 'No gastes dinero en comida inútil',
                message_created_at: new Date('2026-01-23T14:00:00'),
                message_status: 'SEEN', 
                send_by_me: false,
            },
            {
                message_id: 2,
                message_content: 'Pero... ES CARNE',
                message_created_at: new Date('2026-01-23T14:03:00'),
                message_status: 'SEEN', 
                send_by_me: true,
            },
            {
                message_id: 3,
                message_content: 'Ya tenemos mucha comida en el barco, no necesitamos más',
                message_created_at: new Date('2026-01-23T14:05:00'),
                message_status: 'SEEN', 
                send_by_me: false,
            },
            {
                message_id: 4,
                message_content: 'Lo único que haces es gastar nuestro dinero en tonterías',
                message_created_at: new Date('2026-01-23T14:10:00'),
                message_status: 'SEEN', 
                send_by_me: false,
            },
            {
                message_id: 5,
                message_content: 'Pero la carne es deliciosa, Nami. Por favor',
                message_created_at: new Date('2026-01-23T14:15:00'),
                message_status: 'SEEN', 
                send_by_me: true,
            }
        ]
    },
    {
        contact_id: 2,
        contact_name: 'Sanji',
        contact_perfil_image: "https://i.pinimg.com/736x/52/f7/f6/52f7f62b1f765b561efdc5e6c3874e4f.jpg",
        last_message_created_at: new Date(),
        is_online: false,
        last_seen: 'today at 03:36',
        is_hidden: false,
        has_active_chat: true,
        last_message_status: 'SEEN', 
        messages: [
            {
                message_id: 1,
                message_content: 'LUFFY, DONDE ESTA TODA LA CARNE DEL REFRIGERADOR?',
                message_created_at: new Date('2026-01-22T17:00:00'),
                message_status: 'SEEN', 
                send_by_me: false,
            },
            {
                message_id: 2,
                message_content: 'No lo sé, quizá Chopper se la comió',
                message_created_at: new Date('2026-01-22T17:05:00'),
                message_status: 'SEEN', 
                send_by_me: true,
            },
            {
                message_id: 3,
                message_content: 'Chopper no es tan glotón como tú, VE A PESCAR ALGO YA. O no tendremos que comer hoy',
                message_created_at: new Date('2026-01-22T17:10:00'),
                message_status: 'SEEN', 
                send_by_me: false,
            },
            {
                message_id: 4,
                message_content: 'Sanjiiii. Está bien, traeré un pez muuy grande',
                message_created_at: new Date('2026-01-22T17:15:00'),
                message_status: 'SEEN', 
                send_by_me: true,
            }
        ]
    },
    {
        contact_id: 3,
        contact_name: 'Zoro',
        contact_perfil_image: "https://i.pinimg.com/736x/de/80/33/de8033cf94318fd9a7a1525cfbd4aaf1.jpg",
        last_message_created_at: new Date(),
        is_online: true,
        last_seen: '',
        is_hidden: false,
        has_active_chat: true,
        last_message_status: 'SEEN', 
        messages: [
            {
                message_id: 1,
                message_content: 'Usopp actualizó el báculo de Nami',
                message_created_at: new Date('2026-01-23T10:00:00'),
                message_status: 'SEEN', 
                send_by_me: false,
            },
            {
                message_id: 2,
                message_content: 'Puede Crear Comida ahora?',
                message_created_at: new Date('2026-01-23T10:05:00'),
                message_status: 'SEEN', 
                send_by_me: true,
            },
            {
                message_id: 3,
                message_content: 'Ni en tus sueños, ya deja de decir idioteces',
                message_created_at: new Date('2026-01-23T10:10:00'),
                message_status: 'SEEN', 
                send_by_me: false,
            },
            {
                message_id: 4,
                message_content: 'Muero de hambreeeeee',
                message_created_at: new Date('2026-01-23T10:15:00'),
                message_status: 'SEEN', 
                send_by_me: true,
            },
            {
                message_id: 5,
                message_content: 'No exageres. Además es tu culpa por comerte toda la carne del refrigerador, vete a pescar',
                message_created_at: new Date('2026-01-23T10:20:00'),
                message_status: 'SEEN', 
                send_by_me: false,
            }
        ]
    },
    {
        contact_id: 4,
        contact_name: 'Sogeking',
        contact_perfil_image: "https://i.pinimg.com/736x/9f/3d/51/9f3d51400e063e019482a514ebd4fcf9.jpg",
        last_message_created_at: new Date(),
        is_online: false,
        last_seen: 'yesterday at 22:45',
        is_hidden: true,
        has_active_chat: false,
        last_message_status: 'SEEN', 
        messages: []
    }
];

export default contacts_data;