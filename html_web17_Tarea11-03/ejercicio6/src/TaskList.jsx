
function TaskList() {

    const tareas = ["Comprar cables", "Revisar compresor", "Enviar presupuesto"];
    const lista = tareas.map((valor) => {
        return (
            <li key={tareas.indexOf(valor)}>
                <p>{valor}</p>
            </li>
        )
    });
    return (
        <ul>
            {lista}
        </ul>
    );
}

export default TaskList