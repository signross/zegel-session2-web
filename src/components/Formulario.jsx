import { useForm } from "react-hook-form";
import { edadValidator } from "./validators";

const Formulario = () => {

    const { register, formState: { errors }, watch, handleSubmit } = useForm({
        defaultValues: {
            nombre: 'Yony Pari Cayo',
            direccion: 'Bayovar calle 7'
        }
    });

    const onSubmit = (data) => {
        console.log(data);
    }

    const incluirTelefono = watch('incluirTelefono');

    return <div>
        <h2>Formulario para el sorteo</h2>
        <br />
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Nombre:</label>
                <input type="text" {...register('nombre', {
                    required: true,
                    maxLength: 10
                })} />
                {errors.nombre?.type === 'required' && <p>El campo nombre es requerido</p>}
                {errors.nombre?.type === 'maxLength' && <p>El campo nombre debe tener menos de 10 caracteres</p>}
            </div>
            <div>
                <label>Dirección:</label>
                <input type="text" {...register('direccion', {
                    required: true
                })} />
            </div>
            <div>
                <label>Email:</label>
                <input type="text" {...register('email', {
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
                })} />
                {errors.email?.type === 'pattern' && <p>El formato del email es incorrecto</p>}
            </div>
            <div>
                <label>Edad:</label>
                <input type="text" {...register('edad', {
                    validate: edadValidator
                })} />
                {errors.edad && <p>Debes ser mayor de edad</p>}
            </div>
            <div>
                <label>Sede:</label>
                <select {...register('pais')}>
                    <option value="es">San juan de lurigancho</option>
                    <option value="it">Wilson</option>
                </select>
            </div>
            <div>
                <br />
                <label>¿Incluir teléfono?</label>
                <input type="checkbox" {...register('incluirTelefono')} />
            </div>
            {incluirTelefono && (
                <div>
                    <label>Teléfono:</label>
                    <input type="text" {...register('telefono')} />
                </div>
            )}
            <input class="envia" type="submit" value="Enviar" />
        </form>
    </div>
}

export default Formulario;