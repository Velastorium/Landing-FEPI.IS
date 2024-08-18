import LayoutD from "../Components/Layout/LayoutDonaciones/LayoutDonaciones"
import img1 from "../Components/image/D1.png"
import img2 from "../Components/image/Donaciones.png"
const Donaciones = () => {
  return (
    <div>
      <LayoutD
        title="Donaciones"
        subtitle="¡Tu aporte hace la diferencia!"
        texto={
          <>
            En la Fundación para el Fomento de la Educación Popular y la Pequeña Industria (FEPI), nos dedicamos a promover la educación y el desarrollo económico en las comunidades más vulnerables. Tus donaciones, ya sean en especie o en dinero, son fundamentales para continuar con nuestra misión.
            <br /><br />
            Con tu ayuda, podemos brindar oportunidades de aprendizaje, apoyar pequeños negocios locales, y fortalecer nuestra comunidad.
            <br /><br />
            Únete a nosotros y sé parte del cambio. ¡Tu generosidad transforma vidas!
          </>
        }
        align="left"
        imgD={img2}

      />

      <LayoutD
        subtitle="Haz una Donación con el monto que desees"
        texto={
          <>
            Con tus donaciones, la Fundación FEPI puede continuar transformando vidas a través de la educación y el apoyo a pequeñas industrias. Tu contribución es esencial para seguir fortaleciendo nuestras iniciativas y generar un impacto positivo en las comunidades que más lo necesitan.
            <br /><br />
            Si deseas recibir un Certificado de Donación para tu contribución, te invitamos a comunicarte con nosotros. Puedes hacerlo enviando un correo a contacto@fundacionfepi.org o, si prefieres una respuesta más rápida, por WhatsApp al 304 5845121. Estaremos encantados de asistirte. Tu compromiso con la Fundación FEPI es fundamental, y queremos asegurarnos de que tu generosidad sea debidamente reconocida.          </>
        }
        align="right"
        imgD={img1}
      />

    </div>

  )
}

export default Donaciones