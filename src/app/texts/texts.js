const title = "Fundación Indígena Pachakilla";
const email = ""; // Información no proporcionada
const mensajeWhatsApp = encodeURIComponent(
    "¡Hola! Estoy muy interesado en tus productos de " + title + " y me gustaría recibir más información sobre ellos. Espero poder hablar pronto contigo para aclarar algunas dudas. ¡Gracias!"
);
const numeroWhatsApp = "+573185838496"; // Información no proporcionada

const textos = {
    index: {
        title: title,
    },
    homeContent: {
        title: title,
    },
    about: {
        description1: "La Fundación Pachakilla es una organización sin ánimo de lucro con el propósito de reducir la pobreza, fomentar la equidad social y promover el desarrollo sustentable del país. Trabajamos en alianza con organizaciones públicas y privadas para promover el desarrollo de comunidades a través de un modelo de intervención que articula el desarrollo urbano, rural y su relación comunitaria y económica.",
        description2: "Además, fomentamos proyectos e iniciativas y generamos planes, programas y proyectos específicos relacionados con la soberanía alimentaria, la preservación de la cultura material e inmaterial del patrimonio étnico y la gestión de recursos naturales. Nuestro enfoque incluye el fortalecimiento organizativo y el desarrollo psicosocial, ofreciendo alternativas de aprendizaje personal, interpersonal, cultural y social para el desarrollo integral de la población, incluyendo niños, jóvenes, mujeres, hombres, personas de la tercera edad y comunidades indígenas a nivel nacional e internacional. También brindamos servicios profesionales, técnicos y de campo para apoyar el seguimiento y fortalecimiento con enfoque étnico-comunitario dentro de las políticas sociales de atención a familias y comunidades."
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email
    },
    footer: {
        slogan: {
            p1: "Esencias para el espíritu",
            p2: ""
        },
        address: "", // Información no proporcionada
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/",
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`
    },
};

export default textos;
