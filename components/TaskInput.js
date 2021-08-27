const Input = () => {
    return (
        <form>
            <form>
                <input type="text" className="todo-input" />
                <button className="todo-btn" type="submit">
                    <i className="fas fa-plus-square"></i>
                </button>
                <div className="select">
                    <select name="todos" className="todo-filter">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>
        </form>
    );
}

export default Input;