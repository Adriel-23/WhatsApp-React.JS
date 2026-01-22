const contacts_data = [
    {
        contact_id: 1,
        contact_name: 'Sabrina',
        contact_perfil_image: "https://images.unsplash.com/photo-1688888745596-da40843a8d45?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        last_message_created_at: new Date(),
        last_message_content: 'Nuevo mensaje',
        last_message_status: 'NOT_RECEIVED', // 'SEEN', 'UNSEEN'
        messages: [
            {
                message_id: 1,
                message_content: 'Vamos a ver Zootopia 2 este sábado?',
                message_created_at: new Date(),
                message_status: 'SEEN', // 'SEEN', 'UNSEEN'
                send_by_me: false,
            },
            {
                message_id: 2,
                message_content: 'Dale, te parece que vayamos tipo 19?',
                message_created_at: new Date(),
                message_status: 'SEEN', // 'SEEN', 'UNSEEN'
                send_by_me: true,
            },
            {
                message_id: 3,
                message_content: 'Si hay funcion a esa hora perfecto, de paso comemos algo a la salida',
                message_created_at: new Date(),
                message_status: 'SEEN', // 'SEEN', 'UNSEEN'
                send_by_me: false,
            },
            {
                message_id: 4,
                message_content: 'Obvio que la comida la invitas vos',
                message_created_at: new Date(),
                message_status: 'SEEN', // 'SEEN', 'UNSEEN'
                send_by_me: false,
            },
            {
                message_id: 5,
                message_content: 'Jajaja Bueno dale, ahora compro las entradas entonces',
                message_created_at: new Date(),
                message_status: 'SEEN', // 'SEEN', 'UNSEEN'
                send_by_me: true,
            }
        ]
    },
    {
        contact_id: 2,
        contact_name: 'Guillermo',
        contact_perfil_image: "https://preview.redd.it/yall-want-some-profile-pictures-v0-kg5dtjppx9ze1.jpg?width=640&crop=smart&auto=webp&s=26a56124c45355ad73af6ca2d214e0d95c39b6a6",
        last_message_created_at: new Date(),
        last_message_content: 'Nuevo mensaje',
        last_message_status: 'SEEN', // 'SEEN', 'UNSEEN'
        messages: [
            {
                message_id: 1,
                message_content: 'Flaquito, sale CS2 yayayaya???',
                message_created_at: new Date(),
                message_status: 'SEEN', // 'SEEN', 'UNSEEN'
                send_by_me: false,
            },
            {
                message_id: 2,
                message_content: 'Me preparo comida y entro, anda metiendote a DS',
                message_created_at: new Date(),
                message_status: 'SEEN', // 'SEEN', 'UNSEEN'
                send_by_me: true,
            },
            {
                message_id: 3,
                message_content: 'Dale te espero, invitemos al Pato tambien',
                message_created_at: new Date(),
                message_status: 'SEEN', // 'SEEN', 'UNSEEN'
                send_by_me: false,
            },
            {
                message_id: 4,
                message_content: 'Dale, dame 10 minutos y estoy',
                message_created_at: new Date(),
                message_status: 'SEEN', // 'SEEN', 'UNSEEN'
                send_by_me: true,
            }
        ]
    },
    {
        contact_id: 3,
        contact_name: 'Manuel',
        contact_perfil_image: "/src/Assets/RoronoaZoro.webp",
        last_message_created_at: new Date(),
        last_message_content: 'Nuevo mensaje',
        last_message_status: 'SEEN', // 'SEEN', 'UNSEEN'
        messages: [
            {
                message_id: 1,
                message_content: 'Usopp actualizó el báculo de Nami',
                message_created_at: new Date(),
                message_status: 'SEEN', // 'SEEN', 'UNSEEN'
                send_by_me: false,
            },
            {
                message_id: 2,
                message_content: 'Puede Crear Comida ahora?',
                message_created_at: new Date(),
                message_status: 'SEEN', // 'SEEN', 'UNSEEN'
                send_by_me: true,
            },
            {
                message_id: 3,
                message_content: 'Ni en tus sueños, ya deja de decir idioteces',
                message_created_at: new Date(),
                message_status: 'SEEN', // 'SEEN', 'UNSEEN'
                send_by_me: false,
            },
            {
                message_id: 4,
                message_content: 'Muero de hambreeeeee',
                message_created_at: new Date(),
                message_status: 'SEEN', // 'SEEN', 'UNSEEN'
                send_by_me: true,
            },
            {
                message_id: 5,
                message_content: 'No exageres, pronto llegaremos a Alabasta',
                message_created_at: new Date(),
                message_status: 'SEEN', // 'SEEN', 'UNSEEN'
                send_by_me: false,
            }
        ]
    }
];

export default contacts_data;