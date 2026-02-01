Hola!!
Decidi seguir el proyecto de WhatsApp y tratar de hacerlo lo mas semejante posible en cuanto a mi conocimiento.

### Librerías y Tecnologías usadas:
- **React + Vite**: Como base del proyecto.
- **react-router/react-router-dom**: Para la navegación y rutas dinámicas.
- **Context API**: Para gestionar el estado de los contactos y mensajes globalmente.
- **CSS3**: Diseño responsivo y uso de variables CSS.


    Las dificultades mas destacadas que me encontré al trabajar en este proyecto fueron:

        Implementar un contacto que no esté visible y con su 'chat' vacio, para así poder buscarlo en la barra de busqueda de contactos e iniciar un chat. Todo lo que refiere a buscar contactos fue algo complicado en cuanto al tiempo que me llevó poder hacerlo sin fallo. La barra de busqueda no se reseteaba cuando daba a un chat y al volver debia borrarla de forma manual, para solucionar eso implementé 'useEffect' en el 'HomeScreen.jsx'

        Al dar las pautas del TP se dijo que debiamos tener dos screen y cambiar entre ellas al entrar a un chatm, pero esa idea no me gustaba asique me di la libertad de cambiar un poco esa parte. Lo que hice fue implementar todo en la 'HomeScreen' y utilizar <Outlet/> para indicar si se renderiza la 'WelcomeScreen' o la 'ContactDetailScreen'(como hijo de la 'HomeScreen'). Así no se renderiza todo cada que interactuamos, si no, que se renderiza solo la pantalla de los chats.

        Para hacer el cambio de pantallas en el tamaño 'mobile' debí aprender a usar 'useLocation'(que no es dificil) y crear una const que me indique si nos encontrabamos en la ubicacion de '/contact/'. A raíz de eso añadir o no una clase de 'hidden-on-mobile' usando un condicional (?/:)

En sí eso fue lo que mas recuerdo haber 'rabeado' en el desarrollo del proyecto. 
Espero que todo esté bien, un saludo.

